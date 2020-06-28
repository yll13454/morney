<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text"
               v-model="value"
               placeholder="在这里添加备注">
    </label>
</template>

<script lang="ts" >
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue{
        value = ''
    }
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  padding-left: 12px;
  .name {
    display: flex;
    align-items: center;
  }
  input {
    flex-grow: 1;
    height: 64px;
    background: transparent;
    border: none;
    padding: 0 12px;
    outline: none;
  }
}
</style>