import React, { useContext, useState } from "react";
import { Button, FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import styles from "./search-bar.module.css";
import { MyContext } from "../../context/my-context-provider";
const SearchBar = ({ showsearchBar, onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const { state, dispatch } = useContext(MyContext);
  console.log('store=',state)
  return (
    <>
      <Form onSubmit={handleSearch}>
        <FloatingLabel
          controlId="floatingInput"
          label="search products"
          className={`mb-3 borders border-dangers position-absolutes ${
            styles["search-bar-box"]
          }  ${
            showsearchBar
              ? styles["show-search-bar"]
              : styles["hide-search-bar"]
          }`}
        >
          <Form.Control
            type="text"
            placeholder="name@example.com"
            className=" borders border-dangers"
            value={searchValue}
            onChange={handleSearch}
          />
          <Button
            className={`position-absolute top-0 ${styles["search-button"]} border-0 bg-success text-darks`}
          >
            <span className="material-symbols-outlined" onClick={() => dispatch({type:'search',payLoad:searchValue})}>search</span>
          </Button>
          <Button
            className={`position-absolute top-0 ${styles["close-button"]} border-0 bg-successs bg-transparent text-dark`}
          >
            <span className="material-symbols-outlined">close</span>
          </Button>
        </FloatingLabel>
      </Form>
    </>
  );
};

export default SearchBar;
