import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button, FloatingLabel } from "react-bootstrap";
import styles from "./search.module.css";
const Search = ({onSearch , onReset }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
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
          <Button onClick={() => onSearch(searchValue)}
            className={`position-absolute top-0 ${styles["search-button"]} border-0 bg-success text-darks`}
          >
            <span className="material-symbols-outlined">search</span>
          </Button>
          <Button onClick={() => onReset()}
            className={`position-absolute top-0 ${styles["close-button"]} border-0 bg-successs bg-transparent text-dark`}
          >
            <span className="material-symbols-outlined">close</span>
          </Button>
        </FloatingLabel>
      </Form>
    </div>
  );
};

export default Search;
