import styled from 'styled-components';
import { IDisplay, IGlobal } from '../models/global';
import { defaultTheme } from '../theme/default-theme';


interface ISidebar extends IDisplay, IGlobal {
  boxshadow?: string
  zindex?: string
  type?: 'gradient' | 'primary' | 'secondary'
}


export const Sidebar = styled.ul<ISidebar>`
  position: relative;
  box-shadow: ${(p) => p.boxshadow ?? 'rgba(0, 0, 0, 0.15) 2px -1px 10px'};
  z-index: ${(p) => p.zindex ?? '1'};
  height: 100%;
  flex-wrap: ${(p) => p.flexWrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  flex-direction: ${(p) => p.flexDirection};
  align-items: ${(p) => p.alignitems};

  color: ${(p) => p.color};
  background: ${(p) => `
 ${p.type == 'gradient'
      ? `linear-gradient(27deg, ${p.theme.bgSecondary} 0%, ${p.theme.bgPrimary} 100%)`
      : p.type == 'primary'
        ? p.theme.bgPrimary
        : p.type == 'secondary'
          ? p.theme.bgSecondary
          : p.bg}
`};

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
