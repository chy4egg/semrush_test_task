import React from 'react';
import {IArticle} from "src/models/articles";
import {ArticleItem} from "src/components/articlesList/articleItem/ArticleItem";
import styles from './ArticlesList.module.scss';

interface IArticlesListProps {
  articles: IArticle[]
}

export const ArticlesList: React.FC<IArticlesListProps> = (props) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        { props.articles.map((article: IArticle, key: number) => (
          <ArticleItem article={article} key={key} />
        )) }
      </ul>
    </div>
  )
};