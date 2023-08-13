import { makeAutoObservable } from 'mobx';
import { ITheme, defaultTheme } from '../../my-lib/theme/default-theme';


class ThemeStore {
  constructor() {
    makeAutoObservable(this)
  }
  theme: ITheme = {
    ...defaultTheme
  }
}
const ThemeTemp = new ThemeStore
const Theme = ThemeTemp.theme
export {Theme}



