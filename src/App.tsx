import React, {useEffect, useState} from 'react';
import {TopLine} from './sections/topLine/TopLine';
import {TopSection} from "./sections/topSection/TopSection";
import {ArticlesSection} from './sections/articlesSection/ArticlesSection';
import {articles} from "src/fixtures/articles";
import {paginator} from "src/utils/paginator/paginator";
import {Dialog} from "src/components/dialog/Dialog";
import {AddArticleDialogContent} from "src/components/dialog/content/AddArticleDialogContent";

const pageSize = 6;

const App = () => {

  const [filteredList, setFilteredList] = useState(articles);
  const [isModalOpen, setIsModalOpen] = useState(true); // TODO FALSE !
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

  const handleAddArticle = () => {
    setIsModalOpen(true);
  };

  const handleSubmitArticle = () => {
    console.log('SUBMIT !!!');
  };

  return (
    <div className="App my-react-app">
      <TopLine />
      <TopSection onAdd={handleAddArticle}/>
      <ArticlesSection articles={filteredList} pageSize={pageSize} page={page} count={count} onPageChange={handlePageChange} />
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div>Контент модалки</div>
        <AddArticleDialogContent onAddArticle={handleSubmitArticle} />
      </Dialog>
    </div>
  );
};

export default App;
