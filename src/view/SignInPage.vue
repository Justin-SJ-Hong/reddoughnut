<template>
    <h1>로그인</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400">
            <v-form @submit.prevent="login">
                <v-text-field v-model="loginFormData.id" label="아이디"></v-text-field>
                <v-text-field v-model="loginFormData.password" label="비밀번호" type="password"></v-text-field>
                <v-btn @click="login">로그인</v-btn>
                <v-btn><router-link to="/signup">회원가입</router-link></v-btn>
            </v-form>
        </v-sheet>
    </div>
    
</template>

<script>
import axios from 'axios';
//import { useStore } from 'vuex';
// import {createStore} from '../store/index.js'
import store from '../store/index.js'

export default {
    name: 'SignInPage',
    data() {
        return {
            loginFormData: {
                id: '',
                password: ''
            }
            
        }
    },
    methods: {
        async login() {
            // Your login logic here
            try {
                // console.log(this.loginFormData)
                const response = await axios.post('http://localhost:3000/api/login', this.loginFormData)
                // console.log('로그인 성공', response.data)
                console.log('Login Successed', response.data)
                // 로그인 성공후 mutation 호출
                //this.$store.commit('setLoggedIn', true)

                //const store = useStore()
                store.commit('setLoggedIn', true)
                // store.commit('setLoggedOut')

                // const loginStore = createStore()
                // loginStore.commit('setLoggedIn', true)

                this.$router.push('/')
            } catch(error) {
                console.error('로그인 실패 : ', error)
            }
            
        }
    },
}
</script>

<style scoped>
button {
    height: 100px;
    width: 150px;
    margin: 25px;
}
</style>