import React from 'react';
import styles from 'src/sections/topLine/TopLine.module.scss';
import { ReactComponent as Logo } from 'src/assets/img/logo.svg';

export const TopLine: React.FC = () => {
  return (
    <div className={styles.topLine}>
      <Logo />
    </div>
  )
};