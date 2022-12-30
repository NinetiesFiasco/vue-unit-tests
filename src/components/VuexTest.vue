<template>
  <div>Vuex test</div>

  <button @click="toggle">Toggle</button>
  <div
    v-if="value"
    data-testid="flicker-div"
  >My flicker div</div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'VuexTest',
  computed: {
    ...mapGetters({
      value: 'testing/value'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'testing/toggle'
    })
  }

}
</script>

<style scoped>

</style>