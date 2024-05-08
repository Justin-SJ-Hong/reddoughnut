<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center ma-16">
        <v-sheet width="600">
            <v-form>
                <h3>주의사항</h3>
                <br />
                <h2>다음은 헌혈자와 수혈자의 건강을 보호하기 위해 반드시 필요한 문진사항들입니다.</h2>
                <v-list>
                    1. 혈액관리법 제4조의2 제2항에 따라 헌혈자는 안전한 혈액의 채혈 및 공급을 위하여
                    신상 및 병력에 대한 정보를 사실대로 성실하게 제공하여야 합니다.
                </v-list>
                <v-list>
                    2. 헌혈자의 부정확한 정보제공 및 답변이 수혈자에게 나쁜 영향을 미칠 수 있으므로
                    반드시 정직하고 성실하게 답변해 주시길 바랍니다.
                </v-list>
                <v-list>
                    3. 후천성면역결핍증(에이즈) 검사를 목적으로 한 헌혈은 엄격히 금지되어 있으며,
                    혈액관리법 시행규칙 제8조 제4항의 의해 후천성면역결핍증 검사결과는
                    통보되지 않습니다.
                </v-list>
                <v-list>
                    4. 혈액관리법 시행령 제 10조의2에 따라 헌혈자의 민감정보 및 고유식별정보(주민등록번호 등)의
                    처리가 가능하며, 혈액관리업무 이외의 다른 목적에 사용 또는 공개되지 않습니다.
                </v-list>
                <br />
                <v-btn><router-link to="/question/1">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // questionData: {
            //     selectedFirstQuestion: null,
            //     selectedFirstIllness: null,
            //     selectedSecondQuestion: null,
            //     selectedThirdQuestion: null,
            //     selectedForthQuestion: null,
            //     selectedFifthQuestion: null,
            //     selectedSixthQuestion: null,
            //     selectedSeventhQuestion: null,
            //     selectedEighthQuestion: null,
            //     selectedNinthQuestion: null,
            //     selectedTenthQuestion: null,
            //     selectedEleventhQuestion: null
            // },
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.v-list {
    border: 1px solid;
    padding: 10px;
}
</style>