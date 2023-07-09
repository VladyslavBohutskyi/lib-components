import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface IMenu extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignItems?: 'center'| 'flex-end' | 'flex-start' | 'left' | 'right'
}
export const Menu = styled.ul<IMenu>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems ?? 'center'}; 
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


interface IMenuItem extends IGlobal {
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize',
  color?: string
  fs?: string,
  ls?: string,
}
export const MenuItem = styled.li<IMenuItem>`
  font-size: ${(p) => p.fs};
  letter-spacing: ${(p) => p.ls};
  text-transform: ${(p) => p.textTransform};
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
  a{
    color: ${(p) => p.color};
    text-decoration: none;
    text-transform: ${(p) => p.textTransform};
  }
`