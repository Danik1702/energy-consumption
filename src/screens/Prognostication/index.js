import React from "react";
import { useHistory } from "react-router-dom";

import { GoBack, LogIn } from "../../components";
import { Form } from './components';

import styles from "./prognostication.module.scss";

export const Prognostication = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <GoBack onClick={() => history.goBack()} />
      <LogIn />
      <Form />
    </div>
  );
};
