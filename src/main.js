import { createApp, VueElement } from "vue";

import App from "./App.vue";

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import $bus from "./utils/Events";

import $pages from "./data";

import router from "./routes";

const app = createApp(App);

// Allow us to use plugins in our application
app.use(router);

// app.config.globalProperties.$bus = $bus;

// app.config.globalProperties.$pages = $pages;

// Provide then Inject in the needed component
app.provide("$pages", $pages);

app.provide("$bus", $bus);

app.mount("#app");
