import styled from 'styled-components';
import { IGlobal, IBorder, IFonts } from '../models/global';

interface IList extends IFonts, IBorder, IGlobal {
  liststyle?: 'armenian' | 'circle' | 'decimal' | 'decimal-leading-zero' | 'disc' | 'georgian' | 'lower-alpha'
  | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'none' | 'square' | 'disclosure-open' | 'auto' | 'disclosure-closed'
  | 'disclosure-open' | 'upper-roman' | 'upper-latin' | 'upper-alpha' | 'upper-greek'
  customstyle?: string
  before?: string
}
interface IListItem extends IList {
  active?: 'right' | 'left'
}

export const List2 = styled.ul<IList>`
  list-style: ${(p) => p.liststyle ?? 'none'};

  /* ${(p) => p.before 
  ?
  `li{
    &::before{
      content: '${p.before}';
    }
  }`
   ? 
  `li{
    &::before{
      content: '${p.customstyle}';
    }
  }`: false : false
  } */
  font-size: ${(p)=> p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};

  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  box-shadow: ${(p) => p.customShadow};

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

export const ListItem2 = styled.li<IListItem>`
  ${(p) => p.active === 'right' ? `
    border: 5px solid transparent;
    border-left: 5px solid ${p.activeColor ?? 'grey'};
    padding: ${(p.p ?? '5px')};
    margin-left: ${p.ml};
    background-color: ${p.bg ?? '#ebebeb'};
  &::before{
    content: '${p.before}';
    padding: 0px;
    }
  `: false};
  ${(p) => p.active === 'left' ? `
    border: 5px solid transparent;
    border-right: 5px solid ${p.activeColor ?? 'grey'};
    padding: ${p.p ?? '5px'};
    margin-left: ${p.ml};
    background-color: ${p.bg ?? '#ebebeb'};
  &::before{
    content: '${p.before}';
    padding: 0px;
    }
  `: false};
    
  &::before{
    content: '${(p) => p.before ?? p.customstyle}';
  }


  font-size: ${(p)=> p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};

  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  box-shadow: ${(p) => p.customShadow};

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