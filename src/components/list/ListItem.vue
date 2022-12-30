<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    title: {type: String, default: ''},
    description: {type: String, default: ''}
  }
}
</script>

<style>

</style>