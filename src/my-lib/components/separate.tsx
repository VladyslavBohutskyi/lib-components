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

export const Separate = styled.div<ISepatate>`
  width: 100%;
  height: ${(p) => p.h ?? '1px'};
  background: ${(p) => p.bg ?? 'black'};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  margin-top:  ${(p) => p.mt};
  margin-bottom:  ${(p) => p.mb ?? '10px'};
  ${(p) => p.sx}
`