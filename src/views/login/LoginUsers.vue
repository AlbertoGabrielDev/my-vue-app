<template>
  <form @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email address</label>
      <input 
        type="email" 
        v-model="email" 
        class="form-control" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Enter email"
        required
      />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input 
        type="password" 
        v-model="password" 
        class="form-control" 
        id="password" 
        placeholder="Password"
        required
      />
    </div>
    <div class="form-group form-check">
      <input 
        type="checkbox" 
        v-model="rememberMe" 
        class="form-check-input" 
        id="rememberMe"
      />
      <label class="form-check-label" for="rememberMe">Remember me</label>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select 
        v-model="selectedOption" 
        class="form-control form-control-sm" 
        required
      >
        <option v-for="(item) in unidade" :value="item.id_unidade" :key="item.id_unidade">
          {{ item.nome }}
        </option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Logar</button>
    <div v-if="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
  </form>
</template>

<script>
// import { useAuth } from '@/store/module/auth';
import axios from 'axios';

// const auth = useAuth;

export default {
  name: 'LoginUsers',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      selectedOption: '',
      unidade: [],
      errorMessage: '',
    };
  },
  async mounted() {
    await this.loadUnits();
  },
  computed: {
   
  },
  methods: {

    async loadUnits() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/unidades/index');
        this.unidade = response.data.data;
      } catch (error) {
        this.errorMessage = 'Erro ao carregar as unidades. Contate o suporte.';
      }
    },

    async login() {
      this.errorMessage = '';
      if (!this.email || !this.password) {
        this.errorMessage = 'Email ou senha não preenchidos!';
        return;
      }

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/v1/login', {
          email: this.email,
          password: this.password,
          remember_me: this.rememberMe,
        });

        const { token, user } = response.data;
        if (user.status == 0) {
          this.errorMessage = 'O usuário não está ativo! Contate o suporte.';
          return;
        }
        localStorage.setItem('authToken', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        this.$store.commit('login', this.email)
        this.$router.push('/produtos');
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.error;
        } else {
          this.errorMessage = 'Falha ao realizar o login!';
        }
     
      }
    },
  },
};
</script>

