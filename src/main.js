import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// axios
import axios from "@/utils/axios";
Vue.prototype.$axios = axios;

new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});
