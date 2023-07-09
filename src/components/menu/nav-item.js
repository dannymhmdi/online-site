import React from 'react'

const NavItem = ({children , className}) => {
  return (
    <li className={className}>{children}</li>
  )
}

export default NavItem