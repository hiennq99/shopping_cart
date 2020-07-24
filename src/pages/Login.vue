<template>
    <section>
        <h1 class="display-4 my-5">{{ $t("nav.login") }}</h1>
        <div class="mb-5" style="max-width: 400px">
            <div class="form-group">
                <label for="email">{{ $t("form.email") }}</label>
                <input
                    type="text"
                    :placeholder="$t('placeholder.email')"
                    v-model="form.email"
                    class="form-control"
                    id="email"
                />
            </div>
            <div class="form-group">
                <label for="password">{{ $t("form.password") }}</label>
                <input
                    type="password"
                    :placeholder="$t('placeholder.password')"
                    v-model="form.password"
                    class="form-control"
                    id="password"
                />
            </div>
            <div class="my-2">
                <button class="btn btn-info btn-sm" @click="hanleLogin">
                    {{ $t("btn.login") }}
                </button>
                <button class="btn btn-danger btn-sm" @click="handleReset">
                    {{ $t("btn.reset") }}
                </button>
            </div>
        </div>
        <GoogleLogin
            :params="params"
            :onSuccess="onSuccess"
            class="btn btn-outline-danger"
        >
            Login with Google
        </GoogleLogin>
    </section>
</template>

<script>
import GoogleLogin from "vue-google-login";
import { mapActions } from "vuex";

export default {
    components: {
        GoogleLogin
    },
    data() {
        return {
            params: {
                client_id: process.env.GOOGLE_CLIENT_ID
            },
            renderParams: {
                width: 200,
                height: 40,
                longtitle: true
            },
            form: {
                email: "tungdd98@gmail.com",
                password: "123"
            }
        };
    },
    methods: {
        ...mapActions({
            loginWithGoogle: "authenticate/loginWithGoogle",
            login: "authenticate/login"
        }),
        async onSuccess(googleUser) {
            await this.loginWithGoogle(
                googleUser.getAuthResponse().access_token
            );
        },
        async hanleLogin() {
            const data = await this.login(this.form);
            this.$router.push("/");
        },
        handleReset() {
            this.form.email = "";
            this.form.password = "";
        }
    }
};
</script>
