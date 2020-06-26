<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon class="icon" name="jizhang" /> 记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="biaoqian" />标签
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="tongji" />统计
        </router-link>
    </nav>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  name: 'Nav',
  components: { Icon }
}
</script>

<style lang="scss" scoped>
nav {
  border: 1px solid #333;
  padding: 0.5em 0;
  display: flex;
  justify-content: space-around;
  >.item {
    color: black;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  .selected {
    color: red;
  }
}
</style>