import styled from 'styled-components';
import { IGlobal } from '../models/global';

interface IAvatar extends IGlobal {
  shadow?: boolean
  shadowColor?: string
  br?: string
  size?: string
  fs?: string
  color?: string
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
  color: ${(p) => p.color};
  background-color: ${(p) => p.bg};
  font-size: ${(p) => p.fs ?? '16px'};
  padding: ${(p) => p.pt ?? '0px'} ${(p) => p.pr ?? '0px'} ${(p) => p.pb ?? '0px'} ${(p) => p.pl ?? '0px'};
  margin: ${(p) => p.mt ?? '0px'} ${(p) => p.mr ?? '0px'} ${(p) => p.mb ?? '0px'} ${(p) => p.ml ?? '0px'};
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`