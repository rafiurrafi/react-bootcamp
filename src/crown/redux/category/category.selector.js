export const selectCategoriesmap = (state) =>
  state.category.categoriesMap.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
