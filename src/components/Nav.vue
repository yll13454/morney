<template>
  <nav>
      <router-link to="/money">记账</router-link>
      <router-link to="/labels">标签</router-link>
      <router-link to="/statistics">统计</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'Nav'
  }
</script>

<style lang="scss" scoped>
nav{
    border:1px solid #333;
    padding: .5em 0;
    display: flex;
    justify-content: space-around;
}
</style>