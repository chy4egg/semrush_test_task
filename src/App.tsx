import React, {useEffect, useState} from 'react';
import {TopLine} from './sections/topLine/TopLine';
import {TopSection} from "./sections/topSection/TopSection";
import {ArticlesSection} from './sections/articlesSection/ArticlesSection';
import {paginator} from "src/utils/paginator/paginator";
import {Dialog} from "src/components/dialog/Dialog";
import {AddArticleDialogContent} from "src/components/dialog/content/AddArticleDialogContent";
import {IFormData} from "src/models/articles";
import {addArticle} from "src/store/actions";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "src/store/state";

const pageSize = 6;

const emptyFormData = {
  img: '',
  title: '',
  description: '',
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector<IInitialState, any>((state: IInitialState) => state.articles);
  const [formData, setFormData] = useState<IFormData>(emptyFormData);
  const [filteredList, setFilteredList] = useState(articles);
  const [isModalOpen, setIsModalOpen] = useState(true); // TODO FALSE !
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(Math.ceil(articles.length / pageSize))
  }, [articles.length]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setFilteredList(paginator(articles, pageSize, page))
  }, [page, articles]);

  const handleAddArticle = () => {
    setIsModalOpen(true);
  };

  const handleSubmitArticle = () => {
    addArticle(formData)(dispatch);
    setIsModalOpen(false);
    setFormData(emptyFormData);
  };

  const onChangeFormData = (formData: IFormData) => {
    setFormData(formData);
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
        <AddArticleDialogContent
          onAddArticle={handleSubmitArticle}
          formData={formData}
          onChangeFormData={onChangeFormData}
        />
      </Dialog>
    </div>
  );
};

export default App;
