export interface IArticle {
  img: string,
  link: string,
  title: string,
  description: string,
  tags?: string[],
}

export interface IFormData {
  img: string,
  title: string,
  description: string,
}