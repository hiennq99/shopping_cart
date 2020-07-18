import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import axios from "@/utils/axios";
import { loadLanguageAsync } from "@/utils/i18n.js";

const load = component => {
    return () => import(`@/pages/${component}.vue`);
};

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "/:lang",
            name: "Home",
            component: load("Home")
        },
        {
            path: "/:lang/products",
            name: "ListProduct",
            component: load("ListProduct"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/:lang/login",
            name: "Login",
            component: load("Login"),
            meta: {
                requiresVisitor: true
            }
        },
        {
            path: "*",
            name: "NotFound",
            component: load("404")
        }
    ]
});

router.beforeEach((to, from, next) => {
    const lang = to.params.lang || process.env.VUE_APP_I18N_LOCALE || "vi";
    const loggedIn = store.getters["authenticate/loggedIn"];

    if (to.matched.some(record => record.meta.requiresAuth)) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " + store.state.authenticate.accessToken;
        if (!loggedIn) {
            loadLanguageAsync(lang).then(() => next({ name: "Login" }));
        } else {
            loadLanguageAsync(lang).then(() => next());
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (loggedIn) {
            loadLanguageAsync(lang).then(() => next({ name: "Home" }));
        } else {
            loadLanguageAsync(lang).then(() => next());
        }
    } else {
        loadLanguageAsync(lang).then(() => next());
    }
});

export default router;
