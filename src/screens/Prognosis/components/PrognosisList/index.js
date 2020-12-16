import React, { Fragment } from "react";

import { PrognosisItem } from "../PrognosisItem";

import styles from "./prognosisList.module.scss";

export const PrognosisList = ({ items, isUser }) => {
  return (
    <Fragment>
      <h2 className={styles.header}>
        {isUser ? "Мої результати" : "Результати користувачів"}
      </h2>
      <div className={styles.container}>
        {items.map((elem, index) => (
          <PrognosisItem
            isUser={isUser}
            userName={elem.name}
            companyName={elem.companyName}
            prognosis={elem.prognosticationDayResult}
            key={index}
          />
        ))}
      </div>
    </Fragment>
  );
};
