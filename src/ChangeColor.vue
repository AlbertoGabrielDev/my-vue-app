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
  props: {
    initialTheme: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    return {
      selectedTheme: this.initialTheme,
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
    saveTheme(){
        localStorage.setItem('colorScheme', this.initialTheme)
    },
    loadTheme(){
        const savedColorScheme = localStorage.getItem('colorScheme');
        if (savedColorScheme) {
            this.colorScheme = savedColorScheme;
        }
    }
  },
  created(){
    this.loadTheme();
  },
 
};
</script>

<style scoped>
.theme-selector {
  margin: 20px;
}
</style>
