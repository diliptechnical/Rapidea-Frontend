import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        config: {},
        showSlider: false
    },
    mutations: {
        getConfig(state, config) {
            state.config = config
            
        },
        isShowSlider(state, sliderStatus) {
            state.showSlider = sliderStatus
        }
    },
    gatters: {
        config: state => state.config,
        showSlider: state => state.showSlider
    }
})