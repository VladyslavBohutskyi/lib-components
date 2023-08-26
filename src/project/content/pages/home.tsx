import { ThemeProvider } from 'styled-components'
import { defaultTheme, homeTheme } from '../../../my-lib/theme/default-theme'
import { Avatar } from '../../../my-lib/components/image'
import { Row } from '../../../my-lib/layout'


const Home = () => {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <Row mb='30px'>
        <Avatar type='primary' size='70px' mr='20px' shadow='variant-1'  hover='variant-1' shadowhover='true'>
          P1
        </Avatar>
        <Avatar type='secondary' size='70px' mr='20px' shadow='variant-1' hover='variant-1' shadowhover='true'>
          S1
        </Avatar>
        <Avatar size='70px' mr='20px' hover='variant-1' shadowhover='true'>
          D1
        </Avatar>
        <Avatar type='primary' size='70px' mr='20px' shadow='variant-1'  hover='variant-2' shadowhover='true'>
          P2
        </Avatar>
        <Avatar type='secondary' size='70px' mr='20px' shadow='variant-1' hover='variant-2' shadowhover='true'>
          S2
        </Avatar>
        <Avatar size='70px' mr='20px' hover='variant-2' shadowhover='true'>
          D2
        </Avatar>
      </Row>
    </ThemeProvider>
    <ThemeProvider theme={homeTheme}>
      <Row>
        <Avatar type='primary' size='70px' mr='20px' shadow='variant-1'  hover='variant-1' shadowhover='true'>
          P1
        </Avatar>
        <Avatar type='secondary' size='70px' mr='20px' shadow='variant-1' hover='variant-1' shadowhover='true'>
          S1
        </Avatar>
        <Avatar size='70px' mr='20px' hover='variant-1' shadowhover='true'>
          D1
        </Avatar>
        <Avatar type='primary' size='70px' mr='20px' shadow='variant-1'  hover='variant-2' shadowhover='true'>
          P2
        </Avatar>
        <Avatar type='secondary' size='70px' mr='20px' shadow='variant-1' hover='variant-2' shadowhover='true'>
          S2
        </Avatar>
        <Avatar size='70px' mr='20px' hover='variant-2' shadowhover='true'>
          D2
        </Avatar>
      </Row>
    </ThemeProvider>
    </> 
  )
}
export default Home