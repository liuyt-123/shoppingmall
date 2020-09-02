<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" 
    class="tab-control-item" 
    :class="{active:index === currentIndex}"
    @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex=index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  height: 40px;
  color: #666666;
  font-size: 16px;
  line-height: 40px;
  text-align: center;

  position: sticky;
  top: 44px;
  background-color: #fff;
  z-index: 2;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}

.active {
  color: #ff5777;
}
.active span {
  border-bottom: 3px solid #ff5777;
}
</style>
