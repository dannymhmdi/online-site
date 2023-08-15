import React from "react";
import styles from "./search-oops.module.css";
import oopsImage from "../../assets/search-oops.jpg";
const SearchOops = () => {
  return (
    <div className={styles['error-container']}>
      <div className={styles['image-container']}>
        <img src={oopsImage} className={styles["fluid-image"]} alt="search-failed" />
      </div>
      <h3>محصول مورد نظر یافت نشد</h3>
    </div>
  );
};

export default SearchOops;
