import { NavLink } from 'react-router-dom'
import { List, ListItem } from '../../my-lib/components/list'
import { Theme } from '../store/theme'
import { LuActivity } from "react-icons/lu";
const menuItems = [
  { link: '/about', name: 'About' },
  { link: '/contact', name: 'Contact' },
  { link: '/customizer', name: 'Customizer' },
]

const SidebarHome = () => {
  return (
    <>
      <List color='white' pl='0px'>
        {
          menuItems.map((item) => (
            <ListItem key={item.link}
              br='5px' styledlink='true' beforeStyle='circle' beforeLeft='15px' beforeColor='white'
              beforeSize='10px' mt='1px' p='23px 40px' ls='1px' bg={Theme.currentTheme.bgAccent}>
              <NavLink to={item.link}><LuActivity /> {item.name}</NavLink></ListItem>
          ))
        }
      </List>
    </>
  )
}


export default SidebarHome