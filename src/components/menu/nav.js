import React from "react";
import styles from "./nav.mdule.css"
const Nav = ({ children ,className}) => {
  return <nav className={className}>{children}</nav>;
};

export default Nav;
