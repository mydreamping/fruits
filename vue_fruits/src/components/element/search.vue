<template>
    <div class="searcher">
        
        <div  class="fresh-stage">
            <div  class="fresh-rows">
                <div  class="mn-scroller is-hide-bar">
                    <div class="mn-scroller-contents">
                        <div  class="fresh-row" style="position: relative;">
                            <section  class="mn-section search">
                                <!-- <section   class="mn-section search">
                                    <div  class="mn-card search-input">
                                        <div  class="mn-card-item">
                                            <div  class="mn-card-body">
                                                <input  placeholder="搜索生鲜商品" @keyup="getsearch($event)" v-model="value">
                                            </div> 
                                            <div  class="mn-card-body is-action is-suffix">
                                                <button  class="mn-btn is-primary is-sm" @click="getgoods"> 搜索</button>
                                            </div>
                                        </div>
                                    </div>  -->
                                    <!-- 模糊查询 -->
                                  <!-- <div class="suggest">
                                        <ul>
                                            <li v-for="(s,index) in suggest" :key="index">{{s.Key}}</li>
                                        </ul>
                                    </div> 
                                 
                              </section>   -->
                                <!-- 搜索框 -->
                                <!-- 接收一组件子组件的传参 -->
                                <shead :message="list" v-on:getlist="show"/>
                                <!-- 给另一子组件传参 -->
                                <stable :parentMessage="list" />
                                <!-- <div  class="search-hotword">
                                    <p  class="title">热门搜索</p>
                                        <div  class="lists">
                                            <p  class="item" v-for="(t,index) in total" :key="index" @click="getidx(index)">{{t.HotWordName}}</p>
                                        
                                    </div>
                                </div>
                                <div  class="search-recent">
                                    <p  class="title">最近搜索</p> 
                                    <div  class="lists">
                                        <div  class="item"  v-for="(l,index) in list" :key="index">
                                            <p >{{l}}</p> 
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
                                </div> -->
                            </section>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    <!-- <router-view></router-view> -->
    </div>
</template>

<style src="./scss/search.scss" lang="scss" scoped>
</style>


<script>
import shead from "./../common/shead.vue";
import stable from "./stable.vue";

export default {
  data() {
    return {
      total: "",
      //   value: "", //input输入的值
      //   suggest: "", //模糊查询
      goods: "", //搜索值
      list: [], //搜索记录
      
    };
  },
  components: {
    shead,
    stable
  },
  methods: {
    //   接收子组件的参数展示
    show: function(data) {
      //   this.list = data;
      this.list = data.split(",");
      //   console.log(this);
    },
    // p标签内容渲染
    // getData() {
    //   var self = this;
    //   this.$http({
    //     method: "get",
    //     parmas: {
    //       sourcetype: 9
    //     },
    //     url: "/dt/wx/Products/ProductHotWordRequest"
    //   }).then(function(response) {
    //     // console.log(response.data.Data);
    //     var data = response.data.Data;
    //     self.total = data;
    //   });
    // },
    // //获取搜索存入内存
    // getgoods(data) {
    //   this.goods = this.value;
    //   console.log(this.goods);
    //   this.setStorage();
    // },
    // // //设置localstorage
    // setStorage() {
    //   var storage = window.localStorage;
    //   this.list.push(this.goods);
    //   console.log(this.list);
    //   storage.setItem("goods", this.list);
    // },
    // // 获取localstorage
    getStorage() {
    //   console.log(666);
      var storage = window.localStorage;
      this.list = storage.getItem("goods");

      //   if (this.list > 0) {
      this.list = storage.getItem("goods").split(",");
      //   }
      //   console.log(this.list);
    }
    // //删除localstorage
    // deleteStorage(e) {
    //   //   console.log(e);
    //   //   console.log(this.list);
    //   this.list.splice(e, 1);
    //   var storage = window.localStorage;
    //   storage.setItem("goods", this.list);
    //   //   console.log(this.list);
    // },
    // // 删除localstorage存入项
    // delStorage() {
    //   localStorage.removeItem("goods");
    //   this.list = "";
    // },
    // // 点击获取点击值
    // getidx(e) {
    //   console.log(e);
    //   console.log(this.total[e].HotWordName);
    // }
  },
  mounted() {
    // this.getData();
    // this.getStorage();
  }
};
</script>