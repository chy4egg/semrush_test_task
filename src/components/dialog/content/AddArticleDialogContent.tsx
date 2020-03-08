import React, {useState} from 'react';
import styles from './AddArticleDialogContent.module.scss';
import {ImageUploader} from "src/components/imageUploader/ImageUploader";
import {Button} from 'src/kit/button/Button';
import {TextField} from 'src/kit/textField/TextField';
import {IFormData} from "src/models/articles";
import {TextAreaField} from "src/kit/textAreaField/TextAreaField";
import {formValidation, IFormErrors} from './helpers/formValidation';

interface IAddArticleDialogContentProps {
  onAddArticle: () => void
  formData: IFormData
  onChangeFormData: (data: IFormData) => void
}


export const AddArticleDialogContent:React.FC<IAddArticleDialogContentProps> = (props) => {

  const [errors, setErrors] = useState<IFormErrors>({});
  const [showErrors, setShowErrors] = useState(false);
  const {formData, onAddArticle, onChangeFormData} = props;

  // TODO: объединить все handle в обстракцию, вызывать обновление ошибок через useEffect() !!!!!

  const handleTitleChange = (title: string) => {
    onChangeFormData({...formData, title});
    setErrors(formValidation(formData));
    setShowErrors(false);
  };
  const handleDescriptionChange = (description: string) => {
    onChangeFormData({...formData, description});
    setErrors(formValidation(formData));
    setShowErrors(false);
  };
  const handleImageChange = (img: string) => {
    onChangeFormData({...formData, img});
    setErrors(formValidation(formData));
    setShowErrors(false);
  };

  const handleAddArticle = () => {
    if (!errors) {
      onAddArticle();
    } else {
      // todo: добавить ошибки полей
      setShowErrors(true);
      console.log('Ошибка валидации');
    }
  };

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