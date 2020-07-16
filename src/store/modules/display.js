import app from "@/main";

const state = {
    loading: false
};

const getters = {};

const mutations = {
    setLoading(state, data) {
        state.loading = data;
    }
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
