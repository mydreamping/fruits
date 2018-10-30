<template>
    <div class="pannel">

        <!-- 我是面板 -->
        <swiper />
        <introduce />

    </div>
</template>

<style src="./pannel.scss" lang="scss" scoped>


</style>


<script>
// import http from "./../../utils/HttpClient";
import swiper from "./../element/swiper.vue"
import introduce from "./../element/introduce.vue"

export default {
  data() {
    return {};
  },
  methods: {
   
  },
  components: {
    swiper,
    introduce
    
  },
  mounted() {
    
  }
};
</script>