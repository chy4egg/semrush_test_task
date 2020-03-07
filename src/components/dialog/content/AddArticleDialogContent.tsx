import React from 'react';
import styles from './AddArticleDialogContent.module.scss';
import {ImageUploader} from "src/components/imageUploader/ImageUploader";

interface IAddArticleDialogContentProps {
  onAddArticle: () => void
}

export const AddArticleDialogContent:React.FC<IAddArticleDialogContentProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Add new</p>
      <ImageUploader onChange={() => {}} />
      {/* TODO: onAddArticle на кнопку */}
    </div>
  )
};