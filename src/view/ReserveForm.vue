<template>
    <h1>헌혈 예약</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400">
            <v-form>
                <v-text-field v-model="reserveData.name" label="이름"></v-text-field>
                <v-row>
                    <v-col><v-text-field v-model="frontPIN" label="주민번호 앞자리"></v-text-field></v-col>
                    <v-col><v-text-field v-model="backPIN" label="주민번호 뒷자리" type="password"></v-text-field></v-col>
                </v-row>
                <v-row>
                    <v-col><v-text-field v-model="firstPhone" label="010"></v-text-field></v-col>
                    <v-col><v-text-field v-model="secondPhone" label="xxxx"></v-text-field></v-col>
                    <v-col><v-text-field v-model="thirdPhone" label="yyyy"></v-text-field></v-col>
                </v-row>

                <v-radio-group v-model="reserveData.selectedType">
                    <v-radio label="전혈" value="전혈"></v-radio>
                    <v-radio label="혈장" value="혈장"></v-radio>
                    <v-radio label="혈소판" value="혈소판"></v-radio>
                    <v-radio label="혈소판혈장(다종)" value="혈소판혈장(다종)"></v-radio>
                </v-radio-group>

                <v-row class="donerselect">
                    <v-col>
                        <v-img
                        :src="require('../assets/redcrossdoner.svg')"
                        class="image"
                        />
                    </v-col>
                    <v-col>
                        <v-img
                        :src="require('../assets/HanmaumBloodDoner.png')"
                        class="image"
                        />
                    </v-col>
                </v-row>
                <v-radio-group v-model="reserveData.selectedItem" class="radio-item">
                    <v-row>
                        <v-col v-for="(item, index) in items" :key="index" cols="auto">
                            <v-radio :label="item" :value="item" class="radio"></v-radio>
                        </v-col>
                    </v-row>
                </v-radio-group>

                <!-- <div v-if="reserveData.selectedItem === '헌혈의집'">
                    <RedCrossSelect :reserveData="reserveData" @mergeRedCross="handleMergedRedCross" />
                </div> -->
                <!-- <div v-else-if="reserveData.selectedItem === '헌혈카페'">
                    <HanMaumSelect :reserveData="reserveData" @mergeHanmaum="handleMergedHanmaum" />
                </div> -->
                <div v-if="reserveData.selectedItem === '헌혈의집'">
                    <RedCrossSelect :reserveData="reserveData" />
                </div>
                <div v-else-if="reserveData.selectedItem === '헌혈카페'">
                    <HanMaumSelect :reserveData="reserveData" />
                </div>
                <div v-else>
                    <h3>헌혈하실 곳을 선택해주세요</h3>
                </div>
            </v-form>
        </v-sheet>
    </div>
    <v-btn><router-link to="/">돌아가기</router-link></v-btn>
</template>

<script>
// 헌혈카페나 헌혈의집 선택시 컴포넌트 임포트
import RedCrossSelect from '../components/ReserveRedCross.vue'
import HanMaumSelect from '../components/ReserveHanmaum.vue'

export default {
  data() {
    return {
        reserveData: {
            name: this.name,
            PIN: null,
            Phone: this.firstPhone + '-' + this.secondPhone + '-' + this.thirdPhone,
            selectedType: this.selectedType,
            selectedItem: this.selectedItem,
        },
        frontPIN: '',
        backPIN: '',
        firstPhone: '',
        secondPhone: '',
        thirdPhone: '',
        items: ['헌혈의집', '헌혈카페'],// 예시 데이터
    }
  },
  watch: {
    frontPIN() {
        this.updatePIN()
    },
    backPIN() {
        this.updatePIN()
    },
    firstPhone() {
        this.updatePhone()
    },
    secondPhone() {
        this.updatePhone()
    },
    thirdPhone() {
        this.updatePhone()
    }
  },
  methods: {
    // handleMergedRedCross(mergedRedCross) {
    //     console.log('결과: ', mergedRedCross)
    // },
    // handleMergedHanmaum(mergedHanmaum) {
    //     console.log('결과: ', mergedHanmaum)
    // },
    updatePIN() {
        this.reserveData.PIN = this.frontPIN + '-' + this.backPIN
    },
    updatePhone() {
        this.reserveData.Phone = this.firstPhone + '-' + this.secondPhone + '-' + this.thirdPhone
    }
  },
  components: {
    RedCrossSelect,
    HanMaumSelect
  },
}
</script>

<style>
.donerselect {
    margin-bottom: 20px;
}

.image {
    width: auto; /* 이미지 너비 조정 */
    height: auto; /* 이미지 높이 자동 조정 */
    margin-right: 20px; /* 이미지 간격 조정 */
}

.radio_item {
    margin-top: 20px;
}

.radio {
    margin-right: 65px;
}

button {
    height: 100px;
    width: 150px;
    margin-bottom: 30px;
}
</style>