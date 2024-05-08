<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    7. 기간에 관계없이 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br/>
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedSeventhQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedSeventhQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.cancer" value="암" label="암"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.heart" value="심장질환" label="심장질환"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.kidney" value="신장질환" label="신장질환"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.liver" value="간질환" label="간질환"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.respiratory" value="호흡기질환" label="호흡기질환"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.blood" value="혈액질환(혈우병, 적혈구증다증 등)" label="혈액질환(혈우병, 적혈구증다증 등)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.diabetes" value="당뇨병" label="당뇨병"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.skin" value="피부질환(건선 등)" label="피부질환(건선 등)"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.addiction" value="알코올 또는 마약 중독" label="알코올 또는 마약 중독"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.mental" value="정신질환" label="정신질환"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.convulsion" value="경련성질환" label="경련성질환"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.autoimmune" value="자가면역질환(류마티즘 등)" label="자가면역질환(류마티즘 등)"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSeventhIllness.transplant" value="장기이식" label="장기이식"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/10">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedSeventhQuestion: '',
            selectedSeventhIllness: {
                cancer: '',
                heart: '',
                kidney: '',
                liver: '',
                respiratory: '',
                blood: '',
                diabetes: '',
                skin: '',
                addiction: '',
                mental: '',
                convulsion: '',
                autoimmune: '',
                transplant: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateSeventhQuestion', this.selectedSeventhQuestion)
            store.commit('updateSeventhIllness', this.selectedSeventhIllness)
            console.log("저장 결과: ", this.$store.state.questionData)
        }
    }
}
</script>