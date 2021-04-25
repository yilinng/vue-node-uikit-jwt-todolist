<template>
  <div class="layout">
    <!--you can also use :key="someVariableUnderYourControl" and change the key when you want to component to be completely rebuilt-->
    <Header :key="token"/>
     <router-view></router-view>
    <footerr></footerr>       
  </div>
</template>

<script>

import Header from './components/Header.vue'
import footerr from './components/footer.vue'

export default { 

  name: 'App',
  components: {
    Header,
    footerr,
   
  },
  data(){
   return {
    get token (){
          return localStorage.getItem('token')
        }
    }       
  },
  methods:{
    
  }
}
</script>
<style lang="less">

  @import "../node_modules/uikit/src/less/uikit.less";
  .layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}
/*  Relative to 1% of the height of the viewport*(vh)  */

</style>


