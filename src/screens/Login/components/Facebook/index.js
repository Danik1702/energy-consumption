import React from "react";

import styles from "./facebook.module.scss";

export const Facebook = ({ onClick }) => {
  return (
    <div className={styles.buttonWrapper} onClick={onClick}>
      <p className={styles.buttonText}>Facebook</p>
    </div>
  );
};
