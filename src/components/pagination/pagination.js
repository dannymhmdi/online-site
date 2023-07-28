import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import styles from "./pagination.module.css";
const PaginationBootstrap = ({ pageSize, totalItem }) => {
  const paginationButtons = [];
  const totalPages = Math.ceil(totalItem / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(totalPages);

  const onPageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  for (let page = 1; page <= totalPages; page++) {
    paginationButtons.push(
      <Pagination.Item
        onClick={() => onPageChangeHandler(page)}
        className={`me-1 ${styles['pagination-item']} `}
        active={currentPage === page}
      >
        {page}
      </Pagination.Item>
    );
  }

  const onFirstPageHandler = () => {
    setCurrentPage(1)
  } 

  const onPreviousPageHandler = () => {
    setCurrentPage(currentPage - 1)
  }

  const onNextPageHandler = () => {
    setCurrentPage(currentPage + 1 )
  }

  const onLastPageHandler =  () => {
   setCurrentPage(totalPages)
  }

  return (
    <Pagination className={`${styles["pagination"]}`}>
      <Pagination.First onClick={onFirstPageHandler} className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === 1} />
      <Pagination.Prev onClick={onPreviousPageHandler} className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === 1} />
      {/* <Pagination.Ellipsis /> */}
      {paginationButtons}
      {/* <Pagination.Item active>{12}</Pagination.Item> */}
      <Pagination.Next onClick={onNextPageHandler} className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={onLastPageHandler} className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationBootstrap;
