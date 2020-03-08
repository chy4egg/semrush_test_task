import {IFormData} from "src/models/articles";

export const addArticle = (payload: IFormData) => (dispatch: any) => {
  dispatch({
    type: 'ADD_ARTICLE',
    payload,
  })
};