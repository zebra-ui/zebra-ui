<template>
	<view :class="[bemMethods('checkbox-group', [{ horizontal: direction === 'horizontal' }])]"
		:style="[styleToObj(customStyle)]">
		<slot />
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import {
		styleToObj
	} from '../../static/utils/utils.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-checkbox-group",
		mixins: [ChildrenMixin('zField')],
		props: {
			max: {
				type: [Number, String],
				default: 0
			},
			value: {
				type: Array
			},
			disabled: {
				type: Boolean,
			},
			direction: {
				type: String,
				default: 'vertical',
			},
			// 自定义样式
			customStyle: {
				type: String,
				default: ''
			},
		},
		watch: {
			value: {
				handler: function(val) {
					this.$emit('change', val);
					this.updateChildren();
				}
			},
			disabled: {
				immediate: true,
				handler: function(val) {
					this.updateChildren();
				}
			}
		},
		methods: {
			styleToObj(style) {
				return styleToObj(style);
			},
			toggleAll(options = {}) {
				this.children = this.getChildren(this.$children, 'z-checkbox');
				if (typeof options === 'boolean') {
					options = {
						checked: options
					};
				}

				const {
					checked,
					skipDisabled
				} = options;

				const children = this.children.filter((item) => {
					if (item.disabled && skipDisabled) {
						return item.checked;
					}
					return checked ?? !item.checked;
				});

				const names = children.map((item) => item.name);
				this.$emit('input', names);
			},
			getChildren(child, name = undefined) {
				let arr = [];
				child.forEach(item => {
					const loop = data => {
						if (data.$options && data.$options.name == name) {
							arr.push(data);
							return arr;
						}
						let children = data.$children;
						if (children) {
							for (let i = 0; i < children.length; i++) {
								loop(children[i])
							}
						}
					}
					loop(item);
				})
				return arr;
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			updateChildren() {
				this.$nextTick(() => {
					let children = this.getChildren(this.$children, 'z-checkbox');
					children.forEach((child) => this.updateChild(child));
				})
			},
			updateChild(child) {
				const {
					value,
					disabled,
					direction
				} = this;
				child.parentDisabled = disabled;
				child.direction = direction;
			},
		}
	}
</script>

<style scoped lang="scss">
	.zebra-checkbox-group--horizontal {
		display: flex;
		flex-wrap: wrap
	}
</style>
