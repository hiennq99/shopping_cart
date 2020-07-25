import Vue from "vue";
import Router from "vue-router";
import store from "@/store";

Vue.use(Router);

const routes = [
    {
        path: "/",
        component: () => import("@/layouts/Default"),
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("@/pages/Home")
            },
            {
                path: "/products",
                name: "product-list",
                component: () => import("@/pages/ProductList"),
                meta: {
                    requiresAuth: true,
                    savedPosition: true
                }
            },
            {
                path: "/login",
                name: "login",
                component: () => import("@/pages/Login"),
                meta: {
                    requiresVisitor: true
                }
            }
        ]
    },
    {
        path: "*",
        name: "not-found",
        component: () => import("@/pages/404")
    }
];
const router = new Router({
    mode: "history",
    base: __dirname,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            if (to.matched.some(m => m.meta.savedPosition)) {
                return new Promise(resolve => {
                    this.app.$root.$once("triggerScroll", () => {
                        resolve({ x: 0, y: store.state.display.position });
                    });
                });
            }
        }
        return { x: 0, y: 0 };
    },
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters["authenticate/loggedIn"];

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!loggedIn) {
            next({
                name: "login",
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (loggedIn) {
            next({ name: "home" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
