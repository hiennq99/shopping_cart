import apis from "@/utils/apis";

const state = {};

const getters = {};

const mutations = {};

const actions = {
    async getProducts(ctx, query) {
        try {
            const response = await this.$axios.get(apis.productList, {
                params: {
                    ...query,
                    // _page: query._page || 1
                }
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