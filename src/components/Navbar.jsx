import { links } from '../data'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'

const Navbar = () => {
  /* showing and hiding menu function */
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='nav'>
      {/* menu to hide and show */}
      <div className={`${showMenu ? 'nav_menu show-menu' : 'nav_menu'}`}>
        <ul className='nav_list'>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className='nav_item' key={index}>
                {/* color NavLink if selected, remove color if not */}
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav_link active-nav' : 'nav_link'
                  }
                  /* when selecting a link from menu, if I close the menu, then I can see the selected link content on display */
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className='nav_name'>{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      {/* btn toggle and animate the span lines to create an X */}
      <div
        className={`${showMenu ? 'nav_toggle animate-toggle' : 'nav_toggle'}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
export default Navbar
