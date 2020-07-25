<template>
    <div class="sp-home">
        <header class="sp-navbar bg-light py-3 shadow sticky-top">
            <div
                class="sp-navbar-toggle d-lg-none border flex-center rounded"
                @click="handleShowMenuMobile"
            >
                <i class="las la-bars cursor-pointer font-20"></i>
            </div>
            <div class="container position-relative">
                <nav
                    class="d-flex justify-content-lg-between justify-content-end align-items-center"
                >
                    <router-link
                        to="/"
                        class="sp-navbar-brand pr-lg-5 position-center"
                    >
                        <img src="@/assets/logo.png" alt="" />
                    </router-link>
                    <transition name="slide">
                        <div
                            class="sp-navbar-nav d-flex bg-light shadow flex-column flex-lg-row"
                        >
                            <router-link
                                to="/"
                                class="sp-navbar-nav__item d-block"
                            >
                                <span>{{ $t("nav.food") }}</span>
                            </router-link>
                            <router-link
                                to="/products"
                                class="sp-navbar-nav__item d-block"
                            >
                                {{ $t("nav.book") }}
                            </router-link>
                            <router-link
                                to="/flowers"
                                class="sp-navbar-nav__item d-block"
                            >
                                {{ $t("nav.flower") }}
                            </router-link>
                            <router-link
                                to="/medicines"
                                class="sp-navbar-nav__item d-block"
                            >
                                {{ $t("nav.medicine") }}
                            </router-link>
                        </div>
                    </transition>
                    <div class="d-flex align-items-center">
                        <i class="las la-search cursor-pointer font-20"></i>
                        <router-link
                            to="/login"
                            class="btn btn-outline-danger btn-sm ml-2 rounded-pill"
                        >
                            {{ $t("nav.login") }}
                        </router-link>
                    </div>
                </nav>
            </div>
        </header>
        <main class="container-fluid">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import SelectLanguage from "@/components/SelectLanguage";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        SelectLanguage
    },
    computed: {
        ...mapGetters({
            loggedIn: "authenticate/loggedIn"
        })
    },
    methods: {
        ...mapActions({
            logout: "authenticate/logout"
        }),
        handleLogout() {
            this.logout();
            this.$router.push("/login");
        },
        handleShowMenuMobile() {}
    }
};
</script>
<style lang="scss">
.slide {
    transition: transform 0.5s ease;
    transform: translateX(300px);
}
</style>
