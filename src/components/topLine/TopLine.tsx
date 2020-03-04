import React from 'react';
import styles from './TopLine.module.scss';
import { ReactComponent as Logo } from 'assets/img/logo.svg';

export const TopLine: React.FC = () => {
  return (
    <div className={styles.topLine}>

      <Logo />


    </div>
  )
};