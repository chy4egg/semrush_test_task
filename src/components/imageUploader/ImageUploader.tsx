import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './ImageUploader.module.scss';
import {CartIcon} from "src/kit/cartIcon/CartIcon";

export interface IImageUploaderProps {
  onChange: (url: string) => void
  url?: string
}

export const ImageUploader: React.FC<IImageUploaderProps> = (props) => {
  const {onChange} = props;

  const [initialUrl] = useState<string | undefined>(props.url);
  const [preview, setPreview] = useState<string | undefined>(undefined);

  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();
    const aImage = acceptedFiles[0];
    reader.readAsDataURL(aImage);
    reader.addEventListener("load", () => {
      const base64url = reader.result;
      if (typeof base64url === 'string') {
        setPreview(base64url);
        // на этом этапе хорошо бы отправить blob на сервак,
        // получить нормальный url и его уже положить в onChange
        onChange(base64url);
      }
    }, false);
  }, [onChange]);

  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const handleRemoveImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setPreview(initialUrl);
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.wrapper}>

        {preview ? (
          <>
            <div className={styles.removeIcon} onClick={(e) => handleRemoveImage(e)}><CartIcon/></div>
            <img className={styles.image} src={preview} alt={props.url}/>
          </>
        ) : (
          <div className={styles.imageNameField}>
            <p className={styles.text}>select an image file to upload or drag it here</p>
          </div>
        )}
      </div>
    </div>
  )
};