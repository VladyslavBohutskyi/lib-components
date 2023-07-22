import styled from 'styled-components';
import { IGlobal } from '../models/global';

interface IList extends IGlobal {
  styletype?: 'armenian' | 'circle' | 'decimal' | 'decimal-leading-zero' | 'disc' | 'georgian' | 'lower-alpha'
  | 'lower-greek' | 'lower-latin' | 'lower-roman' | 'none' | 'square' | 'disclosure-open' | 'auto' | 'disclosure-closed'
  | 'disclosure-open' | 'upper-roman' | 'upper-latin' | 'upper-alpha' | 'upper-greek'
  liststyle?: string
  customstyle?: string
}
interface IListItem extends IGlobal {

}

export const List = styled.ul<IList>`
  list-style: ${(p) => p.liststyle ?? 'none'};
  list-style-type: ${(p) => p.styletype};
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
  li{
    &::before{
    position: absolute;
    content: ${(p) => p.styletype ?? p.customstyle};
    left: -15px;
    top: 0;
  }}
`

export const ListItem = styled.li<IListItem>`
position: relative;
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl};
  margin-top:  ${(p) => p.mt ?? '5px'};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml ?? '20px'};
  ${(p) => p.sx}
`