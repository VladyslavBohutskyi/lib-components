import styled from 'styled-components';
import { IGlobal } from '../models/global';


export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`

export interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignItem?: 'center' | 'flex-end' | 'flex-start'
}
export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
  padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
  margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '0px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
  background-color: ${(p) => p.bg};
`

export interface IBox extends IRow {
  br?: string
  shadow?: string
  border?: string
}
export const Box = styled.div<IBox>`
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow};
  background-color: ${(p) => p.bg};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
  padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
  margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '0px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
`

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: string
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
}
export const Col = styled.div<ICol>`
display: ${(p) => p.display ?? 'block'};
justify-content: ${(p) => p.justifyContent ?? 'center'};
border: ${(p) => p.border};
border-radius: ${(p) => p.br};
box-shadow: ${(p) => p.shadow};
background-color: ${(p) => p.bg};
justify-content: ${(p) => p.justifyContent ?? 'space-between'};
align-items: ${(p) => p.alignItem ?? 'center'};
flex-wrap: ${(p) => p.wrap ?? 'wrap'};
flex-basis:${
  (p) => p.size == 1 ? `calc(8.3% - ${p.spacing ?? '15px'})` :
  p.size == 2 ? `calc(16.6% - ${p.spacing ?? '15px'})` :
  p.size == 3 ? `calc(25% - ${p.spacing ?? '15px'})` :
  p.size == 4 ? `calc(33.3% - ${p.spacing ?? '15px'})` :
  p.size == 5 ? `calc(41.6% - ${p.spacing ?? '15px'})` :
  p.size == 6 ? `calc(50% - ${p.spacing ?? '15px'})` :
  p.size == 7 ? `calc(58.3% - ${p.spacing ?? '15px'})` :
  p.size == 8 ? `calc(66.6% - ${p.spacing ?? '15px'})` :
  p.size == 9 ? `calc(75% - ${p.spacing ?? '15px'})` :
  p.size == 10 ? `calc(83.3% - ${p.spacing ?? '15px'})` :
  p.size == 11 ? `calc(91.6% - ${p.spacing ?? '15px'})` :
  p.size == 12 ? `calc(100% - ${p.spacing ?? '15px'})` :
  'calc(100%)'
  };
  padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
  margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '0px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
`