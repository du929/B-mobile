<template>  

</template>
<script>  
import { useRouter } from "vue-router";  
export default {    
    name: "Header",    // 4    
    props: {      
        title: {        
            type: String,        
            default: "",      
        },    
    },    
    setup() {      
        const router = useRouter();      
        // 5      
        // 返回方法     
         const back = () => {        
             router.back();     
         };     
          return {        
              back,     
             };    
        },  
};
</script>
<style lang="less" scoped>  
.block {   
     width: 100%;    
     height: 46px;  
    } 
.header {    
    position: fixed;    
    top: 0;    left: 0;    
    width: 100%;    
    .more {     
         font-size: 20px;    
         } 
     }
</style>