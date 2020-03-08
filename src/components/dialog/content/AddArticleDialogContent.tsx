import React, {useEffect, useState} from 'react';
import styles from './AddArticleDialogContent.module.scss';
import {ImageUploader} from "src/components/imageUploader/ImageUploader";
import {Button} from 'src/kit/button/Button';
import {TextField} from 'src/kit/textField/TextField';
import {TextAreaField} from "src/kit/textAreaField/TextAreaField";
import {formValidation, IFormErrors} from './helpers/formValidation';
import {IArticle} from "src/models/articles";

interface IAddArticleDialogContentProps {
  onAddArticle: () => void
  formData: IArticle
  onChangeFormData: (data: IArticle) => void
}

export const AddArticleDialogContent:React.FC<IAddArticleDialogContentProps> = (props) => {
  const [errors, setErrors] = useState<IFormErrors>({});
  const [showErrors, setShowErrors] = useState(false);
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

  const handleAddArticle = () => {
    if (Object.keys(errors).length) {
      setShowErrors(true);
    } else {
      onAddArticle();
    }
  };

  useEffect(() => {
    setErrors(formValidation(formData));
    setShowErrors(false);
  }, [formData]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Add new</p>

      <div className={styles.field}>
        <ImageUploader onChange={handleImageChange} />
        {showErrors && errors['img'] && <p className={styles.fieldError}>{errors['img']}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Title</label>
        <TextField placeholder={'Enter title'} value={formData.title} onChange={handleTitleChange} />
        {showErrors && errors['title'] && <p className={styles.fieldError}>{errors['title']}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Description</label>
        <TextAreaField placeholder={'Enter description'} value={formData.description} onChange={handleDescriptionChange} />
        {showErrors && errors['description'] && <p className={styles.fieldError}>{errors['description']}</p>}
      </div>

      <div className={styles.buttonWrapper}>
        <Button type={'green'} value={'Save'} onClick={handleAddArticle}/>
      </div>
    </div>
  )
};