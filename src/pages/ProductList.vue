<template>
    <section>
        <h1 class="display-4 my-5">{{ $t("nav.product") }}</h1>
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
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            products: null
        };
    },
    computed: {
        ...mapState({
            position: state => state.display.position
        })
    },
    async created() {
        await this.fetchData(this.$route.query);
    },
    methods: {
        ...mapActions({
            getProducts: "product/getProducts"
        }),
        ...mapMutations({
            setPosition: "display/setPosition"
        }),
        async fetchData(query) {
            const data = await this.getProducts(query);
            if (data) {
                this.products = data.data || [];
                this.$root.$emit("triggerScroll");
            }
        }
    },
    beforeRouteLeave(to, from, next) {
        this.setPosition(window.pageYOffset);
        next();
    }
};
</script>
