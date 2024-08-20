import { createApp } from 'vue';

import store from './store'; 
import App from './App.vue';
import router from './router';
import axios from 'axios';
import CoreuiVue from '@coreui/vue';
import { CAlert, CSidebar, CSidebarHeader, CSidebarNav, CNavItem, CNavTitle, CIcon } from '@coreui/vue';
import { cilMenu, cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import ChangeColor from './ChangeColor.vue';
import '/public/css/layout.css';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const app = createApp(App);

app.use(router);
app.use(store);
app.use(CoreuiVue);
app.component('CAlert', CAlert);
app.component('CSidebar', CSidebar);
app.component('CSidebarHeader', CSidebarHeader);
app.component('CSidebarNav', CSidebarNav);
app.component('CNavItem', CNavItem);
app.component('CNavTitle', CNavTitle);
app.component('CIcon', CIcon);
app.component('ChangeColor', ChangeColor);

app.provide('icons', { cilMenu, cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers });

app.mount('#app');
