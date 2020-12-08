import React from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../assets";

import styles from "./logIn.module.scss";

export const LogIn = () => {
  const history = useHistory();

  return (
    <p className={styles.logInText} onClick={() => history.push(ROUTES.login)}>
      Вхід
    </p>
  );
};
