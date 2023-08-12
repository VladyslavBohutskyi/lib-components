import { NavLink } from 'react-router-dom'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'

const SidebarHome = () => {
  return (
    <>
      <Menu display='block'>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/about'}>About</NavLink></MenuItem>
        <MenuItem mt='10px' ls='1px' ml='10px'><NavLink to={'/Contact'}>Contact</NavLink></MenuItem>
      </Menu>
    </>
  )
}


export default SidebarHome