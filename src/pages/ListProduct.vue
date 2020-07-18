<template>
    <section>
        <h1 class="is-size-4 mb-5">{{ $t("nav.product") }}</h1>
        <template v-if="products">
            <div class="table-container" v-if="products.length">
                <table class="table">
                    <tbody>
                        <tr v-for="item in products" :key="item.id">
                            <td>{{ item.title }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                {{ $t("empty") }}
            </div>
        </template>
    </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            products: null
        };
    },
    async created() {
        await this.fetchData(this.$route.query);
    },
    methods: {
        ...mapActions({
            getProducts: "product/getProducts"
        }),
        async fetchData(query) {
            const data = await this.getProducts(query);
            if (data) {
                this.products = data.data || [];
            }
        }
    }
};
</script>
