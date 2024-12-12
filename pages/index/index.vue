<template>
	<view class="content">
		<LayoutVue>
			<!-- <LigthViewVue></LigthViewVue> -->
			 <GearShiftVue></GearShiftVue>
		</LayoutVue>
	</view>
</template>

<script>
	import LayoutVue from '../../components/Layout/Layout.vue'
import LigthViewVue from '../../components/LigthView/LigthView.vue';
	import GearShiftVue from '../../components/GearShift/GearShift.vue';
	export default {
		components:{
			LayoutVue,
			LigthViewVue,
			GearShiftVue
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: black;
	}
</style>
