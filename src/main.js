import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./index.css";

import ListPage from "./pages/ListPage.vue";
import WelcomePage from "./pages/WelcomePage.vue";

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/list", component: ListPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
