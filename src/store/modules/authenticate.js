import apis from "@/utils/apis";

const state = {
    accessToken: window.localStorage.getItem("access_token") || null,
    userInfo: null
};

const getters = {
    loggedIn(state) {
        return state.accessToken !== null;
    }
};

const actions = {
    async loginWithGoogle(ctx, token) {
        try {
            const response = await this.$axios.post(apis.loginWithGoogle, {
                token
            });
            const result = response.data.data;

            ctx.commit("setAccessToken", result.data.access_token);
            ctx.commit("setUserInfo", result.data.user);
        } catch (error) {
            return { error };
        }
    },
    async login(ctx, { email, password }) {
        try {
            const response = await this.$axios.post(apis.login, {
                email,
                password
            });
            const token = response.data.access_token;
            window.localStorage.setItem("access_token", token);
            ctx.commit("setAccessToken", token);
            return response;
        } catch (error) {
            return { error };
        }
    },
    async logout(ctx) {
        try {
            ctx.commit("setAccessToken", null);
            window.localStorage.removeItem("access_token");
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
