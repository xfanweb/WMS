<template>
	<view class="container">
		<view class="el-card flex end" @click="scancode">
			<u-icon name="scan"  size="32"></u-icon>
			<!-- <image class="scanimg" src="../../static/Images/scan.png"></image> -->
			<text class="scantext">扫码</text>
			<!-- <u-button type="primary" text="确定"></u-button> -->
		</view>
	</view>
</template>

<script>
	import {
		scancode
	} from '../../static/JS/custom/index/index.js';
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			scancode
		}
	}
</script>

<style>
	@import url('../../static/ElementUI/custom/index/index.css'); // 自定义样式
	@import url('../../static/ElementUI/UI/index.css'); // UI 样式
</style>
