import React from "react";
import { useHistory } from "react-router-dom";

import backArrow from "../../assets/icons/back-arrow-red.png";

import styles from "./login.module.scss";

export const Login = () => {
  const history = useHistory();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.leftSide}>
        <img
          src={backArrow}
          alt="back-arrow"
          className={styles.backIcon}
          onClick={() => history.goBack()}
        />
        <div className={styles.animatedBorderQuote}>
          <blockquote>
            <p>
              The world always seems brighter when you’ve just made something
              that wasn’t there before.
            </p>
            <cite>Neil Gaiman</cite>
          </blockquote>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
};
