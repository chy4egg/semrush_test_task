import {IFormData} from "src/models/articles";

export interface IFormErrors {
  img?: string,
  title?: string,
  description?: string,
}

const commonErrorMessage = 'Необходимо заполнить поле';

// TODO: tests + ts-ignore fix!
export const formValidation = (formData: IFormData): IFormErrors => {
  const errors: IFormErrors = {};

  for (let f in formData) {
    console.log(formData['title']);
    // @ts-ignore
    if (!formData[f].length) {
      // @ts-ignore
      errors[f] = commonErrorMessage;
    }
  }

  return errors;
};