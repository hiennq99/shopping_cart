<template>
    <section class="container">
        <h1>List Product</h1>
    </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return {
            productList: []
        };
    },
    async created() {
        this.fetchData(this.$route.query).then(resp => {
            console.log(resp);
        });
    },
    methods: {
        ...mapActions({
            getProductList: "product/getProductList",
            getCategories: "product/getCategories"
        }),
        fetchData(query) {
            return Promise.all([
                this.getProductList(query),
                this.getCategories(query)
            ]);
        }
    }
};
</script>
