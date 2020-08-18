import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentView: null,
        views: [],
        score: 0,
        highScores: []
    },
    mutations: {
        updateScore(state, points){
            state.score += parseInt(points)
        },
        updateView(state, view){
            state.currentView = view
        }
    },
    getters: {
        score: state => state.score  
    }
})

export default store