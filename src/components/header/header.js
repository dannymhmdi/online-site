import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyContext } from "../../context/my-context-provider";
import SearchBar from "../search-bar/search-bar";
import { Row } from "react-bootstrap";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [showsearchBar, setShowSearchBar] = useState(false);
  const hamMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
    setShowSearchBar(false);
    console.log("hammenu clicked");
  };

  const { state } = useContext(MyContext);
  console.log("ss", state);

  const searchBarHandler = () => {
    setShowSearchBar(!showsearchBar);
    setIsShowMenu(false);
    console.log(showsearchBar);
  };

  return (
    // <BasePage fluid={true} style={{padding:'0'}} >
    <header>
      <div
        className={`${styles["search-nav-container"]}`}
        style={{ padding: "5px 0" }}
      >
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
        <div>
          <span
            className={`material-symbols-outlined py-2`}
            onClick={searchBarHandler}
            style={{ cursor: "pointer" }}
          >
            search
          </span>
        </div>
        <SearchBar showsearchBar={showsearchBar} />
      </div>

      <div
        style={{
          padding: "15px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          border: "1px solid red",
        }}
      >
        {/* <DropDown/> */}
        <Link
          to={"/shop-basket"}
          className={`material-symbols-outlined position-relative text-dark ${styles["shopping-icon"]}`}
        >
          shopping_cart{" "}
          <span
            className={`badge bg-success rounded-5 ${styles["shop-badge"]}`}
          >
            {state.shopBasket.length === 0 ? "" : state.shopBasket.length}
          </span>
        </Link>
        <div className={`${state.shopBasket.length === 0 ? styles['shop-container-empty'] : ''} ${styles["shop-container"]}`}>
          {state.shopBasket.map((shopItem) => {
            return (
              <Fragment>
                <div className="text-secondary fs-6 mb-2">
                  {state.shopBasket.length} کالا
                </div>
                <Row
                  className={`${styles["shop-item"]} border-dangers borders mx-0`}
                >
                  <div className="col-5 px-0  border-dangers borders">
                    <img
                      src={shopItem.image}
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-3"
                      alt=""
                    />
                  </div>
                  <div className="col-7 d-flex flex-column px-2">
                    {" "}
                    <div className="d-flex">
                      <span
                        class="material-symbols-outlined text-success"
                        style={{ paddingLeft: "10px" }}
                      >
                        event_available
                      </span>
                      <h3 className="fs-6">{shopItem.stock}</h3>
                    </div>
                    <div className="d-flex">
                      <span class="material-symbols-outlined" style={{ paddingLeft: "10px",color:'purple' }}>
                        local_shipping
                      </span>
                      <h3 className="fs-6">ارسال سریع</h3>
                    </div>
                    <div className="d-flex">
                    {/* <FontAwesomeIcon icon="fa-solid fa-medal" beat /> */}
                      <h3 className="fs-6">ارسال سریع</h3>
                    </div>
                  </div>
                </Row>
               </Fragment>
            );
          })}
        </div>
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
