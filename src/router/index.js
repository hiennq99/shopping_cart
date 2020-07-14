import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import ListProduct from "@/pages/listproduct";

Vue.use(Router);

export default new Router({
    routes: [
        {
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
            path: "*",
            name: "NotFound",
            component: NotFound
        },
    ]
});
