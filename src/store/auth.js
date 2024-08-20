// store/auth.js
import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: '',
};

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  user: state => state.user,
};

const actions = {
  async login({ commit }, user) {
    try {
      commit('auth_request');
      let response = await axios.post('http://127.0.0.1:8000/api/v1/login', user);
      const token = response.data.token;
      const userData = response.data.user;

      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      commit('auth_success', { token, user: userData });
      return response;
    } catch (error) {
      commit('auth_error');
      localStorage.removeItem('token');
      throw error;
    }
  },

  async logout({ commit }) {
    commit('logout');
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  },
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = 'error';
  },
  logout(state) {
    state.status = '';
    state.token = '';
    state.user = {};
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
