<template>
  <div>
    <div>Hi here</div><br>
  
    <router-link to="/">Start</router-link>
    <router-link to="/just-text">Just text</router-link>
    <router-link to="/simple-list">Simple List</router-link>
    <router-link to="/truncate-function">Truncate Function</router-link>
    <router-link to="/page-numbers/1" data-testid="test-click">Page numbers</router-link>
    <router-link to="/vuex-test">Vuex test</router-link>

    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

