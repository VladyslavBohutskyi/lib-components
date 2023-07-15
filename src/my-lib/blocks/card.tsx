import styled from 'styled-components';
import { IGlobal } from '../models/global';


interface ICard extends IGlobal {
  shadow?: boolean
  shadowColor?: string
  height?: string
  minH?: string
  width?: string
  minW?: string
  br?: string
  border?: string
  flexDirection?: 'column'| 'column-reverse'| 'row' | 'revert' | 'row-revese'
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  

}

interface ICardInner extends IGlobal {
  border?: string
  textAlign?: 'left' | 'right' | 'center'
  height?: string
  minH?: string
  width?: string
  minW?: string
  flexDirection?: 'column'| 'column-reverse'| 'row' | 'revert' | 'row-revese'
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignItems?: 'center' | 'flex-end' | 'flex-start' | 'left' | 'right'
  flex?: string
}

export const Card = styled.article<ICard>`
  display: ${(p) => p.display ?? 'flex'};
  height: ${(p) => p.height ?? '100%'};
  width: ${(p) => p.width};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  flex-direction: ${(p) => p.flexDirection ?? 'column'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  box-shadow:${(p) => p.shadow ? `0px 0px 15px 3px ${p.shadowColor ?? 'grey'}` : false};
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
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.minH};
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
  justify-content: ${(p) => p.justifyContent};
  align-items: ${(p) => p.alignItems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.minH};
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
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItems};
  text-align: ${(p) => p.textAlign};
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  min-height: ${(p) => p.minH};
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

