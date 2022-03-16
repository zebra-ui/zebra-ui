<template>
	<view v-if="info !== null && info !== '' || dot" :class="['zebra-info',bemMethods('info', { dot })]"
		:style="[styleToObj(customStyle)]">{{ dot ? '' : info }}
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	export default {
		name: 'z-info',
		props: {
			info: {
				type: null
			},
			dot: {
				type: Boolean,
				default: false
			},
			customStyle: {
				type: String,
				default: ''
			},
		},
		mounted() {
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			styleToObj(style) {
				return styleToObj(style);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-info {
		position: absolute;
		top: 0;
		right: 0;
		box-sizing: border-box;
		min-width: $info-size;
		padding: $info-padding;
		color: $info-color;
		font-weight: $info-font-weight;
		font-size: $info-font-size;
		font-family: $info-font-family;
		line-height: 1.2;
		text-align: center;
		background-color: $info-background-color;
		border: $info-border-width solid $white;
		border-radius: $info-size;
		transform: translate(50%, -50%);
		transform-origin: 100%;

		&--dot {
			width: $info-dot-size;
			min-width: 0;
			height: $info-dot-size;
			background-color: $info-dot-color;
			border-radius: 100%;
		}
	}
</style>
