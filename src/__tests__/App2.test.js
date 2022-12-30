import {render, fireEvent} from '@testing-library/vue'
import '@testing-library/jest-dom'
import {waitFor} from '@testing-library/dom'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import {routes} from "../router"
//import PageNumbers from '../components/PageNumbers.vue'

test('routing', async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  const {findByText, getByTestId, getByText} = render(App, {
    global: {
      plugins: [router]
    }
  })

  expect(await findByText('Hi here')).toBeInTheDocument()
  expect(getByTestId('test-click')).toHaveTextContent('Page numbers')

  await fireEvent.click(getByTestId('test-click'))

  await waitFor(() => {
    expect(getByTestId('button-5')).toBeInTheDocument()
  })

  expect(getByText('Page number 1')).toBeInTheDocument()
  
  await fireEvent.click(getByTestId('button-7'))

  await waitFor(() => {
    expect(getByText('Page number 7')).toBeInTheDocument()
  })
  
})
