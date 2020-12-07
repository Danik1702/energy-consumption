import React from "react";

import styles from "./startButton.module.scss";

export const StartButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <p className={styles.buttonText}>Розпочати прогнозування</p>
    </div>
  );
};
