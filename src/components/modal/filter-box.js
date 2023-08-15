import React, { Fragment, useState } from "react";
import styles from "./modal-test.module.css";
import Accordion from "react-bootstrap/Accordion";
import { AccordionFilters } from "../accordion";
const FilterBox = ({ onClose , onFilter}) => {
  // const [closeFilter, setCloseFilter] =useState(true)
  return (
    <Fragment>
      <div className={`${styles["filter-box"]} col-12 px-3 col-lg-2`}>
        <div className=" d-flex justify-content-between border-bottom p-3 col-12">
          <h4>فیلتر</h4>
          <button
            className={`btn-close ${styles["filter-close-button"]}`}
            onClick={onClose}
          ></button>
        </div>
       <AccordionFilters onFilter={onFilter}/>
      </div>
    </Fragment>
  );
};

export default FilterBox;
