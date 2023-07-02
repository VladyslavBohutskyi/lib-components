import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface IMenu extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
}
export const Menu = styled.ul<IMenu>`
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifyContent};
  align-items: center; 
`


interface IMenuItem {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  color?: string
  fs?: string,
  letterSpacing?: string,
  mt?: number
  mr?: number
  mb?: number
  ml?: number
}
export const MenuItem = styled.li<IMenuItem>`
  font-size: ${(p) => p.fs};
  letter-spacing: ${(p) => p.letterSpacing};
  margin:
  ${(p) => p.mt ?? 0}px
  ${(p) => p.mr ?? 20}px 
  ${(p) => p.mb ?? 0}px 
  ${(p) => p.ml ?? 0}px;
  a{
    color: ${(p) => p.color};
    text-decoration: none;
    text-transform: ${(p) => p.textTransform};
  }
`