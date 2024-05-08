<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    3. 최근 1주일 이내 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br />
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedThirdQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedThirdQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedThirdIllness.medicine" value="약물 복용" label="약물 복용"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedThirdIllness.injection" value="주사" label="주사"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/6">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedThirdQuestion: '',
            selectedThirdIllness: {
                medicine: '',
                injection: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateThirdQuestion', this.selectedThirdQuestion)
            store.commit('updateThirdIllness', this.selectedThirdIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>