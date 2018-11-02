<template>
    <div class="swiper">
        <mu-carousel>
            <mu-carousel-item v-for="(t,index) in total" :key="index"> 
                    <img :src="t.PicUrl" :data-num="t.id"> 
            </mu-carousel-item>
        </mu-carousel>

    </div>
</template>

<style src="./scss/swiper.scss" lang="scss" scoped>
</style>


<script>

export default {
  data() {
    return {
      PicUrl:"",
      total:""
    };
  },
  methods: {
    getData() {
      var self = this;
      this.$http({
        method: "get",
        params: {
        //   sourcetype: 9,
        //   json: {"TypeCode":1011,"PlatForm":1500}
        },
        url: "/dt/sh/Home/AdvertisementPhotoshootRequest?sourcetype=9&json=%7B%22TypeCode%22:1011,%22PlatForm%22:1500%7D"
      }).then(function(response) {
        // console.log(response);
        // console.log(response.data.Data);
        var data = response.data.Data;
        self.total = data;
        
      });
    },
   
  },
  mounted() {
    this.getData();
    
  }
};
</script>