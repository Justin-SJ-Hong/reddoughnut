<template>
    <h3>헌혈의집을 선택하셨습니다</h3>

    <v-select
        v-model="redCrossData.selectedCity"
        :items="Object.keys(countyMap)"
        label="시도"
        @change="updateCity"
    >
    </v-select>

    <v-select
        v-model="redCrossData.selectedCounty"
        :items="county"
        label="시군구"
    >
    </v-select>

    <v-btn @click="search">헌혈의집 검색</v-btn>

    <v-card class="redhouselist">
        <v-list density="compact">
            <v-list-subheader>헌혈의집 목록</v-list-subheader>
            <v-list-item
                v-for="(item, index) in responseData"
                :key="index"
            >
                <!-- <v-btn
                    v-model="redCrossData.selectedRedHouse"
                    :class="{ 'clicked': selectedButton === index }"
                    @click="chooseCenter(item.center_name, index)"
                >
                    {{ item.center_name }}
                </v-btn> -->
                <v-btn
                    :class="{ 'clicked': selectedButton === index }"
                    @click="chooseCenter(item.center_name, index)"
                >
                    {{ item.center_name }}
                </v-btn>
            </v-list-item>
        </v-list>
    </v-card>

    <v-row justify="space-around">
        <v-date-picker
            color="primary"
            v-model="redCrossData.selectedDate"
            @change="handleDateChange"
        ></v-date-picker>
    </v-row>

    <v-row>
        <v-col>
            <v-select
                v-model="redCrossData.selectedHour"
                :items="hour"
                label="시"
            >
            </v-select>
        </v-col>
        <v-col>
            <v-select
                v-model="redCrossData.selectedMinute"
                :items="minute"
                label="분"
            >
            </v-select>
        </v-col>
    </v-row>

    <v-btn @click="mergeRedCross">예약하기</v-btn>
</template>

<script>
import axios from 'axios';

