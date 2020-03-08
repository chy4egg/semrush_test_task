import React, {useEffect, useState} from 'react';
import {TopLine} from './sections/topLine/TopLine';
import {TopSection} from "./sections/topSection/TopSection";
import {ArticlesSection} from './sections/articlesSection/ArticlesSection';
import {paginator} from "src/utils/paginator/paginator";
import {Dialog} from "src/components/dialog/Dialog";
import {AddArticleDialogContent} from "src/components/dialog/content/AddArticleDialogContent";
import {addArticle, updateArticles} from "src/store/actions";
import {useDispatch, useSelector} from "react-redux";
import {IInitialState} from "src/store/state";
import {IArticle} from "src/models/articles";

const pageSize = 6;
const articlesStorageKey = 'react-app__local-articles';

const emptyFormData = {
  img: '',
  title: '',
  description: '',
  link: '',
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector<IInitialState, any>((state: IInitialState) => state.articles);
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState<IArticle>(emptyFormData);
  const [filteredList, setFilteredList] = useState(articles);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const updatePage = (page: number) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set('page', page.toString());
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${params.toString()}`;
    window.history.pushState({path: newUrl}, '', newUrl);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page) {
      setPage(+page);
    }
  }, []);

  useEffect(() => {
    getArticlesFromLocalStorage();
  }, []);

  useEffect(() => {
    if (isMounted) {
      saveArticlesInLocalStorage();
    } else {
      setIsMounted(true);
    }
  }, [articles]);

  useEffect(() => {
    setCount(Math.ceil(articles.length / pageSize))
  }, [articles.length]);

  const handlePageChange = (page: number) => {
    updatePage(page);
  };

  useEffect(() => {
    setFilteredList(paginator(articles, pageSize, page))
  }, [page, articles]);

  const getArticlesFromLocalStorage = () => {
    const local = window.localStorage.getItem(articlesStorageKey);
    if (local) {
      const parsedLocal = JSON.parse(local) as { articles: IArticle[] };
      if (parsedLocal.articles) {
        updateArticles(parsedLocal.articles)(dispatch);
      }
    }
  };

  const saveArticlesInLocalStorage = () => {
    const objectToSave = { articles };
    window.localStorage.setItem(articlesStorageKey, JSON.stringify(objectToSave));
  };

  const handleAddArticle = () => {
    setIsModalOpen(true);
  };

  const handleSubmitArticle = () => {
    addArticle(formData)(dispatch);
    setIsModalOpen(false);
    setFormData(emptyFormData);
  };

  const onChangeFormData = (formData: IArticle) => {
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
