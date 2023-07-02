import styled from 'styled-components';
import { IGlobal } from '../models/global';


export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
`

interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
}
export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: center;
  padding:
  ${(p) => p.pt ?? 0}px
  ${(p) => p.pr ?? 0}px 
  ${(p) => p.pb ?? 0}px 
  ${(p) => p.pl ?? 0}px;
  margin:
  ${(p) => p.mt ?? 0}px
  ${(p) => p.mr ?? 0}px 
  ${(p) => p.mb ?? 0}px 
  ${(p) => p.ml ?? 0}px;
  background-color: ${(p) => p.bg};
`


interface IBox extends IRow {
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
  padding:
  ${(p) => p.pt ?? 0}px
  ${(p) => p.pr ?? 0}px 
  ${(p) => p.pb ?? 0}px 
  ${(p) => p.pl ?? 0}px;
  margin:
  ${(p) => p.mt ?? 0}px
  ${(p) => p.mr ?? 0}px 
  ${(p) => p.mb ?? 0}px 
  ${(p) => p.ml ?? 0}px;
`