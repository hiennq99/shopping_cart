import Vue from "vue";
import VueI18n from "vue-i18n";
import vi from "@/lang/vi.json";

Vue.use(VueI18n);

const loadLocaleMessages = () => {
    const locales = require.context(
        "@/lang",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
};

export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || "vi",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "vi",
    messages: loadLocaleMessages()
});
