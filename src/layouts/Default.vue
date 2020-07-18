<template>
    <div class="hero">
        <div class="columns">
            <div class="column is-one-quarter has-background-light">
                <aside class="menu px-5">
                    <div class="pt-5">
                        <select-language></select-language>
                    </div>
                    <p class="menu-label">
                        {{ $t("nav.general") }}
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link :to="$i18nRoute({ name: 'Home' })">{{
                                $t("nav.home")
                            }}</router-link>
                        </li>
                        <li>
                            <router-link
                                :to="$i18nRoute({ name: 'ListProduct' })"
                                >{{ $t("nav.product") }}</router-link
                            >
                        </li>
                        <li v-if="!loggedIn">
                            <router-link :to="$i18nRoute({ name: 'Login' })">{{
                                $t("nav.login")
                            }}</router-link>
                        </li>
                        <li v-if="loggedIn">
                            <a href="javascript:;" @click="handleLogout">{{
                                $t("nav.logout")
                            }}</a>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <section class="section">
                    <router-view></router-view>
                </section>
            </div>
        </div>
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
