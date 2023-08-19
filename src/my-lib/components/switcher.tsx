import styled from 'styled-components'
import { IDisplay, IGlobal } from '../models/global'

export interface ISwitchWrapper extends IGlobal {
  w?: string
  h?: string
  boxShadow?: string
  br?: string
  border?: string
  active?: string
}

export const SwitchWrapper = styled.div<ISwitchWrapper>`
display: flex;
position: relative;
width: ${(p) => p.w ?? '90px'};
height: ${(p) => p.h ?? '24px'};
  
box-shadow:${(p) => p.boxShadow ?? '0px 1px 5px 0px rgb(144 94 137)'};
border-radius: ${(p) => p.br ?? '30px'};
border:${(p) => p.border ?? `1px solid ${p.theme.bgAccent}`};

color: ${(p) => p.color};
background: ${(p) => p.bg ?? p.theme.fontPrimary};
padding: ${(p) => p.p};
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
${(p) => p.active == 'true' ? `
 & span {
  left: calc(97% - 20px)
 }
` : false}
`

export const Switch = styled.span<ISwitchWrapper>`
  position: absolute;
  left: 3%;
  top: 1px;
  display: block;
  transition: all 0.3s ease;

  width: ${(p) => p.w ?? '20px'};
  height: ${(p) => p.h ?? '20px'};
  box-shadow:${(p) => p.boxShadow ?? '0px 1px 5px 0px rgb(144 94 137)'};
  border-radius: ${(p) => p.br ?? '50%'};
  border:${(p) => p.border ?? `2px solid ${p.theme.bgAccent}`};

box-shadow:${(p) => p.boxShadow};
border-radius: ${(p) => p.br};
border:${(p) => p.border};

color: ${(p) => p.color};
background: ${(p) => p.bg ?? p.theme.bgAccent};
padding: ${(p) => p.p};
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
`