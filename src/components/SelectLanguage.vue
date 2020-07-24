<template>
    <div class="form-group">
        <select v-model="$i18n.locale" class="form-control form-control-sm">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang"
                >{{ lang }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            langs: process.env.SUPPORT_LANGUAGE.split(",")
        };
    }
};
</script>
