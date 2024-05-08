<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    4. 최근 1개월 이내 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br />
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedForthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedForthQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedForthIllness.chill" value="반복적인 고열, 춥고 떨림, 땀흘림" label="반복적인 고열, 춥고 떨림, 땀흘림"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedForthIllness.travel" value="외국 여행" label="외국 여행"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedForthIllness.dental" value="치과치료" label="치과치료"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedForthIllness.other" value="의료기관에서 단순 감기 이외의 질병 진단 또는 치료" label="의료기관에서 단순 감기 이외의 질병 진단 또는 치료"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedForthIllness.operation" value="시술(내시경, 조직검사, 레이저 시술 등)" label="시술(내시경, 조직검사, 레이저 시술 등)"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/7">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedForthQuestion: '',
            selectedForthIllness: {
                chill: '',
                travel: '',
                dental: '',
                other: '',
                operation: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateForthQuestion', this.selectedForthQuestion)
            store.commit('updateForthIllness', this.selectedForthIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>