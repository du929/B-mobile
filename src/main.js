import { createApp } from 'vue'
import { Tabbar, TabbarItem,Icon,Button,PullRefresh ,NavBar, DropdownMenu, DropdownItem, List,Search,Image as VanImage ,Grid, GridItem} from "vant";
import App from './App.vue'
import './index.css'
import router from "./router"
import "lib-flexible/flexible"
import "vant/lib/index.css"

const app = createApp(App)//注意：如使用链式写法,必须先各种use，最后再mount，否则会报错！！
app
.use(router)
.use(Button)
.use(Icon)
.use(Tabbar)
.use(TabbarItem)
.use(PullRefresh)
.use(NavBar)
.use(DropdownMenu)
.use(DropdownItem)
.use(List)
.use(Search)
.use(VanImage)
.use(Grid)
.use(GridItem)
.mount("#app")