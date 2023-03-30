<template>
	<view class="newsbox" @click="goDetail(item)">
		<view class="pic">
			<image :src="item.picurl" mode="aspectFill" alt=""></image>
		</view>
		<view class="text">
			<view class="title">
				{{item.title}}
			</view>
			<view class="info" v-if="!item.looktime">
				<text>{{item.author}}</text>
				<text>{{item.hits}}浏览</text>
			</view>
			<view class="info" v-else>
				<text>浏览时间: {{item.looktime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbox",
		props: {
			item: {
				type: Object,
				default () {
					return {
						title: "组件内默认的标题",
						author: "张三",
						hits: "000",
						picurl: "../../static/images/nopic.png",
						// looktime: "2023年3月28日 09:50:04"
					}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			//跳转到详情页
			goDetail(item) {
				//navigateTo对上一个页面有所保留
				uni.navigateTo({
					url: `/pages/detail/detail?cid=${item.classid}&id=${item.id}`
					// url: `/pages/detail/detail`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.newsbox {
		display: flex;

		.pic {
			width: 230rpx;
			height: 160rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.text {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 20rpx;

			.title {
				font-size: 36rpx;
				color: #333;
				//两行省略号
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出的部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 2; //行数
				line-clamp: 2;
				-webkit-box-orient: vertical; //盒子中内容竖直排列
			}

			.info {
				font-size: 26rpx;
				color: #999;

				text {
					padding-right: 30rpx;
				}
			}
		}
	}
</style>
