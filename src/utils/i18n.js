import Vue from "vue";
import VueI18n from "vue-i18n";
import vi from "@/lang/vi.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || "vi",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "vi",
    messages: {
        vi
    }
});

const loadedLanguages = ["vi"];

const setI18nLanguage = lang => {
    i18n.locale = lang;
    document.querySelector("html").setAttribute("lang", lang);
    return lang;
};

export const loadLanguageAsync = async lang => {
    if (i18n.locale === lang) {
        return Promise.resolve(setI18nLanguage(lang));
    }
    if (loadedLanguages.includes(lang)) {
        return Promise.resolve(setI18nLanguage(lang));
    }

    const messages = await import(
        /* webpackChunkName: "lang-[request]" */ `@/lang/${lang}.json`
    );
    i18n.setLocaleMessage(lang, messages);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
};

export const i18nRoute = to => {
    return {
        ...to,
        params: {
            lang: i18n.locale,
            ...to.params
        }
    };
};
