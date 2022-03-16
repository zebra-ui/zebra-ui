<template>
	<view :class="[bemMethods('tab__pane', { active, inactive: !active })]" :style="rootStyle">
		<slot v-if="shouldRender" />
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-tab",
		mixins: [ChildrenMixin('zTabs')],
		props: {
			dot: {
				type: Boolean,
			},
			info: {
				type: null,
			},
			title: {
				type: String,
			},
			disabled: {
				type: Boolean,
			},
			titleStyle: {
				type: String,
			},
			name: {
				type: null,
				default: '',
			},
		},
		data() {
			return {
				active: false,
				indexTab: 0,
				inited: false,
				shouldRender: false,
				shouldShow: false,
			}
		},
		computed: {
			rootStyle() {
				return (this.shouldShow ? '' : 'display: none;') + this.titleStyle
			}
		},
		watch: {
			dot: {
				handler: function(val) {
					this.update();
				}
			},
			info: {
				handler: function(val) {
					this.update();
				}
			},
			title: {
				handler: function(val) {
					this.update();
				}
			},
			disabled: {
				handler: function(val) {
					this.update();
				}
			},
			titleStyle: {
				handler: function(val) {
					this.update();
				}
			},
		},
		mounted() {
			this.update();
		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			getComputedName() {
				if (this.name !== '') {
					return this.name;
				}
				return this.index;
			},
			updateRender(active, parent) {
				this.inited = this.inited || active;
				this.active = active;
				this.shouldRender = this.inited || !parent.lazyRender;
				this.shouldShow = active || parent.animated;
			},
			update() {
				this.parent.updateTabs();
			},
		}
	}
</script>

<style>
	/* 字节小程序此处无效 */
	:host {
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100%
	}
</style>

<style scoped lang="scss">
	.zebra-tab__pane {
		-webkit-overflow-scrolling: touch;
		box-sizing: border-box;
		overflow-y: auto;
		box-sizing: border-box;
		flex-shrink: 0;
		width: 100%
	}

	.zebra-tab__pane--active {
		height: auto
	}

	.zebra-tab__pane--inactive {
		height: 0;
		overflow: visible;
	}
</style>
