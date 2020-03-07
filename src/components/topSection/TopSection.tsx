import React from 'react';
import styles from './TopSection.module.scss';
import {Button} from "src/kit/button/Button";

export const TopSection: React.FC = () => {
  return (
    <div className={styles.TopSection}>
      <p className={styles.title}>Webinars</p>
      <p className={styles.text}>
        Here you can register and take part in educational webinars conducted <br/>
        by the best digital marketing experts.
      </p>
      <Button value='Add new' type={"white"} />
    </div>
  )
};