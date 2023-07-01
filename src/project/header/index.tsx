import { NavLink } from "react-router-dom"
import style from './index.module.css'
import { Container, Row } from "../../my-lib/layout"
import { Button } from "../../my-lib/components/buttonst"
import { Avatar, Image } from "../../my-lib/components/image"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"

const Header = () => {
  return (
    <header className={style.header}>

      <Container>
        <Row py={25}>
          <Avatar>
            <Image src="/logo.jpg" alt="logo" />
          </Avatar>
          <Menu className={style.menu}>
            <MenuItem><NavLink to={'/'}>Home</NavLink> </MenuItem>
            <MenuItem><NavLink to={'/components'}>Components</NavLink> </MenuItem>
            <MenuItem><NavLink to={'/blocks'}>Blocks</NavLink> </MenuItem>
            <MenuItem><NavLink to={'/sections'}>Sections</NavLink> </MenuItem>
          </Menu>
          <Button>Read More</Button>
        </Row>
      </Container>

    </header>
  )
}


export default Header