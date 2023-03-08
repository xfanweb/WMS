<template>
	<view class="container">
		<view class="el-card" v-for="(item,index) in data" v-key="index">
			<view class="flex mgt16">
				<span>品牌：</span>
				<view class="text">{{item.brand}}</view>
			</view>
			<view class="flex mgt16">
				<span>类型：</span>
				<view class="text">{{item.type}}</view>
			</view>
			<view class="flex mgt16">
				<span>型号：</span>
				<view class="text">{{item.model}}</view>
			</view>
			<view class="flex mgt16">
				<span>编号：</span>
				<view class="text">{{item.serialNo}}</view>
			</view>
			<view class="flex mgt16">
				<span>姓名：</span>
				<view class="text">{{item.serialNo}}</view>
			</view>
			<view class="flex mgt16">
				<span>手机号：</span>
				<view class="text">{{item.serialNo}}</view>
			</view>
			<view class="flex mgt16">
				<span>状态：</span>
				<view class="flex">
					<view class="mgr16">{{item.status==false?"未借出":"已借出"}}</view>
					<u-switch v-model="value" activeColor="#5ac725" inactiveColor="#f56c6c" @change="change"
						:disabled="status"></u-switch>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		change
	} from '../../static/JS/custom/detail/detail.js';
	import {ExecSql} from '../../App.vue';
	export default {
		data() {
			return {
				data: '',
				value: null,
				status: false,
				id:''
			}
		},

		onLoad(options) {
			const id = Number(options.id)
			const that = this
			that.id = id
			ExecSql('wms', {
				id: id,
				name: 'stock',
				api: 'querystock'
			}, (res) => {
				
				that.data = res.result.data
				that.value = res.result.data
			})
		},
		methods: {
			change
		}
	}
</script>

<style>
	@import url('../../static/ElementUI/custom/detail/detail.css'); // 自定义样式
	@import url('../../static/ElementUI/UI/index.css'); // UI 样式
</style>
