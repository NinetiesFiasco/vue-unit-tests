import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "../router"
import App from '../App.vue'
import PageNumbers from '../components/PageNumbers.vue'

test('routing start page', () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  })
  expect(wrapper.html()).toContain('<div>Hi here</div>')
})

describe('App', () => {
  it('renders component via routing', async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes
    })

    router.push('/page-numbers/5')
    await router.isReady()
    
    let wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    
    expect(wrapper.findComponent(PageNumbers).exists()).toBe(true)
    expect(wrapper.html()).toContain('Page number 5')
  })
})
