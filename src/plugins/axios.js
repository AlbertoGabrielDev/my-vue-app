import axios from 'axios';

const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
if (csrfTokenMeta) {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfTokenMeta.getAttribute('content');
}

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Substitua pela URL base da sua API
  timeout: 10000, // Tempo limite da requisição em milissegundos
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
