/**
 * Фильтрует любой список на основании текущей страницы и размера страницы
 * @param array
 * @param pageSize
 * @param pageNumber
 */
export const paginator = <T extends any>(array: T, pageSize: number, pageNumber: number) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};