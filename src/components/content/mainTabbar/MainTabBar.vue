<!-- 主界面 -->
<template>
  <tab-bar>
    <tab-bar-item path="/repostory" slot="tab-bar-center">
      <img slot="item-icon" src="~assets/img/tabbar/repertory.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/repertory.png" alt="">
      <div slot="item-text">仓库</div>
    </tab-bar-item>
    <tab-bar-item path="/historys" slot="tab-bar-center">
      <img slot="item-icon" src="~assets/img/tabbar/history.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/repertory.png" alt="">
      <div slot="item-text">历史记录</div>
    </tab-bar-item>
<!--    <tab-bar-right-item slot="tab-bar-right" path="/files" :line="false" >-->
<!--      <div slot="item-text" >文件</div>-->
<!--    </tab-bar-right-item>-->
<!--    <tab-bar-right-item slot="tab-bar-right" path="/videos" :line="true" >-->
<!--      <div slot="item-text" >及时</div>-->
<!--    </tab-bar-right-item>-->
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  import TabBarRightItem from 'components/common/tabbar/TabBarItem'

  export default {
    components: {
      TabBar,
      TabBarItem,
      TabBarRightItem
    }
  }
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
