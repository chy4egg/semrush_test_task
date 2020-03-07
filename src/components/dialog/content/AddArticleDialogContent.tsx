import React from 'react';

interface IAddArticleDialogContentProps {
  onAddArticle: () => void
}

export const AddArticleDialogContent:React.FC<IAddArticleDialogContentProps> = (props) => {
  return (
    <div onClick={props.onAddArticle}>ADD !</div>
  )
};