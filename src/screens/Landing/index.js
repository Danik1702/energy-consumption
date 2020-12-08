import React from "react";

import { StartButton } from './components';
import { LogIn } from '../../components';
import styles from './landing.module.scss';

export const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <LogIn />
      <StartButton />
    </div>
  );
};
