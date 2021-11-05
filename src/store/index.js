import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        page1: 'ค่า 1',
        page2: 'ค่า 2',
        count: 0,
    },
    mutations: {
        setPage1(state, playload) {
            state.page1 = playload
        },
        setPage2(state, playload) {
            state.page2 = playload
        },
        increment(state) {
            state.count++
        },
        setCount(state, playload) {
            state.count = playload
        }
    },
    getters: {
        getPage1(state) {
            return state.page1
        },
        getPage2(state) {
            return state.page2
        },
        getCount(state) {
            return state.count
        }
    },
    actions: {
        reduceAction(state) {
            state.commit('setCount', this.state.count - 1)
        }
    },
    modules: {},

})