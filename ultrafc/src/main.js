import { createApp } from 'vue'; // Import createApp from 'vue' for Vue 3
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory for Vue Router in Vue 3
import App from './App.vue'
import './index.css'

import ContactVue from './components/ContactView.vue';
import BasePage from './components/BasePage.vue';

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode
  routes: [
    {
      path: '/',
      name: 'Home',
      component: BasePage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactVue
    },
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
