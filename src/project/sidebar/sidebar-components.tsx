import { NavLink } from "react-router-dom"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"

const SidebarComponents = () => {
  return (
    <>
    <Menu display='block'>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/components/buttons'}>Buttons</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/components/form'}>Form</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/components/images'}>Images</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/components/list'}>List</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/components/typography'}>Typography</NavLink></MenuItem>
    </Menu>
    </>
  )
}


export default SidebarComponents