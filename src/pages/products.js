import React, { Fragment, useContext, useEffect, useState } from "react";
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
import { MyContext } from "../context/my-context-provider";
import { PaginationBootstrap } from "../components/pagination";


const Products = ({onPagination}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [totalItem , setTotalItem] = useState(null)
  const [currentPageProducts , setCurrentPageProducts] = useState(1)

  const onPaginateHandler = (pageNo) => {
   setCurrentPageProducts(pageNo)
   setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      axios.get(`http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`).then((res) => {
        setProducts(res.data);
        setIsLoading(false);
        setTotalItem(res.headers['x-total-count'])
        console.log(res)
      });
    }
  }, [isLoading,currentPageProducts]);

  const { state ,dispatch} = useContext(MyContext);

 console.log('currentPageProducts=',currentPageProducts)
  // console.log("state", state);


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
                <Card
                  key={card.id}
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
                    <Button
                      variant="success d-flex"
                      onClick={() =>
                        dispatch({ type: "add to cart", payLoad: card })
                      }
                    >
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
      <h3>{state.name}</h3>
      {isLoading && <Loading />}
      <PaginationBootstrap totalItem={totalItem} pageSize={6} onPaginate={onPaginateHandler}/>
    </Fragment>
  );
};

export default Products;
