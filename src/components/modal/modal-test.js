import React, { Fragment, useEffect, useState } from "react";
import styles from "./modal-test.module.css";
import Accordion from "react-bootstrap/Accordion";
import { Row } from "react-bootstrap";
import FilterBox from "./filter-box";
import { useMediaQuery } from "@mui/material";
import axios from "axios";
const ModalTest = ({children , onFilter}) => {
  const [isShowfilter, setIsShowfilter] = useState(false);
  const matches = useMediaQuery("(min-width:992px)");
  const filterButtonHandler = () => {
    setIsShowfilter(true);
  };

  const onCloseHandler = () => {
    setIsShowfilter(false);
  };

  useEffect(() => {
    if (matches) {
      setIsShowfilter(false);
    }
  }, [matches]);


  return (
    <Fragment>
      <div className={`mt-5 mb-2 ${styles['filter-btn-container']}`}>
        <button
          className={`d-flex btn btn-success  ${styles["filter-btn"]}`}
          onClick={filterButtonHandler}
        >
          فیلتر
          <span className="material-symbols-outlined p-1">tune</span>
        </button>
      </div>
      <Row className="mt-lg-5">
        {isShowfilter && <FilterBox onClose={onCloseHandler} onFilter={onFilter}/>}

        {matches && <FilterBox   onFilter={onFilter}/>}
        <div className="product-items border border-1 border-danger col-12 col-lg-10 px-0s">
         {children}
        </div>
      </Row>
    </Fragment>
  );
};

export default ModalTest;
