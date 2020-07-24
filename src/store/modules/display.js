const state = {
    loading: false,
    position: window.pageYOffset || 0
};

const getters = {};

const mutations = {
    setLoading(state, data) {
        state.loading = data;
    },
    setPosition(state, data) {
        state.position = data;
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
