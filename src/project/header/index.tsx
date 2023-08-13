import { NavLink } from 'react-router-dom'
import { Box, Container, Row } from '../../my-lib/layout'
import { Button } from '../../my-lib/components/buttons'
import { Avatar, Image } from '../../my-lib/components/image'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'
import { LHeader } from '../../my-lib/sections/header'
import { defaultTheme, homeTheme } from '../../my-lib/theme/default-theme'
import { ThemeProvider } from 'styled-components'


const menuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {

  return (
    <LHeader minH='86px' >
        <Row  alignitems='center' p='20px 40px' sx='height: 100%;'>
            <Menu>
              {
                menuItems.map((e) => (
                  <MenuItem key={e.link} texttransform='capitalize' fs='18px' color='white' mr='20px'>
                  <NavLink to={e.link}>{e.name}</NavLink> </MenuItem>
                ))
              }
            </Menu>
            <Button>Read More</Button>
        </Row>
    </LHeader>
  )
}


export default Header