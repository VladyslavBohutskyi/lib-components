import styled from 'styled-components';
import { IDisplay, IGlobal, IProportions } from '../models/global';




interface ITabsWrapper extends IGlobal, IDisplay, IProportions {
  shadow?: string
  shadowColor?: string
  br?: string
  border?: string
}
interface ITabs extends ITabsWrapper {
  shadow?: string
  shadowColor?: string
  br?: string
  border?: string
  fullW?: string
}
interface ITab extends IGlobal {
  tabs?: 'underline' | 'classic' | 'modern'
  active?: string
}
interface ITabsContent extends ITabsWrapper {
  shadow?: string
  shadowColor?: string
  br?: string
  border?: string
}

export const TabsWrapper = styled.section<ITabsWrapper>`
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
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
export const Tabs = styled.ul<ITabs>`
  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems}; 
  flex-direction: ${(p) => p.flexDirection};
  li{
    ${(p) => p.fullW ? 'flex:1 1 auto' : false} ;
  }
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
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
  flex-direction: ${(p) => p.flexDirection};
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
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

