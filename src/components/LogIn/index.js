import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { ROUTES } from "../../assets";
import { LogoutModal } from "../../modals";

import styles from "./logIn.module.scss";

export const LogIn = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const userPhoto = localStorage.getItem("userPhoto");

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const onLogoutClick = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear();
        setIsOpen(false);
        history.push(ROUTES.landing);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.wrapper}>
      {token ? (
        <Fragment>
          <div className={styles.userContainer} onClick={handleOpenModal}>
            <img src={userPhoto} alt="user" className={styles.userPhoto} />
            <p className={styles.userNameText}>{userName}</p>
          </div>
          <LogoutModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            onLogoutClick={onLogoutClick}
          />
        </Fragment>
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
