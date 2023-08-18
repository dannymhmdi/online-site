import React from "react";
import styles from "./categori.module.css";
import cat1 from "../../assets/shoe/cat1.jpg";
import cat2 from "../../assets/shoe/cat2.jpg";
import cat3 from "../../assets/shoe/cat3.jpg";
import cat4 from "../../assets/shoe/cat4.jpg";
import cat5 from "../../assets/shoe/cat5.jpg";
import cat6 from "../../assets/shoe/cat6.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Categori = () => {
  return (
    <Row className="mx-0 mt-5">
      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2 `}>
      <Link><img src={cat1} className={`${styles["fluid-image"]} `} alt="" /></Link>
      </div>

      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2`}>
        <Link> <img src={cat2} className={`${styles["fluid-image"]}`} alt="" /></Link>
      </div>

      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2`}>
       <Link> <img src={cat3} className={`${styles["fluid-image"]}`} alt="" /></Link>
      </div>

      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2`}>
        <Link><img src={cat4} className={`${styles["fluid-image"]}`} alt="" /></Link>
      </div>

      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2`}>
        <Link><img src={cat5} className={`${styles["fluid-image"]}`} alt="" /></Link>
      </div>

      <div className={`${styles['image-box']} col-12 col-sm-4 col-lg-2`}>
        <Link><img src={cat6} className={`${styles["fluid-image"]}`} alt="" /></Link>
      </div>
    </Row>
  );
};

export default Categori;
