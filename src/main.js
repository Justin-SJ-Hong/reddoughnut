import { createApp } from 'vue'

// vue-router import
import { createRouter, createWebHistory } from 'vue-router'
//import App from './App.vue'

//뷰티파이 import
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

// vuex 저장소 파일 가져오기
//import { store } from './store/index.js'

// import view
import RedMain from './view/RedMain.vue'
import RedIndex from './view/RedIndex.vue'
import SignInPage from './view/SignInPage.vue'
import SignUpPage from './view/SignUpPage.vue'
import ReserveForm from './view/ReserveForm.vue'
import QuestionForm from './view/QuestionForm.vue'

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
    { path: "/question", component: QuestionForm }
  ]
})

const app = createApp(RedMain)

app.use(vuetify);
app.use(router);
//app.use(store);

app.mount('#app');

// createApp(RedMain)
//   .use(vuetify, router)
//   .mount('#app')

//createApp(RedMain).use(Router)