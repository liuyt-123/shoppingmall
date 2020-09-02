<template>
  <div class="detail-show">
    <Slideshow class="show">
      <SlideshowItem v-for="item in topImages">
          <img :src="item" alt="">
      </SlideshowItem>
    </Slideshow>
  </div>
</template>

<script>
import {
  Slideshow,
  SlideshowItem
} from "../../../components/common/slideshow/index";

export default {
  name: "DetailShow",
  components: {
    Slideshow,
    SlideshowItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.detail-show .show {
    height: 300px;
    overflow: hidden;
    margin-top: 44px;
}
</style>
