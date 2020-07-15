"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    VUE_APP_I18N_LOCALE: '"vi"',
    VUE_APP_I18N_FALLBACK_LOCALE: '"vi"',
    GOOGLE_CLIENT_ID:
        '"273459943253-t2a7tn3m6q5nfh1ttubcbu43ubdq5gcv.apps.googleusercontent.com"',
    API_BASE_URL: '"http://192.168.1.133:800/api"'
});
