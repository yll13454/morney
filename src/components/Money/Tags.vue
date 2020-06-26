<template>
    <div class="tags">
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  margin: 0 16px;
  > .current {
    display: flex;
    li {
      background-color: #d9d9d9;
      padding: 0.1em 1em;
      border-radius: 0.5em;
      margin: 0 4px;
      height: 24px;
      line-height: 24px;
    }
  }
  > .new {
    display: flex;
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 0.5px solid;
      padding: 0 4px;
      margin-bottom: 6px;
    }
  }
}
</style>