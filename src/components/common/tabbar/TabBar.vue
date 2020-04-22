<!-- 头标签栏 -->
<template>
  <div id="tab-bar">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>
<style scoped>
/* @import url(); 引入css类 */
  #tab-bar {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #3c3c46;
    
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 90px;

    box-shadow: 0px 1px 1px rgba(100,100,100,.5);
    /* overflow: hidden; */
  }
</style>