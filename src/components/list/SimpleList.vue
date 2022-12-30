<template>
  <div>
    <template v-for="(item, key) of list" :key="key">
      <ListItem :title="item.title" :description="item.description" />
    </template>

    <div>
      Here we have two tests:
      <ul>
        <li>First test that we have rendered component ListItem with one entry with given title and description </li>
        <li>Second test that we have rendered component SimpleList with one entry of ListItem and we test just count</li>
      </ul>
      FYI
      <ul>
        <li>shallowMount renders only component without children, other way mount renders component with children </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'SimpleList',
  components: {ListItem},
  props: {
    list: {type: Array, default: () => [{
      title: 'my title',
      description: 'my description'
    },{
      title: 'my title 2',
      description: 'my description 2'
    }]}
  }
}
</script>

<style>

</style>