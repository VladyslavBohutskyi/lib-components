import styled from 'styled-components';
import { IGlobal, IShadowBorder } from '../models/global';

interface IList extends IGlobal, IShadowBorder {
  liststyle?: 'armenian' | 'circle' | 'decimal' | 'decimal-leading-zero' | 'disc' | 'georgian' | 'lower-alpha'
  | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'none' | 'square' | 'disclosure-open' | 'auto' | 'disclosure-closed'
  | 'disclosure-open' | 'upper-roman' | 'upper-latin' | 'upper-alpha' | 'upper-greek'
  customstyle?: string
}
interface IListItem extends IList {
  active?: string
  top?: string
  left?: string
}

export const List = styled.ul<IList>`
  list-style: ${(p) => p.liststyle ?? 'none'};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
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

export const ListItem = styled.li<IListItem>`
  ${(p) => p.active === 'true' ? `
    border: 5px solid transparent;
    border-left: 5px solid ${p.activeColor ?? 'grey'};
    padding: ${(p.p ?? '5px') + '!important'};
    margin-left: ${(p.ml + '!important')};
    background-color: ${p.bg ?? '#ebebeb'};
  &::before{
    content: '${p.customstyle}';
    padding: 0px;
    }
  `: false};
    
  &::before{
    content: '${(p) => p.customstyle}';
  ${(p) => p.customstyle ? `

    `: false};}  

  position: relative;
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
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