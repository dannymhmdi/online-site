import React from "react";
import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";

const Header = ({}) => {
  return (
    <div style={{border:'1px solid'}}>
      <Nav>
        <NavBar>
            <NavItem><NavLink>Home</NavLink></NavItem>
            <NavItem><NavLink>Contact</NavLink></NavItem>
            <NavItem><NavLink></NavLink></NavItem>
        </NavBar>
      </Nav>
    </div>
  );
};

export default Header;
