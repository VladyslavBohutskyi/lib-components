import styled from 'styled-components'
import { IBox } from '../layout'

interface IFooter extends IBox {
  mheight?: string
}

export const LFooter = styled.footer<IFooter>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifycontent ?? 'center'};
border: ${(p) => p.border};
border-radius: ${(p) => p.br};
box-shadow: ${(p) => p.boxShadow};
justify-content: ${(p) => p.justifycontent ?? 'space-between'};
align-items: ${(p) => p.alignitems ?? 'center'};
min-height: ${(p) => p.mheight ?? '80px'};
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
`