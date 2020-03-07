import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  value: string
  type: 'green' | 'white'
  onClick: () => void
}

export const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.type]}`} value={props.value}>{props.value}</button>
  )
}