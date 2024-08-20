<template>
  <CContainer fluid :class="containerClass">
    <CInputGroup class="mb-3">
      <CFormInput
        placeholder="Buscar produto..."
        aria-label="Buscar produto"
        v-model="searchQuery"
        @input="debouncedFetchFilteredProducts"
        aria-describedby="button-addon2"
      />
    </CInputGroup>

    <CTable striped :color="colorScheme">
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">COD. PRODUTO</CTableHeaderCell>
          <CTableHeaderCell scope="col">NOME PRODUTO</CTableHeaderCell>
          <CTableHeaderCell scope="col">DESCRIÇÃO</CTableHeaderCell>
          <CTableHeaderCell scope="col">UNIDADE DE MEDIDA</CTableHeaderCell>
          <CTableHeaderCell scope="col">INFOR. NUTRICIONAL</CTableHeaderCell>
          <CTableHeaderCell scope="col">EDITAR</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow v-for="produto in produtos" :key="produto.id_produto">
          <CTableHeaderCell scope="row">{{ produto.id_produto }}</CTableHeaderCell>
          <CTableDataCell>{{ produto.nome_produto }}</CTableDataCell>
          <CTableDataCell>{{ produto.descricao }}</CTableDataCell>
          <CTableDataCell>{{ produto.unidade_medida }}</CTableDataCell>
          <CTableDataCell>{{ produto.inf_nutrientes }}</CTableDataCell>
          <CTableDataCell>
            <CButton
              :color="produto.status ? 'danger' : 'success'"
              @click="toggleStatus(produto)"
            >
              {{ produto.status ? 'Inativar' : 'Ativar' }}
            </CButton>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>

    <CPagination aria-label="Page navigation example">
      <CPaginationItem
        aria-label="Previous"
        @click="previousPage"
      >
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      <CPaginationItem
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :active="currentPage === page"
      >
        {{ page }}
      </CPaginationItem>
      <CPaginationItem
        aria-label="Next"
        @click="nextPage"
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  </CContainer>
</template>

<script>
import axios from '@/plugins/axios';

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default {
  name: 'IndexProduto',
  props: {
    colorScheme: {
      type: String,
      default: 'dark',
    },
    sidebarVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      produtos: [],
      currentPage: 1,
      searchQuery: '',
      totalPages: 1,
    };
  },
  computed: {
    containerClass() {
      return this.sidebarVisible ? 'container-collapsed' : 'container-expanded'; 
    },
  },
  mounted() {
    this.loadProducts();
    this.debouncedFetchFilteredProducts = debounce(this.fetchFilteredProducts.bind(this), 500);
  },
  methods: {
    async loadProducts(page = 1) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/verdurao/produtos/index?page=${page}`);
        this.produtos = response.data.data;
        this.totalPages = Math.ceil(response.data.total / response.data.per_page);
        this.currentPage = page;
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      }
    },
    async fetchFilteredProducts() {
      if (this.searchQuery === '') {
        this.loadProducts();
        return;
      }
      try {
        const response = await axios.get(`http://127.0.0.1:8000/verdurao/produtos/buscar-produto`, {
          params: { nome_produto: this.searchQuery }
        });
        this.produtos = response.data.data;
        this.totalPages = response.data.total_pages || 1;
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    },
    async toggleStatus(produto) {
      try {
        const response = await axios.post(`http://127.0.0.1:8000/verdurao/produtos/status/${produto.id_produto}`);
        produto.status = response.data.status;
      } catch (error) {
        console.error('Erro ao alternar status do produto:', error);
      }
    },
    setPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.loadProducts(page);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.loadProducts(this.currentPage + 1);
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.loadProducts(this.currentPage - 1);
      }
    },
  },
};
</script>


<style scoped>
.container-expanded {
  width: 100%;
  transition: width 0.3s;
}
.container-collapsed {
  width: calc(100% - 250px);
  transition: width 0.3s;
  position: relative;
  left: 120px
}

@media (max-width: 768px) {
  .container-collapsed {
    width: 100%;
  }
}
</style>
