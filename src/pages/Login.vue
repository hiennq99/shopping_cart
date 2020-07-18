<template>
    <section class="columns">
        <div class="column is-half is-offset-one-quarter">
            <h1 class="is-size-4 mb-5">{{ $t("nav.login") }}</h1>
            <div class="mb-5">
                <div class="field">
                    <label class="label">{{ $t("form.email") }}</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="Email"
                            v-model="form.email"
                        />
                    </div>
                </div>
                <div class="field">
                    <label class="label">{{ $t("form.password") }}</label>
                    <div class="control">
                        <input
                            class="input"
                            type="password"
                            placeholder="Password"
                            v-model="form.password"
                        />
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" @click="hanleLogin">
                            {{ $t("btn.login") }}
                        </button>
                    </div>
                    <div class="control">
                        <button
                            class="button is-link is-light"
                            @click="handleReset"
                        >
                            {{ $t("btn.reset") }}
                        </button>
                    </div>
                </div>
            </div>
            <GoogleLogin
                :params="params"
                :onSuccess="onSuccess"
                class="button is-danger is-rounded"
            >
                Login with Google
            </GoogleLogin>
        </div>
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
            this.$router.push(this.$i18nRoute({ name: "Home" }));
        },
        handleReset() {
            this.form.email = "";
            this.form.password = "";
        }
    }
};
</script>
