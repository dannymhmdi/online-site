import styles from "./header.module.css";
import { Nav, NavBar, NavItem } from "../menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { MyContext } from "../../context/my-context-provider";
import SearchBar from "../search-bar/search-bar";
import { Button, ButtonGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
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

  const totalPriceHandler = () => {
    const totals = state.totalPrice.map((value) => {
      return Number(value.slice(0, value.length - 1)) * 50000;
    });

    let sum = null;
    for (const total of totals) {
      sum += total;
    }

    if (sum > 0) {
      let sumToString = sum.toString();
      return sumToString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  const changePriceHandler = (x) => {
    const priceToInteger = Number(x.price.slice(0, x.price.length - 1)) * 50000;
    const priceToString = priceToInteger.toString();
    // console.log('changePriceHandler',priceToInteger)
    return priceToString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    // <BasePage fluid={true} style={{padding:'0'}} >
    <header>
      <div className={`${styles["header-sticky-banner"]} col-12`}>
        <a href=""></a>
      </div>
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
        <div
          className={`${
            state.shopBasket.length === 0 ? styles["shop-container-empty"] : ""
          } ${styles["shop-container"]} ${
            state.shopBasket.length > 3 ? styles["shop-container-overflow"] : ""
          } col-10 col-md-7`}
        >
          <div className="text-secondary fs-6 mb-2">
            {state.shopBasket.length} کالا
          </div>
          {state.shopBasket.map((shopItem) => {
            return (
              <Fragment key={shopItem.id}>
                <Row
                  className={`${styles["shop-item"]} border-dangers borders mx-0 mb-2`}
                >
                  <div className="col-5 px-0  border-dangers borders">
                    <img
                      src={shopItem.image}
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-3"
                      alt=""
                    />
                  </div>
                  <div className="col-7 d-flex flex-column px-2 justify-content-evenly">
                    {" "}
                    <div className="d-flex">
                      <span
                        className="material-symbols-outlined text-success"
                        style={{ marginLeft:'13px' }}
                      >
                        event_available
                      </span>
                      <h3
                        className={`${styles["fs-sm-6"]}`}
                        style={{ fontSize: "12px" }}
                      >
                        {shopItem.stock}
                      </h3>
                    </div>
                    <div className="d-flex">
                    <FontAwesomeIcon icon={faTruckFast} style={{marginLeft:'13px',color:'purple'}} bounce />
                      <h3
                        className={`${styles["fs-sm-6"]}`}
                        style={{ fontSize: "12px" }}
                      >
                        ارسال سریع
                      </h3>
                    </div>
                    <div className="d-flex">
                      <FontAwesomeIcon
                        icon={faCertificate}
                        beat
                        size="lg"
                        style={{ marginLeft:'13px' , color: "gold" }}
                      />
                      <h3
                        className={`${styles["fs-sm-6"]}`}
                        style={{ fontSize: "12px" }}
                      >
                        ضمانت اصالت کالا
                      </h3>
                    </div>
                    <div className="d-flex borders border-dangers">
                      <FontAwesomeIcon
                        icon={faMoneyCheckDollar}
                        flip
                        size="lg"
                        style={{ color: "green",marginLeft:'13px' }}
                      />
                      <h3
                        className={`${styles["fs-sm-6"]}`}
                        style={{ fontSize: "12px" }}
                      >
                        {changePriceHandler(shopItem)} تومان
                      </h3>
                    </div>
                  </div>
                </Row>
              </Fragment>
            );
          })}
          <div
            className={`${styles["fs-sm-6"]} fw-bold borders border-dangers d-flex flex-wrap justify-content-between px-2`}
            style={{ fontSize: "12px" }}
          >
            <span> مبلغ کل سفارش :</span>
            <span>{totalPriceHandler()}تومان</span>
            <div className="w-100 py-2">
              <Button variant="success" className="w-100">
                نهایی کردن سفارش
              </Button>
            </div>
          </div>
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
