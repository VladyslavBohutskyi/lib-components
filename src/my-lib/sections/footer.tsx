import styled from 'styled-components'
import { IBox } from '../layout'

interface IFooter extends IBox {
  minHeight?: string
}

export const LFooter = styled.footer<IFooter>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'center'};
border: ${(p) => p.border};
border-radius: ${(p) => p.br};
box-shadow: ${(p) => p.shadow};
background-color: ${(p) => p.bg};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignItem ?? 'center'};
min-height: ${(p) => p.minHeight ?? '100px'};
padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '0px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
`