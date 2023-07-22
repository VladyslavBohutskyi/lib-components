import styled from 'styled-components';
import { IGlobal } from '../models/global';
import { useState } from "react"



interface ITabsWrapper extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flexwrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  w?: string
  h?: string
  mw?: string
  mh?: string
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
}
interface ITab extends IGlobal {
  index?: number
}
interface ITabsContent extends ITabsWrapper {
  index?: number
}


export const TabsWrapper = styled.section<ITabsWrapper>`
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems}; 
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
  box-shadow: ${(p) => p.shadow ? `0px 0px 07px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems}; 
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
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  flex-wrap:  ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems}; 
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
