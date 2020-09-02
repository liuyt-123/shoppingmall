<template>
  <TabBar>
    <TabBarItem path="/home">
      <img slot="item-icon" src="../../../assets/images/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/images/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <img slot="item-icon" src="../../../assets/images/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/images/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <img slot="item-icon" src="../../../assets/images/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="../../../assets/images/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '../../../components/common/tabbar/TabBar'
  import TabBarItem from '../../../components/common/tabbar/TabBarItem'
  
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>
