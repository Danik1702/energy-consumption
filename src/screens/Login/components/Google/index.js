import React from "react";

import styles from "./google.module.scss";

export const Google = ({ onClick }) => {
  return (
    <div className={styles.buttonWrapper} onClick={onClick}>
      <p className={styles.buttonText}>Google</p>
    </div>
  );
};
