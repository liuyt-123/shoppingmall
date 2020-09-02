<template>
  <div class="detail">
    <div v-if="Object.keys(comments).length !== 0" class="comments">
      <p>
        用户评价
        <span class="more">更多</span>
      </p>
      <div class="comments-info">
        <img :src="comments.user.avatar" alt="" />
        <span class="uname">{{ comments.user.uname }}</span>
        <p class="content">{{ comments.content }}</p>
        <p class="date">
          <span>{{ comments.created | showDate}}</span>
          <span>{{ comments.style }}</span>
        </p>
      </div>
      <div class="item">
        <img :src="item" alt="" v-for="(item,index) in comments.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
import {format} from "../../../common/utils"

export default {
  name: "DetailComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
      showDate(value){
          let date = new Date(value*1000);
          return date.format('yyyy-MM-dd')
      }
  }
};
</script>

<style>
.detail {
    margin-bottom: 70px;
}
.comments {
    position: relative;
}
.more {
    float: right;
}
.comments-info .uname {
    font-size: 14px;
    color: #000;
}
.comments-info .content{
    font-size: 12px;
    text-indent: 2em;
    color: #666666;
}
.comments-info img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}
.comments-info .date span {
    margin-right: 5px;
    font-size: 12px;
    color: #666666;
}
.item img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
}
</style>
