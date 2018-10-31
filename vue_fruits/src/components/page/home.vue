<template>
    
    <div class="home">
      <div v-loading="false" data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" style="position: relative;">
          <comhead />
          <pannel />
          <comfoot />

      </div>

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

import comhead from "./../common/comhead.vue";
import pannel from "./../pannel/pannel.vue";
import comfoot from "./../common/comfoot.vue";

import "muse-ui-loading/dist/muse-ui-loading.css"; // load css
import Vue from "vue";
import Loading from "muse-ui-loading";
Vue.use(Loading);

export default {
  data() {
    return {};
  },
  methods: {
    loading() {
      const loading = this.$loading({
        // ...options
        
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  },
  components: {
    comhead,
    pannel,
    comfoot
  },
  mounted() {
    this.loading();
  }
};
</script>