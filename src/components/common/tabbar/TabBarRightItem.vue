<template>
  <div class="tab-bar-right-item" @click="itemClick">
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    line: Boolean,
  },
  computed:{
    isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
      //var retStyle = this.isActive() ? {"border-right": "1 px #000 solid"} : {"border-right": "0 px #fff solid "}
      var  retStyle = this.isActive ? {"font-size": "20px"} : {"font-size": "14px"}
      console.log(retStyle);
        return retStyle;
      }
  },
  methods: {
    itemClick() {
      //切换router
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
 .tab-bar-right-item {
   display: inline;
    color: #111;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    padding: 10px;
 }
</style>