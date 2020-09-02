<template>
  <div class="shopcart">
    <div class="cart-nav">
      <NavBar>
        <div slot="center">购物车({{ cartLength }})</div>
      </NavBar>
    </div>
    <CartList></CartList>
    <CartFoot></CartFoot>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./CartList";
import CartFoot from "./CartFoot";

export default {
  name: "Shopcart",
  components: {
    NavBar,
    CartList,
    CartFoot
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    }
  }
};
</script>

<style>
.shopcart {
  width: 100%;
}
.shopcart .cart-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #ff5777;
  color: #fff;
}
</style>
