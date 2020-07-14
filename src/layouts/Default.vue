<template>
    <div class="sp-container-fluid">
        <ul>
            <li>
                <router-link to="/" ></router-link>
            </li>
            <li>
                <router-link to="/products">Products</router-link>
            </li>
            <li>
                <router-link to="/categories">Categories</router-link>
            </li>
            <li>
                <router-link to="/examples">examples</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
};
</script>

<style></style>
