<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    1. 오늘 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br />
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedFirstQuestion" inline>
                    <v-radio value="해당없음" label="해당없음" ></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedFirstQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.hungry" value="공복" label="공복"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.mestruation" value="생리중" label="생리중"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.shortSleep" value="수면부족" label="수면부족"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.drunken" value="음주" label="음주"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.fatigue" value="피로" label="피로"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFirstIllness.bloodSymptom" value="헌혈관련증상" label="헌혈관련증상"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/4">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedFirstQuestion: '',
            selectedFirstIllness: {
                hungry: '',
                mestruation: '',
                shortSleep: '',
                drunken: '',
                fatigue: '',
                bloodSymptom: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateFirstQuestion', this.selectedFirstQuestion)
            store.commit('updateFirstIllness', this.selectedFirstIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>