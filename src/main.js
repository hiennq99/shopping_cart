import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// axios
import axios from "@/utils/axios";
Vue.prototype.$axios = axios;

// i18n
import i18n from "@/utils/i18n";

new Vue({
    el: "#app",
    router,
    store,
    i18n,
    components: { App },
    template: "<App/>"
});

export default app;
