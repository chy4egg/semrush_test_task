import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './ImageUploader.module.scss';

export interface IImageUploaderProps {
  onChange: (url: string) => void
  url: string
  size: { width: number, height: number }
  aspectRatio?: number // (16 / 9)
}

export const ImageUploader: React.FC<IImageUploaderProps> = (props) => {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();
    const aImage = acceptedFiles[0];
    reader.readAsDataURL(aImage);
    reader.addEventListener("load", (e) => {
      const base64url = reader.result;
      setPreview(base64url);
    }, false);
  }, [])

  // в useDropzone есть доп. параметры. См. документацию
  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const [preview, setPreview] = useState<any>(undefined);
  const [initialUrl] = useState<any>(props.url);

  const handleRemoveImg = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.stopPropagation();
    setPreview(undefined);
    props.onChange(initialUrl)
  };

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={styles.wrapper}>
        <div className={styles.imageNameField}>
          <img className={styles.image} src={props.url} alt={props.url}/>
        </div>
        <div>
          {preview &&
          <span className={styles.remove} onClick={handleRemoveImg}>удалить</span>
          }
        </div>
      </div>
    </div>
  )
};