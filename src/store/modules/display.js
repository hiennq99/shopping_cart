const state = {
    isLoading: false
};

const getters = {};

const mutations = {
    setLoading(state, data) {
        state.isLoading = data;
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
