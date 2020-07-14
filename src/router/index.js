import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import ListProduct from "@/pages/listproduct";
import Login from "@/pages/Login";
Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/products",
            name: "ListProduct",
            component: ListProduct
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "*",
            name: "NotFound",
            component: NotFound
        }
       
    ]
});
