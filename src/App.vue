<template>
    <div id="app">
        <component :is="layout"></component>
    </div>
</template>

<script>
import Default from "@/layouts/Default";
export default {
    name: "App",
    components: {
        Default
    },
    computed: {
        layout() {
            return this.$route.meta.layout || "Default";
        }
    }
};
</script>

<style lang="scss"></style>
