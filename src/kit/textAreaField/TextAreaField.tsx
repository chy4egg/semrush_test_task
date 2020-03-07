import React, {ChangeEvent} from 'react';
import styles from './TextAreaField.module.scss';

interface ITextAreaFieldProps {
  value: string
  rows?: number
  placeholder: string
  onChange: (value: string) => void
}

export const TextAreaField: React.FC<ITextAreaFieldProps> = (props) => {

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    props.onChange(e.target.value);
  };

  return (
    <textarea {...props} className={styles.TextArea} onChange={handleChange}>{props.value}</textarea>
  )
};