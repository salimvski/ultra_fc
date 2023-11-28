import { createApp } from 'vue'; // Import createApp from 'vue' for Vue 3
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory for Vue Router in Vue 3
import App from './App.vue'
import './index.css'

import ContactVue from './components/ContactView.vue';
import SuperLeagueHomeView from './components/SuperLeagueHomeView.vue';
import HomeView from './components/HomeView.vue';
import TeamView from './components/TeamView.vue'

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactVue
    },
    {
      path: '/team',
      name: 'Team',
      component: TeamView
    },
    {
        path: '/superleague/home',
        name: 'superLeagueHome',
        component: SuperLeagueHomeView
      },
      {
        path: '/superleague/contact',
        name: 'superLeagueContact',
        component: ContactVue
      },
  ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
