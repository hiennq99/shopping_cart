<template>
    <div id="app">
        <component :is="layout"></component>
        <loading></loading>
    </div>
</template>

<script>
import Default from "@/layouts/Default";
import Loading from "@/components/Loading";

export default {
    name: "App",
    components: {
        Default,
        Loading
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "Default";
        }
    }
};
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
