import { NavLink } from 'react-router-dom'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'

const SidebarBlocks = () => {
  return (
    <>
    <Menu display='block'>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/blocks/card'}>Cards</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/blocks/menu'}>Menu</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/blocks/pop-up'}>Pop Up</NavLink></MenuItem>
      <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/blocks/tabs'}>Tabs</NavLink></MenuItem>
    </Menu>
    </>
  )
}


export default SidebarBlocks