 <template>
    <div id="app">
      <button @click="toggleSidebar" class="btn btn-primary menu">
      <CIcon customClassName="nav-icon" icon="cil-menu" />
    </button>
      <router-view></router-view>
  <CSidebar class="simplebar-scrollable-y sidebar sidebar-dark sidebar-fixed border-end" :visible="sidebarVisible" @visible-change="sidebarVisible = $event">
  <CSidebarHeader class="border-bottom">
    <CSidebarBrand>CUI</CSidebarBrand>
  </CSidebarHeader>
  <CSidebarNav>
    <CNavTitle>Nav Title</CNavTitle>
    <CNavItem href="/produtos">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> Produtos
    </CNavItem>
    <CNavItem href="#">
      <CIcon  customClassName="nav-icon" icon="cil-speedometer"/> With badge
      <CBadge class="ms-auto" color="primary">NEW</CBadge>
    </CNavItem>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavGroup>
      <template #togglerContent>
        <CIcon  customClassName="nav-icon" icon="cil-puzzle"/> Nav dropdown2
      </template>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
      <CNavItem href="#">
        <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
      </CNavItem>
    </CNavGroup>
    <CNavItem href="https://coreui.io">
      <CIcon customClassName="nav-icon" icon="cil-cloud-download" /> Download CoreUI
    </CNavItem>
    <CNavItem href="https://coreui.io/pro/">
      <CIcon customClassName="nav-icon" icon="cil-layers" /> Try CoreUI PRO
    </CNavItem>
  </CSidebarNav>
</CSidebar>

</div>
</template> 


<script>


export default {
  name: 'App',

  data() {
    return {
      sidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible; // Alterna o estado do menu lateral
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  background-color: #212631;
}

.pagination {
  --cui-pagination-bg: #212631 !important;
  --cui-pagination-hover-bg: none !important;
}

.sidebar-nav,
.nav-link,
.sidebar-brand,
.nav-title {
  color: white !important;
}

/* Estilo para o botão de menu */
.menu {
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 2000;
  background-color: #007bff;
  border: none;
  padding: 10px;
  cursor: pointer;
}
</style>
