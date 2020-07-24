<template>
    <div class="sp-main">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <a class="navbar-brand" href="#">Logo</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">
                            {{ $t("nav.home") }}
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link">
                            {{ $t("nav.product") }}
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <router-link to="/login" class="nav-link">
                            {{ $t("nav.login") }}
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <a href="javascript:;" class="nav-link">
                            {{ $t("nav.logout") }}
                        </a>
                    </li>
                </ul>
            </div>
            <select-language></select-language>
        </nav>
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
            this.$router.push(this.$i18nRoute({ name: "Login" }));
        }
    }
};
</script>
