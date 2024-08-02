<template>
    <CDropdown variant="nav-item" :popper="false">
      <CDropdownToggle>Selecione a cor</CDropdownToggle>
      <CDropdownMenu color="secondary">
        <CDropdownItem @click="selectTheme('dark')">Escuro</CDropdownItem>
        <CDropdownItem @click="selectTheme('light')">Branco</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  </template>
  
  <script>
  export default {
    name: 'ChangeColor',
    data() {
      return {
        selectedTheme: 'light',
      };
    },
    methods: {
      selectTheme(theme) {
        this.selectedTheme = theme;
        this.saveTheme(); 
        this.changeTheme(); 
      },
      changeTheme() {
        this.$emit('theme-changed', this.selectedTheme);
      },
      saveTheme() {
        localStorage.setItem('colorScheme', this.selectedTheme); 
      },
      loadTheme() {
        const savedColorScheme = localStorage.getItem('colorScheme');
        if (savedColorScheme) {
          this.selectedTheme = savedColorScheme; 
          this.$emit('theme-changed', this.selectedTheme); 
        }
      }
    },
    created() {
      this.loadTheme(); 
    },
  };
  </script>
  
  <style scoped>
  .theme-selector {
    margin: 20px;
  }
  </style>
  