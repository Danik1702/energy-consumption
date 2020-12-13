import React from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../../../assets";

import styles from "./startButton.module.scss";

export const StartButton = () => {
  const history = useHistory();

  return (
    <div
      className={styles.buttonContainer}
      onClick={() => history.push(ROUTES.dashboard)}
    >
      <p className={styles.buttonText}>Розпочати прогнозування</p>
    </div>
  );
};
