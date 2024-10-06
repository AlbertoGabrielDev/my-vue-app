import axios from 'axios';

const state = {
  token: localStorage.getItem('token') || null, // Pega o token do localStorage
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
  }
};

const actions = {
  async login({ commit }, credentials) {
    // Fazer a requisição de login e salvar o token no localStorage
    return axios.post('/api/v1/verdurao/login', credentials).then(response => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      commit('SET_TOKEN', token);
    });
  },
  
  logout({ commit }) {
  
    localStorage.removeItem('token');
    commit('CLEAR_TOKEN');
  },
  
  // async validateToken({ state }) {
  //   // Opcional: fazer uma requisição para verificar se o token ainda é válido
  //   return axios.post('/api/v1/verdurao/validate', { token: state.token })
  //     .then(() => true)
  //     .catch(() => false);
  // }
};

export default {
  state,
  mutations,
  actions
};
