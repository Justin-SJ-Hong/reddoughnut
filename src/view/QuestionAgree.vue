<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <h4>
                    동의서
                    <br />
                    혈액관리법 제4조의4 제4항에 따라 헌혈에 관한 유의사항을 설명받았으며 다음 사항에 동의합니다.
                </h4>
                <v-row>
                    <v-col>
                        1. 나는 생명을 살리고자 하는 고귀한 뜻에 동참하여 자발적으로 헌혈하는 데 동의합니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        2. 나는 문진사항과 헌혈관련증상에 대해 읽고 충분히 이해하였으며, 모든 질문에 정직하게 답하였습니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        3. 나는 수혈받는 환자를 보호하기 위하여 필요한 검사를 시행하고, 그 결과를 포함하여 과거의 헌혈 경력, 검사 결과 및 세부사항(헌혈부적격 관련 정보 등)을 관리, 전산 조회하는 것에 동의합니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        4. 만약 나의 혈액이 수혈에 부적합한 것으로 판정되면, 채혈금지대상자로 등록될 수 있음에 동의하며 이로 인한 어떠한 불이익도 없다는 점을 이해합니다.
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        5. 내가 헌혈한 혈액(검체 등 포함)이 최소 10년간 보관되어야 한다는 사실에 동의하며, 아래와 같은 목적으로 사용될 수 있다는 사실에 동의합니다.
                        <br />
                        - 의학적 연구, 의약품 및 의료기기 개발, 혈액관리에 필요한 품질관리 및 시약평가, 수혈부작용 원인규명, 헌혈경력이 있는 군장병 및 해양경찰청과 그 소속기관 근무자 유해 신원확인, 6.25 전사자 신원확인 및 유가족 찾기를 위한 DNA 시료 채취
                    </v-col>
                </v-row>
                <v-checkbox v-model="Agree" value="agree" label="동의함"></v-checkbox>
                <v-btn @click="submit">제출하기</v-btn>
                <!-- 전자문진 일자하고 헌혈자 성명 들어가게 합시다 -->
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            Agree: ''
        }
    },
    methods: {
        async submit() {
            try {
                const response = await axios.post('http://localhost:3000/api/question_submit', this.$store.state.questionData)
                console.log(response.data)
            } catch(error) {
                console.error(error)
            }
            this.$router.push('/')
        }
    }
}
</script>