import styled from 'styled-components';
import { IGlobal, IBorder, IFonts, IProportions } from '../models/global';

interface IList extends IProportions, IBorder, IFonts, IGlobal {
  listStyle?: 'auto' | 'none' | 'circle' | 'decimal' | 'disc' | 'square'
}
interface IListItem extends IList {
  beforeStyle?: 'circle' | 'auto' | 'square' | 'horizontal' | 'vertical'
  beforeContent?: string
  beforeSize?: string
  beforeLeft?: string
  beforeTop?: string
  beforeRadius?: string
  beforeColor?: string
}

export const List = styled.ul<IList>`


  list-style: ${(p) => p.listStyle ?? 'none'};
  ${(p) => p.listStyle ? `
    & li{
      display: list-item;
      &:before{
        display: none;
      }
    }
  `: false}

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

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

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};

  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl ?? '30px'};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`

export const ListItem = styled.li<IListItem>`
  display: flex;
  align-items: center;
  position: relative;

  &:before{
  content: '${(p) => p.beforeContent}';
  position: absolute;
  background-color: ${(p) => p.beforeColor ?? 'black'};
  left: ${(p) => p.beforeLeft ?? '-10px'};
  top: ${(p) => p.beforeTop};
  
  ${(p) => p.beforeStyle == 'circle' ? `
  width: ${p.beforeSize ?? '7px'};
  height: ${p.beforeSize ?? '7px'};
  border-radius: ${p.beforeRadius ?? '50%'};`
    : p.beforeStyle == 'square' ? `
  width: ${p.beforeSize ?? '7px'};
  height: ${p.beforeSize ?? '7px'};
  border-radius: ${p.beforeRadius};`
      : p.beforeStyle == 'horizontal' ? `
  width: ${p.beforeSize ?? '10px'};
  height: 2px;
  border-radius: ${p.beforeRadius};`
        : p.beforeStyle == 'vertical' ? `
  width: 2px;
  height: ${p.beforeSize ?? '10px'};
  border-radius: ${p.beforeRadius};`
          : false
  }
 }

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

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

  font-size: ${(p) => p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};

  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl ?? '10px'};
  margin-top:  ${(p) => p.mt ?? '8px'};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`