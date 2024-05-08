<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    6. 최근 1년 이내 아래와 같은 경험을 해당 기간 안에 하신 분 중 일부는 일정기간 동안 헌혈할 수 없습니다.
                    <br />
                    아래 사항 중 선택해 주십시오.
                </h4>
                <v-radio-group v-model="selectedSixthQuestion" inline>
                    <v-radio value="해당없음" label="해당없음"></v-radio>
                    <v-radio value="몸 상태 안좋음" label="몸 상태 안좋음"></v-radio>
                </v-radio-group>
                <v-container v-if="selectedSixthQuestion === '몸 상태 안좋음'">
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.hospitalize" value="입원" label="입원"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.transfusion" value="수혈" label="수혈"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.operation" value="수술" label="수술"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.convulsion" value="경련" label="경련"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.syncope" value="의식소실" label="의식소실"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.stabbedByNeedle" value="다른 사람이 사용한 주사침에 찔림" label="다른 사람이 사용한 주사침에 찔림"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.vaccination" value="예방접종" label="예방접종"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.narcotic" value="마약주사" label="마약주사"></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.prison" value="교도소(소년교도소 포함), 구치소 등에 3일 이상 수감" label="교도소(소년교도소 포함), 구치소 등에 3일 이상 수감"></v-checkbox>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="selectedSixthIllness.sex" value="불특정 이성과의 성접촉 또는 남성의 경우 남성과의 성접촉" label="불특정 이성과의 성접촉 또는 남성의 경우 남성과의 성접촉"></v-checkbox>
                        </v-col>
                    </v-row>
                </v-container>
                <v-btn @click="saveToVuex"><router-link to="/question/9">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import store from '../store/index.js'
export default {
    data() {
        return {
            selectedSixthQuestion: '',
            selectedSixthIllness: {
                hospitalize: '',
                transfusion: '',
                operation: '',
                convulsion: '',
                syncope: '',
                stabbedByNeedle: '',
                vaccination: '',
                narcotic: '',
                prison: '',
                sex: ''
            }
        }
    },
    methods: {
        saveToVuex() {
            store.commit('updateSixthQuestion', this.selectedSixthQuestion)
            store.commit('updateSixthIllness', this.selectedSixthIllness)
            console.log('저장 결과: ', this.$store.state.questionData)
        }
    }
}
</script>