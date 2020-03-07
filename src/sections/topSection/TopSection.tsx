import React from 'react';
import styles from 'src/sections/topSection/TopSection.module.scss';
import {Button} from "src/kit/button/Button";

interface ITopSectionProps {
  onAdd: () => void
}

export const TopSection: React.FC<ITopSectionProps> = ({onAdd}) => {
  return (
    <section className={styles.TopSection}>
      <p className={styles.title}>Webinars</p>
      <p className={styles.text}>
        Here you can register and take part in educational webinars conducted <br/>
        by the best digital marketing experts.
      </p>
      <div className={styles.buttonWrapper}>
        <Button value='Add new' type={"white"} onClick={onAdd} />
      </div>
    </section>
  )
};