<template>
	<view class="contain">
	<view class="context">
	<view class="huandang">
	<image src="/static/image/page06_icon_dw.png" 
	mode="aspectFit" 
	class="image-dw"/>
	<image src="/static/image/page06_icon_ball.png"
	class="image-ball"
	mode="aspectFit" 
	:style=positionArr[num-1]
	 />
	</view>
	<view class="btn">
		<button @click="handleClick">{{ num }}</button>
	</view>
	</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
let num = ref(1);
// let k= "top:3%;left:11%";
const handleClick =()=>{
 num.value++;
}

let positionArr = [
	"top:3%;left:11%",
	"top:88%;left:11%",
	"top:3%;left:45%",
	"top:88%;left:45%",
	"top:3%;left:79%",
	"top:88%;left:79%"	
];
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
.huandang{
	position: relative;
	width: 80%;
	height: 80%;
	/* background-color: antiquewhite; */
}
.image-dw{
	width: 100%;
	height: 100%;
	/* background-color: aliceblue; */
}
.image-ball{
	width:10%;
	height:10%;
	position: absolute;
	
}
button{
	height: 36px;
	width: 32px;
	display:flex;
	justify-content: center;
	align-items: center;
	border: 1px solid aqua;
	background: none;
	color:aqua;
	margin-top: 8px;
}
</style>