export default {
    emits: ['mergeRedCross'],
    props: {
        reserveData: Object
    },
    data() {
        return {
            selectedButton: null,
            county: [],
            hour: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
            minute: [0, 30],
            responseData: null,
            redCrossData: {
                // 시군구 선택
                selectedCity: null,
                selectedCounty: null,
                // county: [],

                // 헌혈의집 리스트
                // responseData: null,

                // 헌혈의집 선택
                selectedRedHouse: null,
                //selectedButton: null,

                // 날짜 선택
                selectedDate: null,

                // 시간 선택
                selectedHour: null,
                selectedMinute: null,
                // hour: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                // minute: [0, 30]
            },
            countyMap: {
                '서울' : [
                    '강남구', '강동구', '강북구', '강서구', '관악구',
                    '광진구', '구로구', '금천구', '노원구', '도봉구',
                    '동대문구', '동작구', '마포구', '서대문구', '서초구',
                    '성동구', '성북구', '송파구', '양천구', '영등포구',
                    '용산구', '은평구', '종로구', '중구', '중랑구'
                ],
                '부산' : [
                    '강서구', '금정구', '기장군', '남구', '동구',
                    '동래구', '부산진구', '북구', '사상구', '사하구',
                    '서구', '수영구', '연제구', '영도구', '중구',
                    '해운대구'
                ],
                '대구' : [
                    '남구', '달서구', '달성군', '동구', '북구',
                    '서구', '수성구', '중구'
                ],
                '인천' : [
                    '강화군', '계양구', '남구', '남동구', '동구',
                    '미추홀구', '부평구', '서구', '연수구', '옹진군',
                    '중구'
                ],
                '울산' : [
                    '남구', '동구', '북구', '울주군', '중구'
                ],
                '세종' : [
                    '나성동'
                ],
                '경기' : [
                    '가평군', '고양시 덕양구', '고양시 일산동구', '고양시 일산서구', '과천시',
                    '광명시', '광주시', '구리시', '군포시', '김포시',
                    '남양주시', '동두천시', '부천시', '부천시 소사구', '부천시 오정구',
                    '부천시 원미구', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구',
                    '수원시 영통구', '수원시 장안구', '수원시 팔달구', '시흥시', '안산시 단원구',
                    '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '양주시',
                    '양평군', '여주시', '연천군', '오산시', '용인시 기흥구',
                    '용인시 수지구', '용인시 처인구', '의왕시', '의정부시', '이천시',
                    '파주시', '평택시', '포천시', '하남시', '화성시'
                ],
                '강원' : [
                    '강릉시', '고성군', '동해시', '삼척시', '속초시',
                    '양구군', '양양군', '영월군', '원주시', '인제군',
                    '정선군', '철원군', '태백시', '평창군', '홍천군',
                    '화천군', '횡성군'
                ],
                '충북' : [
                    '괴산군', '단양군', '보은군', '영동군', '옥천군',
                    '음성군', '제천시', '증평군', '진천군', '청주시 상당구',
                    '청주시 서원구', '청주시 청원구', '청주시 흥덕구', '충주시'
                ],
                '대전' : [
                    '대덕구', '동구', '서구', '유성구', '중구'
                ],
                '충남' : [
                    '계룡시', '공주시', '금산군', '논산시', '당진시',
                    '보령시', '부여군', '서산시', '서천군', '아산시',
                    '예산군', '천안시 동남구', '천안시 서북구', '청양군', '태안군',
                    '홍성군'
                ],
                '전북' : [
                    '고창군', '군산시', '김제시', '남원시', '무주군',
                    '부안군', '순창군', '완주군', '익산시', '임실군',
                    '장수군', '전주시 덕진구', '전주시 완산구', '정읍시', '진안군'
                ],
                '광주' : [
                    '광산구', '남구', '동구', '북구', '서구'
                ],
                '전남' : [
                    '강진군', '고흥군', '곡성군', '광양시', '구례군',
                    '나주시', '담양군', '목포시', '무안군', '보성군',
                    '순천시', '신안군', '여수시', '영광군', '영암군',
                    '완도군', '장성군', '장흥군', '진도군', '함평군',
                    '해남군', '화순군'
                ],
                '경북' : [
                    '경산시', '경주시', '고령군', '구미시', '군위군',
                    '김천시', '문경시', '봉화군', '상주시', '성주군',
                    '안동시', '영덕군', '영양군', '영주시', '영천시',
                    '예천군', '울릉군', '울진군', '의성군', '청도군',
                    '청송군', '칠곡군', '포항시 남구', '포항시 북구'
                ],
                '경남' : [
                    '거제시', '거창군', '고성군', '김해시', '남해군',
                    '밀양시', '사천시', '산청군', '양산시', '의령군',
                    '진주시', '창녕군', '창원시 마산합포구', '창원시 마산회원구', '창원시 성산구',
                    '창원시 의창구', '창원시 진해구', '통영시', '하동군', '함안군',
                    '함양군', '합천군'
                ],
                '제주' : [
                    '서귀포시', '제주시'
                ],
            },
        };
    },
    // props: {
    //     selectedCity: String,
    //     selectedCounty: String,
    //     selectedRedHouse: String,
    //     selectedDate: Date,
    //     selectedHour: Number,
    //     selectedMinute: Number
    // },
    mounted() {
        // this.search()
    },
    methods: {
        updateCity() {
            console.log('선택 도시: ', this.redCrossData.selectedCity);
            this.redCrossData.selectedCounty = null;
            this.county = this.countyMap[this.redCrossData.selectedCity] || [];
        },
        handleDateChange() {
            console.log('날짜 선택: ', this.redCrossData.selectedDate)
        },
        async search() {
            try {
                console.log(this.redCrossData.selectedCity, this.redCrossData.selectedCounty, '를 선택하셨습니다.')

                // 전송할 데이터 선택
                const {selectedCity, selectedCounty} = this.redCrossData

                // 필요한 데이터만 포함시키는 객체 생성
                const searchData = {selectedCity, selectedCounty}
                const response = await axios.post('http://localhost:3000/api/redcross_select', searchData)
                this.responseData = response.data
                console.log(this.responseData)
            } catch(error) {
                console.error('검색실패: ', error)
            }
        },
        chooseCenter(centerName, index) {
            this.redCrossData.selectedRedHouse = centerName;
            this.selectedButton = index;
            console.log('선택한 센터: ', index + 1, '번째', centerName)
        },
        async mergeRedCross() {
            const mergedRedCross = {...this.reserveData, ...this.redCrossData}
            this.$emit('mergeRedCross', mergedRedCross)
            try {
                const response = await axios.post('http://localhost:3000/api/reserve_redcross', mergedRedCross)
                console.log('서버에 전송: ', response.data)
                this.$router.push('/')
            } catch(error) {
                console.error(error)
            }
        }
    },
    watch: {
        'redCrossData.selectedCity': function(city) {
            console.log('selectedCity의 값이 변경되었습니다', city);
            this.updateCity();
        },
        'redCrossData.selectedCounty': function(county) {
            console.log('선택 시군구: ', county)
        },
        'redCrossData.selectedDate': function() {
            this.handleDateChange()
        },
    }
};
</script>

<style scoped>
/* button {
    margin-bottom: 30px
} */
.redhouselist {
    margin-bottom: 30px;
}
.clicked {
    background-color: blue;
    color: white;
}
</style>