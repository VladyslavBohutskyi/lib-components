import { NavLink } from "react-router-dom"
import { Menu, MenuItem } from "../../my-lib/blocks/menu"

const SidebarLayout = () => {
  return (
    <>
      <Menu display='block'>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/layout/box'}>Box</NavLink></MenuItem>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/layout/section'}>Sections</NavLink></MenuItem>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/layout/container'}>Container</NavLink></MenuItem>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/layout/row'}>Row</NavLink></MenuItem>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/layout/columns'}>Columns</NavLink></MenuItem>
      </Menu>
    </>
  )
}


export default SidebarLayout