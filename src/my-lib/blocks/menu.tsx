import styled from 'styled-components';
import { IDisplay, IGlobal } from '../models/global';


interface IMenu extends IGlobal, IDisplay {

}
export const Menu = styled.ul<IMenu>`
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent};
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


interface IMenuItem extends IGlobal {
  texttransform?: 'uppercase' | 'lowercase' | 'capitalize',
  color?: string
  fs?: string,
  ls?: string,
}
export const MenuItem = styled.li<IMenuItem>`
  font-size: ${(p) => p.fs};
  letter-spacing: ${(p) => p.ls};
  text-transform: ${(p) => p.texttransform};
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
  a{
    color: ${(p) => p.color};
    text-decoration: none;
    text-transform: ${(p) => p.texttransform};
  }
`