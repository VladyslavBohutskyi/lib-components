export interface IGlobal {
  p?: string,
  pt?: string,
  pb?: string,
  pl?: string,
  pr?: string,
  m?: string,
  mt?: string,
  mb?: string,
  ml?: string,
  mr?: string,
  bg?: string,
  color?: string,
  sx?: string
}

export interface IDisplay {  
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block' | 'inline' | 'inline-flex' | 'grid' | 'inline-grid' | 'flow-root'
  justifycontent?: 'center' | 'space-between' | 'space-around' | 'flex-end' | 'flex-start' | 'left' | 'right'
  alignitems?: 'center'| 'flex-end' | 'flex-start' | 'left' | 'right'
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | 'inherit' | 'initial' | 'unset'
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}

export interface IProportions {
  h?: string
  w?: string
  minH?: string
  minW?: string
  maxH?: string
  maxW?: string
}

export interface IFonts {
  fs?: string
  ls?: string
  lh?: string
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
  fontStyle?: 'italic' | 'normal' | 'unset'
  textAlign?: 'left' | 'right' | 'center'
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'unset'
}

export interface IBorder { 
  border?: string
  br?: string
  shadow?: 'variant-1' | 'variant-2' |'variant-3' |'variant-4' |'variant-5' |'variant-6'
  customShadow?: string
  shadowcolor?: string
}