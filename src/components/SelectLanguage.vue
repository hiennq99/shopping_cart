<template>
    <div class="control mb-5">
        <div class="select is-small">
            <select :value="$i18n.locale" @input="switchLang">
                <option
                    v-for="(lang, i) in langs"
                    :key="`Lang${i}`"
                    :value="lang"
                    >{{ lang }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import { loadLanguageAsync } from "@/utils/i18n-lazy";
export default {
    data() {
        return { langs: ["vi", "en"] };
    },
    methods: {
        ...mapMutations({
            setLanguage: "display/setLanguage"
        }),
        switchLang(e) {
            const lang = e.target.value;
            if (this.$i18n.locale !== lang) {
                const to = this.$router.resolve({ params: { lang } });
                return loadLanguageAsync(lang).then(() => {
                    this.$router.push(to.location);
                });
            }
        }
    }
};
</script>
