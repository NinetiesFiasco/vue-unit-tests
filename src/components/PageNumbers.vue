<template>
  <div>
    <div>Page number {{ pageNumber }}</div>
    <div v-for="index in 10" :key="index">
      {{ index }}
      <button
        :index="index"
        :id="`button-${index}`"
        :data-testid="`button-${index}`"
        @click="goToPage"
      >Go to Page {{ index }}</button>
    </div>
  </div>
</template>

<script>
export default {
  numbers: 'PageNumbers',
  computed: {
    pageNumber() {
      return this.$route.params.page;
    }
  },
  methods: {
    goToPage(e) {
      const index = parseInt(e.target.getAttribute('index'))
      this.$router.push(`/page-numbers/${index}`)
    }
  }
}
</script>

<style scoped>

</style>