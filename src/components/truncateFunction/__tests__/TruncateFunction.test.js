import { shallowMount } from "@vue/test-utils"
import TruncateFunction from '../TruncateFunction.vue'

test('App renders computed property as text', () => {
  const wrapper = shallowMount(TruncateFunction, {propsData: {text: 'my long text'}})
  expect(wrapper.text()).toMatch('my long te...')
})

test('App renders computed property directly', () => {
  const wrapper = shallowMount(TruncateFunction, {propsData: {text: 'my long text'}})
  expect(wrapper.componentVM.truncate).toBe('my long te...')
})
