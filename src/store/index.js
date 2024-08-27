import { createStore } from 'vuex';
import color from './module/color';

const store = createStore({
  modules: {
    color,
  },
});

export default store; 