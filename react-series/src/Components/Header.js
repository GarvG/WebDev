import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <header>
        <a href="https://github.com">LOGO</a>
        <nav>
            <ul>
                <li>
                <NavLink to="/">Home</NavLink>
                    
                </li>
                
                <li>
                <NavLink to="/about">About</NavLink>
                    
                </li>
                
                <li>
                <NavLink to="/contact">Contact</NavLink>
                    
                </li>
            </ul>
        </nav>

     </header>
    </div>
  )
}

export default Header
