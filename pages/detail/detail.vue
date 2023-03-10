<template>
	<view class="container">
		<view class="el-card" v-for="(item,index) in stock" :key="index">
			<view class="flex mgt12 pd3">
				<span>品牌：</span>
				<view class="text">{{item.brand}}</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>类型：</span>
				<view class="text">{{item.type}}</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>型号：</span>
				<view class="text">{{item.model}}</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>编号：</span>
				<view class="text">{{item.serialNo}}</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>姓名：</span>
				<view class="text">
					<u-input v-model="name" type="text" border="bottom" clearable placeholder="请输入姓名" maxlength="4"
						:disabled="input" />
				</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>手机号：</span>
				<view class="text">
					<u-input v-model="phone" type="number" border="bottom" clearable placeholder="请输入手机号"
						:disabled="input" maxlength="11" />
				</view>
			</view>
			<view class="flex mgt12 pd3">
				<span>状态：</span>
				<view class="flex">
					<view class="mgr16">{{statusContent==false?"未借出":"已借出"}}</view>
					<u-switch v-model="value" activeColor="#5ac725" inactiveColor="#f56c6c" @change="change"
						:disabled="status"></u-switch>
				</view>
			</view>
		</view>
		<view class="el-card mgt32">
			<view class="flex search mgb32">
				<view class="width50">
					<u-search placeholder="请输入搜索内容" v-model="serachv" shape="square" :showAction="false" maxlength="11"
						@change="search(serachv,recordArray)"></u-search>
				</view>
			</view>
			<u-scroll-list :indicator="false">
				<uni-table>
					<!-- 表头行 -->
					<uni-tr>
						<uni-th>姓名</uni-th>
						<uni-th>手机号</uni-th>
						<uni-th>时间</uni-th>
						<uni-th>状态</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="(item, index) in record" :key="index">
						<uni-td>{{item.name}}</uni-td>
						<uni-td @tap="setclipboard(item.phone)">{{item.phone}}</uni-td>
						<uni-td>{{item.time}}</uni-td>
						<uni-td>
							<u--text :type='item.status?"success":"error"' :text='item.status?"借出":"归还"'></u--text>
						</uni-td>
					</uni-tr>
				</uni-table>
			</u-scroll-list>
		</view>
	</view>
</template>

<script>
	import {
		onLoad,
		change,
		search
	} from '../../static/JS/custom/detail/detail.js'
	export default {
		data() {
			return {
				stock: [],
				record: null,
				value: null,
				status: false,
				id: null,
				statusContent: null,
				name: null,
				phone: null,
				input: null,
				serachv: null,
				recordArray:[]
			}
		},
		onLoad,
		methods: {
			change,
			search,
		}
	}
</script>

<style>
	@import url('../../static/ElementUI/custom/detail/detail.css'); // 自定义样式
	@import url('../../static/ElementUI/UI/index.css'); // UI 样式
</style>
