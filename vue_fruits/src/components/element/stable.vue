<template>
    
    <div class="stable">
       
            <div  class="search-hotword">
                <p  class="title">热门搜索</p>
                    <div  class="lists">
                        <p  class="item" v-for="(t,index) in total" :key="index" @click="getidx(index)">{{t.HotWordName}}</p>
                    
                </div>
            </div>
            <div  class="search-recent">
                <p  class="title">最近搜索</p> 
                <div  class="lists">
                    <div  class="item"  v-for="(l,index) in list" :key="index">
                        <p>{{l}}</p> 
                        <span  class="close" @click="deleteStorage(index)">
                            <span  class="mn-icon" style="width: 50px; height: 50px;">
                                <span class="mn-icon-svg" style="width: 50px; height: 50px;">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                    <path d="M21.262 10l-5.275 5.269-5.25-5.244-0.738 0.738 5.25 5.237-5.25 5.244 0.738 0.731 5.25-5.238 5.275 5.262 0.738-0.731-5.275-5.269 5.275-5.262z">
                                    </path>
                                </svg>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div  class="clear-item" @click="delStorage">
                            <p >清空搜索历史</p>
                    </div>
                </div>
            </div>



    </div>
    
</template>


<style src="./scss/stable.scss" lang="scss" scoped>
</style>


<script>
// import http from "./../../utils/HttpClient";

export default {
  props: ["parentMessage"],
  data() {
    return {
      total: "",
      value: "", //input输入的值
      suggest: "", //模糊查询
      goods: "", //搜索值
      list: [] //搜索记录
    };
  },
  methods: {
    // p标签内容渲染
    getData() {
      var self = this;
      this.$http({
        method: "get",
        params: {
          sourcetype: 9
        },
        url: "/dt/wx/Products/ProductHotWordRequest"
      }).then(function(response) {
        // console.log(response.data.Data);
        var data = response.data.Data;
        self.total = data;
      });
    },
    getStorage() {
      // console.log(666);
      var storage = window.localStorage;
      this.list = storage.getItem("goods");

      //   if (this.list > 0) {
      this.list = storage.getItem("goods").split(",");
      //   }
      // console.log(this.list);
    },
    //删除localstorage
    deleteStorage(e) {
      //   console.log(e);
      //   console.log(this.list);
      this.list.splice(e, 1);
      var storage = window.localStorage;
      storage.setItem("goods", this.list);
      //   console.log(this.list);
    },
    // 删除localstorage存入项
    delStorage() {
      localStorage.removeItem("goods");
      this.list = "";
    },
    // 点击获取点击值并切换路由
    getidx(e) {
      console.log(e);
      var data = this.total[e].HotWordName;
      console.log('44444444444444',data);
      this.$router.push({ path:'/detail/default', query: { data: data }})
     
     
      // console.log(data);
    },
    
  },
  components: {},
  mounted() {
    this.getData();
    this.getStorage();
    console.log(this.parentMessage);
  },
  // 监听父组件的变化
  watch:{
    parentMessage (a){
      console.log(a)
      this.list = a;
    }

  }
};
</script>