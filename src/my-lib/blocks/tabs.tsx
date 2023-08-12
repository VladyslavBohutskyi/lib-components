import styled from 'styled-components';
import { IBorder, IDisplay, IGlobal, IProportions } from '../models/global';


interface ITabsWrapper extends IDisplay, IProportions, IBorder, IGlobal {

}

interface ITabs extends ITabsWrapper {
  fullW?: string
}

interface ITab extends IGlobal {
  tabs?: 'underline' | 'classic' | 'modern'
  active?: string
}

interface ITabsContent extends ITabsWrapper {

}

export const TabsWrapper = styled.section<ITabsWrapper>`
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexdirection};

  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  box-shadow: ${(p) => p.customShadow};

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
export const Tabs = styled.ul<ITabs>`
  li{
    ${(p) => p.fullW ? 'flex:1 1 auto' : false} ;
  }

  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems}; 
  flex-direction: ${(p) => p.flexdirection};
  
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  box-shadow: ${(p) => p.customShadow};

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
export const Tab = styled.li<ITab>`
  cursor: pointer;
  ${(p) => p.tabs == 'classic' ? `
      padding: 15px 20px;
      background: #eee;
      text-align: center;
      ${p.active === 'true' ? ' background: #ccc' : p.active}
  `: false};

     ${(p) => p.tabs == 'underline' ? `
      padding: 15px 20px;
      text-align: center;
      ${p.active === 'true' ? 'border-bottom: 2px solid;' : p.active}
  `: false};
  
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
export const TabsContent = styled.div<ITabsContent>`
  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems}; 
  flex-direction: ${(p) => p.flexdirection};
   
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:
  ${(p) => p.shadow == 'variant-1' ? `${p.shadowColor ?? 'rgba(100, 100, 111, 0.2)'} 0px 7px 29px 0px;` :
    p.shadow == 'variant-2' ? `${p.shadowColor ?? 'rgba(99, 99, 99, 0.2)'} 0px 2px 8px 0px;` :
    p.shadow == 'variant-3' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.05)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-4' ? `${p.shadowColor ?? 'rgba(103, 103, 103, 0.48)'} 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;` :
    p.shadow == 'variant-5' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 2.4px 2.4px 3.2px;` :
    p.shadow == 'variant-6' ? `${p.shadowColor ?? 'rgba(0, 0, 0, 0.15)'} 0px 2px 8px 0px, rgba(0, 0, 0, 0.05) 0px 5px 10px` : false};
  box-shadow: ${(p) => p.customShadow};

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

