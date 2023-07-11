import React from 'react'
import styles from "./nav.mdule.css"
const NavBar = ({children , className}) => {
  return (
    <ul className={className}> 
        {children}
    </ul>
  )
}

export default NavBar