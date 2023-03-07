import api from './api';

// initial state
const state = () => ({
  items: [{ id: '1', category: 'dads' }],
});

//getters
const getters = {
  items: (state) => state.items,
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
  setItem: (state, item) => {
    state.items.push(item);
  },
  removeItem: (state, idRemove) => {
    state.items = state.items.filter(({ id }) => id !== idRemove);
  },
  updateItem: (state, updateItem) => {
    console.log(updateItem);
    const index = state.items.findIndex((item) => +item.id === +updateItem.id);
    console.log(state.items);
    state.items[index] = updateItem;
  },
};
//actions
const actions = {
  fetchItems: async ({ commit }) => {
    const response = await api.categories();
    const items = await response.json();
    commit('setItems', items);
  },
  removeItem: async ({ commit }, id) => {
    const idRemoveItem = await api.remove(id);
    commit('removeItem', idRemoveItem);
  },
  addItem: async ({ commit }, { category }) => {
    const item = await api.add({ category });
    commit('setItem', item);
  },
  updateItem: async ({ commit }, { id, category }) => {
    const item = api.update({ id, category });
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
