export interface ITheme {
  primary?: string,
  fontPrimary?: string,
  secondary?: string,
  fontSecondary?: string,
  paper?: string,
  fontColor?: string,
  fontColorBg?: string,
  bgPrimary?: string,
  bgSecondary?: string,
  bgAccent?: string,
}

const defaultTheme: ITheme = {
  primary: '#6A7578',
  fontPrimary: '#FAF8F7',

  secondary: '#556170',
  fontSecondary: '#FAF8F7',

  paper: '#FAF8F7',
  fontColor: '#465D76',

  fontColorBg: '#FAF8F7',
  bgPrimary: '#8CA5B5',
  bgSecondary: '#2D3C4A',
  bgAccent: '#587682',
}

const purpleTheme: ITheme = {
  primary: '#9D4C4C',
  fontPrimary: '#FAF8F7',

  secondary: '#8E4254',
  fontSecondary: '#FAF8F7',

  paper: '#FAF8F7',
  fontColor: '#503852',

  fontColorBg: '#FAF8F7',
  bgPrimary: '#BE6C9F',
  bgSecondary: '#7B577F',
  bgAccent: '#AF6EA1'
}

const homeTheme = {
  primary: '#ebab2f',
  fontPrimary: '#222121',

  secondary: '#FFD95A',
  fontSecondary: '#4c4c46',

  paper: '#FFF7D4',
  fontColor: 'black',

  bg: '#f7f2da',
  shadowcolor: 'grey',
}


export { homeTheme }
export { purpleTheme }
export { defaultTheme }