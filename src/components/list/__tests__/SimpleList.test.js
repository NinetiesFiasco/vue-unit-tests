import { shallowMount, mount } from '@vue/test-utils'
import SimpleList from '../SimpleList.vue'
import ListItem from '../ListItem.vue'

test('SimpleList renders the right number of ListItem', () => {
  const wrapper = shallowMount(SimpleList, {
    propsData: {
      list: [{
        title: "my title",
        description: "my description"
      }]
    }
  })

  expect(wrapper.findAllComponents(ListItem)).toHaveLength(1) 
})

test('SimpleList renders passed title and description for each passed ListItem', () => {
  const wrapper = mount(SimpleList, {
    propsData: {
      list: [{
        title: "my title",
        description: "my description"
      },{
        title: "my title 2",
        description: "my description 2"
      }]
    }
  })

  const outputText = wrapper.text()
  expect(outputText).toContain('my title')
  expect(outputText).toContain('my description')
  expect(outputText).toContain('my title 2')
  expect(outputText).toContain('my description 2')
})

test('Snapshot test', () => {
  const wrapper = mount(SimpleList, {
    propsData: {
      list: [{
        title: "my title 3",
        description: "my description 3"
      },{
        title: "my title 4",
        description: "my description 4"
      }]
    }
  })

  expect(wrapper.text()).toMatchSnapshot()
})