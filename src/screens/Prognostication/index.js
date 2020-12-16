import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GoBack, LogIn } from "../../components";
import { Form } from "./components";
import { PROGNOSTICATION_DATA, ROUTES } from "../../assets";
import firebase from "firebase";

import styles from "./prognostication.module.scss";

export const Prognostication = () => {
  const [prognosisCount, setPrognosisCount] = useState(0);

  const history = useHistory();
  const db = firebase.database();

  useEffect(() => {
    const count = db.ref("prognosis");

    count.on("value", (elem) => {
      elem.val().length && setPrognosisCount(elem.val().length);
    });
  }, []);

  const onSubmit = (data) => {
    const aTypeMachinesValue =
      Number(data.aType) * PROGNOSTICATION_DATA.oneATypeMachine;
    const bTypeMachinesValue =
      Number(data.bType) * PROGNOSTICATION_DATA.oneBTypeMachine;
    let lampsValue;
    const userName = localStorage.getItem("userName");

    if (data.type === "Технологічне") {
      lampsValue = Number(data.departmentCount) * 15;
    } else if (data.type === "кон'юктурне") {
      lampsValue = Number(data.departmentCount) * 13;
    } else {
      lampsValue = Number(data.departmentCount) * 10;
    }

    const prognosticationDayResult = Math.round(
      aTypeMachinesValue + bTypeMachinesValue + lampsValue
    );

    db.ref("prognosis/" + prognosisCount).set({
      name: userName,
      prognosticationDayResult,
      companyName: data.name,
    });

    history.push(ROUTES.dashboard);
  };

  return (
    <div className={styles.container}>
      <GoBack onClick={() => history.goBack()} />
      <LogIn />
      <Form onSubmit={onSubmit} />
    </div>
  );
};
