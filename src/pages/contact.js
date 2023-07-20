import React from "react";
import BasePage from "../components/base-page/base-page";
import MUiCard from "../components/card/mui-card";
import { BootstrapCard } from "../components/card";

const Contact = () => {
  return (
    <BasePage fluid={false} title={'تماس با ما'}>
      <div>
        <h3>Contact</h3>
        {/* <MUiCard/> */}
        <BootstrapCard/>
      </div> 
    </BasePage>
  );
};

export default Contact;
