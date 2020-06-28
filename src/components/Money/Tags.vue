<template>
  <div class="tags">
    <ul class="current">
      <li v-for="item in dataSource"
          :key="item"
          :class="{selected: selectedTags.indexOf(item)>=0}"
          @click="toggle(item)">{{item}}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }

    create() {
      const name = window.prompt('请输入标签名！') as string;
      if (name === '') {
        window.alert('标签名不能为空！');
      } else if (this.dataSource && this.dataSource.indexOf(name)>=0) {
        window.alert('标签名不能重复！');
      } else {
        this.$emit('update:dataSource',[...(this.dataSource as string[]),name])
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    margin: 0 16px;

    > .current {
      display: flex;
      flex-wrap: wrap;

      li {
        background-color: #d9d9d9;
        padding: 0.1em 1em;
        border-radius: .8em;
        margin: 4px;
        height: 24px;
        line-height: 24px;
        $bg:#f2f2f2;
        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
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