import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface ICard extends IGlobal {
  shadow?: string
  shadowColor?: string
  height?: string
  mh?: string
  width?: string
  minW?: string
  br?: string
  border?: string
  flexDirection?: 'column'| 'column-reverse'| 'row' | 'revert' | 'row-revese'
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  

}

interface ICardInner extends IGlobal {
  border?: string
  textAlign?: 'left' | 'right' | 'center'
  height?: string
  mh?: string
  width?: string
  minW?: string
  flexDirection?: 'column'| 'column-reverse'| 'row' | 'revert' | 'row-revese'
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flex?: string
}

export const Card = styled.article<ICard>`
  display: ${(p) => p.display ?? 'flex'};
  height: ${(p) => p.height ?? '100%'};
  width: ${(p) => p.width};
  min-height: ${(p) => p.mh};
  min-width: ${(p) => p.minW};
  flex-direction: ${(p) => p.flexDirection ?? 'column'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  ow:${(p) => p.shadow ? `0px 0px 09px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
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

export const CardHeader = styled.div<ICardInner>`

  flex-direction: ${(p) => p.flexDirection};
  height: ${(p) => p.height};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.mh};
  min-width: ${(p) => p.minW};
  border: ${(p) => p.border};
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
export const CardContent = styled.div<ICardInner>`
  flex-direction: ${(p) => p.flexDirection};
  flex: ${(p) => p.flex ?? '1'};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.mh};
  min-width: ${(p) => p.minW};
  border: ${(p) => p.border};
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
  margin-bottom:  ${(p) => p.mb ?? '10px'};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`
export const CardFooter = styled.div<ICardInner>`
  flex-direction: ${(p) => p.flexDirection};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.mh};
  min-width: ${(p) => p.minW};
  border: ${(p) => p.border};
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

