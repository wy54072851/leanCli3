<style>
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 49px;
    font-size: 14px;
    background-color: #f6f6f6;
    box-shadow: 0 -5px #f6f6f6;
  }
</style>

<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem';
  export default {
    name: 'TabBar',
    components: {
      TabBarItem
    }
  }
</script>
