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
  margin-bottom:  ${(p) => p.mb ?? '10px'};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`
export interface IHeight {
  h?: string
  w?: string
  minH?: string
  minW?: string
  maxH?: string
  maxW?: string
}
export const PropsHeight = styled.div<IHeight>`
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.minW};
  max-width: ${(p) => p.maxW};
`
export interface IFlex {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center' | 'flex-end' | 'flex-start'
  flexwrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
}
export const PropsFlex = styled.div<IFlex>`
  flex-wrap: ${(p) => p.flexwrap ?? 'wrap'};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
`




