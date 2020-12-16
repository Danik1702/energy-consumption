import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";

import { GoBack, LogIn } from "../../components";
import { PrognosisList } from "./components";

import styles from "./prognosis.module.scss";

export const Prognosis = () => {
  const [allResults, setAllResults] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const db = firebase.database();
  const path = location.pathname.slice(1);
  const userName = localStorage.getItem("userName");

  useEffect(() => {
    const results = db.ref("prognosis");

    results.on("value", (elem) => {
      !!elem.val().length && setAllResults([...elem.val()]);
    });
  }, []);

  console.log("results", allResults);

  return (
    <div className={styles.container}>
      <GoBack onClick={() => history.goBack()} />
      <LogIn />
      <div className={styles.mainContent}>
        {path === "results" ? (
          <PrognosisList
            isUser={true}
            items={allResults.filter((elem) => elem.name === userName)}
          />
        ) : (
          <PrognosisList
            isUser={false}
            items={allResults.filter((elem) => elem.name !== userName)}
          />
        )}
      </div>
    </div>
  );
};
