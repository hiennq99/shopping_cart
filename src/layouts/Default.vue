<template>
    <div class="">
        <div class="columns">
            <div class="column is-one-quarter has-background-light">
                <aside class="menu px-5">
                    <div class="pt-5">
                        <select-language></select-language>
                    </div>
                    <p class="menu-label">
                        Genaral
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link
                                :to="{
                                    name: 'Home',
                                    params: { lang: $i18n.locale }
                                }"
                                >{{ $t("home") }}</router-link
                            >
                        </li>
                        <li>
                            <router-link to="/products">{{
                                $t("product")
                            }}</router-link>
                        </li>
                        <li>
                            <router-link to="/login">{{
                                $t("login")
                            }}</router-link>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="column">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import SelectLanguage from "@/components/SelectLanguage";
export default {
    components: {
        SelectLanguage
    }
};
</script>
