<template>
    <div class="comment">
            <section  class="mn-section">
                
                <div  class="mn-card product-review"><div  class="mn-card-item is-link"><div  class="mn-card-body is-prefix">商品评价(共1374人评价)</div> <div  class="mn-card-body"></div> <div  class="mn-card-body is-suffix"><span  class="mn-rate"><span class="mn-rate-item is-disabled"><span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30 12.938h-10.712l-3.288-9.944-3.287 9.944h-10.713l8.762 6.119-3.412 9.944 8.65-6.163 8.65 6.163-3.419-9.944 8.769-6.119z">
                    </path>
                    </svg></span> </span>  </span><span class="mn-rate-item is-disabled"><span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30 12.938h-10.712l-3.288-9.944-3.287 9.944h-10.713l8.762 6.119-3.412 9.944 8.65-6.163 8.65 6.163-3.419-9.944 8.769-6.119z">
                    </path>
                    </svg></span> </span>  </span><span class="mn-rate-item is-disabled"><span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30 12.938h-10.712l-3.288-9.944-3.287 9.944h-10.713l8.762 6.119-3.412 9.944 8.65-6.163 8.65 6.163-3.419-9.944 8.769-6.119z">
                    </path>
                    </svg></span> </span>  </span><span class="mn-rate-item is-disabled"><span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M30 12.938h-10.712l-3.288-9.944-3.287 9.944h-10.713l8.762 6.119-3.412 9.944 8.65-6.163 8.65 6.163-3.419-9.944 8.769-6.119z">
                    </path>
                    </svg></span> </span>  </span><span class="mn-rate-item is-disabled">  <span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M10.765 19.058l-3.417 9.942 8.652-6.165 8.653 6.165-3.418-9.942 8.765-6.121h-10.712l-3.288-9.937-3.287 9.937h-10.713l8.765 6.121zM16 6.297l2.563 7.703h8.188l-6.75 4.669 2.664 7.655-6.664-4.746v-15.282z">
                    </path>
                    </svg></span> </span></span></span> <span >4.99分</span></div></div>  
                    
                    
                    <section  class="mn-section" v-for="(c,index) in comment" :key="index">
                        <div class="mn-card product-review-component is-sample">
                            <div class="mn-card-item"><div class="mn-card-body"><div class="product-review-component-user"><div class="avatar"><img :src="c.CustomerFace"></div> <div class="information">
                                <p>{{c.CustomerName}} 
                                    <span v-show="c.IsMaxMember" class="max-vip-mark">Max</span>
                                </p>
                                 <div>
                                     <span class="mn-rate">
                                         <span class="mn-rate-item is-disabled">
                                             <span class="mn-icon" >
                                                 <span class="mn-icon-svg" >
                                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                        <path d="M30 12.938h-10.712l-3.288-9.944-3.287 9.944h-10.713l8.762 6.119-3.412 9.944 8.65-6.163 8.65 6.163-3.419-9.944 8.769-6.119z">
                                                        </path>
                                                    </svg>
                                                </span>
                                            </span> 
                                        </span>
                                    </span> 
                      <span>{{c.ProQuality}}分</span>
                      </div>
                      </div>
                      </div> 
                      
                      <div class="product-review-component-tags"><span>{{c.Tags[0]}}</span></div> <div class="product-review-component-content"><p>{{c.ReflexContext}}</p></div> <div class="product-review-component-pics"><div class="image"><img :src="c.Pics[0]"></div></div> <div class="product-review-component-add"><p>{{c.CreateTime}}</p> <div class="counts"><span class="mn-icon" ><span class="mn-icon-svg" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M16 28.087c1.806 0 3.525-0.356 5.081-0.994 0.038-0.019 0.069-0.031 0.106-0.044 0.006 0 0.012 0 0.012-0.006 0.219-0.081 0.456-0.125 0.7-0.125 0.269 0 0.525 0.050 0.756 0.15l5.25 1.931-1.381-5.525c0-0.331 0.094-0.644 0.244-0.913 0 0 0 0 0 0 0.050-0.081 0.1-0.163 0.156-0.231 1.306-1.956 2.063-4.281 2.063-6.775 0.012-6.938-5.806-12.556-12.988-12.556s-13 5.619-13 12.544c0 6.931 5.819 12.544 13 12.544zM22 14c1.106 0 2 0.894 2 2s-0.894 2-2 2c-1.106 0-2-0.894-2-2s0.894-2 2-2zM16 14c1.106 0 2 0.894 2 2s-0.894 2-2 2c-1.106 0-2-0.894-2-2s0.894-2 2-2zM10 14c1.106 0 2 0.894 2 2s-0.894 2-2 2c-1.106 0-2-0.894-2-2s0.894-2 2-2z">
                    </path>
                    </svg></span> </span> <span>0</span></div></div> </div></div></div>

            </section>
            </div>
            </section>
    </div>
</template>

<style lang="scss" src="./scss/comment.scss" scoped>


</style>

<script>
export default {
    data(){
        return{
            comment:""
        }
    },
    methods: {
        getcomment(){
            var self = this;
            this.$http({
                method: "GET",
                params: {
                    sourcetype: 9,
                    json: {"PageIndex":1,"PageSize":20,"ProductId":"103215","Status":1}
                },
                url: "/dt/wx/ProductRequests/ReviewRequest?"
            }).then(function(response) {
                // console.log(response.data.Data);
                self.comment = (response.data.Data.SourceData).slice(0,3);
                // console.log(self.comment);

                
            }); 
        }
    },
     mounted(){
        this.getcomment();
      
    }


}
</script>
