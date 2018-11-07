<template>
    <div class="gheader">

        <div class="container-wrapper" v-show="isFixed" :class="isFixed == true?'isFixed':''">
            <div  class="product-navigation">
                <div  class="product-navigation-item" v-for="(t,index) in tabs" :class="{isselected:index == num}" @click="tab(index)" :key="index">
                    <span >{{t.name}}</span>
                </div>
                
            </div>
        </div>
        <div class="tabCon">
            <div v-show="num===0"><good/></div>
            <div v-show="num===1"><gooddetail /></div>
            <div v-show="num===2"><comment /></div>
        </div>

        


    </div>
</template>

<style lang="scss" src="./scss/gheader.scss">
</style>

<style lang="scss" scoped>
.detail {
  background-color: #f0f0f0;
}
.isFixed {
  position: fixed;
  top: 0px;
  z-index: 4;
  width: 100%;
  margin-bottom: 2rem;
}
</style>



<script>
import good from "./good.vue";
import gooddetail from "./gooddetail.vue";
import comment from "./comment.vue";

export default {
  data() {
    return {
      isFixed: false,
      num: 0,
      show: false,
      tabs: [
        {
          name: "商品",
          isSelected: true
        },
        {
          name: "详情",
          isSelected: false
        },
        {
          name: "评价",
          isSelected: false
        }
      ]
    };
  },
  components: {
    good,
    gooddetail,
    comment
  },
  methods: {
    //获取当前位置
    getnow() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop)

      if (scrollTop < 500) {
        this.isFixed = false;
      }
      if (scrollTop > 300) {
        this.isFixed = true;
      }
    },
    //选项卡切换
    tab(index) {
      //   console.log(index);
      this.num = index;
    }
  },
  mounted() {
    //监听滑动
    window.addEventListener("scroll", this.getnow);
  }
};
</script>

