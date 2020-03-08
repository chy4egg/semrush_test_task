import {commonErrorMessage, formValidation, IFormErrors} from "./formValidation";
import {IFormData} from "src/models/articles";

describe('formValidation', () => {
  it('should return an error for description field', () => {
    const formData: IFormData = {
      img: 'fakeImageUrl',
      title: 'title',
      description: ''
    };
    const expectedErrors: IFormErrors = {
      description: commonErrorMessage,
    };
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
  it('should return errors for all fields', () => {
    const formData: IFormData = {
      img: '',
      title: '',
      description: '',
    };
    const expectedErrors: IFormErrors = {
      img: commonErrorMessage,
      description: commonErrorMessage,
      title: commonErrorMessage,
    };
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
  it('should return an empty errors object', () => {
    const formData: IFormData = {
      img: 'fakeImg',
      title: 'fakeTitle',
      description: 'fakeDescription',
    };
    const expectedErrors: IFormErrors = {};
    expect(formValidation(formData)).toEqual(expectedErrors);
  });
});