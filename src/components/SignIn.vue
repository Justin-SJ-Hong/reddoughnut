<template>
    <!-- <v-btn v-if="!loggedIn"><router-link to="/signin">로그인</router-link></v-btn>
    <v-btn v-else>로그아웃</v-btn> -->
    <v-btn><router-link to="/signin">로그인</router-link></v-btn>
    <v-btn><router-link to="/signup">회원가입</router-link></v-btn>
</template>

<script>
export default {
    name: 'SignIn',
    props: {
        msg: String
    },
    // computed: {
    //     loggedIn() {
    //         return this.$store.state.isLoggedIn
    //     }
    // },
    // methods: {
    //     logout() {
    //         this.$store.commit('setLoggedOut')
    //     }
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