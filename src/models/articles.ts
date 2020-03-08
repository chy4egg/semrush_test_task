export interface IArticle {
  img: string,
  link: string,
  title: string,
  text: string,
  tags?: string[],
}

export interface IFormData {
  img: string,
  title: string,
  description: string,
}