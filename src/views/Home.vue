<template>  

  <div class="navbar">  
    <div >
      <van-nav-bar >  
        <template #left>
        <van-image
           width="100"
           height="100"
           src="https://du929.oss-cn-hangzhou.aliyuncs.com/img/b.jpeg"
         />
            </template>
            <template #right>
        <van-icon name="search" 
           size="25px"  />
           <van-image
             width="25"
             height="25"
             radius='50'
  

             src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
           <van-button type="primary" to="index" size="mini">下載APP</van-button>
            </template>
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" /> -->
    </div >
</div>
<div>
   <van-nav-bar >  
     <template #left>
      <van-list >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>         
     </template>
  <template #right>
   <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" />
  </template>
</van-nav-bar>
</div>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"  success-text="刷新成功">
  <p>刷新次数: {{ count }}</p>
</van-pull-refresh> -->

    <!-- <v-content class="ma-0">
    <v-row align="start" justify="start">
      <v-col cols="12" class="shrink" md="4" v-for="(item, index) in watch.slice((page - 1) * 20, page * 20)" :key="index">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          
          <v-card class="mx-2 secondary" :elevation="hover ? 16 : 2" link height="400">
            <v-img :src="item.pic" height="160">       
            </v-img>
            
           <v-tooltip bottom> 
            <v-card-title>
              {{ item.title }}
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
</v-content> -->
<div>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh"  success-text="刷新成功">
  <van-grid :border="false" :column-num="2" :gutter="10">
  <van-grid-item>
    <van-image src="http://i0.hdslb.com/bfs/archive/d4fc8471e6fe3bcdf1de4df43fabffaad74646b4.jpg"/>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://i0.hdslb.com/bfs/archive/19da21a55fe51d92a3c8d3f9b4ee7467b79257c2.jpg"/>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://i0.hdslb.com/bfs/archive/8eb9bb5c9cdf7186c85ee17b6d332947ebe9244d.jpg"/>
  </van-grid-item>
   <van-grid-item>
    <van-image src="http://i1.hdslb.com/bfs/archive/a9c4c95cc2b115d772928a1ece5296a3681ad7be.jpg"/>
  </van-grid-item>
   <van-grid-item>
    <van-image src="http://i0.hdslb.com/bfs/archive/67c3bbae0eec01a1783f35851649724cb4c408bd.jpg"/>
  </van-grid-item>
   <van-grid-item>
    <van-image src="http://i0.hdslb.com/bfs/archive/235c2ad05b9ac03cfa3f2538b06f22a6d0a68384.jpg"/>
  </van-grid-item>
</van-grid>
</van-pull-refresh>
</div>
<van-sticky :offset-top="10">
  <van-button color="pink">打开APP，看你感兴趣的视频</van-button>
</van-sticky>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item" :title="item" />
  </van-list>
</van-pull-refresh>

</template>
<script>  
// import { Toast } from 'vant';

export default {
    name: "Home",
data() {
    
    return {
      container: null,
        value: '',
        // list: [
        //     '首页',
        //     '动漫',
        //     '番剧',
        //     '国创',
        //     '音乐',
        //     '舞蹈',
        // ],
      active:0,
        watch:[],
    value1: 0,
      count: 0,
      isLoading: false,
       option1: [
        { text: '首页', value: 1 },
        { text: '动漫', value: 2 },
        { text: '番剧', value: 3 },
        { text: '国创', value: 4 },
        { text: '音乐', value: 5 },
        { text: '舞蹈', value: 6 },
      ],

      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
    
  },
   mounted() {
    this.container = this.$refs.container;
  },
  methods: {
      toggle(index){
                    this.active=index
                },
    // onRefresh() {
    //   setTimeout(() => {
    //     Toast('刷新成功');
    //     this.isLoading = false;
    //     this.count++;
    //   }, 1000);
    // },
     onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  
  },
  // created() {
  //   this.axios.get('/api/watch').then((res) => {
  //     console.log(res.data)
  //     console.log(res.data.data)
  //     this.watch = res.data.data

  //   })
  // }
};
</script>
<style scoped>

a {
    text-decoration: none;
    color: inherit;
    cursor: default;
}

</style>