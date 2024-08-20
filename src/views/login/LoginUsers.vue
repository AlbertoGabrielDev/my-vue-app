<template>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" v-model="rememberMe" class="form-check-input" id="rememberMe">
        <label class="form-check-label" for="rememberMe">Remember me</label>
      </div>
      <div class="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
        <select v-model="selectedOption" class="form-control form-control-sm">
          <option v-for="(item) in unidade" :value="item.id_unidade" :key="item.id_unidade">{{ item.nome }}</option>
        </select>
  </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'LoginUsers',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      selectedOption: '',
      unidade: [],
    };
  },
  async mounted() {
    await this.unidades();
  },
  methods: {
    async unidades(){
      try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/unidades/index');
      this.unidade = response.data.data;
      console.log(response.data.data)
    } catch (error) {
      console.error('Failed to load units:', error);
    }
    },
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/login', {
          email: this.email,
          password: this.password,
          remember_me: this.rememberMe,
        });
        console.log(response.data);
        this.$router.push('/produtos');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  },
};
</script>
  