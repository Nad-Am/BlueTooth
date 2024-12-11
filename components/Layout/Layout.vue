<template>
	<view style="width: 100%; height: 100vh;">
		<view style="width: 100%; height: 13%">
			<cover-image src="/static/image/stabar.png"></cover-image>
		</view>
		<!-- 中间部分 -->
		<view class="LayoutMain">
			<view class="LayoutLeftNave">
				<view 
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_01.png) no-repeat;"
				>
					<span>座</span><span>椅</span>
				</view>
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_02.png) no-repeat;"
				>
					<span>后</span><span>视</span><span>镜</span>
				</view>
				<view
				class="naveItem"
				 style="background: url(/static/image/bg_btn_02.png) no-repeat;"
				>
					<span>安</span><span>全</span><span>带</span>
				</view>
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_03.png) no-repeat;"
				>
					<span>档</span><span>位</span>
				</view>
				
			</view>
			<view class="LayoutMainSolt">
				<slot></slot>
			</view>
			
			<view class="LayoutRightNave">
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_04.png) no-repeat;"
				>
					<span>离</span><span>和</span>
				</view>
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_05.png) no-repeat;"
				>
					<span>方</span><span>向</span><span>盘</span>
				</view>
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_05.png) no-repeat;"
				>
					<span>半</span><span>联</span><span>动</span>
				</view>
				<view
				 class="naveItem"
				 style="background: url(/static/image/bg_btn_06.png) no-repeat;"
				>
					<span>灯</span><span>光</span>
				</view>
			</view>
		</view>
		
		<!-- 尾部部分 -->
		<view class="LayoutTaile">
			<view class="tail_one"></view>
			<view class="taile_two"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Layout",
		data() {
			return {};
		}
	}
</script>

<style>
	/* 样式可按需补充 */
	.LayoutMain{
		width: 100%;
		height: 70%;
		display: flex;
		justify-content: space-between;
	}
	.LayoutLeftNave{
		width: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.LayoutMainSolt{
		flex: 1;
		margin: 10px;
		border: 1px solid wheat;
	}
	.LayoutRightNave{
		width: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.naveItem{
		width: 90px; 
		height: 60px;
		font-size: 20px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: aliceblue;
		background-size: cover;
	}
	.LayoutTaile{
		height: 17%;
		position: relative;
	}
	.tail_one{
		position: absolute;
		bottom: 0%;
		left: 0%;
		background: url(/static/image/but_na.png) no-repeat; 
		background-size: cover;
		width: 110rpx;
		height: 100rpx;
	}
	.taile_two{
		position: absolute;
		bottom: 0%;
		right: 0;
		background: url(/static/image/btn_back_nor.png) no-repeat;
		background-size: cover;
		width: 110rpx;
		height: 100rpx;
	}
</style>
