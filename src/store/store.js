import {createStore} from 'vuex'
import testing from './testing'

const storeBody = {
  modules: {
    testing
  }
}

const store = createStore(storeBody)

export {storeBody}

export default store
