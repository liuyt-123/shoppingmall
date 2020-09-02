<template>
  <div class="cart-foot">
    <div class="check-all">
      <CheckButton :is-checked="isAll" @click.native="allClick" />
      <span>全选</span>
    </div>
    <div class="sum">合计：{{ totalPrice }}</div>
    <div class="clear">去结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartFoot",
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return parseFloat(preValue + item.price * item.count).toFixed(2);
          }, 0)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isAll() {
      if (this.$store.state.cartList.length === 0) return false;
      //   return !this.$store.state.cartList.filter(item =>  !item.checked).length;
      return this.$store.state.cartList.every(item => item.checked);
    }
  },
  methods: {
    allClick() {
      if (this.isAll) {
        this.$store.state.cartList.forEach(item => (item.checked = false));
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      }
    }
  },
  components: {
    CheckButton
  }
};
</script>

<style>
.cart-foot {
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  border-top: 1px solid #e4dddd;
  font-size: 14px;
  background-color: #fff;
  z-index: 2;
}
.check-all {
  float: left;
  display: flex;
  height: 20px;
  margin-top: 10px;
  margin-left: 10px;
  line-height: 20px;
}
.check-all span {
  margin-left: 5px;
}
.sum {
  float: left;
  margin-left: 20px;
  line-height: 40px;
}
.clear {
  float: right;
  width: 80px;
  background-color: orange;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.cart-foot .checked {
  border-radius: 50%;
  background-color: #ff5777;
  border-color: #ff5777;
  background-image: url("../../assets/images/cart/tick.svg");
}
</style>
