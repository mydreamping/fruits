
<template>
    <div class="shead">

        <section   class="mn-section search">
            <div  class="mn-card search-input">
                <div  class="mn-card-item">
                    <div class="icon" style="margin-right:.2rem" @click="getHome"> 
                         <div class="icon-container">
                              <mu-icon  size="48" value="home"></mu-icon>
                            </div>
                    </div>
                    <div  class="mn-card-body">
                        <input  placeholder="搜索生鲜商品" @keyup="getsearch($event)" v-model="value">
                    </div> 
                    <div  class="mn-card-body is-action is-suffix">
                        <button  class="mn-btn is-primary is-sm" @click="getgoods"><!----> 搜索</button>
                    </div>
                </div>
            </div>
            <!-- 模糊查询 -->
            <div class="suggest">
                <ul>
                    <li v-for="(s,index) in suggest" :key="index">{{s.Key}}</li>
                </ul>
            </div>
            <!---->
        </section> 

    </div>
</template>



<style src="./scss/shead.scss" lang="scss" scoped>
</style>

<style>
  .icon-flex-wrap .mu-button {
  margin: 6px 8px;
}

</style>

<script>
export default {
  props: ["message"],
  data() {
    return {
      value: "", //input输入的值
      suggest: "", //模糊查询
      goods: "", //搜索值
      list: [] //搜索记录
    };
  },

  methods: {
    
    //回到首页
    getHome(){
        this.$router.push("/");
    },
    // 键盘输入时模糊查询
    getsearch(e) {
      //   console.log(555);
      //   console.log(this.value);
      var self = this;
      this.$http({
        method: "GET",
        params:
          // this.$qs.stringify(
          {
            sourcetype: 9,
            json: {
              Keyword: this.value,
              Size: 10
            }
          },
        // )
        // headers:{'Content-Type':'application/x-www-form-urlencoded'},
        url: "/dtwx/Products/KeywordSuggestRequest?"
      }).then(function(response) {
        var data = response.data.Data;
        // console.log(data);
        self.suggest = data;
      });
    },
    //获取搜索存入内存
    getgoods(data) {
      this.goods = this.value;
      //   console.log(this.goods);
      this.setStorage();
      //   子组件向父组件传参
      this.$emit("getlist", ' '+this.list);
    },
    //设置localstorage
    setStorage() {
      var storage = window.localStorage;
      this.list.push(this.goods);
      //   console.log(this.list);
      storage.setItem("goods", this.list);
    },
    // 获取localstorage
    // getStorage() {
    //   var storage = window.localStorage;
    //   storage.getItem("goods");
    
    //   if (this.list > 0) {
    //     this.list = storage.getItem("goods").split(",");
    //   }
    // },
    
  },
  mounted() {
    // this.getStorage();
  }
};
</script>


