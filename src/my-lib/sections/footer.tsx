import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'

interface IFooter extends IGlobal, IDisplay {
  minH?: string
}

export const LFooter = styled.footer<IFooter>`

min-height: ${(p) => p.minH ?? '80px'};

flex-wrap: ${(p) => p.flexWrap};
display: ${(p) => p.display};
justify-content: ${(p) => p.justifycontent};
align-items: ${(p) => p.alignitems ?? 'center'};
flex-direction: ${(p) => p.flexDirection};

color: ${(p) => p.color ?? p.theme.fontColorBg};
background: ${(p) => p.bg ?? p.theme.bgSecondary};
padding: ${(p) => p.p}; 
margin: ${(p) => p.m};
padding-top:  ${(p) => p.pt};
padding-right:  ${(p) => p.pr};
padding-bottom:  ${(p) => p.pb};
padding-left:  ${(p) => p.pl};
margin-top:  ${(p) => p.mt};
margin-right:  ${(p) => p.mr};
margin-bottom:  ${(p) => p.mb};
margin-left:  ${(p) => p.ml};
${(p) => p.sx}
`