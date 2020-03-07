import React from 'react';
import styles from './ArticlesSection.module.scss';
import {IArticle} from "src/models/articles";
import {ArticlesList} from "src/components/articlesList/ArticlesList";
import {Pagination} from "src/kit/pagination/Pagination";

interface IArticlesSectionProps {
  articles: IArticle[]
  page: number
  count: number
  onPageChange: (page: number) => void
}

export const ArticlesSection: React.FC<IArticlesSectionProps> = (props) => {

  const handlePageChange = (event: object, page: number) => {
    props.onPageChange(page);
  };

  return (
    <section className={styles.wrapper}>
    {/*  articles list */}
      <ArticlesList articles={props.articles} />
    {/* pagination */}
    {/* TODO: добавить условие для отображения */}
    <Pagination page={props.page} count={props.count} onChange={handlePageChange} />
    </section>
  )
};