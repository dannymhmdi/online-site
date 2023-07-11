import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const hamMenuHandler = () => {
    setIsShowMenu(!isShowMenu)
    console.log('hammenu clicked')
  }

  return (
    // <BasePage fluid={true} style={{padding:'0'}} >
    <header>
      <div className={styles['ham-menu-box']}>
        <span
          className={`${styles["material-symbols-outlined"]} material-symbols-outlined`}
          onClick={hamMenuHandler}
        >
          menu
        </span>
      </div>
      <Nav className={isShowMenu ? styles['show-menu'] : styles['hide-menu']}>
        <NavBar className={styles["nav-bar"]}>
          <NavItem>
            <NavLink to={"/"}> خانه</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/دانلود-فیلم"}> دانلود فیلم</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/تماس-با-ما"}> تماس با ما</NavLink>
          </NavItem>
        </NavBar>
      </Nav>
      <div style={{ padding: "10px" }}>
        <img
          src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
          alt=""
        />
      </div>
    </header>
    // </BasePage>
  );
};

export default Header;
