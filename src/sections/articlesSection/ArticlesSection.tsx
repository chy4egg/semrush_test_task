import React from 'react';
import styles from './ArticlesSection.module.scss';
import {IArticle} from "src/models/articles";
import {ArticlesList} from "src/components/articlesList/ArticlesList";
import {Pagination} from "src/kit/pagination/Pagination";
import {articles} from "src/fixtures/articles";

interface IArticlesSectionProps {
  articles: IArticle[]
  page: number
  count: number
  onPageChange: (page: number) => void
  pageSize: number
}

export const ArticlesSection: React.FC<IArticlesSectionProps> = (props) => {

  const handlePageChange = (event: object, page: number) => {
    props.onPageChange(page);
  };

  return (
    <section className={styles.wrapper}>
      <ArticlesList articles={props.articles} />
    {props.pageSize < articles.length && (
      <Pagination page={props.page} count={props.count} onChange={handlePageChange} />
    )}
    </section>
  )
};