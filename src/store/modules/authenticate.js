import apis from "@/utils/apis";

const state = {
    accessToken: null,
    userInfo: null
};

const getters = {};

const actions = {
    async login(ctx, token) {
        try {
            const response = await this.$axios.post(apis.login, {
                token
            });
            const result = response.data;
            if (result.status === 200) {
                ctx.commit("setAccessToken", result.data.access_token);
                ctx.commit("setUserInfo", result.data.user);
            }
        } catch (error) {
            return { error };
        }
    }
};

const mutations = {
    setAccessToken(state, data) {
        state.accessToken = data;
    },
    setUserInfo(state, data) {
        state.userInfo = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
