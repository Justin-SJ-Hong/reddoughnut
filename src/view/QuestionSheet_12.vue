<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    10. 말라리아
                    <br />
                    헌혈관련 안내문을 참조하시어 아래 사항 중 선택해 주십시오.
                </h4>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>국내 말라리아 헌혈 제한지역 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/국내 말라리아 헌혈제한지역.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title>국외 말라리아 헌혈 제한지역 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/국외 말라리아 헌혈제한지역(대륙별).jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-radio-group v-model="selectedTenthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="방문 또는 숙박" label="방문 또는 숙박"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedTenthQuestion === '방문 또는 숙박'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedTenthIllness.overDayDomestic" value="최근 1년 이내에 국내 말라리아 관련 헌혈제한지역에서 1일 이상 숙박(거주 또는 군복무 포함)" label="최근 1년 이내에 국내 말라리아 관련 헌혈제한지역에서 1일 이상 숙박(거주 또는 군복무 포함)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedTenthIllness.underSixMonthOverSea" value="최근 1년 이내에 국외 말라리아 관련 헌혈제한지역에서 1일 이상 6개월 미만 숙박" label="최근 1년 이내에 국외 말라리아 관련 헌혈제한지역에서 1일 이상 6개월 미만 숙박"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedTenthIllness.overSixMonthOverSea" value="최근 3년 이내에 국외 말라리아 관련 헌혈제한지역에서 6개월 이상 거주 또는 군복무" label="최근 3년 이내에 국외 말라리아 관련 헌혈제한지역에서 6개월 이상 거주 또는 군복무"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/13">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedTenthQuestion: '',
            selectedTenthIllness: {
                overDayDomestic: '',
                underSixMonthOverSea: '',
                overSixMonthOverSea: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateTenthQuestion', this.selectedTenthQuestion)
            store.commit('updateTenthIllness', this.selectedTenthIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>