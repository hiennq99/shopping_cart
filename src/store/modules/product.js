import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getProductList(ctx, params) {
        try {
            const response = await this.$axios.get(apis.productList, {
                params
            });
            return response;
        } catch (error) {
            return { error };
        }
    },
    async getCategories(ctx, params) {
        try {
            const response = await this.$axios.get(apis.category, {
                params
            });
            return response;
        } catch (error) {
            return { error };
        }
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
