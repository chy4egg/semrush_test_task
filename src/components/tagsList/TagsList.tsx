import React from 'react';
import styles from './TagsList.module.scss';

interface ITagsListProps {
  tags: string[]
  max?: number
}

export const TagsList: React.FC<ITagsListProps> = ({tags, max = 3}) => {
  return (
    <ul className={styles.list}>
      {tags.map((tag, key) => key < max && <li className={styles.item} key={key}>{tag}</li>)}
    </ul>
  )
}