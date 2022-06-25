export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "category/FETCH_CATEGORIES_FAILED",
}

export type CategoryItems = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
};

export type Category = {
  id: string;
  imageUrl: string;
  items: CategoryItems[];
};
