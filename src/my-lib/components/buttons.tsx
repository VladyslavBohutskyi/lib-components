import styled from 'styled-components';
import { IGlobal } from '../models/global';

interface IButton extends IGlobal {
  fs?: string
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  ls?: string
  br?: string
  border?: string
  shadow?: string
  shadowColor?: string
  boxShadow?: string
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitemss?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  minHeight?: string
  minWidth?: string
  hover?: 'reverse' | 'reverseBorder' | 'opacity'
  opacity?: number
  texttransform?: 'uppercase' | 'lowercase'| 'capitalize' | 'unset'
}


export const Button = styled.button<IButton>`
  text-transform: ${(p) => p.texttransform};
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  opacity: ${(p) => p.opacity ?? 1};
  letter-spacing: ${(p) => p.ls};
  font-size: ${(p) => p.fs ?? '14px'};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? (p.bg ?? '#8696FE')}` : false};
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? '#8696FE'}`};
  font-weight: ${(p) => p.fw};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  align-items: ${(p) => p.alignitemss ?? 'center'}; 
  min-height: ${(p) => p.minHeight};
  min-width: ${(p) => p.minWidth};
  color: ${(p) => p.color ?? 'white'};
  background: ${(p) => p.bg ?? '#8696FE'};
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
  background-color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' ? p.color ?? 'white' : false};
  color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' ? p.bg ?? '#8696FE' : false};
  border: ${(p) => p.hover === 'reverse' ? `1px solid ${p.color ?? 'white'}` : false};
  opacity: ${(p) => p.hover === 'opacity' ? 0.8 : false}
}`


interface IBtnLink extends IButton {
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through'
}


export const BtnLink = styled.a<IBtnLink>`
  text-decoration: ${(p) => p.textDecoration ?? 'none'};
  text-transform: ${(p) => p.texttransform};
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  opacity: ${(p) => p.opacity ?? 1};
  letter-spacing: ${(p) => p.ls};
  font-size: ${(p) => p.fs ?? '14px'};
  border-radius: ${(p) => p.br ?? '5px'};
  box-shadow:${(p) => p.shadow ? `0px 0px 9px ${p.shadowColor ?? (p.bg ?? '#8696FE')}` : false};
  border: ${(p) => p.border ?? `1px solid ${p.bg ?? '#8696FE'}`};
  font-weight: ${(p) => p.fw};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  align-items: ${(p) => p.alignitemss ?? 'center'}; 
  min-height: ${(p) => p.minHeight};
  min-width: ${(p) => p.minWidth};
  color: ${(p) => p.color ?? 'white'};
  background: ${(p) => p.bg ?? '#8696FE'};
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
  background-color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' ? p.color ?? 'white' : false};
  color: ${(p) => p.hover === 'reverse' || p.hover === 'reverseBorder' ? p.bg ?? '#8696FE' : false};
  border: ${(p) => p.hover === 'reverse' ? `1px solid ${p.color ?? 'white'}` : false};
  opacity: ${(p) => p.hover === 'opacity' ? 0.8 : false}
}`