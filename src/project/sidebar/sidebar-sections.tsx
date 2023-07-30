import { NavLink } from "react-router-dom"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"

const SidebarSections = () => {
  return (
    <>
    <Menu display='block'>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/sections/header'}>Header</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/sections/footer'}>Footer</NavLink></MenuItem>
    </Menu>
    </>
  )
}


export default SidebarSections