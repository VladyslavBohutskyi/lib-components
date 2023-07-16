import styled from 'styled-components';
import { IGlobal } from '../models/global';
import { Avatar } from '../components/image';
import { useState } from "react"
import { log } from 'console';


interface IPopUpContent extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitemss?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flexwrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  w?: string
  h?: string
  mw?: string
  mh?: string
}
interface IPopUpEclipse {
  eclipseOpacity?: string
  eclipseColor?: string
}
interface IPopUp extends IPopUpEclipse, IPopUpContent {
  children: React.ReactNode
  open?: boolean
  openPopupFunction?: any
}

export const PopUpContent = styled.div<IPopUpContent>`
  position: fixed;
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  max-width: ${(p) => p.mw};
  max-height: ${(p) => p.mh};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-wrap:  ${(p) => p.flexwrap};
/////////////////////////////////
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignitemss}; 
  color: ${(p) => p.color};
  background: ${(p) => p.bg ?? 'white'};
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

export const PopUpEclipse = styled.div<IPopUpEclipse>`
  position: fixed;
  background-color:  ${(p) => p.eclipseColor ?? 'black'};
  opacity: ${(p) => p.eclipseOpacity ?? 0.8};
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`



export const PopUp = (props: IPopUp) => {


  return (
    props.open ?
      <>
        <PopUpEclipse
          onClick={() => props.openPopupFunction(false)} eclipseColor={props.eclipseColor} eclipseOpacity={props.eclipseOpacity}>
        </PopUpEclipse>
        <PopUpContent {...props}>
          {props.children}
        </PopUpContent>
        <Avatar onClick={() => props.openPopupFunction(false)}
          sx={'position: fixed; right: 20px; top: 20px; transform: rotate(45deg); cursor: pointer;'}
          fs='30px' bg='white' size='40px'>
          +
        </Avatar>
      </>
      :
      <></>
  )
}