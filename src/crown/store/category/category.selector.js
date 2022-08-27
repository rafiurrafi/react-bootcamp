export const selectCategories = (state) =>
  state.categories.categoriesMap.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
