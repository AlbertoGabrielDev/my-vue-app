import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import CoreuiVue from '@coreui/vue';
import { CAlert, CSidebar, CSidebarHeader, CSidebarNav, CNavItem, CNavTitle, CIcon } from '@coreui/vue';
import { cilMenu, cilSpeedometer, cilPuzzle, cilCloudDownload, cilLayers } from '@coreui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import ChangeColor from './ChangeColor.vue';
import '/public/css/layout.css';
import auth from './store/module/auth';

const app = createApp(App);

app.use(router);
app.use(CoreuiVue);
app.use(auth) ;
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

