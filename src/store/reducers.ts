import {createStore} from "redux";
import {initialState} from "src/store/state";

export const rootReducer = (state: any, action: any): any => {
  switch (action.type) {
    case 'ADD_ARTICLE':
      const newArticles = [...state.articles];
      newArticles.unshift(action.payload);
      return {
        ...state,
        articles: newArticles,
      };
    case 'UPDATE_ARTICLES':
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state
  }
};

const store = createStore(rootReducer, initialState);
export default store;