import React from "react";
import styles from "./loading.module.css";
const Loading = () => {
  return (
    <div className={styles["loading-container"]}>
      <div className={styles["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
