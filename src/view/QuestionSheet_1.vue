<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <v-text-field v-model="inputName" label="이름"></v-text-field>
                <v-row>
                    <v-col><v-text-field v-model="inputFrontPIN" label="주민번호 앞자리"></v-text-field></v-col>
                    <v-col><v-text-field v-model="inputBackPIN" label="주민번호 뒷자리" type="password"></v-text-field></v-col>
                </v-row>
                <br />
                <v-btn @click="saveToVuex"><router-link to="/question/2">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            inputName: '',
            inputFrontPIN: '',
            inputBackPIN: ''
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateName', this.inputName)
            store.commit('updatePIN', this.inputFrontPIN + '-' + this.inputBackPIN)
            console.log('저장 결과:', this.$store.state.questionData)
        }
    },
}
</script>