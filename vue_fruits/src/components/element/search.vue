<template>
    <div class="searcher">
        
        <div  class="fresh-stage">
            <div  class="fresh-rows">
                <div  class="mn-scroller is-hide-bar">
                    <div class="mn-scroller-contents">
                        <div  class="fresh-row" style="position: relative;">
                            <section  class="mn-section search">
                                <section   class="mn-section search">
                                    <div  class="mn-card search-input">
                                        <div  class="mn-card-item">
                                            <div  class="mn-card-body">
                                                <input  placeholder="搜索生鲜商品" @keyup="getsearch($event)" v-model="value">
                                            </div> 
                                            <div  class="mn-card-body is-action is-suffix">
                                                <button  class="mn-btn is-primary is-sm"><!----> 搜索</button>
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
                                    <div  class="search-hotword">
                                        <p  class="title">热门搜索</p>
                                         <div  class="lists">
                                             <p  class="item" v-for="(t,index) in total" :key="index">{{t.HotWordName}}</p>
                                            
                                        </div>
                                    </div>
                                    <div  class="search-recent">
                                        <p  class="title">最近搜索</p> 
                                        <div  class="lists">
                                            <div  class="clear-item">
                                                 <p >清空搜索历史</p>
                                            </div>
                                        </div>
                                    </div>
                            </section>
                            </div>
                        </div>
                    </div>
                </div>
        </div>


    </div>
</template>

<style src="./scss/search.scss" lang="scss" scoped>
</style>


<script>
export default {
  data() {
    return {
      total: "",
      value: "",
      suggest: ""
    };
  },
  methods: {
    getData() {
      var self = this;
      this.$http({
        method: "get",
        parmas: {
          sourcetype: 9
        },
        url: "/dt/wx/Products/ProductHotWordRequest"
      }).then(function(response) {
        // console.log(response.data.Data);
        var data = response.data.Data;
        self.total = data;
      });
    },
    getsearch(e) {
      //   console.log(555);
      console.log(this.value);
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
        console.log(data);
        self.suggest = data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>