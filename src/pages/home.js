import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import BasePage from "../components/base-page/base-page";
import Carousel from "../components/carousel/carousel";
import { ModalPart, ModalTest } from "../components/modal";
import { AccordionFilters } from "../components/accordion";
import Loading from "../components/Loading/loading";
import { MyContext } from "../context/my-context-provider";
const Home = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <Fragment>
      <BasePage fluid={false} title={"صفحه اصلی"}>
        <div>
          <Carousel style={{ border: "1px solid" }}></Carousel>
          {/* <ModalPart></ModalPart> */}
        </div>
      </BasePage>
      <BasePage
        fluid={true}
        style={{ border: "2px solids" }}
        title={"صفحه اصلی"}
      >
        <ModalTest style={{ border: "4px solid green" }}></ModalTest>

      </BasePage>
    </Fragment>
  );
};

export default Home;
