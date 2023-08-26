import styled from 'styled-components'
import { IBorder, IDisplay, IFonts, IGlobal, IProportions } from '../models/global'
import { defaultTheme } from '../theme/default-theme'


interface IButton extends IDisplay, IProportions, IFonts, IBorder, IGlobal {
  opacity?: number,
  hover?: 'reverse' | 'reverseBorder' | 'opacity',
  hoverbg?: string,
  hovercolor?: string,
}

interface IBtnLink extends IButton {
  textDecoration?: 'underline' | 'overline' | 'line-through' | 'none'
}

interface IBtnModern extends IDisplay, IProportions, IFonts, IBorder, IGlobal {
  hover?: 'victoria vertical' | 'victoria horizontal' | 'victoria left' | 'victoria right' | 'sandy vertical' | 'sandy horizontal' | 'sandy left' | 'sandy right' | 'thar vertical' | 'thar horizontal' | 'thar left' | 'thar right'
}

interface IBtnStandart extends IDisplay, IProportions, IFonts, IBorder, IGlobal {
  hover?: 'swipe' | 'aware' | 'diagonal awipe' | 'altednate' | 'double swipe' | 'smosh' | 'diagonal close' | 'vertical overlap' | 'horizontal overlap' | 'collision' | 'slice'
}

export const Button = styled.button<IButton>`
  cursor: pointer;
  outline: none;
  transition: all .3s;
  opacity: ${(p) => p.opacity ?? 1};

  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'center'};
  align-items: ${(p) => p.alignitems ?? 'center'};
  flex-wrap: ${(p) => p.flexWrap};
  flex-direction: ${(p) => p.flexDirection};

  font-size: ${(p) => p.fs ?? '14px'};
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls};
  line-height: ${(p) => p.lh};
  font-style: ${(p) => p.fontStyle};
  text-align: ${(p) => p.textAlign};
  text-transform: ${(p) => p.textTransform};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

 
  border:${(p) => p.border ?? `1px solid ${p.bg ?? p.theme.primary}`};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowcolor ?? p.bg ?? p.theme.primary}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };

  color: ${(p) => p.color ?? p.theme.fontPrimary};
  background: ${(p) => p.bg ?? p.theme.primary};
  padding: ${(p) => p.p ?? '10px 15px'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
   &:hover {
    background-color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder'
    ? p.color ?? p.theme.fontPrimary
    : p.hover == 'opacity'
      ? false
      : p.hoverbg ?? p.theme.secondary}; 
    color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder'
    ? p.bg ?? p.theme.primary
    : p.hover == 'opacity'
      ? false
      : p.hovercolor ?? p.theme.fontSecondary};

    border: ${(p) => p.hover == 'reverse'
    ? `1px solid ${p.color ?? p.theme.fontPrimary}`
    : p.hover == ('reverseBorder' || 'opacity')
      ? `1px solid ${p.bg ?? p.theme.primary}`
      : `1px solid ${p.hoverbg ?? p.theme.secondary}`};
    box-shadow:none;
    opacity: ${(p) => p.hover == 'opacity' ? 0.7 : false}
   }
`


export const BtnLink = styled.a<IBtnLink>`
  cursor: pointer;
  outline: none;
  transition: all .3s;
  text-decoration: ${(p) => p.textDecoration ?? 'none'};
  opacity: ${(p) => p.opacity ?? 1};

  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'center'};
  align-items: ${(p) => p.alignitems ?? 'center'};
  flex-wrap: ${(p) => p.flexWrap};
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
  text-transform: ${(p) => p.textTransform};

  border:${(p) => p.border ?? `1px solid ${p.bg ?? p.theme.primary}`};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowcolor ?? p.bg ?? p.theme.primary}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };

  color: ${(p) => p.color ?? p.theme.fontPrimary};
  background: ${(p) => p.bg ?? p.theme.primary};
  padding: ${(p) => p.p ?? '10px 15px'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};
  &:hover {
    background-color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder'
    ? p.color ?? p.theme.fontPrimary
    : p.hover == 'opacity'
      ? false
      : p.hoverbg ?? p.theme.secondary}; 
    color: ${(p) => p.hover == 'reverse' || p.hover == 'reverseBorder'
    ? p.bg ?? p.theme.primary
    : p.hover == 'opacity'
      ? false
      : p.hovercolor ?? p.theme.fontSecondary};

    border: ${(p) => p.hover == 'reverse'
    ? `1px solid ${p.color ?? p.theme.fontPrimary}`
    : p.hover == ('reverseBorder' || 'opacity')
      ? `1px solid ${p.bg ?? p.theme.primary}`
      : `1px solid ${p.hoverbg ?? p.theme.secondary}`};
    box-shadow:none;
    opacity: ${(p) => p.hover == 'opacity' ? 0.7 : false}
   }
`

export const BtnModern = styled.a<IBtnModern>`
  overflow: hidden;
  cursor: pointer;
  position: relative;
  z-index: 1;
  text-decoration: none;
	letter-spacing: .08em;
	transition: all 0.5s ease-in-out;

  display: ${(p) => p.display ?? 'inline-flex'};
  justify-content: ${(p) => p.justifycontent ?? 'center'};
  align-items: ${(p) => p.alignitems ?? 'center'};
  flex-wrap: ${(p) => p.flexWrap};
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
  text-transform: ${(p) => p.textTransform};
	
  border:${(p) => p.border ?? `2px solid ${p.bg ?? p.theme.secondary}`};
  border-radius: ${(p) => p.br};
  box-shadow:${(p) => p.customShadow ? `0px 0px 9px ${p.shadowcolor ?? p.bg ?? p.theme.primary}` : false};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
      p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
        p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
          p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
            p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false
  };

  color: ${(p) => p.color ?? p.theme.fontPrimary};
  background: ${(p) => p.bg ?? p.theme.primary};
  padding: ${(p) => p.p ?? '15px 25px'};
  padding-top: ${(p) => p.pt};
  padding-bottom: ${(p) => p.pb};
  padding-left: ${(p) => p.pl};
  padding-right: ${(p) => p.pr};
  margin: ${(p) => p.m};
  margin-top: ${(p) => p.mt};
  margin-bottom: ${(p) => p.mb};
  margin-left: ${(p) => p.ml};
  margin-right: ${(p) => p.mr};
  ${(p) => p.sx};

  &:after{
    content: "";
	position: absolute;
  background: ${(p) => p.theme.secondary};
	height: 0px;
	left: 50%;
	top: 50%;
	width: 150%;
	z-index: -1;
	transition: all 0.5s ease-in-out;
  ${(p) => p.hover == 'victoria left' ? `
	  transform: translateX(-50%) translateY(-50%) rotate(-25deg);
  `
    : p.hover == 'victoria right' ? `
	  transform: translateX(-50%) translateY(-50%) rotate(25deg);
  `
      : p.hover == 'victoria vertical' ? `
	  transform: translateX(-50%) translateY(-50%);
  `
        : p.hover == 'victoria horizontal' ? `
	transform: translateY(-50%) translateX(-50%) rotate(90deg);
  `
          : false}
  };
  &:hover{
    color: ${(p) => p.theme.fontSecondary};
    &:after{
      height: 400px;
      opacity: 1;
      ${(p) => p.hover == 'victoria vertical' ? `
	    transform: translateX(-50%) translateY(-50%);
  `
    : p.hover == 'victoria horizontal' ? `
	    transform: translateX(-50%) translateY(-50%);
  `
      : false}
    }
  };
`