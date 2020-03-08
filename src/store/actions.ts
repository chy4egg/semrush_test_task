import {IArticle} from "src/models/articles";

export const addArticle = (payload: IArticle) => (dispatch: any) => {
  dispatch({
    type: 'ADD_ARTICLE',
    payload,
  })
};

export const updateArticles = (payload: IArticle[]) => (dispatch: any) => {
  dispatch({
    type: 'UPDATE_ARTICLES',
    payload,
  })
};