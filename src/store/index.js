import {createStore} from 'vuex'
// 상태를 저장(새로고침해도 안바뀜)
import createPersistedState from "vuex-persistedstate";
// import Vuex from 'vuex'

const store = createStore({
    state: {
        // 처음에 로그인 안한 상태
        loggedIn: false,
        questionData: {
            inputName: '',
            inputPIN: '',
            seletedFirstQuestion: '',
            selectedFirstIllness: '',
            selectedSecondQuestion: '',
            selectedSecondIllness: '',
            selectedThirdQuestion: '',
            selectedThirdIllness: '',
            selectedForthQuestion: '',
            selectedForthIllness: '',
            selectedFifthQuestion: '',
            selectedFifthIllness: '',
            selectedSixthQuestion: '',
            selectedSixthIllness: '',
            selectedSeventhQuestion: '',
            selectedSeventhIllness: '',
            selectedEighthQuestion: '',
            selectedEighthIllness: '',
            selectedNinthQuestion: '',
            selectedNinthIllness: '',
            selectedTenthQuestion: '',
            selectedTenthIllness: '',
            selectedEleventhQuestion: '',
            selectedEleventhIllness: ''
        }
    },
    mutations: {
        // 로그인 
        setLoggedIn(state, value) {
            state.loggedIn = value;
        },
        setLoggedOut(state) {
            state.loggedIn = false;
        },

        updateName(state, newName) {
            state.questionData.inputName = newName
        },
        updatePIN(state, newPIN) {
            state.questionData.inputPIN = newPIN
        },

        updateFirstQuestion(state, newFirstQuestion) {
            state.questionData.seletedFirstQuestion = newFirstQuestion
        },
        updateFirstIllness(state, newFirstIllness) {
            state.questionData.selectedFirstIllness = newFirstIllness
        },

        updateSecondQuestion(state, newSecondQuestion) {
            state.questionData.selectedSecondQuestion = newSecondQuestion
        },
        updateSecondIllness(state, newSecondIllness) {
            state.questionData.selectedSecondIllness = newSecondIllness
        },

        updateThirdQuestion(state, newThirdQuestion) {
            state.questionData.selectedThirdQuestion = newThirdQuestion
        },
        updateThirdIllness(state, newThirdIllness) {
            state.questionData.selectedThirdIllness = newThirdIllness
        },

        updateForthQuestion(state, newForthQuestion) {
            state.questionData.selectedForthQuestion = newForthQuestion
        },
        updateForthIllness(state, newForthIllness) {
            state.questionData.selectedForthIllness = newForthIllness
        },

        updateFifthQuestion(state, newFifthQuestion) {
            state.questionData.selectedFifthQuestion = newFifthQuestion
        },
        updateFifthIllness(state, newFifthIllness) {
            state.questionData.selectedFifthIllness = newFifthIllness
        },

        updateSixthQuestion(state, newSixthQuestion) {
            state.questionData.selectedSixthQuestion = newSixthQuestion
        },
        updateSixthIllness(state, nexSixthIllness) {
            state.questionData.selectedSixthIllness = nexSixthIllness
        },

        updateSeventhQuestion(state, newSeventhQuestion) {
            state.questionData.selectedSeventhQuestion = newSeventhQuestion
        },
        updateSeventhIllness(state, newSeventhIllness) {
            state.questionData.selectedSeventhIllness = newSeventhIllness
        },

        updateEighthQuestion(state, newEighthQuestion) {
            state.questionData.selectedEighthQuestion = newEighthQuestion
        },
        updateEighthIllness(state, newEighthIllness) {
            state.questionData.selectedEighthIllness = newEighthIllness
        },

        updateNinthQuestion(state, newNinthQuestion) {
            state.questionData.selectedNinthQuestion = newNinthQuestion
        },
        updateNinthIllness(state, newNinthIllness) {
            state.questionData.selectedNinthIllness = newNinthIllness
        },

        updateTenthQuestion(state, newTenthQuestion) {
            state.questionData.selectedTenthQuestion= newTenthQuestion
        },
        updateTenthIllness(state, newTenthIllness) {
            state.questionData.selectedTenthIllness = newTenthIllness
        },

        updateEleventhQuestion(state, newEleventhQuestion) {
            state.questionData.selectedEleventhQuestion = newEleventhQuestion
        },
        updateEleventhIllness(state, newEleventhIllness) {
            state.questionData.selectedEleventhIllness = newEleventhIllness
        }
    },
    plugins: [ createPersistedState ({
        paths: ["loggedIn"]
    })]
})

export default store