import styled from 'styled-components';
import { IBorder, IDisplay, IFonts, IGlobal, IProportions } from '../models/global';
import { defaultTheme } from '../theme/default-theme';




interface IButton extends IDisplay, IProportions, IFonts, IBorder, IGlobal {
  hover?: 'reverse' | 'reverseBorder' | 'opacity'
  opacity?: number
}

interface IBtnLink extends IButton {
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through'
}

export const Button = styled.button<IButton>`
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  opacity: ${(p) => p.opacity ?? 1};
  
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'center'};
  align-items: ${(p) => p.alignitems ?? 'center'}; 
  flex-direction: ${(p) => p.flexDirection};
  
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  font-size: ${(p) => p.fs ?? '14px'};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};
  
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? p.theme.primary}`};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowColor ?? (p.bg ?? p.theme.primary)}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};

  color: ${(p) => p.color ?? p.theme.fontPrimary};
  background: ${(p) => p.bg ?? p.theme.primary};
  padding: ${(p) => p.p ?? '10px 15px'}; 
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
  &:hover {
    background-color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' 
    ? p.color ?? p.theme.fontPrimary
    : p.hover == 'opacity'
    ? false
    : p.theme.secondary};

    color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' 
    ? p.bg ?? p.theme.primary 
    : p.hover == 'opacity'
    ? false
    : p.theme.fontSecondary};

    border: ${(p) => p.hover === 'reverse' 
    ? `1px solid ${p.color ?? p.theme.fontPrimary}`
    : p.hover == ('reverseBorder' || 'opacity')
    ? `1px solid ${p.bg ?? p.theme.primary}`
    : `1px solid ${p.theme.secondary}`};
    box-shadow: none;
    opacity: ${(p) => p.hover === 'opacity' ? 0.7 : false}
  }`


export const BtnLink = styled.a<IBtnLink>`
  text-decoration: ${(p) => p.textDecoration ?? 'none'};
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  opacity: ${(p) => p.opacity ?? 1};
  
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'center'};
  align-items: ${(p) => p.alignitems ?? 'center'}; 
  flex-direction: ${(p) => p.flexDirection};
  
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  font-size: ${(p) => p.fs ?? '14px'};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.texttransform};
  
  
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? p.theme.primary}`};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowColor ?? (p.bg ?? p.theme.primary)}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  
  color: ${(p) => p.color ?? p.theme.fontPrimary};
  background: ${(p) => p.bg ?? p.theme.primary};
  padding: ${(p) => p.p ?? '10px 15px'}; 
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
  &:hover {
    background-color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' 
    ? p.color ?? p.theme.fontPrimary
    : p.hover == 'opacity'
    ? false
    : p.theme.secondary};

    color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' 
    ? p.bg ?? p.theme.primary 
    : p.hover == 'opacity'
    ? false
    : p.theme.fontSecondary};

    border: ${(p) => p.hover === 'reverse' 
    ? `1px solid ${p.color ?? p.theme.fontPrimary}`
    : p.hover == ('reverseBorder' || 'opacity')
    ? `1px solid ${p.bg ?? p.theme.primary}`
    : `1px solid ${p.theme.secondary}`};
    box-shadow: none;
    opacity: ${(p) => p.hover === 'opacity' ? 0.7 : false}
  }`

Button.defaultProps = BtnLink.defaultProps = {
  theme: defaultTheme
}
