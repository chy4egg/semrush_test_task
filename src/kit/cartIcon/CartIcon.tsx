import React from 'react';
import styles from './CartIcon.module.scss';
import {ReactComponent as Icon} from './Icon.svg';

interface ICartIconProps {
  onClick: () => void
}

export const CartIcon: React.FC<ICartIconProps> = (props) => {
  return (
    <div className={styles.CartIcon}>
      <Icon/>
    </div>
  )
}