import React from "react";
import { useHistory } from "react-router-dom";

import { ROUTES } from "../../assets";

import styles from "./logIn.module.scss";

export const LogIn = React.memo(() => {
  const history = useHistory();

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const userPhoto = localStorage.getItem("userPhoto");

  return (
    <div className={styles.wrapper}>
      {token ? (
        <div className={styles.userContainer}>
          <img src={userPhoto} alt="user" className={styles.userPhoto} />
          <p className={styles.userNameText}>{userName}</p>
        </div>
      ) : (
        <p
          className={styles.logInText}
          onClick={() => history.push(ROUTES.login)}
        >
          Вхід
        </p>
      )}
    </div>
  );
});
