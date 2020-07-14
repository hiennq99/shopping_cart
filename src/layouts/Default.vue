<template>
    <div class="py-5 px-5">
        <div class="columns">
            <div class="column is-one-quarter">
                <aside class="menu">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/products">Products</router-link>
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
export default {
};
</script>

<style></style>
