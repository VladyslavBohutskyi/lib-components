import styled from 'styled-components';
import { IGlobal } from '../models/global';

interface IAvatar extends IGlobal {
  shadow?: boolean
  shadowColor?: string
  br?: string
  size?: number
}


export const Avatar = styled.div<IAvatar>`
  width: ${(p) => p.size ?? 50}px;
  height: ${(p) => p.size ?? 50}px;
  border-radius: ${(p) => p.br ?? '50%'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? 'grey'}` : false};
  color: ${(p) => p.color};
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

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`