<template>
	<view :class="[bemMethods('card')]">

	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	export default {
		name: "z-card",
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			}
		}
	}
</script>

<style>
</style>
