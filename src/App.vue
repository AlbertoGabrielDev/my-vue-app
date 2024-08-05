<template>
  <div id="app">
    <button @click="toggleSidebar" class="btn btn-primary menu">
      <CIcon customClassName="nav-icon" :icon="icons.cilMenu" />
    </button>

    <CSidebar :color-scheme="colorScheme" class="simplebar-scrollable-y sidebar sidebar-fixed border-end" :visible="sidebarVisible" @visible-change="sidebarVisible = $event">
      <CSidebarHeader class="border-bottom">
        <CSidebarBrand>CUI</CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="/produtos">
          <CIcon :icon="icons.cilSpeedometer" customClassName="nav-icon"/> Produtos
        </CNavItem>
        <CNavItem href="#">
          <CIcon :icon="icons.cilSpeedometer" customClassName="nav-icon"/> With badge
          <CBadge class="ms-auto" color="primary">NEW</CBadge>
        </CNavItem>
        <CNavGroup>
          <template #togglerContent>
            <CIcon :icon="icons.cilPuzzle" customClassName="nav-icon"/> Nav dropdown
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
            <CIcon :icon="icons.cilPuzzle" customClassName="nav-icon"/> Nav dropdown2
          </template>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
          </CNavItem>
          <CNavItem href="#">
            <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
          </CNavItem>
        </CNavGroup>
        <CNavItem href="https://coreui.io">
          <CIcon :icon="icons.cilCloudDownload" customClassName="nav-icon" /> Download CoreUI
        </CNavItem>    
        <CNavItem href="https://coreui.io/pro/">
          <CIcon :icon="icons.cilLayers" customClassName="nav-icon" /> Try CoreUI PRO
        </CNavItem>
      </CSidebarNav>
    </CSidebar>

    <!-- Navbar -->
    <CContainer fluid :class="navbarClass">
      <CNavbar expand :color-scheme="colorScheme" :color="colorScheme"   >
          <CNavbarBrand href="#">Iniciar</CNavbarBrand>
          <CCollapse class="navbar-collapse" :visible="visible">
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="#" active>
                  Home
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="#">Link</CNavLink>
              </CNavItem>
              <ChangeColor :initialTheme="colorScheme" @theme-changed="updateTheme" />
              <CNavItem>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm class="d-flex">
              <CFormInput type="search" class="me-2" placeholder="Search"/>
              <CButton type="submit" color="success" variant="outline">Search</CButton>
            </CForm>
          </CCollapse>
        </CNavbar>
      </CContainer>

    <router-view :color-scheme="colorScheme" :sidebar-visible="sidebarVisible" />
  </div>
</template>

<script>
import { CSidebar, CSidebarHeader, CSidebarNav, CNavItem, CNavTitle, CIcon, CBadge, CSidebarBrand, CNavGroup } from '@coreui/vue';
import { cilMenu, cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';
import ChangeColor from './ChangeColor.vue';

export default {
  name: 'App',
  components: {
    CSidebar,
    CSidebarHeader,
    CSidebarNav,
    CNavItem,
    CNavTitle,
    CIcon,
    CBadge,
    CSidebarBrand,
    CNavGroup,
    ChangeColor,
  },
  data() {
    return {
      sidebarVisible: false,
      colorScheme: 'dark',
      visible: true,
      icons: {
        cilMenu,
        cilSpeedometer,
        cilPuzzle,
        cilCloudDownload,
        cilLayers,
      },
    };
  },
  computed: {
    navbarClass() {
      return this.sidebarVisible ? 'navbar-collapsed' : 'navbar-expanded'; 
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    updateTheme(theme) {
      this.colorScheme = theme;
    },
  },
};
</script>

<style scoped>
.navbar-expanded {
  width: 100%;
  transition: width 0.3s;
}
.navbar-collapsed {
  width: calc(100% - 250px); /* Assuming sidebar width is 250px */
  transition: width 0.3s;
  position: relative;
  left: 120px;
}

@media (max-width: 768px) {
  .navbar-collapsed {
    width: 100%;
  }
}
</style>