<template>
    <div class="introduce">
       <div  class="sell-point is-iphone5">
            <div  class="point-wrapper" v-for="(t,index) in total" :key="index"><img  :src="t.PicUrl" alt="" class="point-img">{{t.Description}}
            </div>
        </div>

    </div>
</template>

<style src="./introduce.scss" lang="scss" scoped>
</style>


<script>

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
            NowVersion:1
        },
        url: "/dt/sh/Home/DefaultHomeV2Request"
      }).then(function(response) {
        console.log(response);
        console.log(response.data.Data);
        var data = response.data.Data;
        // 现在这里的total就是遍历出来的所需数据
        self.total = data.HomeTabInfos[0].SellPoints;
        console.log(data.HomeTabInfos[0].SellPoints);
        
      });
    },
   
  },
  mounted() {
    this.getData();
    
  }
};
</script>