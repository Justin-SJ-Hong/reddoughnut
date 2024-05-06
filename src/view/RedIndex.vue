<template>
    <v-app>
    <v-container>
      <v-main>
        <v-img
          :src="require('../assets/RedDoughNut.png')"
          class="my-3"
          contain
          height="300"
        />

        <h1 class="display-2 font-weight-bold mb-3">
          편리한 헌혈예약, 레드도넛이 책임집니다!
        </h1>

        <v-row>
          <v-col align-self="center">
            <v-img
              :src="require('../assets/redcrossdoner.svg')"
              
            />
          </v-col>
          <v-col align-self="center">
            <v-img
              :src="require('../assets/HanmaumBloodDoner.png')"
            />
          </v-col>
        </v-row>

        <h1 class="display-2 font-weight-bold mb-3">
          로그인하시고 헌혈예약하세요!
        </h1>
        <v-btn v-if="!loggedIn">
          <router-link to="/signin">로그인</router-link>
        </v-btn>
        <v-btn v-else @click="logout">로그아웃</v-btn>
        <v-btn v-if="!loggedIn">
          <router-link to="/signup">회원가입</router-link>
        </v-btn>
        <v-btn v-else>회원정보 수정</v-btn>
        <br />
        <v-btn v-if="loggedIn">
          <router-link to="/reserve">예약하러 가기</router-link>
        </v-btn>
        <v-btn v-if="loggedIn">
          <router-link to="/question">전자문진</router-link>
        </v-btn>
        <!-- <SignIn/> -->
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
//import SignIn from '../components/SignIn.vue'
//import { computed } from 'vue';
//import { useStore } from 'vuex';
import store from '../store/index.js'
//import store from '../store/index.js'

export default {
  name: 'RedIndex',
  computed: {
    loggedIn() {
      // return this.$store.state.loggedIn
      // const store = useStore()
      return store.state.loggedIn
    }
  },
  methods: {
    logout() {
      // const logoutStore = createStore()
      //const store = useStore()
      store.commit('setLoggedOut')
      
      //this.$store.commit('setLoggedOut')
    }
  }
  // components: {
  //   SignIn
  // }
}
</script>

<style scoped>
button {
    height: 100px;
    width: 150px;
    margin: 40px;
    color: crimson;
    background-color: transparent;
    border-color: crimson;
    border-radius: 3px;
}
</style>