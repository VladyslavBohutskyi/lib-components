import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink> </li>
        <li><NavLink to={'/components'}>Components</NavLink> </li>
        <li><NavLink to={'/blocks'}>Blocks</NavLink> </li>
        <li><NavLink to={'/sections'}>Sections</NavLink> </li>
      </ul>
    </div>
  )
}


export default Header