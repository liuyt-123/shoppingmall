<template>
     <Slideshow>
      <SlideshowItem v-for='item in banners'>
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
      </SlideshowItem>
  </Slideshow>
</template>

<script>
import {Slideshow,SlideshowItem} from '../../../components/common/slideshow/index'

export default {
  name: 'HomeSlideshow',
  props: {
      banners:{
          type: Array,
          defualt() {
              return []
          }
      }
  },
  components: {
      Slideshow,
      SlideshowItem
  }
}
</script>

<style>

</style>