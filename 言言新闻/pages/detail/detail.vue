<template>
	<view class="detail">
		<view class="title">
			{{detail.title}}
		</view>
		<view class="info">
			<view class="author">
				编辑：{{detail.author}}
			</view>
			<view class="time">
				发布日期：{{detail.posttime}}
			</view>
		</view>
		<view class="content">
			<!-- <view v-html="detail.content"></view> -->
			<rich-text :nodes="detail.content"></rich-text>

		</view>
		<view class="description">
			声明：本站的内容均采集于腾讯新闻，如果侵权请联系管理（1766985516@qq.com）进行修改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view>
</template>

<script>
	import {
		parseTime
	} from "@/utils/tool.js"
	export default {
		data() {
			return {
				options: null,
				detail: {}
			};
		},
		onLoad(e) {
			this.options = e;
			this.getDetail();
		},
		methods: {
			getDetail() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/detail.php",
					// data: {
					// 	cid: "",
					// 	id: ""
					// }
					data: this.options,
					success: res => {
						console.log(res)
						res.data.posttime = parseTime(res.data.posttime)
						res.data.content = res.data.content.replace(/<img/gi, '<img style="max-width:100%"')
						this.detail = res.data;

						this.saveHistory();

						uni.setNavigationBarTitle({
							title: this.detail.title
						})
					}
				})
			},
			saveHistory() {
				//读取缓存，如果有就获取自己，没有就保持一个空数组
				let historyArr = uni.getStorageSync("historyArr") || [];
				let item = {
					id: this.detail.id,
					classid: this.detail.classid,
					picurl: this.detail.picurl,
					title: this.detail.title,
					looktime: parseTime(Date.now())
				}

				//清除缓存中重复出现的数据，此处通过比对缓存中的id和浏览历史当前页面的id，如
				let index = historyArr.findIndex(i => {
					return i.id == this.detail.id;
				})
				// console.log(index);
				if (index >= 0) {
					historyArr.splice(index, 1) //如果index大于等于0，就1删除 
				}

				historyArr.unshift(item)
				historyArr = historyArr.slice(0, 10)
				uni.setStorageSync("historyArr", historyArr)
			}
		}
	}
</script>

<style lang="scss">
	.detail {
		padding: 30rpx;

		.title {
			font-size: 46rpx;
			color: #333;
		}

		.info {
			background: #F6F6F6;
			padding: 20rpx;
			font-size: 25rpx;
			color: #666;
			display: flex;
			justify-content: space-between;
			margin: 40rpx 0;
			margin-right: 16rpx;
		}

		.content {
			padding-bottom: 50rpx;

			//穿透，对组件内的图片样式进行修改,微信小程序不支持，所以我们在拿到数据的时候用正则替换img的样式
			// /deep/ img {
			// 	max-width: 100%;
			// }
		}

		.description {
			background: #FEF0F0;
			font-size: 26rpx;
			padding: 20rpx;
			color: #F89898;
			line-height: 1.8em;
		}
	}
</style>
