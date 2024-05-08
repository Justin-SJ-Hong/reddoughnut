<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    11. 변종 크로이츠펠트-야콥병(v-CJD)
                    <br />
                    헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.
                </h4>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>감염병 및 vCJD 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/감염병 종류 및 vCJD 헌혈금지지역.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-radio-group v-model="selectedEleventhQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="거주/방문/여행" label="거주/방문/여행"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedEleventhQuestion === '거주/방문/여행'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedEleventhIllness.overOneMonthEngland" value="1980년~1996년까지 1개월 이상 영국 거주/방문/여행" label="1980년~1996년까지 1개월 이상 영국 거주/방문/여행"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEleventhIllness.overThreeMonthsEngland" value="1997년~현재까지 3개월 이상 영국 거주/방문/여행" label="1997년~현재까지 3개월 이상 영국 거주/방문/여행"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEleventhIllness.overFiveYearsEurope" value="1980년~현재까지 5년 이상 유럽국가 거주/방문/여행" label="1980년~현재까지 5년 이상 유럽국가 거주/방문/여행"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEleventhIllness.transfusionEnglnadFrance" value="1980년 이후 영국, 프랑스에서의 수혈" label="1980년 이후 영국, 프랑스에서의 수혈"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/agree">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedEleventhQuestion: '',
            selectedEleventhIllness: {
                overOneMonthEngland: '',
                overThreeMonthsEngland: '',
                overFiveYearsEurope: '',
                transfusionEnglnadFrance: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateEleventhQuestion', this.selectedEleventhQuestion)
            store.commit('updateEleventhIllness', this.selectedEleventhIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>