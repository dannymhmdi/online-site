import React, { useContext } from "react";
import styles from "./accordion.module.css";
import "../../libraries-to-use/react-bootstrap";
// import Mui from "@mui/material"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandLessTwoTone } from "@mui/icons-material";
import { MyContext } from "../../context/my-context-provider";
const AccordionFilters = ({ onFilter }) => {
  const {state , dispatch} = useContext(MyContext)
 console.log('state accardion=',state)
  return (
    <div className={styles["accordion-container"]}>
      <Accordion style={{ marginBottom: "0" }}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandLessTwoTone />}
        >
          <Typography>برند</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="d-flex justify-content-between borders border-infos mb-3">
              <label htmlFor="nike">Nike</label>
              <input type="checkbox" id="nike" 
              onChange={onFilter} 
              // onChange={(e) => dispatch({type:'nike',payLoad:e.target.id})}
              />
            </div>

            <div className="d-flex justify-content-between borders border-infos mb-3">
              <label htmlFor="adidas">Adidas</label>
              <input type="checkbox" id="adidas"
               onChange={onFilter} 
               />
            </div>
            <div className="d-flex justify-content-between borders border-infos mb-3">
              <label htmlFor="Reebok">Reebok</label>
              <input type="checkbox" id="reebok"
               onChange={onFilter} 
               />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: "0", marginTop: "0" }}>
        <AccordionSummary
          id="pane2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandLessTwoTone />}
        >
          <Typography>مدل</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, omnis perspiciatis aliquam suscipit recusandae, nisi
            consectetur libero, facere voluptatum quos necessitatibus nulla
            deleniti ex repellat! Dolorum tempora fugit doloribus facilis.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginBottom: "0", marginTop: "0" }}>
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandLessTwoTone />}
        >
          <Typography>سایز</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, omnis perspiciatis aliquam suscipit recusandae, nisi
            consectetur libero, facere voluptatum quos necessitatibus nulla
            deleniti ex repellat! Dolorum tempora fugit doloribus facilis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionFilters;
