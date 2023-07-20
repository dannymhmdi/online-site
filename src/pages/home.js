import React, { Fragment, useState } from "react";
import BasePage from "../components/base-page/base-page";
import Carousel from "../components/carousel/carousel";
import { ModalPart, ModalTest } from "../components/modal";
import {  AccordionFilters } from "../components/accordion";
import Loading from "../components/Loading/loading";
const Home = () => {

  return (
    <Fragment>
      <BasePage fluid={false} title={"صفحه اصلی"}>
        <div>
          <Carousel style={{ border: "1px solid" }}></Carousel>
          {/* <ModalPart></ModalPart> */}
        </div>
      </BasePage>
      <BasePage fluid={true} style={{ border:'2px solids'}} title={'صفحه اصلی'}>
        <ModalTest style={{border:'4px solid green'}}></ModalTest>
      </BasePage>
      <h3>image test</h3>
    </Fragment>
  );
};

export default Home;
