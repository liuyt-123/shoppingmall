<template>
  <div class="recommend">
      <div v-for="item in recommends" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      defualt() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item {
    flex: 1;
    text-align: center;
    font-size: 12px;
}
.recommend-item a {
  text-decoration: none;
  color: rgb(72, 50, 90);
}
.recommend-item img {
    width: 70px;
    height: 70px;
}

</style>
