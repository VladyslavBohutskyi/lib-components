import styled from 'styled-components';
import { IDisplay, IGlobal, IProportions } from '../models/global';
import { Avatar } from '../components/image';
import { useState } from "react"
import { log } from 'console';


interface IPopUpContent extends IDisplay, IProportions, IGlobal {

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background-color:  ${(p) => p.eclipseColor ?? 'black'};
  opacity: ${(p) => p.eclipseOpacity ?? 0.8};
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