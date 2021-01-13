<template>
  <el-container class="home-container">
    <el-header></el-header>
    <el-container>
      <el-aside>
        <el-menu
          router
        >
          <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span slot="title">用户</span>
          </el-menu-item>
          <el-menu-item index="/setting">
            <i class="el-icon-document"></i>
            <span slot="title">设置</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import Menu from '@/views/menu'
export default {
  name: 'Layout'
  // components: {
  //   Menu
  // }
}
</script>

<style lang="scss" scoped>
  .home-container{
    height: 100%;
  }
  .el-header{
    background: #310991;
  }
  .el-aside{
    background: #310991;
  }
</style>
