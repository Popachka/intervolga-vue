import { createStore } from 'vuex';
import goods from './goods';
import categories from './categories';
export default createStore({
  modules: {
    goods,
    categories,
  },
});
