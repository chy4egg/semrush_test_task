import React from 'react';
import styles from './CartIcon.module.scss';
import {ReactComponent as Icon} from './Icon.svg';

interface ICartIconProps {}

export const CartIcon: React.FC<ICartIconProps> = () => {
  return (
    <div className={styles.CartIcon}>
      <Icon/>
    </div>
  )
}