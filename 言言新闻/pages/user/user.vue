<template>
	<view class="user">
		<view class="top">
			<image src="../../static/images/his.png" mode=""></image>
			<view class="">
				<text>浏览历史</text>
			</view>
		</view>
		<view class="content">
			<view class="row" v-for="item in listArr">
				<!-- <newsbox :item="{title:'user的标题',looktime:'2023年3月28日 09:57:58'}"></newsbox> -->
				<newsbox :item="item"></newsbox>
			</view>
		</view>
		<view class="nohistory" v-if="!listArr.length">
			<image src="../../static/images/nopic.png" mode="widthFix"></image>
			<view class="text">
				暂时浏览记录
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr: []
			};
		},

		//此处onLoad没有热更新 
		onShow() {
			this.goDetail();
		},
		methods: {
			//跳转到详情页
			goDetail() {
				let hisArr = uni.getStorageSync("historyArr") || []
				this.listArr = hisArr
			}
		}
	}
</script>

<style lang="scss">
	.user {
		.top {
			padding: 50rpx 0;
			background: #F8F8F8;
			color: #555;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 150rpx;
				height: 150rpx;
			}

			.text {
				font-size: 38rpx;
				padding-top: 20rpx;
			}
		}

		.content {
			padding: 30rpx;

			.row {
				border-bottom: 1rpx dotted #efefef;
				padding: 20rpx 0;

			}
		}

		.nohistory {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			image {
				width: 450rpx;
			}

			.text {
				font-size: 26rpx;
				color: #888;
			}
		}
	}
</style>
