<!-- 头标签栏 -->
<template>
    <div id="tab-bar-main">
      <div id = "tab-bar-left" class="tab-bar">
      <slot name="tab-bar-left"/>
      </div>

      <div id = "tab-bar-center" class="tab-bar">
      <slot name="tab-bar-center"/>
      </div>

      <div id = "tab-bar-right" class="tab-bar">
      <slot name="tab-bar-right"/>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>
<style scoped>
/* @import url(); 引入css类 */
  #tab-bar-main {
    z-index: 100;
    display: flex;
    justify-content: space-between;
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

  .tab-bar{
    display: inline;
    /* position:relative; */

  }

  #tab-bar-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #tab-bar-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #tab-bar-right {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>