import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyContext } from "../../context/my-context-provider";
const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);


  const hamMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
    console.log("hammenu clicked");
  };

  const { state } = useContext(MyContext);

  // useEffect(() => {
  //  setProducts(state.shopBasket)
  // //  console.log('products in header',products)

  // },[state])
console.log('ss',state)
  return (
    // <BasePage fluid={true} style={{padding:'0'}} >
    <header>
      <div className={styles["ham-menu-box"]}>
        <span
          className={`${styles["material-symbols-outlined"]} material-symbols-outlined`}
          onClick={hamMenuHandler}
        >
          menu
        </span>
      </div>
      <Nav className={isShowMenu ? styles["show-menu"] : styles["hide-menu"]}>
        <NavBar className={styles["nav-bar"]}>
          <NavItem>
            <NavLink to={"/"} className={styles["nav-link"]}>
              <span className="material-symbols-outlined">home</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/products"} className={styles["nav-link"]}>
              {" "}
              محصولات
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={"/contact-us"} className={styles["nav-link"]}>
              {" "}
              تماس با ما
            </NavLink>
          </NavItem>
        </NavBar>
      </Nav>
      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <span
          className={`material-symbols-outlined position-relative ${styles["shopping-icon"]}`}
        >
          shopping_cart{" "}
          <span
            className={`badge bg-success rounded-5 ${styles["shop-badge"]}`}
          >
            {state.shopBasket.length === 0 ? '' : state.shopBasket.length}
          </span>
        </span>
        <Link to={"/"}>
          <img
            src="https://www.banimode.com//themes/new/assets/images/banilogo.svg"
            alt=""
          />
        </Link>
      </div>
    </header>
    // </BasePage>
  );
};

export default Header;
