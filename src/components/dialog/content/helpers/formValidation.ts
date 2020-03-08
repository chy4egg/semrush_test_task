import {IArticle} from "src/models/articles";

export interface IFormErrors {
  img?: string,
  title?: string,
  description?: string,
}

export const commonErrorMessage = 'This field is required';

export const formValidation = (formData: IArticle): IFormErrors => {
  const errors: IFormErrors = {};

  for (let f in formData) {
    const typedF = f as keyof typeof formData;
    // пока для 'tags' и 'link' нет полей в форме добавления новой статьи
    if (typedF !== 'tags' && typedF !== 'link' && !formData[typedF].length) {
      errors[typedF] = commonErrorMessage;
    }
  }

  return errors;
};