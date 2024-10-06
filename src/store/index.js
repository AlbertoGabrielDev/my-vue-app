import { createStore } from 'vuex'; 
import color from './module/color';
import auth from './module/color';
const store = createStore({
  modules: {
    color,
    auth,
  },
});

export default store; 