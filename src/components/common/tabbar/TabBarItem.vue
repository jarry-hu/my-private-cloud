<!-- 标签栏项 -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    props: {
      path: String,
    },
    data() {
      return {
      
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {width: "70px"} : {width: "50px"}
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
<style scoped>
/* @import url(); 引入css类 */
  .tab-bar-item {
    color: #fff;
    font-size: 14px;
    text-align: center;
    /* width: 70px; */
  }

  .tab-bar-item img {
    margin: 0 auto;
    width: 70%;
    margin-bottom: 2px;
  }

</style>