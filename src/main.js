import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
// 注册vuex的功能 vue.use的方法实际上是调用了vuex中的一个install的方法
Vue.use(Vuex)
// 实例化一个vuex
const store = new Vuex.Store({
  // 实例化vuex的构造参数 state mutations actions
  state:{
    // 存储的状态
    count: 0,
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  // 修改state必须通过mutations
  mutations: {
    // 修改state的mutation方法
    // 每一个mutation方法都有对应的参数
    // state 指的就是当前vuex中的state对象
    // payload 载荷 提交mutation的方法的时候 传递的参数 它可以是任何形式的  任何类型的值
    addCount(state, payload){
      state.count += payload
    }
  },
  // 异步动作
  // 从后端获取一个数 更新到state的count中
  actions: {
    // 方法
    // actions 方法参数
    // 第一个参数 执行上下文对象
    // context 相当于 组件中的this.$store store的运行实例

    getAsyncCount (context,params){
      // 做异步的请求
      // 模拟异步请求
      setTimeout(function(){
        // 获取得到一个值
        context.commit('addCount', params)
      },1000)
    }
  },
  getters: {
    // 放置的所有的vuex的计算属性
    // state 指的就是 当前store中的state
    // filterList: function(state){
    //   return state.list.filter(item => item > 5)
    // }
    // 两种方式表达的结果是一样的，下面使用的是箭头函数的方式
    filterList: state => state.list.filter(item => item > 5),
    token: state => state.user.token,
    name: state => state.setting.name
  },
  modules: {
    // 放置子模块的属性
    user:{
      // 给true就表示加锁
      namespaced:true,
      state:{
        token:'12345'
      },
      mutations :{
        updateToken(state) {
          state.token = '67890'
        },
      }
    },
    setting:{
      state:{
        name:'Vuex实例'
      },
    }
  }
})

new Vue({
  render: h => h(App),
  // es6写法
  store
}).$mount('#app')
