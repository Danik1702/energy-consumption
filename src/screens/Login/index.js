import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";

import { Google, Facebook } from "./components";
import { GoBack } from '../../components';
import { ROUTES } from "../../assets";
import backArrow from "../../assets/icons/back-arrow-red.png";

import styles from "./login.module.scss";

export const Login = () => {
  const history = useHistory();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((resp) => {
        localStorage.setItem("token", resp.credential.accessToken);
        localStorage.setItem(
          "userName",
          resp.additionalUserInfo.profile.given_name
        );
        localStorage.setItem(
          "userPhoto",
          resp.additionalUserInfo.profile.picture
        );

        history.push(ROUTES.dashboard);
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookClick = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((resp) => {
        localStorage.setItem("token", resp.credential.accessToken);
        localStorage.setItem(
          "userName",
          resp.additionalUserInfo.profile.first_name
        );
        localStorage.setItem(
          "userPhoto",
          resp.additionalUserInfo.profile.picture.data.url
        );
        history.push(ROUTES.dashboard);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.leftSide}>
        <GoBack 
          isRed={true}
          onClick={() => history.goBack()}
        />
        <div className={styles.animatedBorderQuote}>
          <blockquote>
            <p>Якби не було електрики, ми б дивилися телевізор в темряві.</p>
            <cite>Муаммар Каддафи</cite>
          </blockquote>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.formText}>
          Здійсніть вхід у систему
          <br /> з допомогою:
        </p>
        <Google onClick={handleGoogleLogin} />
        <Facebook onClick={handleFacebookClick} />
      </div>
    </div>
  );
};
