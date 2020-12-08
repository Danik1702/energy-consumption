import React from "react";
import { useHistory } from "react-router-dom";

import { Google, Facebook } from './components';
import backArrow from "../../assets/icons/back-arrow-red.png";

import styles from "./login.module.scss";

export const Login = () => {
  const history = useHistory();

  const handleGoogleLogin = () => {
    console.log('GOOGLE LOGIN');
  };

  const handleFacebookClick = () => {
    console.log('FACEBOOK LOGIN');
  };

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
              Якби не було електрики, ми б дивилися телевізор в темряві.
            </p>
            <cite>Муаммар Каддафи</cite>
          </blockquote>
        </div>
      </div>
      <div className={styles.rightSide}>
        <p className={styles.formText}>Здійсніть вхід у систему<br /> з допомогою:</p>
        <Google onClick={handleGoogleLogin} />
        <Facebook onClick={handleFacebookClick} />
      </div>
    </div>
  );
};
