<template>
  <div id="home">
    <NavBar class="homeBar">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSlideshow :banners="banners"></HomeSlideshow>
    <RecommendView :recommends="recommends"></RecommendView>
    <Fashion></Fashion>
    <TabControl :titles="['流行', '新款', '精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="goods[currentType].list"></GoodsList>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSlideshow from "./child/HomeSlideshow";
import RecommendView from "./child/RecommendView";
import Fashion from "./child/Fashion";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import { getHomeData, getHomeGoods } from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSlideshow,
    RecommendView,
    Fashion,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    };
  },
  created() {
    this.getHomeData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 1.请求多个数据
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    // 2.请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list),
        this.goods[type].page += 1;
      });
    },

    // 事件监听
    tabClick(index) {
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1: 
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break
      }
    }
  }
};
</script>

<style>
#home {
  padding-top: 40px;
}
.homeBar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  background-color: #ff5777;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
</style>
