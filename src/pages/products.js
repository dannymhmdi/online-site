import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
// import Search from "../components/search/search";
import { Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import SearchOops from "../components/search-oops/search-oops";
import Categori from "../components/categori-card/categori";
import { MySwiper } from "../components/swiper-slide";
const Products = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalItem, setTotalItem] = useState(null);
  const [currentPageProducts, setCurrentPageProducts] = useState(1);
  const [test, setTest] = useState(300);
  const [searchValue, setSearchValue] = useState("");
  const [target, setTarget] = useState([]);
  const [urlFilter, setUrlFilter] = useState("?brand=");
  const [checked, setChecked] = useState(false);
  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchValue(text.trim());
  };

  const onPaginateHandler = (pageNo) => {
    setCurrentPageProducts(pageNo);
    setIsLoading(true);
  };

  const testFunc = (para) => {
    setTest(para);
  };

  useEffect(() => {
    if (isLoading) {
      axios
        .get(
          `http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`
        )
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
          setTotalItem(res.headers["x-total-count"]);
          console.log(res);
        });
    }
  }, [isLoading, currentPageProducts]);

  const searchButtonHandler = () => {
    setSearchLoading(true);
    axios
      .get(`http://localhost:3001/products?q=${searchValue}`)
      .then((response) => {
        setProducts(response.data);
        console.log("first", response.data);
        setSearchLoading(false);
        console.log("prod =", response);
      });
  };

  const { state, dispatch } = useContext(MyContext);

  const resetButtonHandler = () => {
    axios
      .get(
        `http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`
      )
      .then((res) => {
        setProducts(res.data);
        setSearchValue("");
      });
  };

  useEffect(() => {
    if (searchValue.length === 0) {
      axios
        .get(
          `http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`
        )
        .then((res) => setProducts(res.data));
    }
  }, [searchValue]);

  // let urlFilter = `?brand=`;

  const inputHandler = (e) => {
    console.log("checkbox toggled");
    console.log("target=", e.target.checked);
    setUrlFilter(urlFilter + `${e.target.id}&brand=`);
    setChecked(e.target.checked);

    if (e.target.checked === false) {
      setUrlFilter(urlFilter.replace(`${e.target.id}&brand=`, ""));
    }
    // console.log('e.targert=',e.target.checked)

    // e.target.checked
    //   ? (urlFilter += `${e.target.id}&brand=`)
    //   : (urlFilter = `?brand=`);
    // console.log('in',urlFilter)
    // if (e.target.checked) {
    //   console.log('in',urlFilter)
    //   axios
    //     .get(`http://localhost:3001/products${urlFilter}`)
    //     .then((res) => setProducts(res.data));
    // }
    // else {
    //   axios
    //     .get(
    //       `http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`
    //     )
    //     .then((res) => {
    //       setProducts(res.data);
    //     });
    // }

    // axios.get(`http://localhost:3001/products`).then((res) =>
    //   setProducts(
    //     res.data.filter((value) => {
    //       return value.brand === e.target.id;
    //     })
    //   )
    // );
  };

  useEffect(() => {
    console.log("out", urlFilter);
  }, [urlFilter]);

  useEffect(() => {
    if (checked) {
      axios
        .get(`http://localhost:3001/products${urlFilter}`)
        .then((res) => setProducts(res.data));
    }

    if (urlFilter === "?brand=") {
      axios
        .get(
          `http://localhost:3001/products?_page=${currentPageProducts}&_limit=8`
        )
        .then((res) => {
          setProducts(res.data);
        });

    } 
    else {
      axios
        .get(
          `http://localhost:3001/products${urlFilter}`
        )
        .then((res) => {
          setProducts(res.data);
        });
    }
  }, [checked, urlFilter]);

  const changePriceHandler = (x) => {
    const priceToInteger = Number(x.price.slice(0, x.price.length - 1)) * 50000;
    const priceToString = priceToInteger.toString();
    // console.log('changePriceHandler',priceToInteger)
    return priceToString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  console.log("currentPageProducts=", currentPageProducts);

  return (
    <Fragment>
      <BasePage fluid={false} title={"محصولات"}>
        <div>
          <Carousel style={{ border: "1px solid" }}></Carousel>
          {/* <ModalPart></ModalPart> */}
          <MySwiper />
        </div>
      </BasePage>
      <BasePage fluid={true} style={{ border: "2px solids" }} title={"محصولات"}>
        <Categori />
        <ModalTest
          style={{ border: "4px solid green" }}
          onFilter={inputHandler}
        >
          {/* <Search
            onSearch={searchButtonHandler}
            onReset={resetButtonHandler}
          /> */}

          <div className="search-container">
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="جستجو محصولات"
                className={`my-2 borders border-dangers ${styles["search-container"]} `}
              >
                <Form.Control
                  type="text"
                  placeholder="name@example.com"
                  className=" borders border-dangers"
                  value={searchValue}
                  onChange={handleSearch}
                />
                <Button
                  type="button"
                  onClick={searchButtonHandler}
                  className={`position-absolute top-0 ${styles["search-button"]} border-0 bg-success text-darks`}
                  disabled={searchValue.length === 0}
                >
                  <span className="material-symbols-outlined">search</span>
                </Button>
                <Button
                  type="button"
                  onClick={resetButtonHandler}
                  className={`position-absolute top-0 ${styles["close-button"]} border-0 bg-successs bg-transparent text-dark`}
                >
                  <span className="material-symbols-outlined">close</span>
                </Button>
              </FloatingLabel>
            </Form>
          </div>

          <Row className="px-2">
            {products.length === 0 ? (
              <SearchOops />
            ) : (
              products.map((card) => {
                return (
                  <Card
                    key={card.id}
                    className={`border-0 col-sm-4 col-md-3 px-1 py-1 ${styles["card"]}`}
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
                      <Card.Text className="borders border-2s border-dangers">
                        {changePriceHandler(card)}تومان
                      </Card.Text>
                      <Button
                        className={styles["shop-btn"]}
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
              })
            )}
          </Row>
        </ModalTest>
      </BasePage>
      <h3>{state.name}</h3>
      {isLoading && <Loading />}
      {searchLoading && <Loading />}
      <PaginationBootstrap
        totalItem={totalItem}
        pageSize={8}
        onPaginate={onPaginateHandler}
        onClick={testFunc}
      />
      <br />
      <h3>{test}</h3>
    </Fragment>
  );
};

export default Products;
