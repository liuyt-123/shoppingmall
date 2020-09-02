<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="itemInfo.checked" @click.native="checkedClick"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="info-bottom">
        <div class="price-left">￥{{ itemInfo.price }}</div>
        <div class="price-right">×{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton"

export default {
  name: "ListItem",
  components: {
      CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedClick() {
    this.itemInfo.checked = !this.itemInfo.checked
    }
  }
};
</script>

<style>
#shop-item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
 .item-selector {
    width: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-title,
.item-desc {
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #666666;
}
.item-img {
    padding: 5px;
} 
.item-img img {
    width: 80px;
    height: 100px;
    border-radius: 5px;
}
.price-left {
    float: left;
    margin-top: 15px;
    color: #ff5777;
}
.price-right {
    float: right;
    margin-top: 15px;
}
</style>
