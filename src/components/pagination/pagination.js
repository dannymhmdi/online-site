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

  return (
    <Pagination className={`${styles["pagination"]}`}>
      <Pagination.First className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === 1} />
      <Pagination.Prev className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === 1} />
      {/* <Pagination.Ellipsis /> */}
      {paginationButtons}
      {/* <Pagination.Item active>{12}</Pagination.Item> */}
      <Pagination.Next className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === totalPages} />
      <Pagination.Last className={`me-1  ${styles['pagination-item']}`} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationBootstrap;
