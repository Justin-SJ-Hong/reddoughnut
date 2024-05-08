<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    9. 감염병
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
                <v-radio-group v-model="selectedNinthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="감염된 적 있음" label="감염된 적 있음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedNinthQuestion === '감염된 적 있음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.hepatitis" value="간염" label="간염"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.aids" value="에이즈" label="에이즈"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.malaria" value="말라리아" label="말라리아"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.venereal" value="성병" label="성병"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.hansen" value="한센병" label="한센병"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.babesiosis" value="바베시아증" label="바베시아증"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.chagas" value="샤가스병" label="샤가스병"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.vCJD" value="변종 크로이츠펠트-야콥병" label="변종 크로이츠펠트-야콥병"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedNinthIllness.brucellosis" value="브루셀라증" label="브루셀라증"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/12">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedNinthQuestion: '',
            selectedNinthIllness: {
                hepatitis: '',
                aids: '',
                malaria: '',
                venereal: '',
                hansen: '',
                babesiosis: '',
                chagas: '',
                vCJD: '',
                brucellosis: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateNinthQuestion', this.selectedNinthQuestion)
            store.commit('updateNinthIllness', this.selectedNinthIllness)
            console.log("저장 결과: ", this.$store.state.questionData)
        }
    }
}
</script>