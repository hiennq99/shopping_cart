import Vue from "vue";
import Router from "vue-router";
import { loadLanguageAsync } from "@/utils/i18n-lazy.js";

const load = component => {
    return () => System.import(`@/pages/${component}.vue`);
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
            path: "/products",
            name: "ListProduct",
            component: load("ListProduct")
        },
        {
            path: "/login",
            name: "Login",
            component: load("Login")
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
    loadLanguageAsync(lang).then(() => next());
});

export default router;
