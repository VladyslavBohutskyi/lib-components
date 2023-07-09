import { NavLink } from "react-router-dom"
import { Box, Container, Row } from "../../my-lib/layout"
import { Button } from "../../my-lib/components/buttons"
import { Avatar, Image } from "../../my-lib/components/image"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"
import { LHeader } from "../../my-lib/sections/header"


const meenuItems = [
  { link: '/', name: 'Home' },
  { link: '/components', name: 'Components' },
  { link: '/blocks', name: 'Blocks' },
  { link: '/sections', name: 'Sections' },
]

const Header = () => {
  return (
    <LHeader bg={'#F6EFE8'}>
      <Container>
        <Row pt={'15px'} pb={'15px'} alignItem={'center'}> 
          <Box display={'flex'}>
            <Avatar shadow size={'70px'} mr={'20px'}>
              <Image src="/logo.jpg" alt="logo" />
            </Avatar>
            <Menu display={'flex'}>
              {
                meenuItems.map((e) => (
                  <MenuItem key={e.link} textTransform={'uppercase'} fs={'18px'} color={'black'} ml={'20px'}>
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