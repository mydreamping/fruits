<template>
    
    <div class="default">
         
          <div>

              <!-- 方框 -->

              <div class="mn-scroller is-hide-bar">
                <div class="mn-scroller-contents">
                    <div class="product">

                      <div  class="product-item" v-for="(l,index) in list" :key="index">
                        <div  class="inner">
                          <div  class="image">
                            <div  class="mn-image">
                              <div class="mn-image-holder" >
                                </div> 
                                <img :src="`http://picpro-sz.34580.com/sh/ImageUrl/${l.PictureId}/500.jpeg`" class="mn-image-source is-active"></div> 
                                <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABQCAMAAACpg44GAAAA9lBMVEUAAAAKuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv8Kuv////9qzf/V7/+k3v8swP/1/P+K1v/g9P9ZyP8jwf/J7P81xv8PvP+b4/9Fw/+q5/+Y2v9e0v++5/+S4f/q+P/Z9f+x4v/C7v8yxv+L3v9q1f970f8+yf/R8v9w1//w+/9Mzf+y6f+C3P992/932f9m1P8bwP8Xvv+g5P9W0P+57P/n+f/U8/+06v9KzP8Tvf/i9/+v6f+P3/9Pzf9Fy/+X4v/6/v+Z4v+H3f9Ozf+l5v8e9JF+AAAAFnRSTlMA9CGJc1/GsulmO/uXMtLPzZBGQQMBxF5xeAAABwlJREFUaN7Mlmlv2kAQhtuUNr3vzrvGNsahhlLCGRIgIfchmrRN+///TJndMWC8WJbakjwfsFgk9Ghm3lk/oPXx4sULWuLhZuHVg2zoznn68v39Fpzy5tHG/Rac9vrRxv0WnCo+vg+C7XFn0j/zAO/sfNIZt2mRJ8/vVvCwW21giUa1e0hzCncoeD38ASs/htc0Y3PjbgQr421ksD2ukMCTuH7BS9HLULykmGdrFyxXkYNqmYTCmgVP9pCLvRMSCusUrHxFbr7Gk/jsLwVdRXk5asFGa2I/PiLD45yCPoAmpWgCjZzj17eXiqgNG30ZxIcbGYKB48aV8niVurPzgAzT42K+1bwivTtEdGxPsxhurhZUHkriFIIJSVMDn0dKqSIAXwmZ/e3DzhYRfYbdULpcWCkYAGJYZxEPqBPT0+0uYomsfLSQKWinJUl5vrLFvhjWtVEN2lDqqXIL2hX2yzvHIngLYLd8gxSfSfNkdUiKLOaG4slPx5WJ9GqOww9nBq3kC1JM9F48hc7P7S7X6hdSfEkmmdLUfeo12C8Ka+SWwGKmyaGrPf08Abbs59+UwlLCvXIiyWQjhPabugRsKG0OfVPfBgVcu2yqSHD6mf/zhJbhPV49RYIqaR5lCPrgarFMicjlaZS4SgEVT18ml6nNR6zROaRFxphyTXSABJeLJSQrDmps0zBmNc9ZGFCPcghup+dqZHKy0F5d5T4HfmnXSAkzBKOImF5onm6gP82SDpXibCsmyJMQEdyHoStD+lX2Ck2x5uTtCsEoVBQ4CZqmrI4iJHHITh9CdVRdEpRF0obQTwvyGfPBLugDJWXxcHlx5xMcLLoMhsCNERTaRPQdwjmZ+Rzu85EwIOalXbAJODZBloscDQdbSpsd4V3jy34imLpJzs1y5ICPloL81C5YAoquiul5kMUXmkwrikMSBWTnyIPwnYRMwXT0vSO57yyCriwV13wraT85r3GMHaUFozr7Whkv7JdypqBEVhhhxlhybL+LPX549YjLJn7SYYoQ70HeiMUcS3pEwpZd8IKEqw7mDOVCtgjWgdCsQNSjuvFjHD7nT0dazLvG3uQz+wtF1yZ48YsMleR9R5qPFsGG7mTQgGByIKXrcf9FkErWFKfflq/mPUwJHqxanVvEvEoLBnFdfKPo9WZXCFxXXg9rWlBp5zTd5C3nkka2c0Kwo90F6XBinT9LC9Z4BA1+CUzDF8GQ2++5zVnjHNZNwxIzTqSBg4X7rWwK9nNLfqvIkP5M3N7Mu7RgL5yKxKipQhyFoOTzW2KP/NlqDBxFFi4wp02aXakJs1M2LZWf6MA0WvZ1MjubacHkemNFhwTulQygF7q0kvPla38wNMkc2G7tlr6Qze37DUiux9cimIWKKJPsEN/I3KXmUap5DOF4J1nBs/guoX+Pl8iIxFW4rdCcQ6mYKO5PMEOC8PC/CCKTueEVsiDNpz/dm2Fr2zAQhgeFfSn7qpMVW45XjJJl6TKnGaTZVmjHSkIK6///M7OkN9WM2pupm9Tp+8EF24UnsXy6e++yD8C7vgM2yqXz87aP+PLP8kCPWFPQCi8C95KErGJ2mJfkovE9IJTwYQaXFkyY6SAuUA8RjPlAvQhpUByou4rf6q4+ttvq4DkwW10H8cnC7HfLZOETkyx0FZ9unbVKtxZMutVBe0tY7adqJqy5ZEpxRgdL+QkS3fW9afdCi8cBb0V8x24JnjQBx6qWEd0Vyk6aiVaAEFt2Bgfr5Z4xCuPN5n+A8/u5PbKFewAcyFJIlbnk1SiV/7tEBc6a3VkhKmXK2PrYaTW04W0TAW4bgPc102jEWx8BUJIau8Xoyg84wAk5SdRPqEYS8v5m9uRuFyyQUWQeBcBb1jyKATUpqWyJrEtRaucgZEqpmrdmNaSlKBNSDlCnmSwoHXD2WxNwFVKZCJCz3/CSVBaQpqhA4Z5XsJUcVEq5PUupB7S3aMp4A3MFQGweoYpDid7GwAxGlkSnS6G+KzwvzkvScBpye5D+TsVbwFc+l8L2C6GaugymDGsBExlZq7QICRCUB4U/OPErEF2IlGQDkDfRt1/X4ekGuXaJ1ryJHq/BxwEVTQUAvcoYkG9DfBaRzpg2RAvAKZZe4VbkZBBwoQiQbeRc+yR67t285Q8b0/lGDg+osNo0GXeUuJoygHwrbD38sobdYP8uh4Mt3wrjAXMf3zKiEg8YZa9hAF+2mcgDirENPWOPmZJOalUOeCplViQMoNPPm2e0Y9HpidqxCG9O+YN9pFxLu/KXnVzTbvJgehX+nwyZ/TW0ecUJIjbmwSuMBLRXX4YqjnUs5U0N9hzBaFT/h8uOYDyPH3D81YMBx2MYEQ1DtjfXKd190xe9G7Jl1Zcx5SfU+0Hvfo/K9+fHBqenItL7kw/vWP0FkoFtuJpzJc4AAAAASUVORK5CYII=" v-show="l.IsFreeze" class="is-freeze"> 
                                </div>
                                <div  class="title">
                                    {{l.ProductName}}
                                  </div>
                                  <div  class="info">
                                    <div  class="unit">
                                        {{l.PvStandard}}
                                      </div> 
                                      <div  class="price">
                                        ¥
                                        <span>{{l.PeriodMoney}}</span>
                                      </div>
                                      </div> 
                                      <div  class="action">
                                        <span  class="mn-icon" >
                                          <span class="mn-icon-svg" >
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve">
                                                <g>
                                                  <path fill="none" stroke="#E45528" stroke-width="2" stroke-miterlimit="10" d="M24.101,23.945h3.033c0,0,1.116,0.211,1.116,1.728
                                                    l2.265,16.817c0,0,0.069,0.776,1.045,0.776h15.859"></path>
                                                  <path fill="none" stroke="#E45528" stroke-width="2" stroke-miterlimit="10" d="M28.551,27.92h18.868c0,0,1.465-0.027,1.465,1.313
                                                    c0,0-0.685,5.795-1.709,7.827c0,0-0.659,1.833-3.311,2.188c0,0-13.593,1.615-13.593,1.432L28.551,27.92z"></path>
                                                  <path fill="#E45528" d="M32.571,45.682c0.947,0,1.715,0.774,1.715,1.734c0,0.958-0.768,1.733-1.715,1.733
                                                    c-0.947,0-1.715-0.775-1.715-1.733C30.856,46.456,31.624,45.682,32.571,45.682z"></path>
                                                  <path fill="#E45528" d="M43.987,45.682c0.947,0,1.715,0.774,1.715,1.734c0,0.958-0.768,1.733-1.715,1.733s-1.715-0.775-1.715-1.733
                                                    C42.272,46.456,43.04,45.682,43.987,45.682z"></path>
                                                </g>
                                                <circle fill="none" stroke="#A1A1A1" stroke-miterlimit="10" cx="36.492" cy="36.547" r="25.667">
                                                  
                                                </circle>
                                              </svg>
                                            </span> 
                                          </span>
                                        </div>
                          </div>
                        </div>
                    
                    </div>

                </div>
                
              </div>

                <dfoot />
          </div>

        

    </div>
    
</template>


<style src="./scss/default.scss" lang="scss" >


</style>


<script>
// import http from "./../../utils/HttpClient";

import shead from "./../common/shead.vue";
import dfoot from "./../common/dfoot.vue";

export default {
  data() {
    return {
      listgoods:"",//获取存入来的参数
      list:"",//商品
    };
  },
  methods: {
    //获取路由的参数
    getRouterData() {
      this.listgoods = this.$route.query.data;
      console.log(this.$route.query.data)
      console.log('detail', this.listgoods);
    },
    // 获取数据
    getList() {
      
      var self = this;
      this.$http({
        method: "GET",
        params: {
          sourcetype: 9,
          Keyword: this.listgoods,
          PageIndex: 1,
          PageSize: 20,
          OrderDirectionType: 0,
          OrderFieldType: 0,
          mode: 1,
        },
        url: "/dt/sh/ProductRequests/SearchProductRequest?"
      }).then(function(response) {
        console.log(response);
        console.log(response.data.Data.SourceData);
        self.list = response.data.Data.SourceData;
      });
    },
  },
  components: {
    shead,
    dfoot
  },
  mounted() {
    this.getRouterData();
    this.getList();
  }
};
</script>