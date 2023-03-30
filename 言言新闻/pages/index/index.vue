<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="item" :class="index==navIndex ? 'active': ''" v-for="(item,index) in navArr" :key="item.id"
				@click="clicknav(index,item.id)">
				{{item.classname}}
			</view>
		</scroll-view>

		<view class="content">
			<view class="row" v-for="item in newsArr" :key="item.id">
				<!-- <newsbox :item="{title:'首页标题',author:'张三'}"></newsbox> -->

				<!-- <newsbox :item="{title:item.title,author: item.author,hits:item.hits,picurl:item.picurl}"></newsbox> -->
				<newsbox :item="item"></newsbox>
			</view>
		</view>

		<view class="nodata" v-if="!newsArr.length">
			<image src="../../static/images/nopic.png" mode="widthFix"></image>
		</view>

		<view class="loading" v-if="newsArr.length">
			<view></view>
			<view v-if="loading==1">数据加载中...</view>
			<view v-if="loading==2">没有更多了~~~</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex: 0,
				navArr: [],
				newsArr: [],
				currentPage: 1, //当前页码
				loading: 0 //0是默认 1加载中 2没有更多了
			}
		},
		onLoad() {
			this.getNavData();
			this.getNewsData();
		},

		//下拉触底，更新下一页的时候
		onReachBottom() {
			console.log("到底了！！");
			if (this.loading == 2) {
				return;
			}
			this.currentPage++;
			this.loading = 1;
			this.getNewsData();
		},

		methods: {
			//点击导航切换
			clicknav(index, id) {
				this.navIndex = index;
				//BUG：点击导航切换的时候，由于第一条导航已经触底第三页，其他导航没有第三页，所以不会显示对应的数据，这个时候要将page变回第一页，同时将原有的数据全部清空
				this.currentPage = 1;
				this.newsArr = [];
				this.loading = 0;
				//传过来的id是导航栏对应的id，网络请求的时候
				this.getNewsData(id);
			},

			//获取导航列表数据
			getNavData() {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: res => {
						// console.log(res)
						this.navArr = res.data;
					}

				})
			},

			//获取新闻列表数据
			getNewsData(id = 50) {
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/newslist.php",
					data: {
						cid: id,
						page: this.currentPage
					},
					success: res => {
						console.log(res)
						if (res.data.length == 0) {
							this.loading = 2;
						}
						// this.newsArr = res.data;
						//此处用ES6运算，大数组里面包含小数组，用...展开，拼接老数组和新数组
						this.newsArr = [...this.newsArr, ...res.data]
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navscroll {
		height: 100rpx;
		background: #F7F8FA;
		white-space: nowrap;
		position: fixed;
		//top为0的情况下，小程序没问题，H5有差异，用变量写。
		top: var(--window-top);
		left: 0;
		z-index: 10;

		//取消uniapp自带滚动条，微信小程序没有
		/deep/ ::-webkit-scrollbar {
			width: 4px !important;
			height: 1px !important;
			overflow: auto !important;
			background: transparent !important;
			-webkit-appearance: auto !important;
			display: block;
		}

		.item {
			font-size: 40rpx;
			display: inline-block;
			line-height: 100rpx;
			padding: 0 30rpx;
			color: #333;

			&.active {
				color: #31C27C;
			}
		}
	}

	.content {
		padding: 30rpx;
		padding-top: 130rpx;

		.row {
			border-bottom: 1rpx dotted #efefef;
			padding: 20rpx 0;

		}
	}

	.nodata {
		display: flex;
		justify-content: center;

		image {
			width: 360rpx;

		}
	}

	.loading {
		text-align: center;
		font-size: 26rpx;
		color: #888;
		line-height: 2em;
		;
	}
</style>
