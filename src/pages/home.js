import React from "react";
import BasePage from "../components/base-page/base-page";
import Carousel from "../components/carousel/carousel";


const Home = () => {
  return (
    <BasePage fluid={false} title={'صفحه اصلی'}>
      <div>
       <Carousel></Carousel>
      </div>
    </BasePage>
  );
};

export default Home;
