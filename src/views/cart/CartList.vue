<template>
  <div class="cart-list">
    <ListItem 
        v-for="(item,index) in $store.state.cartList" 
        :key="index"
        :itemInfo="item">
    </ListItem>
  </div>
</template>

<script>
import ListItem from "./ListItem"

export default {
  name: 'CartList',
  components: {
      ListItem
  }
}
</script>

<style>
.cart-list {
    width: 100%;
    margin-top: 50px;
    padding-bottom: 50px;
}
</style>