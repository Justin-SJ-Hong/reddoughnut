import { createApp } from 'vue'

// vue-router import
import { createRouter, createWebHistory } from 'vue-router'
//import App from './App.vue'

//뷰티파이 import
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

// vuex 저장소 파일 가져오기
import store from './store/index.js'

// import view
import RedMain from './view/RedMain.vue'
import RedIndex from './view/RedIndex.vue'
import SignInPage from './view/SignInPage.vue'
import SignUpPage from './view/SignUpPage.vue'
import ReserveForm from './view/ReserveForm.vue'
import QuestionForm from './view/QuestionForm.vue'
import QuestionSheet from './view/QuestionSheet.vue'
import QuestionSheet_1 from './view/QuestionSheet_1.vue'
import QuestionSheet_2 from './view/QuestionSheet_2.vue'
import QuestionSheet_3 from './view/QuestionSheet_3.vue'
import QuestionSheet_4 from './view/QuestionSheet_4.vue'
import QuestionSheet_5 from './view/QuestionSheet_5.vue'
import QuestionSheet_6 from './view/QuestionSheet_6.vue'
import QuestionSheet_7 from './view/QuestionSheet_7.vue'
import QuestionSheet_8 from './view/QuestionSheet_8.vue'
import QuestionSheet_9 from './view/QuestionSheet_9.vue'
import QuestionSheet_10 from './view/QuestionSheet_10.vue'
import QuestionSheet_11 from './view/QuestionSheet_11.vue'
import QuestionSheet_12 from './view/QuestionSheet_12.vue'
import QuestionSheet_13 from './view/QuestionSheet_13.vue'
import QuestionAgree from './view/QuestionAgree.vue'

// routes
// const routes = [
//   { path: "/", component: RedMain },
  
//   { path: "/", component: RedMain },
//   { path: "/", component: RedMain },
// ]

// router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: RedIndex },
    { path: "/signin", component: SignInPage },
    { path: "/signup", component: SignUpPage },
    { path: "/reserve", component: ReserveForm },
    { path: "/question", component: QuestionForm },
    { path: "/question/warning", component: QuestionSheet },
    { path: "/question/1", component: QuestionSheet_1 },
    { path: "/question/2", component: QuestionSheet_2 },
    { path: "/question/3", component: QuestionSheet_3 },
    { path: "/question/4", component: QuestionSheet_4 },
    { path: "/question/5", component: QuestionSheet_5 },
    { path: "/question/6", component: QuestionSheet_6 },
    { path: "/question/7", component: QuestionSheet_7 },
    { path: "/question/8", component: QuestionSheet_8 },
    { path: "/question/9", component: QuestionSheet_9 },
    { path: "/question/10", component: QuestionSheet_10 },
    { path: "/question/11", component: QuestionSheet_11 },
    { path: "/question/12", component: QuestionSheet_12 },
    { path: "/question/13", component: QuestionSheet_13 },
    { path: "/question/agree", component: QuestionAgree }
  ]
})

const app = createApp(RedMain)

app.use(vuetify);
app.use(router);
app.use(store);

app.mount('#app');

// createApp(RedMain)
//   .use(vuetify, router)
//   .mount('#app')

//createApp(RedMain).use(Router)