<template>
    
    <div class="city">
     
        <div class="fresh-stage city-bg">
            <div class="fresh-rows">
                <div class="mn-scroller is-hide-bar">
                    <div class="mn-scroller-contents">
                        <div class="fresh-row" style="position: relative;">
                            <div class="city">
                                <div class="title">
                                    <p>请选择城市，再忙也能买好菜</p>
                                </div>
                                <!----> 
                                <div class="item"  v-for="(t,index) in total" :key="index">
                                    <p>{{t.CityName}}</p>  
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    
</template>


<style src="./city.scss" lang="scss">

</style>


<script>
// import http from "./../../utils/HttpClient";


export default {
  data() {
    return {
      total:""
    };
  },
  methods: {
      getData() {
      var self = this;
      this.$http({
        method: "get",
        parmas: {
            sourcetype:9,
        },
        url: "/dt/sh/Basic/CityRouteRequest"
      }).then(function(response) {
        console.log(response);
        console.log(response.data.Data);
        var data = response.data.Data;
        self.total = data;
        
      });
    },
  },
  components: {
     
  },
  mounted() {
    this.getData();
  }
};
</script>