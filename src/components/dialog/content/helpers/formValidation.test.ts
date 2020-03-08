import {commonErrorMessage, formValidation, IFormErrors} from "./formValidation";
import {IArticle} from "src/models/articles";

describe('formValidation', () => {
  it('should return an error for description field', () => {
    const formData: IArticle = {
      img: 'fakeImageUrl',
      title: 'title',
      description: '',
      link: '',
    };
    const expectedErrors: IFormErrors = {
      description: commonErrorMessage,
    };
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
  it('should return errors for all fields', () => {
    const formData: IArticle = {
      img: '',
      title: '',
      description: '',
      link: '',
    };
    const expectedErrors: IFormErrors = {
      img: commonErrorMessage,
      description: commonErrorMessage,
      title: commonErrorMessage,
    };
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
  it('should return an empty errors object', () => {
    const formData: IArticle = {
      img: 'fakeImg',
      title: 'fakeTitle',
      description: 'fakeDescription',
      link: '',
    };
    const expectedErrors: IFormErrors = {};
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
});