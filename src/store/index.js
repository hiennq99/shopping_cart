import Vue from "vue";
import Vuex from "vuex";
import axios from "@/utils/axios";

import display from "./modules/display";
import product from "./modules/product";

Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        display,
        product
    }
});

export default store;
