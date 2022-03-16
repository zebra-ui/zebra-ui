<template>
	<view class="zebra-cascader">
		<view class="zebra-cascader__header">
			<view class="zebra-cascader__title">
				<template v-if="title">
					{{title}}
				</template>
				<template v-else>
					<slot name="title"></slot>
				</template>
			</view>
			<template v-if="closeable">
				<view class="z-cascader__close-icon">
					<z-icon name="close_big" @click="onClose"></z-icon>
				</view>
			</template>
		</view>
		<view class="zebra-cascader__tabs">
			<z-tabs ref="zTab" :active="activeTab" animated swipeable :color="activeColor"
				tab-custom-style="flex: none;padding: 0 20rpx;flex-basis:auto;"
				nav-custom-style="margin-left:12rpx;margin-right:12rpx;" @change="onChange">
				<!-- {this.tabs.map(this.renderTab)} -->
				<template v-for="(item,index) in tabs">
					<z-tab :key="index"
						:title="item.selectedOption ? item.selectedOption[textKey] : placeholder || '请选择'"
						:titleStyle="titleStyleFormat(item.selectedOption)">
						<!-- {this.renderOptions(options, selectedOption, tabIndex)} -->
						<view class="zebra-cascader__options">
							<scroll-view scroll-y="true" style="height: 100%;">
								<!-- {options.map(renderOption)} -->
								<view v-for="(option,optionIndex) in item.options" :key="optionIndex"
									:class="[bemMethods('cascader__option', { selected:  item.selectedOption && option[valueKey] === item.selectedOption[valueKey] })]"
									:style="
								'color:'+ (item.selectedOption && option[valueKey] === item.selectedOption[valueKey]) ?activeColor : null"
									@click="onSelect(option, index)">
									<!-- {Text} -->
									<template v-if="option[textKey]">
										{{option[textKey]}}
									</template>
									<template v-else>
										<slot name="option"></slot>
									</template>
									<template
										v-if="item.selectedOption && option[valueKey] === item.selectedOption[valueKey]">
										<view class="zebra-cascader__selected-icon">
											<z-icon name="done"></z-icon>
										</view>
									</template>
								</view>
							</scroll-view>
						</view>
					</z-tab>
				</template>
			</z-tabs>
		</view>

	</view>
</template>

<script>
	import bem from "../../static/utils/bem.js";
	export default {
		name: "z-cascader",
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现
		},
		// #endif
		props: {
			title: String,
			value: [Number, String],
			fieldNames: Object,
			placeholder: String,
			activeColor: String,
			options: {
				type: Array,
				default: () => [],
			},
			closeable: {
				type: Boolean,
				default: true,
			},
			show: Boolean
		},

		data() {
			return {
				tabs: [],
				activeTab: 0,
			};
		},
		computed: {
			textKey() {
				return this.fieldNames?.text || 'text';
			},
			valueKey() {
				return this.fieldNames?.value || 'value';
			},
			childrenKey() {
				return this.fieldNames?.children || 'children';
			},
		},
		watch: {
			options: {
				deep: true,
				handler: 'updateTabs',
			},

			value(value) {
				if (value || value === 0) {
					const values = this.tabs.map(
						(tab) => tab.selectedOption?. [this.valueKey]
					);
					if (values.indexOf(value) !== -1) {
						return;
					}
				}
				this.updateTabs();
			},
			show(val) {
				if (val) {
					setTimeout(() => {
						this.$refs.zTab.resize();
					}, 200)
				}
			}
		},

		mounted() {
			this.updateTabs();

		},
		methods: {
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			titleStyleFormat(option) {
				if (option) {
					return "color: #323233;font-weight: 500;"
				} else {
					return "color: #969799;font-weight: normal;"
				}
			},
			getSelectedOptionsByValue(options, value) {
				for (let i = 0; i < options.length; i++) {
					const option = options[i];

					if (option[this.valueKey] === value) {
						return [option];
					}

					if (option[this.childrenKey]) {
						const selectedOptions = this.getSelectedOptionsByValue(
							option[this.childrenKey],
							value
						);
						if (selectedOptions) {
							return [option, ...selectedOptions];
						}
					}
				}
			},

			updateTabs() {

				if (this.value || this.value === 0) {
					const selectedOptions = this.getSelectedOptionsByValue(
						this.options,
						this.value
					);

					if (selectedOptions) {
						let optionsCursor = this.options;

						this.tabs = selectedOptions.map((option) => {
							const tab = {
								options: optionsCursor,
								selectedOption: option,
							};

							const next = optionsCursor.filter(
								(item) => item[this.valueKey] === option[this.valueKey]
							);
							if (next.length) {
								optionsCursor = next[0][this.childrenKey];
							}

							return tab;
						});

						if (optionsCursor) {
							this.tabs.push({
								options: optionsCursor,
								selectedOption: null,
							});
						}

						this.$nextTick(() => {
							this.activeTab = this.tabs.length - 1;
						});

						return;
					}
				}

				this.tabs = [{
					options: this.options,
					selectedOption: null,
				}, ];
			},

			onSelect(option, tabIndex) {
				this.tabs[tabIndex].selectedOption = option;

				if (this.tabs.length > tabIndex + 1) {
					this.tabs = this.tabs.slice(0, tabIndex + 1);
				}

				if (option[this.childrenKey]) {
					const nextTab = {
						options: option[this.childrenKey],
						selectedOption: null,
					};

					if (this.tabs[tabIndex + 1]) {
						this.$set(this.tabs, tabIndex + 1, nextTab);
					} else {
						this.tabs.push(nextTab);
					}

					this.$nextTick(() => {
						this.activeTab++;
					});
				}

				const selectedOptions = this.tabs
					.map((tab) => tab.selectedOption)
					.filter((item) => !!item);

				const eventParams = {
					value: option[this.valueKey],
					tabIndex,
					selectedOptions,
				};
				this.$emit('input', option[this.valueKey]);
				this.$emit('change', eventParams);

				if (!option[this.childrenKey]) {
					this.$emit('finish', eventParams);
				}
			},

			onClose() {
				this.$emit('close');
			},
			onChange(e) {
				this.activeTab = e.index;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var.scss";

	.zebra-cascader {
		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: $cascader-header-height;
			padding: 0 $padding-md;
		}

		&__title {
			font-weight: $font-weight-bold;
			font-size: $cascader-title-font-size;
			line-height: $cascader-title-line-height;
		}

		&__close-icon {
			color: $cascader-close-icon-color;
			font-size: $cascader-close-icon-size;

			&:active {
				color: $cascader-close-icon-active-color;
			}
		}

		&__tabs {
		}

		&__tab {
			color: $cascader-tab-color;
			font-weight: $font-weight-bold;

			&--unselected {
				color: $cascader-unselected-tab-color;
				font-weight: normal;
			}
		}

		&__option {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx $padding-md;
			font-size: $font-size-md;
			line-height: $line-height-md;

			&:active {
				background-color: $active-color;
			}

			&--selected {
				color: $cascader-active-color;
				font-weight: $font-weight-bold;
			}
		}

		&__selected-icon {
			font-size: $cascader-selected-icon-size;
		}

		&__options {
			box-sizing: border-box;
			height: $cascader-options-height;
			padding-top: 12rpx;
			overflow-y: auto;
			-webkit-overflow-scrolling: touch;
		}
	}
</style>
