<template>
    <div class="control mb-5">
        <div class="select is-small">
            <select v-model="$i18n.locale">
                <option
                    v-for="(lang, i) in langs"
                    :key="`Lang${i}`"
                    :value="lang"
                    >{{ lang }}</option
                >
            </select>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { langs: ["vi", "en"] };
    }
};
</script>
