import styled from 'styled-components';
import { IBorder, IDisplay, IGlobal, IProportions } from '../models/global';

export interface IRow extends IGlobal, IDisplay {
}

export interface IBox extends IGlobal, IBorder, IDisplay, IProportions {

}

export interface IContainer extends IGlobal, IBorder, IDisplay, IProportions {
  flex?: string
  fullwidth?: string
}

export interface ICol extends IGlobal, IBorder, IDisplay, IProportions {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: string
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
}

interface ISection extends IGlobal, IBorder, IDisplay, IProportions {
  flex?: string
}
interface IPaper extends IBox {

}

export const Row = styled.div<IRow>`
  flex-wrap: ${(p) => p.flexWrap ?? 'wrap'};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};



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

export const Container = styled.div<IContainer>`
  max-width: ${(p) => p.fullwidth === 'true' ? '100%' : '1300px'};
  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  max-height: ${(p) => p.maxH};
  
  flex: ${(p) => p.flex};
  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};

  border:${(p) => p.border};
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
  
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m ?? 'auto'};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr ?? '15px'};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl ?? '15px'};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`

export const Box = styled.div<IBox>`

  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignitems};

  border:${(p) => p.border};
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

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

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

export const Col = styled.div<ICol>`
  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  border:${(p) => p.border};
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

  flex-basis:${(p) => p.size == 1 ? `calc(8.333% - ${p.spacing ?? '7px'})` :
    p.size == 2 ? `calc(16.666% - ${p.spacing ?? '7px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '7px'})` :
        p.size == 4 ? `calc(33.333% - ${p.spacing ?? '7px'})` :
          p.size == 5 ? `calc(41.666% - ${p.spacing ?? '7px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '7px'})` :
              p.size == 7 ? `calc(58.333% - ${p.spacing ?? '7px'})` :
                p.size == 8 ? `calc(66.666% - ${p.spacing ?? '7px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '7px'})` :
                    p.size == 10 ? `calc(83.333% - ${p.spacing ?? '7px'})` :
                      p.size == 11 ? `calc(91.666% - ${p.spacing ?? '7px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '0px'})` :
                          'calc(100%)'
  };

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
export const Section = styled.section<ISection>`
    flex: ${(p) => p.flex};

  border:${(p) => p.border};
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

  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignitems};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  color: ${(p) => p.color ?? p.theme.mainColor};
  background: ${(p) => p.bg ?? p.theme.mainbg};
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

export const Paper = styled.div<IPaper>`

  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignitems};

  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowcolor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowcolor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowcolor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowcolor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};

  height: ${(p) => p.h ?? '100%'};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};

  color: ${(p) => p.color ?? p.theme.paperColor};
  background: ${(p) => p.bg ?? p.theme.paperbg};
  padding: ${(p) => p.p ?? '20px'}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx};
`