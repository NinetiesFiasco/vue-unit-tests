<template>
  <div>{{ truncate }}</div>
</template>

<script>
export default {
  name: 'TruncateFunction',
  props: {
    text: {type: String,  default: ''}
  },
  computed: {
    truncate() {
      return this.text && this.text.length > 10
        ? `${this.text.slice(0, 10)}...`
        : this.text
    }
  }  
}
</script>

<style scoped>

</style>