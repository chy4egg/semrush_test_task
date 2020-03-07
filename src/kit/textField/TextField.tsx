import React, {ChangeEvent} from 'react';
import styles from './TextField.module.scss';

interface ITextFieldProps {
  value: string
  placeholder: string
  onChange: (value: string) => void
}

export const TextField: React.FC<ITextFieldProps> = ({value, onChange, placeholder}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value);
  };

  return (
    <input type="text" placeholder={placeholder} value={value} className={styles.TextField} onChange={handleChange}/>
  )
};