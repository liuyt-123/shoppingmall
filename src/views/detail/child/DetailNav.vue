<template>
   <NavBar class="detail-nav">
      <div slot="left" @click="backClick"><</div>
    <div slot="center" class="title">
      <div v-for="(item,index) in titles" 
      class="titleItem"
      :class="{active:index===currentIndex}"
      @click="titleClick(index)">{{ item }}</div>
    </div>
      </NavBar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar";

export default {
  name: 'DetailNav',
  data() {
    return {
      titles: ["商品", "参数", "评论"],
      currentIndex: 0,
    }
  },
   methods: {
    titleClick(index) {
        this.currentIndex=index,
        this.$emit('titleClick',index)
    },
    backClick() {
        this.$router.go(-1)
    }
  },
  components: {   
    NavBar,
  },
}
</script>

<style>
.detail-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  color: #000;
  background-color: #fff;
}
.title {
  display: flex;
  font-size: 14px;
  line-height: 44px;
  color: #666666;
}
.titleItem {
  flex: 1;
}
.active {
    color: #ff5777;
}
</style>