import React from "react";

import backArrowRed from "../../assets/icons/back-arrow-red.png";
import backArrowPurple from "../../assets/icons/back-arrow-purple.png";

import styles from "./goBack.module.scss";

export const GoBack = ({ onClick, isRed }) => {
  return (
    <img
      src={isRed ? backArrowRed : backArrowPurple}
      alt="back-arrow"
      className={styles.backIcon}
      onClick={onClick}
    />
  );
};
