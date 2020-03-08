import {IArticle} from "src/models/articles";
import {articles} from "src/fixtures/articles";

export type IInitialState = {
  articles: IArticle[];
};

export const initialState: IInitialState = {
  articles,
};