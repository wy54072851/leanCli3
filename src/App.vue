<style>
@import 'assets/css/base.css'
</style>

<template>
  <div id="app" v-cloak>
    <div @click="$store.dispatch('numAction')">{{$store.state.num}}</div>
    <div @click="ajaxTest">test</div>
    <router-view/>
    <TabBar>
      <TabBarItem link="home">
        <img slot="item-icon" src="~assets/img/home.png">
        <img slot="item-icon-active" src="~assets/img/home-active.png">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem link="category">
        <img slot="item-icon" src="~assets/img/category.png">
        <img slot="item-icon-active" src="~assets/img/category-active.png">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem link="cart">
        <img slot="item-icon" src="~assets/img/cart.png">
        <img slot="item-icon-active" src="~assets/img/cart-active.png">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem link="profile">
        <img slot="item-icon" src="~assets/img/profile.png">
        <img slot="item-icon-active" src="~assets/img/profile-active.png">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar';
  import TabBarItem from 'components/tabbar/TabBarItem';
  export default {
    name: 'app',
    components: {
      TabBar,
      TabBarItem
    },
    methods: {
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
      promiseTest(){
        new Promise((resolve,reject) => {
          resolve('msg');
        }).then(data => {
          console.log(data);
          return new Promise((resolve,reject) => {
            reject('error');
          })
        }).then(data => {
          console.log(data);
        }).catch(err => {
          console.log(err);
        })
      },
      ajaxTest(){
        this.$store.dispatch('ajaxAction').then(data => {
          console.log(data)
        })
      }
    },
    mounted() {
      if (this._isMobile()) {
        alert("手机端");
        // this.$router.replace('/m_index');
      } else {
        alert("pc端");
        // this.$router.replace('/pc_index');
      }
    }
  }
</script>
