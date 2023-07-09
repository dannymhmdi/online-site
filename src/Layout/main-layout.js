import React, { Children, Fragment } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const MainLayout = ({children}) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer/>
    </Fragment>
  );
};

export default MainLayout;
