export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('categories/fetchItems');
};

export const selectItems = (store) => {
  const { getters } = store;
  return getters['categories/items'];
};

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('categories/removeItem', id);
};

export const addItem = (store, { category }) => {
  const { dispatch } = store;
  dispatch('categories/addItem', { category });
};

export const updateItem = (store, { id, category }) => {
  const { dispatch } = store;
  dispatch('categories/updateItem', { id, category });
};

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['categories/itemsByKey'][id] || {};
};
