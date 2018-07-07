import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import About from '@/components/about/About'
import Admin from '@/components/Admin'
import Login from '@/components/Login'
import Register from '@/components/Register'


// 二级路由
import Contact from '@/components/about/Contact'
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
import OrderingGuide from '@/components/about/OrderingGuide'

// 三级路由
import PhoneNumber from '@/components/about/contact/Phone'
import PersonName from '@/components/about/contact/PersonName'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeLink',
      component: Home
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu
    },
    {
      path:'/about',
      name:'about',
      redirect:'/about/contact',
      component:About,
      children:[
        {
          path:'/about/contact',
          name:'contactLink',
          redirect:'/phone',
          component:Contact,
          children:[
            {
              path:'/phone',
              name:'phoneNumber',
              component:PhoneNumber
            },
              {
              path:'/personname',
              name:'personName',
              component:PersonName
              }
          ]
      },
        {
          path:'/history',
          name:'historyLink',
          component:History
      },
      {
          path:'/delivery',
          name:'deliveryLink',
          component:Delivery
      },
      {
          path:'/orderingGuide',
          name:'orderingGuideLink',
          component:OrderingGuide
      }
    ]
  },
    {
      path:'/admin',
      name:'admin',
      component:Admin
      // beforeEnter:(to,from,next)=>{
        // 路由独享守卫
        // alert("没有登录，不能访问！");
          // if(to.path=="/login"||to.path=="/register"){
          //   next();
          // }else{
          //   alert("请先登录！")
          //   next('/login')
          // }
      // }
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'*',
      redirect:'/'

    }
    
  ],
  mode:'history'

})

