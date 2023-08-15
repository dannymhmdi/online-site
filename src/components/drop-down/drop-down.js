import React, { useContext } from "react";
import styles from "./drop-down.module.css";
import { MyContext } from "../../context/my-context-provider";
import { Link } from "react-router-dom";
const DropDown = () => {
  const { state } = useContext(MyContext);
  return (
    <>
  
      <Link
        className={`material-symbols-outlined  position-relative text-dark  ${styles["shopping-icon"]}`}
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        shopping_cart{" "}
        <span className={`badge bg-success rounded-5 ${styles["shop-badge"]}`}>
          {state.shopBasket.length === 0 ? "" : state.shopBasket.length}
        </span>
      </Link>
    </>
  );
};

export default DropDown;
