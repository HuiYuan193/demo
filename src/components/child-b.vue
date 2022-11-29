<template>
  <div>
    <!-- 用户的token和应用名称name -->
    <!-- $store.state.子模块.属性 -->
    <div>用户名称：{{ $store.state.user.token }}</div>
    <div>getters快捷访问: {{ token }} </div>
    <div>应用名称：{{ $store.state.setting.name }}</div>
    <div>getters快捷访问: {{ name }}</div>
    <button @click="updateToken">更新子模块的token</button>
    <!-- <button @click='test'>调用子模块的mutationss</button> -->


  </div>
</template>

<script >
import {mapGetters, createNamespacedHelpers} from 'vuex'
const {mapMutations} = createNamespacedHelpers('user')
export default {
  computed: {
    ...mapGetters(['token','name'])
  },
  methods: {
    // updateToken (){
    //   //第一种方式 采用路径形式调用
    //   this.$store.commit('user/updateToken')
    // },
    // ...mapMutations(['user/updateToken']),
    // // 第二种方式 辅助函数
    // test(){
    //   this['user/updateToken']()
    // }

    // 第三种
    ...mapMutations(['updateToken'])   
  }
}

</script>

<style scoped>

</style>
