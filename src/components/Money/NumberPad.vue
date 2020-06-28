<template>
  <div class="numberPad">
    <div class="output">{{output}}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok">确定</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">

  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    output = '0';

    inputContent(event: MouseEvent) {
      const button = event.target as HTMLButtonElement;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const input = button.textContent!;
      if (this.output.length === 16) {return;}
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      if (this.output === '0') {
        if ('1234567890'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      } else {
        this.output += input;
        return;
      }

    }

    remove() {
      if (this.output.length === 1) {
        this.output = '0';
        return;
      }
      this.output = this.output.slice(0, -1);
    }

    clear() {
      this.output = '0';
    }

  }

</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .numberPad {
    .output {
      font-size: 36px;
      text-align: right;
      padding: 6px;
      box-shadow: inset 0 -3px 3px -3px rgba(0, 0, 0, 0.25),
      inset 0 3px 3px -3px rgba(0, 0, 0, 0.25);
    }

    .buttons {
      @extend %clearFix;

      button {
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 64 * 2px;
          float: right;
        }

        &.zero {
          width: 25 * 2%;
        }

        &:nth-child(1) {
          background: #f2f2f2;
        }

        &:nth-child(2),
        &:nth-child(5) {
          background: darken(#f2f2f2, 4%);
        }

        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9) {
          background: darken(#f2f2f2, 4 * 2%);
        }

        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10) {
          background: darken(#f2f2f2, 4 * 3%);
        }

        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13) {
          background: darken(#f2f2f2, 4 * 4%);
        }

        &:nth-child(14) {
          background: darken(#f2f2f2, 4 * 5%);
        }

        &:nth-child(12) {
          background: darken(#f2f2f2, 4 * 6%);
        }
      }
    }
  }
</style>