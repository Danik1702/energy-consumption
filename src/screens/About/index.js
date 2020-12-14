import React, { Fragment } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { GoBack, LogIn } from '../../components';

import styles from "./about.module.scss";

export const About = () => {
  const history = useHistory();
  const location = useLocation();
  const pathName = location.pathname.slice(1);

  return (
    <div className={styles.container}>
      <GoBack onClick={() => history.goBack()} isRed={true} />
      <LogIn />
      {pathName === "about-us" ? (
        <Fragment>
          <div className={styles.textContainer}>
            <h2 className={styles.textHeader}>Про сервіс</h2>
            <p className={styles.text}>
              Наш сервіс надає повністю безплатний функціонал для кожного
              користувача. Ви зможете визначити енергоспоживання будь якого
              приміщення
            </p>
          </div>

          <div className={styles.textContainer}>
            <h2 className={styles.textHeader}>Мета</h2>
            <p className={styles.text}>
              Надати користувачу 3D модель будь якого приміщення з детальною
              інформацією про енергоспоживання кожного кутка приміщення.
            </p>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={styles.textContainer}>
            <h2 className={styles.textHeader}>Енергія</h2>
            <p className={styles.text}>
              Поняття енергії пов'язане зі здатністю фізичного тіла або системи
              виконувати роботу. При цьому тіло або система частково втрачає
              енергію, витрачаючи її на зміни в навколишніх тілах.
            </p>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.textHeader}>Енергоспоживання</h2>
            <p className={styles.text}>
              Дбайливий господар, дбає про те, щоб вдома був створений комфорт
              за допомогою різноманітних побутових приладів, і щоб ці прилади
              працювали економно. Зменшене споживання електроенергії сприяє
              меншому навантаженню на загальні мережі і економії своїх коштів на
              сплату по рахунках за енергію. Це в свою чергу скорочує споживання
              палива на електростанціях для виробництва електроенергії і
              скорочує шкідливі викиди в атмосферу, щоб довкілля могло
              залишатися в більш придатному стані для існування людства.
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};
