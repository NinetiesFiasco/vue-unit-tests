import { shallowMount, mount } from "@vue/test-utils"
import JustText from '../JustText.vue'

test('App renders text correctly', () => {
  const wrapper = shallowMount(JustText)
  expect(wrapper.text()).toMatch('Just text')
})

test('App renders substring correctly', () => {
  const wrapper = mount(JustText)
  expect(wrapper.text()).toContain('Just')
})