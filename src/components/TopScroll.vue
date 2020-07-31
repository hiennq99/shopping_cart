<template>
    <div
        v-if="showArrayTop"
        class="array-top border d-flex justify-content-center align-items-center cursor-pointer"
    >
        <a href="#"
            ><i class="las la-angle-double-up text-white font-32"></i
        ></a>
    </div>
</template>

<script>
export default {
    name: "top-scroll",
    data() {
        return {
            showArrayTop: false
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        // window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            if (window.pageYOffset > 300) {
                this.showArrayTop = true;
            } else {
                this.showArrayTop = false;
            }
        }
    }
};
</script>

<style>
.array-top {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 10px;
}
</style>
