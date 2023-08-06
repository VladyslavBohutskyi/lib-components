import styled from 'styled-components';
import { IFonts, IGlobal, IProportions } from '../models/global';

interface IAvatar extends IGlobal, IFonts {
  shadow?: string
  shadowColor?: string
  br?: string
  size?: string
  shadowHover?: string
}

export interface IImage extends IProportions {
  of?: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'revert' | 'scale-down' | 'unset'
  op?: 'center' | 'top' | 'bottom' | 'right' | 'left'
  filter?: string
}

export const Avatar = styled.div<IAvatar>`  
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  width: ${(p) => p.size ?? '50px'};
  height: ${(p) => p.size ?? '50px'};
  border-radius: ${(p) => p.br ?? '50%'};
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? 'pink'}` : false};

  font-size: ${(p) => p.fs ?? '16px'};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};

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
  &:hover{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: ${(p) => p.shadowHover ? `0px 0px 3px 5px ${p.shadowColor ?? 'pink'}` : false};
  }
`

export const Image = styled.img<IImage>`
  width:  ${(p) => p.w ?? '100%'};
  height:  ${(p) => p.h ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  object-fit: ${(p) => p.of ?? 'cover'};
  object-position: ${(p) => p.op ?? 'center'};
  filter:  ${(p) => p.filter};
`