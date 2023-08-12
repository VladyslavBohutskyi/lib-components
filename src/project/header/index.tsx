import { NavLink } from 'react-router-dom'
import { Box, Container, Row } from '../../my-lib/layout'
import { Button } from '../../my-lib/components/buttons'
import { Avatar, Image } from '../../my-lib/components/image'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'
import { LHeader } from '../../my-lib/sections/header'
import { defaultTheme, homeTheme } from '../../my-lib/theme/default-theme'
import { ThemeProvider } from 'styled-components'


const meenuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {
  const yellowTheme = {
    ...defaultTheme,
    primary: '#FFFEC4',
    secondary: '#FFD65A',
    fontPrimary: 'black',
    fontSecondary: 'white',
  }
  const testTheme = {
    ...defaultTheme,
    primary: '#ed99d5',
    secondary: '#ad36a3',
    fontPrimary: 'black',
    fontSecondary: 'white',
  }

  return (
    <LHeader bg='#FFFFFF'>
      <Container>
        <Row pt='15px' pb='15px' alignitems='center'>
          <Box display='flex'>
            <NavLink to='/'>
              <Avatar size='70px' mr='20px'>
                <Image src='/logo.jpg' alt='logo' />
              </Avatar>
            </NavLink>

            <Menu display='flex'>
              {
                meenuItems.map((e) => (
                  <MenuItem key={e.link} texttransform='capitalize' fs='18px' color='black' ml='20px'>
                    <NavLink to={e.link}>{e.name}</NavLink> </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <ThemeProvider theme={defaultTheme}>
            <Button hover='reverse'>Read More</Button>
            <Button hover='reverseBorder'>Read More</Button>
            <Button hover='opacity'>Read More</Button>
            <Button>Read More</Button>
          </ThemeProvider>
        </Row>
      </Container>
    </LHeader>
  )
}


export default Header