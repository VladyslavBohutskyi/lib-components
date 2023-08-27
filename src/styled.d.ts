import 'styled-components';
import { ITheme } from './my-lib/theme/default-theme';


declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}