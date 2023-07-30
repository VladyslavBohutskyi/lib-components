import { NavLink } from "react-router-dom"
import { Box, Container, Row } from "../../my-lib/layout"
import { Button } from "../../my-lib/components/buttons"
import { Avatar, Image } from "../../my-lib/components/image"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"
import { LHeader } from "../../my-lib/sections/header"


const meenuItems = [
  { link: '/layout', name: 'Layout' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {
  return (
    <LHeader bg={'#FFFFFF'}>
      <Container>
        <Row pt={'15px'} pb={'15px'} alignitems={'center'}>
          <Box display={'flex'}>
            <NavLink to={'/'}>
              <Avatar size={'70px'} mr={'20px'}>
                <Image src="/logo.jpg" alt="logo" />
              </Avatar>
            </NavLink>
            <Menu display={'flex'}>
              {
                meenuItems.map((e) => (
                  <MenuItem key={e.link} texttransform={'capitalize'} fs={'18px'} color={'black'} ml={'20px'}>
                    <NavLink to={e.link}>{e.name}</NavLink> </MenuItem>
                ))
              }
            </Menu>
          </Box>
          <Button hover="reverse">Read More</Button>
        </Row>
      </Container>
    </LHeader>
  )
}


export default Header