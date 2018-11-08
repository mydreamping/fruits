<template>
    <div class="gheader">

        <div class="container-wrapper" v-show="isFixed" :class="isFixed == true?'isFixed':''">
            <div  class="product-navigation">
                <div  class="product-navigation-item" v-for="(t,index) in tabs" :class="{isselected:index == num}" @click="tab(index)" :key="index">
                    <span >{{t.name}}</span>
                </div>
                
            </div>
        </div>
        <div class="tabCon" style="margin-bottom:1.3rem;" ref="categoryList">
          <!-- v-show="num===0" -->
            <div id="good" ref="good"><good /></div>
            <div id="comment" ref="comment"><comment /></div>
            <div id="gooddetail" ref="gooddetail"><gooddetail /></div>
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
      list: "",
      isFixed: false,
      num: 0,
      show: false,
      tabs: [
        {
          name: "商品",
          isSelected: true
        },
        {
          name: "评价",
          isSelected: false
        },
        {
          name: "详情",
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

      //获取所有盒子的高度
      var totalHeight = this.$refs.categoryList.offsetHeight;
      //设置当前高度
      var currentHeight = 0;

      for (var i = 0; i < this.$refs.categoryList.children.length; i++) {
        currentHeight += this.$refs.categoryList.children[i].offsetHeight;

        if (scrollTop < 500) {
          this.isFixed = false;
        }
        if (scrollTop > 300) {
          this.isFixed = true;
        }
        if (scrollTop + 400 > currentHeight) {
          this.num = i + 1;
        }
        if (scrollTop < 300) {
          this.num = 0;
        }
      }
    },
    //选项卡切换
    tab(index) {
      //   console.log(index);
      this.num = index;
      if (index == 0) {
        document.querySelector("#good").scrollIntoView(true);
      } else if (index == 1) {
        document.querySelector("#comment").scrollIntoView(true);
      } else if (index == 2) {
        document.querySelector("#gooddetail").scrollIntoView(true);
      }
    }
  },
  mounted() {
    //监听滑动
    window.addEventListener("scroll", this.getnow);
  }
};
</script>

