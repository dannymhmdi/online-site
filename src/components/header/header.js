import React from "react";
import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";
import logo from "../../assets/digi_dark_logo.webp";
import BasePage from "../base-page/base-page";
const Header = () => {
  return (
    <BasePage fluid={true} style={{padding:'0'}} >
      <header>
        <Nav>
          <NavBar className={styles["nav-bar"]}>
            <NavItem>
              <NavLink to={'/'}> خانه</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/دانلود-فیلم'}> دانلود فیلم</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/تماس-با-ما'}> تماس با ما</NavLink>
            </NavItem>
          </NavBar>
        </Nav>
        <div>
          <img src={logo} alt="" />
        </div>
      </header>
    </BasePage>
  );
};

export default Header;
