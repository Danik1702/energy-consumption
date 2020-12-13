import React from "react";
import { useHistory } from 'react-router-dom';

import { MenuItem } from "./components";
import { LogIn, GoBack } from '../../components';
import { ROUTES } from '../../assets';

import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  const history = useHistory();
  
  return (
    <div className={styles.container}>
      <GoBack 
        onClick={() => history.push(ROUTES.landing)}
      />
      <LogIn />
      <div className={styles.menu}>
        <MenuItem
          background="#000000"
          borderRadius="20px 0 0 0"
          boxShadow="0 0 20px 1px #4A428E"
          text="Про сервіс"
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          boxShadow="0 0 20px 1px #9BF9FC"
          text="Про енергію"
        />
        <MenuItem
          background="#000000"
          borderRadius="0 20px 0 0"
          boxShadow="0 0 20px 1px #C76AC2"
          text="Розпочати прогнозу-вання"
        />
        <MenuItem background="#000000" borderRadius={0} itemOpacity={0.1} />
        <MenuItem background="#000000" borderRadius={0} itemOpacity={0.1} />
        <MenuItem background="#000000" borderRadius={0} itemOpacity={0.1} />
        <MenuItem
          background="#000000"
          borderRadius="0 0 0 20px"
          boxShadow="0 0 20px 1px #4A428E"
          text="Результати користувачів"
        />
        <MenuItem
          background="#000000"
          borderRadius={0}
          boxShadow="0 0 20px 1px #9BF9FC"
          text="Мої прогнози"
        />
        <MenuItem
          background="#000000"
          borderRadius="0 0 20px 0"
          boxShadow="0 0 20px 1px #C76AC2"
          text="Графік енергоспожи-вання"
        />
      </div>
    </div>
  );
};
