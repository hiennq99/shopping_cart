import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getProducts(ctx, params) {
        try {
            const response = await this.$axios.get(apis.productList, {
                params
            });
            return response;
        } catch (error) {
            return { error };
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
