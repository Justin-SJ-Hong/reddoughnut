<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    5. 최근 6개월 이내 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br />
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedFifthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedFifthQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedFifthIllness.pregnant" value="임신(여성만)" label="임신(여성만)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFifthIllness.birth" value="분만(여성만)" label="분만(여성만)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFifthIllness.miscarry" value="유산(여성만)" label="유산(여성만)"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedFifthIllness.skin" value="사마귀, 점제거, 피어싱, 문신(반영구화장 포함)" label="사마귀, 점제거, 피어싱, 문신(반영구화장 포함)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedFifthIllness.acupuncture" value="침술, 부항(사혈)" label="침술, 부항(사혈)"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/8">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedFifthQuestion: '',
            selectedFifthIllness: {
                pregnant: '',
                birth: '',
                miscarry: '',
                skin: '',
                acupuncture: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateFifthQuestion', this.selectedFifthQuestion)
            store.commit('updateFifthIllness', this.selectedFifthIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>