<template>
    <div>
        list product
    </div>
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
        await this.fetchData(this.$route.query);
    },
    methods: {
        ...mapActions({
            getProductList: "product/getProductList"
        }),
        async fetchData(query) {
            const data = await this.getProductList(query);

            if (data) {
                this.productList = data.data;
            }
        }
    }
};
</script>

<style></style>
