import React from 'react';
import styles from './Pagination.module.scss';
import { Pagination as UiPagination } from '@material-ui/lab';

interface IPaginationProps {
  onChange: (event: object, page: number) => void
  count: number // The total number of pages
  page: number // The current page
}

export const Pagination: React.FC<IPaginationProps> = (props) => {
  return (
      <div className={styles.wrapper}>
        <UiPagination
          shape={'rounded'}
          onChange={props.onChange}
          {...props}
        />
      </div>
  )
}