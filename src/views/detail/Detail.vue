<template>
  <div id="detail">
    <DetailNav @titleClick></DetailNav>
    <DetailShow :topImages="topImages"></DetailShow>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
    <DetailGoodsInfo :detailInfo="detailInfo"></DetailGoodsInfo>
    <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
    <DetailComments :comments="comments"></DetailComments>
    <DetailFoot @addCart="addToCart"></DetailFoot>
  </div>
</template>

<script>
import DetailNav from "./child/DetailNav";
import DetailShow from "./child/DetailShow";
import DetailBaseInfo from "./child/DetailBaseInfo";
import DetailShopInfo from "./child/DetailShopInfo";
import DetailGoodsInfo from "./child/DetailGoodsInfo";
import DetailParamInfo from './child/DetailParamInfo';
import DetailComments from "./child/DetailComments";
import DetailFoot from "./child/DetailFoot"

import { getDetailData, GoodsInfo, Shop, GoodsParam } from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailShow,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComments,
    DetailFoot
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comments: {}
    };
  },
  created() {
    // 1.保存传入的id
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetailData(this.iid).then(res => {
        console.log(res);
      const data = res.result;
      // 1.获取顶部图片
      this.topImages = data.itemInfo.topImages;

      //   2.获取商品信息
      this.goods = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //  3.创建店铺信息
      this.shop = new Shop(data.shopInfo);

      //   4.获取详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

    //   6.获取评论数据
    if(data.rate.cRate !=0){
    this.comments= data.rate.list[0]
    }
    });
  },
  methods: {
      addToCart() {
         // 1.获取商品信息
         const product= {};
         product.image=this.topImages[0];
         product.title=this.goods.title;
         product.desc=this.goods.desc;
         product.price=this.goods.realPrice;
         product.iid=this.iid;
         
        //  2.添加到购物车
        this.$store.dispatch('addCart',product)
      }
  }
};
</script>

<style>
</style>
