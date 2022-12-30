
import {mount} from '@vue/test-utils'
import { storeBody } from '../../store/store'
import { createStore } from 'vuex'

import VuexTest from '../VuexTest.vue'



test('vuex', async () => {
  const store = createStore(storeBody)
  const wrapper = mount(VuexTest, {
    global: {
      plugins: [store]
    }
  })

  await wrapper.find('button').trigger('click')

  expect(wrapper.html()).toContain('My flicker div')
})

test('just commit', () => {
  const store = createStore(storeBody)
  store.commit('testing/toggle')
  console.log(store.state)
  expect(store.state.testing.value).toBe(true)
})
