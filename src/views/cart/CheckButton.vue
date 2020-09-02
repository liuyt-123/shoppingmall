<template>
  <div class="check" :class="{checked:isChecked}">
     <img src="../../assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
 name: 'CheckButton', 
 props: {
     isChecked: {
         type: Boolean,
         default: false
     }
 }
}
</script>

<style>
.check {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #aaaaaa
}
.checked {
    background-color: #ff5777;
    border-color: #ff5777;
}
</style>