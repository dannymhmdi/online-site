import React from 'react'

const NavBar = ({children , className}) => {
  return (
    <ul className={className}> 
        {children}
    </ul>
  )
}

export default NavBar