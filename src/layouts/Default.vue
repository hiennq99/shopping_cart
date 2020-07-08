<template>
    <div class="sp-container-fluid">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/products">Products</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
