<template>
	<view class="container">
		<view class="el-card flex end admin" @click="router('admin')">
			<u-icon name="account" size="32"></u-icon>
			<text class="scantext">后台</text>
		</view>
		<view class="el-card flex end scan" @click="scanCode">
			<u-icon name="scan" size="32"></u-icon>
			<text class="scantext">扫码</text>
		</view>

		<view class="copy center">&copy; {{date!==2023?"2023-"+date:"2023"}} 李彬工作室</view>
		<view class="by center flex">
			<u-icon name="github-circle-fill" size="18"></u-icon>
			<view class="mgl8">YuYa & Xiaofan</view>
		</view>
	</view>
</template>

<script>
	//引入扫码传参方法
	import {
		onLoad,
		scanCode
	} from '../../static/JS/custom/index/index.js';
	// 引入自定义跳转方法
	import {
		router
	} from '../../App.vue';
	export default {
		data() {
			return {
				date: 2023
			}
		},
		onLoad,
		methods: {
			scanCode,
			router
		}
	}
</script>

<style>
	@import url('../../static/ElementUI/custom/index/index.css'); // 自定义样式
	@import url('../../static/ElementUI/UI/index.css'); // UI 样式
</style>
