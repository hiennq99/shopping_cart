<template>
    <a v-bind:href="url" class="nav-link">
        {{title}}
        HTML element
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style></style>
