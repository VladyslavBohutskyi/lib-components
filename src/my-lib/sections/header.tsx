import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'

interface IHeader extends IGlobal, IDisplay {
  minH?: string
}

export const LHeader = styled.header<IHeader>`
min-height: ${(p) => p.minH ?? '100px'};

flex-wrap: ${(p) => p.flexwrap};
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifycontent ?? 'center'};
align-items: ${(p) => p.alignitems ?? 'center'};
flex-direction: ${(p) => p.flexDirection};


color: ${(p) => p.color};
background: ${(p) => p.bg};
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