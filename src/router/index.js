import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import ListProduct from "@/pages/listproduct";
import Category from "@/pages/Category"
import Example from "@/pages/Example"

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "*",
            name: "NotFound",
            component: NotFound
        },
        {
            path: "/products",
            name: "ListProduct",
            component: ListProduct
        },
        {
            path: "/categories",
            name: "Category",
            component: Category
        },
        {
            path: "/examples",
            name: "Example",
            component: Example
        }
    ]
});
