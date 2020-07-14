<template>
  <div>
    <a :href="url">
      slot
      <slot></slot>
    </a>
      <button type="submit">
        <slot>submit</slot>
      </button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      url: "/products"
    }
  }
    
}
</script>

<style lang="scss" scoped>

</style>