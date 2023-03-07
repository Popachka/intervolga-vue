export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('goods/fetchItems');
};
export const selectItems = (store) => {
  const { getters } = store;
  return getters['goods/items'];
};
export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('goods/removeItem', id);
};
export const addItem = (store, { name, category, price, description }) => {
  const { dispatch } = store;
  dispatch('goods/addItem', { name, category, price, description });
};
export const updateItem = (store, { id, name, category, price, description }) => {
  const { dispatch } = store;
  dispatch('goods/updateItem', { id, name, category, price, description });
};
export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['goods/itemsByKey'][id] || {};
};
