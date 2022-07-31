import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import { createVuestic } from 'vuestic-ui';

//import store from "./store";

const app = createApp(App);
app.use(createVuestic())
//app.use(store);

app.use(router);

app.mount("#app");


