<template>
  <!-- 和 vue-router3 一样，展示路由的组件的地方 -->  
  <router-view />
  <MyNavBar v-if="show" />
</template>

<script>
import MyNavBar from "./components/MyNavBar.vue";
import { useRouter } from "vue-router"; 
import { reactive, toRefs } from "vue";
export default {
  name: 'App',
  components: {    MyNavBar,  },
  // setup() {      
  //   const state = reactive({        
  //     // 2        
  //     menu: ["/index", "/data", "/user"],        
  //     show: false,      
  //     });      
  //     const router = useRouter();      
  //     router.afterEach(() => {        
  //       // menu 内的路径都是需要展示底部导航栏的       
  //        state.show = state.menu.includes(router.currentRoute.value.path);      
  //       })  
  //        return {        
  //         ...toRefs(state),      
  //         };    
  //       },  
    };
</script>
