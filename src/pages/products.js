import React, { Fragment, useEffect, useState } from "react";
import BasePage from "../components/base-page/base-page";
import Carousel from "../components/carousel/carousel";
import { ModalTest } from "../components/modal";
import Loading from "../components/Loading/loading";
import axios from "axios";
import styles from "./products.module.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const shopBasket = [];
  const buyButtonHandler = (shoe) => {
    shopBasket.push(shoe)
    console.log('shoe=',shoe)
    console.log('shopBasket=',shopBasket)
  };
  useEffect(() => {
    if (isLoading) {
      axios.get("http://localhost:3001/products").then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      });
    }
  }, [isLoading]);
  // console.log(products)
  return (
    <Fragment>
      <BasePage fluid={false} title={"محصولات"}>
        <div>
          <Carousel style={{ border: "1px solid" }}></Carousel>
          {/* <ModalPart></ModalPart> */}
        </div>
      </BasePage>
      <BasePage fluid={true} style={{ border: "2px solids" }} title={"محصولات"}>
        <ModalTest style={{ border: "4px solid green" }}>
          <Row>
            {products.map((card) => {
              return (
                <Card key={card.id}
                  className="border-0 col-sm-4 col-md-3 px-1 py-1"
                  style={{ cursor: "pointer" }}
                >
                  <Card.Img variant="top" src={card.image} />
                  <Card.Body>
                    <Card.Title as={"h6"}>کتونی {card.model}</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <Button variant="success d-flex" onClick={() => buyButtonHandler(card)}>
                      اضافه کردن به سبد خرید
                      <span className="material-symbols-outlined p-1">
                        add_shopping_cart
                      </span>
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </Row>
        </ModalTest>
      </BasePage>
      <h3>image test</h3>
      {isLoading && <Loading />}
    </Fragment>
  );
};

export default Products;
