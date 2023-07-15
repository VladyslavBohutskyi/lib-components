import styled from 'styled-components';
import { IGlobal } from '../models/global';

interface IAvatar extends IGlobal {
  shadow?: boolean
  shadowColor?: string
  br?: string
  size?: string
  fs?: string
}


export const Avatar = styled.div<IAvatar>`
  width: ${(p) => p.size ?? '50px'};
  height: ${(p) => p.size ?? '50px'};
  border-radius: ${(p) => p.br ?? '50%'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? 'grey'}` : false};
  font-size: ${(p) => p.fs ?? '16px'};
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

export interface IImage{
  w?: string
  h?: string
  of?: 'contain'|'cover'|'fill'|'inherit'|'initial'|'none'|'revert'|'scale-down'|'unset'
  op?: 'center'|'top'|'bottom'|'right'|'left'
  filter?: string
}
export const Image = styled.img<IImage>`
  width:  ${(p) => p.w ?? '100%'};
  height:  ${(p) => p.h ?? '100%'};
  object-fit: ${(p) => p.of ?? 'cover'};
  object-position: ${(p) => p.op ?? 'center'};
  filter:  ${(p) => p.filter};
`