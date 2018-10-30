<template>
    
    <div class="home">
        <comhead />
        <pannel />
        <comfoot />

        
    </div>
    
</template>


<style lang="scss" scoped>
    .demo-loading-wrap {
      height: 300px;
      position: relative;
      .mu-button {
        margin: 6px 8px;
      }
  }

</style>


<script>
// import http from "./../../utils/HttpClient";

import comhead from "./../common/comhead.vue"
import pannel from "./../pannel/pannel.vue"
import comfoot from "./../common/comfoot.vue"

export default {
  data() {
    return {
      
    };
  },
  methods: {
      fullscreen () {
        const loading = this.$loading();
        setTimeout(() => {
          loading.close();
        }, 2000)
      }
  },
  components: {
      comhead,
      pannel,
      comfoot
    
  },
  mounted() {
    
  }
};
</script>