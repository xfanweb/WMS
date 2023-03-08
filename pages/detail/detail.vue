<template>
	<view class="container">
		<view class="el-card" v-for="(item,index) in data" :key="index">
			<view class="flex mgt12 p3">
				<span>品牌：</span>
				<view class="text">{{item.brand}}</view>
			</view>
			<view class="flex mgt12 p3">
				<span>类型：</span>
				<view class="text">{{item.type}}</view>
			</view>
			<view class="flex mgt12 p3">
				<span>型号：</span>
				<view class="text">{{item.model}}</view>
			</view>
			<view class="flex mgt12 p3">
				<span>编号：</span>
				<view class="text">{{item.serialNo}}</view>
			</view>
			<view class="flex mgt12 p3">
				<span>姓名：</span>
				<view class="text">
					<u-input v-model="name" type="text" border="bottom" clearable placeholder="请输入姓名" maxlength="4"
						:disabled="input" />
				</view>
			</view>
			<view class="flex mgt12 p3">
				<span>手机号：</span>
				<view class="text">
					<u-input v-model="phone" type="number" border="bottom" clearable placeholder="请输入手机号"
						:disabled="input" maxlength="11" />
				</view>
			</view>
			<view class="flex mgt12 p3">
				<span>状态：</span>
				<view class="flex">
					<view class="mgr16">{{StatusContent==false?"未借出":"已借出"}}</view>
					<u-switch v-model="value" activeColor="#5ac725" inactiveColor="#f56c6c" @change="change"
						:disabled="status"></u-switch>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {
		ExecSql,
		time
	} from '../../App.vue';
	export default {
		data() {
			return {
				data: null,
				value: null,
				status: false,
				id: null,
				StatusContent: null,
				name: '',
				phone: '',
				input: null
			}
		},

		onLoad(options) {

			const id = Number(options.id)
			const that = this
			that.id = id
			ExecSql('wms', {
				id: id, // 二维码传回ID
				tablename: 'stock', //数据表名
				api: 'querystock' //数据库操作api
			}, (res) => {
				that.data = res.result.data //stock表里的数据
				that.name = that.data[0].name //姓名
				that.phone = that.data[0].phone //手机号
				that.StatusContent = that.data[0].status //借出状态
				that.value = that.data[0].status //u-switch 双向绑定 依据借出状态
				that.input = that.data[0].status //u-input 双向绑定 依据借出状态
			})
		},
		methods: {
			change() {
				var that = this
				
				// const status=that.value==true?"借出":"归还" //历史记录要用到暂时注释  
				let objValue = (tablename, api, time) => {
					const object={
						tablename: tablename,
						api: api,
						id: that.id,
						name: that.name,
						phone: that.phone,
						time: time,
						status: that.value
					}
					return object
				}
				function update(){
					that.status = true
					that.StatusContent = !that.StatusContent
					ExecSql('wms', objValue('record','addrecord',time()), (res) => {
						ExecSql('wms', objValue('stock','updatestock',null), (res) => {
							const title = that.value == false ? "归还成功" : "借出成功"
							that.name=""
							that.phone=""
							uni.showToast({
								title: title,
								icon: 'success'
							})
							
							setTimeout(function() {
								uni.navigateBack()
							}, 1600)
						})
					})
				}
				console.log(objValue('record','addrecord',time()))
				if (!that.StatusContent) {
					if (that.name !== "" && that.phone.length === 11) {
						update()
					} else {
						uni.showToast({
							title: '请检查',
							icon: 'error'
						})
						that.value = !that.value
					}
				} else {
					update()
				}
			}
		}
	}
</script>

<style>
	@import url('../../static/ElementUI/custom/detail/detail.css'); // 自定义样式
	@import url('../../static/ElementUI/UI/index.css'); // UI 样式
</style>
