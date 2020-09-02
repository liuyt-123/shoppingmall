<template>
  <div class="foot">
      <span>
          <div class="img1"></div>
          <p>客服</p> 
      </span>
      <span>
          <div class="img2">  </div>
          <p>店铺</p>
      </span>
      <span>
         <div class="img3">   </div>
          <p>收藏</p>
      </span>
      <span class="addCart" @click="addClick">加入购物车</span>
      <span class="pay">购买</span>
  </div>
</template>

<script>
export default {
  name: "DetailFoot",
  methods: {
      addClick() {
          this.$emit("addCart")
      }
  }
}
</script>

<style>
.foot {
    display: flex;
    position: fixed;
    bottom: 0;
    z-index: 6;
    width: 100%;
    height: 50px;
    background-color: #fff;
}
.foot span {
    float: left;
    flex: 15%;
    font-size: 12px;
    text-align: center;
}
.foot div {
    width: 20px;
    height: 20px;
    margin: 5px auto -5px;
    background-image: url("../../../assets/images/detail/detail_bottom.png");
}
.img1 {
    background-position: 0 -48px;
}
.img2 {
    background-position: 0 -90px;
}
.img3 {
    background-position: 0 0;
}
.foot .addCart {
    flex: 28%;
    background-color: yellow;
    color: #000;
    font-size: 14px;
    line-height: 50px;
}
.foot .pay {
    flex: 27%;
    background-color: #ff5777;
    color: #fff;
    font-size: 14px;
    line-height: 50px;
}
</style>