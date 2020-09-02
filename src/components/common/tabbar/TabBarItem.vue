<template>
  <div class="tabbar-item" @click='itemClick'>
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
   },
  
  methods: {
    itemClick() {
      if(this.isActive){
        return this.$router
      }else{
        this.$router.replace(this.path)
      }
    }
  }
};
</script>

<style>
.tabbar-item img {
    width: 25px;
    height: 25px;
    margin-top: 3px;
    margin-bottom: -3px;
  }
.tabbar-item .active {
   color: red;
 }
</style>