import styled from 'styled-components';
import { IDisplay, IGlobal, IProportions } from '../models/global';

export interface IRow extends IGlobal, IDisplay {
}

export interface IBox extends IGlobal, IDisplay, IProportions {
  br?: string
  boxShadow?: string
  border?: string
}

export interface IContainer extends IBox {
  flex?: string
  fullwidth?: string
}

export const Row = styled.div<IRow>`
  flex-wrap: ${(p) => p.flexwrap ?? 'wrap'};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent ?? 'space-between'};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexdirection};

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


export const Container = styled.div<IContainer>`
  max-width: ${(p) => p.fullwidth === 'true' ? '100%' : '1300px'};
  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  max-height: ${(p) => p.maxH};
  
  flex: ${(p) => p.flex};
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexdirection};

  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.boxShadow};
  
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m ?? 'auto'};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr ?? '15px'};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl ?? '15px'};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`



export const Box = styled.div<IBox>`

  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexdirection};
  align-items: ${(p) => p.alignitems};

  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow:${(p) => p.boxShadow};

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

export interface ICol extends IBox {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  spacing?: string
  flexwrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
}
export const Col = styled.div<ICol>`
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
  box-shadow: ${(p) => p.boxShadow};
  flex-basis:${(p) => p.size == 1 ? `calc(8.333% - ${p.spacing ?? '7px'})` :
    p.size == 2 ? `calc(16.666% - ${p.spacing ?? '7px'})` :
      p.size == 3 ? `calc(25% - ${p.spacing ?? '7px'})` :
        p.size == 4 ? `calc(33.333% - ${p.spacing ?? '7px'})` :
          p.size == 5 ? `calc(41.666% - ${p.spacing ?? '7px'})` :
            p.size == 6 ? `calc(50% - ${p.spacing ?? '7px'})` :
              p.size == 7 ? `calc(58.333% - ${p.spacing ?? '7px'})` :
                p.size == 8 ? `calc(66.666% - ${p.spacing ?? '7px'})` :
                  p.size == 9 ? `calc(75% - ${p.spacing ?? '7px'})` :
                    p.size == 10 ? `calc(83.333% - ${p.spacing ?? '7px'})` :
                      p.size == 11 ? `calc(91.666% - ${p.spacing ?? '7px'})` :
                        p.size == 12 ? `calc(100% - ${p.spacing ?? '0px'})` :
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
  ${(p) => p.sx}
`
interface ISection extends IBox {
  flex?: string
}
export const Section = styled.section<ISection>`
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  box-shadow: ${(p) => p.boxShadow};
  flex: ${(p) => p.flex};

  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexdirection};
  align-items: ${(p) => p.alignitems};

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