<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    8. 헌혈금지 약물
                    <br />
                    헌혈 관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.
                </h4>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>헌혈금지약물 및 예방접종 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/헌혈금지약물 및 예방접종.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title>헌혈금지약물(태아영향) 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/헌혈금지약물(태아영향).jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-radio-group v-model="selectedEighthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="복용중" label="복용중"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedEighthQuestion === '복용중'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.psoriasis" value="건선치료제" label="건선치료제"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.cowInsulin" value="소에서 유래한 인슐린" label="소에서 유래한 인슐린"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.prostate" value="전립선치료제" label="전립선치료제"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.hairloss" value="탈모증치료제" label="탈모증치료제"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.pituitaryGrowthHormone" value="뇌하수체 유래 성장호르몬" label="뇌하수체 유래 성장호르몬"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedEighthIllness.acne" value="여드름치료제" label="여드름치료제"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/11">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedEighthQuestion: '',
            selectedEighthIllness: {
                psoriasis: '',
                cowInsulin: '',
                prostate: '',
                hairloss: '',
                pituitaryGrowthHormone: '',
                acne: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateEighthQuestion', this.selectedEighthQuestion)
            store.commit('updateEighthIllness', this.selectedEighthIllness)
            console.log("저장 결과: ", this.$store.state.questionData)
        }
    }
}
</script>