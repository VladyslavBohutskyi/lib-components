import styled from 'styled-components';

export interface ISepatate {
  h?: string
  bg?: string
  p?: string
  m?: string
  mt?: string
  mb?: string
  sx?: string
}
export interface ISepatateCol {
  h?: string
  w?: string
  bg?: string
  p?: string
  m?: string
  mr?: string
  ml?: string
  sx?: string
}

export const Separate = styled.div<ISepatate>`
  width: 100%;
  height: ${(p) => p.h ?? '1px'};
  background: ${(p) => p.bg ?? p.theme.fontColor};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  margin-top:  ${(p) => p.mt ?? '20px'};
  margin-bottom:  ${(p) => p.mb ?? '20px'};
  ${(p) => p.sx}
`
export const SeparateCol = styled.div<ISepatateCol>`
  width: ${(p) => p.w ?? '1px'};
  height: ${(p) => p.h};
  background: ${(p) => p.bg ?? p.theme.fontColor};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  margin-right:  ${(p) => p.mr};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`