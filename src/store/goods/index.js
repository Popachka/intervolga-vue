import api from './api';

// initial state
const state = () => ({
  items: [
    { id: '1', name: 'dsa', description: 'dsa', price: '1', category: 'cat' },
    { id: '2', name: 'dsa', description: 'dsa', price: '1', category: 'dog' },
  ],
  filteredItems: [],
});

//getters
const getters = {
  items: (state) => (state.filteredItems.length > 0 ? state.filteredItems : state.items),
  itemsByKey: (state) =>
    state.items.reduce((res, cur) => {
      res[cur['id']] = cur;
      return res;
    }, {}),
};
//mutations
const mutations = {
  setItems: (state, items) => {
    state.items = items;
  },
  setFilteredItems: (state, items) => {
    state.filteredItems = items;
  },
  setItem: (state, item) => {
    state.items.push(item);
  },
  removeItem: (state, idRemove) => {
    state.items = state.items.filter(({ id }) => id !== idRemove);
  },
  updateItem: (state, updateItem) => {
    const index = state.items.findIndex((item) => +item.id === +updateItem.id);
    state.items[index] = updateItem;
  },
};
//actions
const actions = {
  fetchItems: async ({ commit }) => {
    const response = await api.goods();
    const items = await response.json();
    commit('setItems', items);
  },
  removeItem: async ({ commit }, id) => {
    const idRemoveItem = await api.remove(id);
    commit('removeItem', idRemoveItem);
  },
  addItem: async ({ commit }, { name, category, price, description }) => {
    const item = await api.add({ name, category, price, description });
    commit('setItem', item);
  },
  updateItem: async ({ commit }, { id, name, category, price, description }) => {
    const item = api.update({ id, name, category, price, description });
    commit('updateItem', item);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
