import styled from 'styled-components';
import { IGlobal } from '../models/global';

export interface IRow extends IGlobal {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root' 
  justifyContent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignItem?: 'center' | 'flex-end' | 'flex-start'
}
export const Row = styled.div<IRow>`
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem};
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
`

export interface IContainer extends IBox {
  flex?: string
  fullWidth?: boolean
}

export const Container = styled.div<IContainer>`
  flex: ${(p) => p.flex};
  max-width: ${(p) => p.fullWidth ? '100%' : '1300px'};
  width: 100%;
  margin: auto;
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr ?? '15px'};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl ?? '15px'};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
`



export interface IBox extends IRow {
  br?: string
  shadow?: string
  border?: string
}
export const Box = styled.div<IBox>`
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
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
`

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: string
  wrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
}
export const Col = styled.div<ICol>`
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
  flex-wrap: ${(p) => p.wrap ?? 'wrap'};
  flex-basis:${(p) => p.size == 1 ? `calc(8.3% - ${p.spacing ?? '15px'})` :
    p.size == 2 ? `calc(16.6% - ${p.spacing ?? '15px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '15px'})` :
        p.size == 4 ? `calc(33.3% - ${p.spacing ?? '15px'})` :
          p.size == 5 ? `calc(41.6% - ${p.spacing ?? '15px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '15px'})` :
              p.size == 7 ? `calc(58.3% - ${p.spacing ?? '15px'})` :
                p.size == 8 ? `calc(66.6% - ${p.spacing ?? '15px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '15px'})` :
                    p.size == 10 ? `calc(83.3% - ${p.spacing ?? '15px'})` :
                      p.size == 11 ? `calc(91.6% - ${p.spacing ?? '15px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '15px'})` :
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
`
interface ISection extends IBox{
  flex?: string
}
export const Section = styled.section<ISection>`
  flex: ${(p) => p.flex};
  display: ${(p) => p.display ?? 'block'};
  justify-content: ${(p) => p.justifyContent ?? 'center'};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.shadow};
  justify-content: ${(p) => p.justifyContent ?? 'space-between'};
  align-items: ${(p) => p.alignItem ?? 'center'};
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
`