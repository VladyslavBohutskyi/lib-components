import { NavLink } from 'react-router-dom'
import { Menu, MenuItem } from '../../my-lib/blocks/menu'

const SidebarLayout = () => {
  return (
    <>
      <Menu display='block'>
        <MenuItem mb='18px' ls='0.8px' fw='500' fs='18px' color='#655DBB' ><NavLink to={'/layout/box'}>Box</NavLink></MenuItem>
        <MenuItem mb='18px' ls='0.8px' fw='500' fs='18px' color='#655DBB' ><NavLink to={'/layout/section'}>Sections</NavLink></MenuItem>
        <MenuItem mb='18px' ls='0.8px' fw='500' fs='18px' color='#655DBB' ><NavLink to={'/layout/container'}>Container</NavLink></MenuItem>
        <MenuItem mb='18px' ls='0.8px' fw='500' fs='18px' color='#655DBB' ><NavLink to={'/layout/row'}>Row</NavLink></MenuItem>
        <MenuItem mb='18px' ls='0.8px' fw='500' fs='18px' color='#655DBB' ><NavLink to={'/layout/columns'}>Columns</NavLink></MenuItem>
      </Menu>
    </>
  )
}


export default SidebarLayout