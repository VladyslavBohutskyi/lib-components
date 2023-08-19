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
  curentTheme: ITheme = {
    ...defaultTheme
  }
  setCurrentTheme(state: boolean){
    state ? this.curentTheme = {...this.purpleTheme} : this.curentTheme = {...defaultTheme}
  }
}
const Theme = new ThemeStore()

export {Theme}



