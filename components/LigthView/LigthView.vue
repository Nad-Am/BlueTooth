<template>
	<view class="contain" >
    <view class="context">
		<view class="image">
			<img :src=sourceArr[1].image />
		</view>
		<button>{{ sourceArr[1].name }}</button>
	</view>
	</view>
</template>

<script setup>
const sourceArr = [
		{
		  image: "/static/image/icon_skd.png",
		  name:"示廓灯"
	    },
		{
		  image: "/static/image/icon_jgd.png",
		  name:"近光灯"
		},
		{
		  image: "/static/image/icon_yjd.png",
		  name:"危险警示灯"
		},
		{
		  image: "/static/image/icon_skd.png",
		  name:"远近光交替"
		},
	]
</script>

<style scoped>
.contain{
	height: 100%;
	width: 100%;
}
.context{
	width: 60%;
	margin: 0 auto;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.image{
	width: 80%;
	height: 75%;
	display: flex;
	justify-content: center;
	align-items: center;
}
img{
	width: 100%;
    height: 100%;
object-fit: contain;
}
button{
	display:flex;
	justify-content: center;
	align-items: center;
	border: 1px solid aqua;
	background: none;
	color:aqua;
	margin-bottom: 2.5%;
}
</style>