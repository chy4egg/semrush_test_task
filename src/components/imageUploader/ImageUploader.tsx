import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import styles from './ImageUploader.module.scss';
import {CartIcon} from "src/kit/cartIcon/CartIcon";

export interface IImageUploaderProps {
  onChange: (url: string) => void
  url?: string
  aspectRatio?: number // (16 / 9)
}

export const ImageUploader: React.FC<IImageUploaderProps> = (props) => {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();
    const aImage = acceptedFiles[0];
    reader.readAsDataURL(aImage);
    reader.addEventListener("load", () => {
      const base64url = reader.result;
      if (typeof base64url === 'string') setPreview(base64url)
    }, false);
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop});
  const [initialUrl] = useState<string | undefined>(props.url);
  const [preview, setPreview] = useState<string | undefined>(undefined);

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