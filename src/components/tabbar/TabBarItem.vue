<style>
	.tabbar-item { flex: 1;cursor: pointer;text-align: center; }
	.tabbar-item:hover { background-color: #e6e6e6; }
	.tabbar-item img { width: 29px;height: 29px;vertical-align: middle; }
</style>

<template>
	<div class="tabbar-item" @click="$router.push(link)">
		<div v-show="!isActive"><slot name="item-icon"></slot></div>
		<div v-show="isActive"><slot name="item-icon-active"></slot></div>
		<div :style="textColor"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
	  name: 'TabBarItem',
	  props: {
	  	link: String,
	  	activeColor: {
	  		type: String,
	  		default: 'red'
	  	}
	  },
	  computed: {
	  	isActive(){
	  		return this.$route.path.indexOf(this.link) !== -1;
	  	},
	  	textColor(){
	  		return this.isActive ? { color: this.activeColor } : {};
	  	}
	  }
	}
</script>
