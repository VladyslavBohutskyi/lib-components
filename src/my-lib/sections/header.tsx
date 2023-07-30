import styled from 'styled-components'
import { IBox } from '../layout'

interface IHeader extends IBox {
  minH?: string
}

export const LHeader = styled.header<IHeader>`
flex-wrap: ${(p) => p.flexwrap};
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifycontent ?? 'center'};
align-items: ${(p) => p.alignitems ?? 'center'};
flex-direction: ${(p) => p.flexDirection};
border: ${(p) => p.border};
border-radius: ${(p) => p.br};
box-shadow: ${(p) => p.boxShadow};
min-height: ${(p) => p.minH ?? '100px'};
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