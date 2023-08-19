import { makeAutoObservable } from 'mobx';
import { ITheme, defaultTheme, purpleTheme } from '../../my-lib/theme/default-theme';
import { stat } from 'fs';


class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }

  purpleTheme: ITheme = {
    ...purpleTheme
  }
  currentTheme: ITheme = {
    ...defaultTheme
  }


  setCustomTheme(customTheme: ITheme) {
   this.currentTheme = {...customTheme}
   
  }


  setCurrentTheme(state: boolean) {
    state ? this.currentTheme = { ...this.purpleTheme } : this.currentTheme = { ...defaultTheme }
  }



}
const Theme = new ThemeStore()

export { Theme }



