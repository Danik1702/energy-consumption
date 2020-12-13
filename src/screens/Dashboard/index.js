import React from "react";
import { useHistory } from "react-router-dom";

import { MenuItem } from "./components";
import { LogIn, GoBack } from "../../components";
import { ROUTES } from "../../assets";

import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  const history = useHistory();

  return (
    <div className={styles.container}>
      <GoBack onClick={() => history.push(ROUTES.landing)} />
      <LogIn />
      <div className={styles.menu}>
        <MenuItem
          background="#000000"
          borderRadius="20px 0 0 0"
          boxShadow="0 0 20px 1px #4A428E"
          text="Про сервіс"
          onClick={() => history.push(ROUTES.aboutUs)}
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          boxShadow="0 0 20px 1px #9BF9FC"
          text="Про енергію"
          onClick={() => history.push(ROUTES.aboutEnergy)}
        />
        <MenuItem
          background="#000000"
          borderRadius="0 20px 0 0"
          boxShadow="0 0 20px 1px #C76AC2"
          text="Розпочати прогнозу-вання"
          onClick={() => history.push(ROUTES.prognostication)}
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          itemOpacity={0.1}
          defaultCursor={true}
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          itemOpacity={0.1}
          defaultCursor={true}
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          itemOpacity={0.1}
          defaultCursor={true}
        />
        <MenuItem
          background="#000000"
          borderRadius="0 0 0 20px"
          boxShadow="0 0 20px 1px #4A428E"
          text="Результати користувачів"
          onClick={() => history.push(ROUTES.usersResults)}
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          boxShadow="0 0 20px 1px #9BF9FC"
          text="Мої прогнози"
          onClick={() => history.push(ROUTES.results)}
        />
        <MenuItem
          background="#000000"
          borderRadius="0 0 20px 0"
          boxShadow="0 0 20px 1px #C76AC2"
          text="Графік енергоспожи-вання"
          onClick={() => history.push(ROUTES.prognosticationGraph)}
        />
      </div>
    </div>
  );
};
