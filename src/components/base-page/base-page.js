import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet-async";
const BasePage = ({ children, fluid, style, title }) => {
  return (
    <div className={fluid ? "container-fluid" : "container"} style={style}>
      <Helmet>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      {children}
    </div>
  );
};

export default BasePage;
