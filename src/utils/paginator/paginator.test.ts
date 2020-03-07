import {paginator} from "./paginator";

describe('paginator', () => {
  it('should return first page elements', () => {
    const list = [1,2,3,4,5];
    const page = 1;
    const pageSize = 3;
    expect(paginator(list, pageSize, page)).toEqual([1,2,3]);
  });
  it('should return second page elements', () => {
    const list = [1,2,3,4,5];
    const page = 2;
    const pageSize = 3;
    expect(paginator(list, pageSize, page)).toEqual([4,5]);
  })
});