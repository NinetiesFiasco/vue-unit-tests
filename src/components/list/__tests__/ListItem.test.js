import { shallowMount } from "@vue/test-utils"
import ListItem from '../ListItem.vue'

test('Simple list works good', () => {
  const wrapper = shallowMount(ListItem, {
    propsData: {
      title: 'my test title',
      description: 'my test description'
    }
  })

  expect(wrapper.text()).toMatch('my test title')
  expect(wrapper.text()).toMatch('my test description')
})