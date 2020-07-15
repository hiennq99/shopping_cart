import Vue from "vue";
import Router from "vue-router";

const load = component => {
    return () => System.import(`@/pages/${component}.vue`);
};

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
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
            component: load("NotFound")
        }
    ]
});
