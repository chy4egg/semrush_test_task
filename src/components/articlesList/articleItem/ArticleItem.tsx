import React from 'react';
import {IArticle} from "src/models/articles";
import styles from './ArticleItem.module.scss';
import {TagsList} from "src/components/tagsList/TagsList";

interface IArticleItemProps {
  article: IArticle
}

export const ArticleItem: React.FC<IArticleItemProps> = ({article}) => {
  return (
    <li className={styles.wrapper}>
      <a href={styles.link}>
        <div className={styles.imageWrapper} style={{backgroundImage: `url(${article.img})`}}></div>
        <div className={styles.contentWrapper}>
          <p className={styles.title}>
            {article.title}
          </p>
          <p className={styles.text}>
            { article.text }
          </p>
          {article.tags && (
            <div className={styles.tagsWrapper}>
              <TagsList tags={article.tags} />
            </div>
          )}
        </div>
      </a>
    </li>
  )
}