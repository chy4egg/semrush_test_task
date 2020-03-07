import React, {useState} from 'react';
import {TopLine} from './sections/topLine/TopLine';
import {TopSection} from "./sections/topSection/TopSection";
import {ArticlesSection} from './sections/articlesSection/ArticlesSection';
import {articles} from "src/fixtures/articles";

const App = () => {

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const handlePageChange = (page: number) => {
    console.log(page)
    // todo set page!
  };

  // todo
  const handleAddArticle = () => {
    console.log('add new article')
  };

  return (
    <div className="App my-react-app">
      <TopLine />
      <TopSection onAdd={handleAddArticle}/>
      <ArticlesSection articles={articles} page={page} count={count} onPageChange={handlePageChange} />
      {/*TODO: модалка*/}
    </div>
  );
};

export default App;
