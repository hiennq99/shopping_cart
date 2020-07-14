<template>
    <div>
        <div id="google-signin-btn"></div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions({
            login: "authenticate/login"
        }),
        async onSignIn(googleUser) {
            await this.login(googleUser.getAuthResponse().access_token)
        }
    },
    mounted() {
        gapi.signin2.render("google-signin-btn", {
            onsuccess: this.onSignIn
        });
    }
};
</script>

<style></style>
