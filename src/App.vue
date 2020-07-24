<template>
    <div id="app">
        <router-view></router-view>
        <loading></loading>
    </div>
</template>

<script>
import Loading from "@/components/Loading";

export default {
    name: "App",
    components: {
        Loading
    }
};
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
