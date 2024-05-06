import {createStore} from 'vuex'
// 상태를 저장(새로고침해도 안바뀜)
import createPersistedState from "vuex-persistedstate";
// import Vuex from 'vuex'

const store = createStore({
    state: {
        // 처음에 로그인 안한 상태
        loggedIn: false
    },
    mutations: {
        // 로그인 
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
        setLoggedOut(state) {
            state.loggedIn = false;
        }
    },
    plugins: [ createPersistedState ({
        paths: ["loggedIn"]
    })]
})

export default store