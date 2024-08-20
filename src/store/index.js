// store.js
import auth from './auth';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

 new Vuex.Store({
  modules: {
    auth,
  },
});


export default store;