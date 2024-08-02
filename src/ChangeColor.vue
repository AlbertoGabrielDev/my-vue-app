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
       
        this.changeTheme(); 
      },
      changeTheme() {
        this.$emit('theme-changed', this.selectedTheme);
      },
    },
   
  };
  </script>
  
  <style scoped>
  .theme-selector {
    margin: 20px;
  }
  </style>
  