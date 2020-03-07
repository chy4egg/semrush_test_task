import React, {useEffect, useState} from 'react';
import {TopLine} from './sections/topLine/TopLine';
import {TopSection} from "./sections/topSection/TopSection";
import {ArticlesSection} from './sections/articlesSection/ArticlesSection';
import {articles} from "src/fixtures/articles";
import {paginator} from "src/utils/paginator/paginator"; // TODO брать из redux когда подключу

const pageSize = 3;

const App = () => {

  const [filteredList, setFilteredList] = useState(articles);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(Math.ceil(articles.length / pageSize))
  }, [articles]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    filterList();
  }, [page]);

  const filterList = () => {
    setFilteredList(paginator(articles, pageSize, page))
  };

  // todo
  const handleAddArticle = () => {
    console.log('add new article')
  };

  return (
    <div className="App my-react-app">
      <TopLine />
      <TopSection onAdd={handleAddArticle}/>
      <ArticlesSection articles={filteredList} page={page} count={count} onPageChange={handlePageChange} />
      {/*TODO: модалка*/}
    </div>
  );
};

export default App;
