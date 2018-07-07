// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to,from,next)=>{
//   // alert("请先登录！")
//   // next();
//   // to.path跳转路径
//   // console.log(to)
//   if(to.path=="/login"||to.path=="/register"){
//     next();
//   }else{
//     alert("请先登录！")
//     next('/login')
//   }
// })

// 后置钩子
// router.afterEach((to,from)=>{
//   alert("after each");
// })

