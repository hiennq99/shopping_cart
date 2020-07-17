<template>
    <div class="container">
        <GoogleLogin
            :params="params"
            :onSuccess="onSuccess"
            :renderParams="renderParams"
        >
            Login with Google
        </GoogleLogin>
    </div>
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
            }
        };
    },
    methods: {
        ...mapActions({
            login: "authenticate/login"
        }),
        async onSuccess(googleUser) {
            await this.login(googleUser.getAuthResponse().access_token);
        }
    }
};
</script>
