import { createRouter, createWebHashHistory } from "vue-router";
// import Index from "../views/Index.vue"
// import Data from "../views/Data.vue"
// import User from "../views/User.vue"
import Home from "../views/Home.vue"
//创建路由实例

const router = createRouter({  
    history: createWebHashHistory(), 
    // hash 模式：createWebHashHistory，history 模式：createWebHistory  
    routes: [        
        {           
             path: "/",            
            redirect: "/home",        
        },        
        {            
            path: "/home",           
             component: Home,        
        }       
    //      {           
    //          path: "/data",           
    //          component: Data,        
    //     },        
    //     {            
    //         path: "/user",           
    //          component: User,        
    //     },    
     ]
});
// 抛出路由实例, 在 main.js 中引用
export default router;