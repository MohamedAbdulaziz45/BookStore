export interface IpagedResult<T> {
  items: T[];
  totalPages: number;
  totalItemsCount: number;
  itemsFrom: number;
  itemsTo: number;
  totalCount: number;
  currentPage: number;
  pageSize: number;
}
