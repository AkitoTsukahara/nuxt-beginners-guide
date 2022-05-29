import Vuex from 'vuex'
import index from '~/store'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index.js', () => {
    let store

    beforeEach(() => {
        store = new Vuex.Store(cloneDeep(index))
    })

    describe('mutations', () => {
        test('increment ミューテーションがコミットされると、 count ステートの値が +1 される)', () => {
            const store = new Vuex.Store(cloneDeep(index))
            expect(store.getters['count']).toBe(0)
            store.commit('increment')
            expect(store.getters['count']).toBe(1)
          })
    })

    describe('actions', () => {
        test('increment アクションを dispatch するたびに、 increment ミューテーションがコミットされる', () => {
          const mutations = {
            increment: jest.fn()
          }
          const store = new Vuex.Store({ ...cloneDeep(index), mutations })
    
          store.dispatch('increment')
          expect(mutations.increment).toHaveBeenCalled()
        })
      })
})