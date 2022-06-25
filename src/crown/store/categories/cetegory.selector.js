import { crateSelector } from "reselect";
const selectCategoryReducer = (state) => state.categories;

export const selectCategories = crateSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selecteCategoriesMap = (state) => state.categories.categoriesMap;
