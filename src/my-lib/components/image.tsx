import styled from 'styled-components';
import { IFonts, IGlobal, IProportions } from '../models/global';
import { defaultTheme } from '../theme/default-theme';

interface IAvatar extends IGlobal, IFonts {
  shadow?: string
  shadowcolor?: string
  br?: string
  size?: string
  shadowhover?: string
  type?: 'primary' | 'secondary'
  hover?: 'variant-1' | 'variant-2'
}

export interface IImage extends IProportions {
  of?: 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'revert' | 'scale-down' | 'unset'
  op?: 'center' | 'top' | 'bottom' | 'right' | 'left'
  filter?: string
  sx?: string
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
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowcolor ?? p.theme.shadowcolor}` : false};

  font-size: ${(p) => p.fs ?? '16px'};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform};

  color: ${(p) => p.type === 'primary'
    ? (p.color ?? p.theme.fontPrimary)
    : p.type === 'secondary'
      ? (p.color ?? p.theme.fontSecondary)
      : p.color ?? p.theme.fontColor};

  background: ${(p) => p.type === 'primary'
    ? (p.bg ?? p.theme.primary)
    : p.type === 'secondary'
      ? (p.bg ?? p.theme.secondary)
      : p.bg ?? p.theme.bg};

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
    box-shadow: ${(p) => p.shadowhover ? `0px 0px 15px 4px ${p.shadowcolor ?? p.theme.shadowcolor}` : false};

    ${(p) => (p.hover === 'variant-1' && p.type === 'primary')
    ? `color: ${p.bg ?? p.theme.primary};
       background-color: ${p.color ?? p.theme.fontPrimary};`
    : (p.hover === 'variant-1' && p.type === 'secondary')
      ? `color: ${p.bg ?? p.theme.secondary};
         background-color: ${p.color ?? p.theme.fontSecondary};`
      : p.hover === 'variant-1'
        ? `color: ${p.bg ?? p.theme.bg};
           background-color: ${p.color ?? p.theme.fontColor};`

        : (p.hover === 'variant-2' && p.type === 'primary')
          ? `color: ${p.theme.fontSecondary};
             background-color: ${p.theme.secondary};`
          : (p.hover === 'variant-2' && p.type === 'secondary')
            ? `color: ${p.theme.fontPrimary};
               background-color: ${p.theme.primary};`
            : p.hover === 'variant-2'
              ? `color: ${p.theme.paper};
                 background-color: ${p.theme.shadowcolor};`
              : false}
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

  ${(p) => p.sx}
`

Avatar.defaultProps = {
  theme: defaultTheme
}