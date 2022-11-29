<template>
  <div id="app">
    <!-- 原始形式应用 -->
    <div>原始形式获取state状态:{{$store.state.count}} </div>
    <div>计算属性状态：{{count}} </div>
    <child-a />
    <child-b />


  </div>
</template>

<script>
import {mapState} from 'vuex'
import ChildA from './components/child-a.vue'
import ChildB from './components/child-b.vue'

// 注册
export default {
  name: 'App',
  components:{
    ChildA,
    ChildB
  },
  computed:{
    // count(){
    //   // 来源于 vuex
    //    return this.$store.state.count
    // }
    ...mapState(['count'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
