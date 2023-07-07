import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface IMenu extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
}
export const Menu = styled.ul<IMenu>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent};
  align-items: center; 
`


interface IMenuItem extends IGlobal {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  color?: string
  fs?: string,
  letterSpacing?: string,
}
export const MenuItem = styled.li<IMenuItem>`
  font-size: ${(p) => p.fs};
  letter-spacing: ${(p) => p.letterSpacing};
  text-transform: ${(p) => p.textTransform};
  padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
  margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '20px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
  a{
    color: ${(p) => p.color};
    text-decoration: none;
    text-transform: ${(p) => p.textTransform};
  }
`