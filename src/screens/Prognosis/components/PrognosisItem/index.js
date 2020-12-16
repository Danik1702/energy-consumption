import React, { useState, Fragment } from "react";

import styles from "./prognosisItem.module.scss";

export const PrognosisItem = ({ isUser, userName, companyName, prognosis }) => {
  const [isOpen, setIsOpen] = useState(false);

  const minPrognosis = Math.round(prognosis * 0.85);
  const maxPrognosis = Math.round(prognosis * 1.15);

  return (
    <div className={styles.container} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.textPairContainer}>
        <p className={styles.titleText}>Назва підприємства</p>
        <p className={styles.text}>{companyName}</p>
      </div>

      {!isUser && (
        <div className={styles.textPairContainer}>
          <p className={styles.titleText}>Ім'я користувача</p>
          <p className={styles.text}>{userName}</p>
        </div>
      )}

      {isOpen && (
        <Fragment>
          <div className={styles.prognosisPart}>
            <div className={styles.textPairContainer}>
              <p className={styles.titleText}>Мінімальний прогноз</p>
              <p className={styles.text}>{minPrognosis} кв/год</p>
            </div>

            <div className={styles.textPairContainer}>
              <p className={styles.titleText}>Максимальний прогноз</p>
              <p className={styles.text}>{maxPrognosis} кв/год</p>
            </div>

            <div className={styles.textPairContainer}>
              <p className={styles.titleText}>Оптимальний прогноз</p>
              <p className={styles.text}>{prognosis} кв/год</p>
            </div>
          </div>

          <p className={styles.graphButton}>Графік</p>
        </Fragment>
      )}
    </div>
  );
};
