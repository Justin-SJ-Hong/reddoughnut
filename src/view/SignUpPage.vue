<template>
    <h1>회원가입</h1>
    <div class="d-flex align-center justify-center">
        <v-sheet width="400">
            <v-form @submit.prevent="register">
                <v-text-field v-model="registerFormData.username" label="이름"></v-text-field>
                <v-text-field v-model="registerFormData.id" label="아이디"></v-text-field>
                <v-text-field v-model="registerFormData.password" label="비밀번호" type="password"></v-text-field>
                <v-radio-group v-model="registerFormData.gender" label="성별">
                    <v-radio label="남자" value="Male"></v-radio>
                    <v-radio label="여자" value="Female"></v-radio>
                </v-radio-group>
                <v-btn type="submit" color="primary">가입</v-btn>
                <p v-if="errorMessage">{{ errorMessage }}</p>
            </v-form>
        </v-sheet>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'SignUpPage',
    data() {
        return {
            registerFormData: {
                username: '',
                id: '',
                password: '',
                gender: '',
            },
            errorMessage: ''
        }
    },
    methods: {
        async register() {
            try {
                console.log(this.registerFormData)
                const response = await axios.post('http://localhost:3000/api/register', this.registerFormData)
                console.log('회원가입 성공', response.data)
                // 회원가입 당시 입력했던 데이터를 express.js 서버로 보내야함
                // express.js 서버로 보내면 express.js 서버에서 mariadb를 건드려서 회원등록
                // 회원가입 끝나면 index 페이지로 돌아간다.
                this.$router.push('/')
            } catch (error) {
                console.error('회원가입 실패', error.response.data.message)
                this.errorMessage = error.response.data.message
            }
        }
    }
}
</script>