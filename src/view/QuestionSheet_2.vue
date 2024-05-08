<template>
    <h1>전자문진</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-form>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-title>헌혈 금지 약물 및 예방접종 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/헌혈금지약물 및 예방접종.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title>헌혈 금지 약물(태아 영향) 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/헌혈금지약물(태아영향).jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel>
                        <v-expansion-panel-title>감염병 및 vCJD 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                                src="../assets/감염병 종류 및 vCJD 헌혈금지지역.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
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
                    <v-expansion-panel>
                        <v-expansion-panel-title>헌혈 후 생길 수 있는 증상 안내문</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-img
                            src="../assets/헌혈 후 생길 수 있는 증상.jpg"
                            >
                            </v-img>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <br />
                <v-btn><router-link to="/question/3">다음으로 넘어가기</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>