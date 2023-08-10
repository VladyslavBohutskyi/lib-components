import { styled } from "styled-components"

export interface IGlobal {
  bg?: string
  color?: string
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  sx?: string
}

export interface IDisplay {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center' | 'flex-end' | 'flex-start'
  flexwrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  flexdirection?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
}

export interface IProportions {
  h?: string
  w?: string
  minH?: string
  minW?: string
  maxH?: string
  maxW?: string
}

export interface IBorder {
  activeColor?: string

  border?: string
  br?: string
  shadow?: 'variant-1' | 'variant-2' | 'variant-3' | 'variant-4' | 'variant-5' | 'variant-6'
  customShadow?: string
  shadowColor?: string
}
export const ShadowBorder = styled.div<IBorder>`
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
`

export interface IFonts {
  fs?: string
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  ls?: string
  lh?: string
  fontStyle?: 'italic'| 'normal' | 'unset'
  textAlign?: 'left' | 'right' | 'center'
  texttransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'unset'
}

export const Font = styled.div<IFonts>`
  font-size: ${(p)=> p.fs};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};
`

export const PropsGlobal = styled.div<IGlobal>`
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
export const PropsHeight = styled.div<IProportions>`
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
`
export const PropsFlex = styled.div<IDisplay>`
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexdirection};
`




