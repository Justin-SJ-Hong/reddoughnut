<template>
    <h1>전자문진 안내</h1>
    <br />
    <div class="d-flex align-center justify-center">
        <v-sheet width="600">
            <v-row>
                <v-col>나이</v-col>
                <v-col>
                    <li>전혈 : 만16~69세</li>
                    <li>혈장 : 만17~69세</li>
                    <li>혈소판, 혈소판혈장 : 만17~59세</li>
                    <li>65세 이상 : 60~64세까지 헌혈한적 있어야 가능</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>체중</v-col>
                <v-col>
                    <li>남자 : 50kg 이상</li>
                    <li>여자 : 45kg 이상</li>
                    <li>여자의 경우 50kg 미만은 전혈 400ml 불가(헌혈카페)</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>건강진단</v-col>
                <v-col>
                    <li>혈압(mmHg) : 수축기 90~179, 이완기 100 미만</li>
                    <li>체온(℃) : 37.5℃ 이하</li>
                    <li>맥박(회/분) : 50~100</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>헌혈간격</v-col>
                <v-col>
                    <li>전혈 : 8주 경과</li>
                    <li>혈장, 혈소판, 혈소판혈장 : 14일 경과</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>헌혈횟수</v-col>
                <v-col>
                    <li>전혈 : 최근 1년 이내에 전혈헌혈 횟수 최대 5회</li>
                    <li>혈장, 혈소판, 혈소판혈장 : 최근 1년 이내에 성분헌혈횟수 최대 24회</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>질병</v-col>
                <v-col>
                    <li>발열, 인후통, 설사 등 급성 감염성 질환 완치 후 3일 경과</li>
                    <li>결핵, 인플루엔자, 쯔쯔가무시병 등 완치 후 1개월 경과</li>
                    <li>기타 감염병 및 질병 완치 후 일정기간 경과</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>약물</v-col>
                <v-col>
                    <li>항생제, 스테로이드, 보톡스, 지방분해 주사제 복용 후 7일 경과</li>
                    <li>건선 치료제 복용 후 3년 경과(일부는 영구 헌혈금지)</li>
                    <li>태반주사제 복용 후 1년 경과</li>
                    <li>전립선비대증 치료제 복용 후 4주 또는 6개월 경과</li>
                    <li>탈모증 치료제 복용 후 4주 경과</li>
                    <li>여드름 치료제 복용 후 4주 경과</li>
                    <li>기타 헌혈금지 약물 복용 후 일정기관 경과</li>
                    <li>
                        혈액관리법 제7조에 따라 운영중인 DDIIS(혈액사고방지 정보조회시스템)를 통해 제공받은 헌혈금지약물 처방 정보는 상기 약물(태아 영향)을 복용하는 것과 동일하게 판정됩니다.
                    </li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>예방접종</v-col>
                <v-col>
                    <li>인플루엔자, A형 간염, 일본뇌염, 자궁경부암 등 예방접종 후 24시간 경과</li>
                    <li>B형 간염 예방접종 후 2주 경과</li>
                    <li>홍역, 유행성이하선염, 풍진(MMR)의 혼합백신, 수두, 상처 후 파상풍 등 예방접종 후 4주 경과</li>
                    <li>B형 간염 면역글로불린, 동물에게 물린 후 광견병 예방접종 후 1년 경과</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>진료</v-col>
                <v-col>
                    <li>수혈 후 1년 경과</li>
                    <li>기타 진료 후 일정기간 경과</li>
                    <li>임신, 분만 또는 유산 후 6개월 경과</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>검사결과</v-col>
                <v-col>
                    <li>과거 헌혈검사(B형 간염, C형 간염, 인간 T림프 바이러스, 매독검사 등) 결과 정상</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>외국여행</v-col>
                <v-col>
                    <li>외국을 여행한 경우는 귀국 후 1개월 경과</li>
                </v-col>
            </v-row>
            <v-row>
                <v-col>기타</v-col>
                <v-col>
                    <li>문진 결과 헌혈 적합에 해당되면 가능</li>
                    <li>헌혈 참여시 기본 신분증 지참 필요</li>
                    <li>
                        기본 신분증 : 헌혈기록카드의 실명확인 방법에 있는 신분증으로 사진이 부착되어 있는 주민등록증, 여권, 그 밖의
                        신분증명서를 말하며 공공기관 및 법인등이 발급한 사진이 부착되어 있는 그 밖의 신분증을 말함
                        (고교생의 경우 사진 및 이름이 표시된 학생증)
                    </li>
                    <li>
                        장애가 있는 경우 장애등급에 관계없이 헌혈기록카드 문진항목을 이해할 수 있어야 헌혈이 가능함
                        (의사소통이 원활하지 않는 경우 이해관계가 없는 제3자의 도움을 받을 것을 권장함)
                    </li>
                </v-col>
            </v-row>
            <br />
            <v-btn><router-link to="/question/warning">전자문진 하러가기</router-link></v-btn>
            <v-btn><router-link to="/">돌아가기</router-link></v-btn>
        </v-sheet>   
    </div>
</template>

<style scoped>
.v-row, .v-col {
    border: 1px solid #e0e0e0;
    background-color: red;
}
</style>