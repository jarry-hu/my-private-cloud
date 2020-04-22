<!-- 主界面 -->
<template>
  <tab-bar>
    <tab-bar-item path="/repostory">
      <img slot="item-icon" src="~assets/img/tabbar/repertory.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/repertory.png" alt="">
      <div slot="item-text">仓库</div>
    </tab-bar-item>
    <tab-bar-item path="/historys">
      <img slot="item-icon" src="~assets/img/tabbar/history.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/repertory.png" alt="">
      <div slot="item-text">历史记录</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
<style scoped>
/* @import url(); 引入css类 */
  
</style>