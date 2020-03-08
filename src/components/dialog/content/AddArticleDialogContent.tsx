import React from 'react';
import styles from './AddArticleDialogContent.module.scss';
import {ImageUploader} from "src/components/imageUploader/ImageUploader";
import {Button} from 'src/kit/button/Button';
import {TextField} from 'src/kit/textField/TextField';
import {IFormData} from "src/models/articles";
import {TextAreaField} from "src/kit/textAreaField/TextAreaField";

interface IAddArticleDialogContentProps {
  onAddArticle: () => void
  formData: IFormData
  onChangeFormData: (data: IFormData) => void
}


export const AddArticleDialogContent:React.FC<IAddArticleDialogContentProps> = (props) => {
  const {formData, onAddArticle, onChangeFormData} = props;

  const handleTitleChange = (title: string) => {
    onChangeFormData({...formData, title});
  };
  const handleDescriptionChange = (description: string) => {
    onChangeFormData({...formData, description});
  };
  const handleImageChange = (img: string) => {
    onChangeFormData({...formData, img});
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Add new</p>

      <div className={styles.field}>
        <ImageUploader onChange={handleImageChange} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Title</label>
        <TextField placeholder={'Enter title'} value={formData.title} onChange={handleTitleChange} />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Description</label>
        <TextAreaField placeholder={'Enter description'} value={formData.description} onChange={handleDescriptionChange} />
      </div>

      <div className={styles.buttonWrapper}>
        <Button type={'green'} value={'Save'} onClick={onAddArticle}/>
      </div>
    </div>
  )
};