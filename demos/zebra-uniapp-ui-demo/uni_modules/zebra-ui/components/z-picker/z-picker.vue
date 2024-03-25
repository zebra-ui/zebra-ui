<template>
	<view :class="['zebra-picker']">
		<!-- <include wx:if="{{ toolbarPosition === 'top' }}" src="./toolbar.wxml" /> -->
		<template v-if="toolbarPosition === 'top'">
			<view v-if="showToolbar" class="zebra-picker__toolbar toolbar-class">
				<view class="zebra-picker__cancel" hover-class="zebra-picker__cancel--hover" hover-stay-time="70"
					@click="emit('cancel')">
					{{ cancelButtonText }}
				</view>
				<view v-if="title" class="zebra-picker__title zebra-ellipsis">{{title}}</view>
				<view class="zebra-picker__confirm" hover-class="zebra-picker__confirm--hover" hover-stay-time="70"
					@click="emit('confirm')">
					{{ confirmButtonText }}
				</view>
			</view>
		</template>


		<view v-if="loading" class="zebra-picker__loading">
			<z-loading color="#1989fa" />
		</view>

		<view class="zebra-picker__columns" :style="[columnsStyle({ itemHeight, visibleItemCount })]">
			<view class="zebra-picker__column" v-for="(item,index) in columnsData(columns)" :key="index">
				<z-picker-column ref="zebraPickerColumn" :value-key="valueKey" :initial-options="item.values"
					:default-index="item.defaultIndex || defaultIndex" :item-height="itemHeight"
					:visible-item-count="visibleItemCount" active-class="active-class" @change="onChange(index)" />
			</view>
			<view class="zebra-picker__mask" :style="[maskStyle({ itemHeight, visibleItemCount })]" />
			<view class="zebra-picker__frame zebra-hairline--top-bottom" :style="[frameStyle({ itemHeight })]" />
		</view>
		<!-- 
		<include src="./toolbar.wxml" /> -->
		<template v-if="toolbarPosition === 'bottom'">
			<view v-if="showToolbar" class="zebra-picker__toolbar toolbar-class">
				<view class="zebra-picker__cancel" hover-class="zebra-picker__cancel--hover" hover-stay-time="70"
					@click="emit('cancel')">
					{{ cancelButtonText }}
				</view>
				<view v-if="title" class="zebra-picker__title zebra-ellipsis">{{title}}</view>
				<view class="zebra-picker__confirm" hover-class="zebra-picker__confirm--hover" hover-stay-time="70"
					@click="emit('confirm')">
					{{ confirmButtonText }}
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import addUnit from '../../static/utils/add-unit.js';
	import {
		ParentMixin,
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-picker",
		mixins: [ParentMixin('zPicker'), ChildrenMixin('zArea')],
		options: {
			styleIsolation: 'shared'
		},
		props: {
			title: String,
			loading: Boolean,
			showToolbar: Boolean,
			cancelButtonText: {
				type: String,
				default: '取消',
			},
			confirmButtonText: {
				type: String,
				default: '确认',
			},
			visibleItemCount: {
				type: Number,
				default: 6,
			},
			itemHeight: {
				type: Number,
				default: 88,
			},
			valueKey: {
				type: String,
				default: 'text',
			},
			toolbarPosition: {
				type: String,
				default: 'top',
			},
			defaultIndex: {
				type: Number,
				default: 0,
			},
			columns: {
				type: Array,
				default: function() {
					return [];
				},
				// observer(columns = []) {
				// 	this.simple = columns.length && !columns[0].values;
				// 	if (Array.isArray(this.children) && this.children.length) {
				// 		this.setColumns().catch(() => {});
				// 	}
				// },
			}
		},
		watch: {
			columns: {
				immediate: true,
				handler: function(columns) {
					this.simple = columns.length && !columns[0].values;
				}
			}
		},
		methods: {
			frameStyle(data) {
				return {
					height: addUnit(data.itemHeight),
				};
			},
			maskStyle(data) {
				return {
					'background-size': '100% ' + addUnit((data.itemHeight * (data.visibleItemCount - 1)) / 2),
				};
			},
			columnsData(columns) {
				if (!Array.isArray(columns)) {
					return [];
				}

				if (columns.length && !columns[0].values) {
					return [{
						values: columns
					}];
				}

				return columns;
			},
			columnsStyle(data) {
				return {
					height: addUnit(data.itemHeight * data.visibleItemCount),
				};
			},
			noop() {},
			setColumns() {
				const data = this;
				const columns = this.simple ? [{
					values: data.columns
				}] : data.columns;
				const stack = columns.map((column, index) => this.setColumnValues(index, column.values));
				return Promise.all(stack);
			},
			emit(type) {
				if (this.simple) {
					this.$emit(type, {
						value: this.getColumnValue(0),
						index: this.getColumnIndex(0),
					});
				} else {
					this.$emit(type, {
						value: this.getValues(),
						index: this.getIndexes(),
					});
				}
			},
			onChange(index) {
				let that = this;
				if (this.simple) {
					this.$emit('change', {
						value: this.getColumnValue(0),
						index: this.getColumnIndex(0),
					});
				} else {
					this.$emit('change', {
						value: this.getValues(),
						index: index,
					});
				}
			},
			getColumn(index) {
				return this.children[index];
			},
			// get column value by index
			getColumnValue(index) {
				const column = this.getColumn(index);
				return column && column.getValue();
			},
			// set column value by index
			setColumnValue(index, value) {
				const column = this.getColumn(index);
				if (column == null) {
					return Promise.reject(new Error('setColumnValue: 对应列不存在'));
				}
				return column.setValue(value);
			},
			// get column option index by column index
			getColumnIndex(columnIndex) {
				return (this.getColumn(columnIndex) || {}).currentIndex;
			},
			// set column option index by column index
			setColumnIndex(columnIndex, optionIndex) {
				const column = this.getColumn(columnIndex);
				if (column == null) {
					return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
				}
				return column.setIndex(optionIndex);
			},
			// get options of column by index
			getColumnValues(index) {
				return (this.children[index] || {}).options;
			},
			// set options of column by index
			setColumnValues(index, options, needReset = true) {
				const column = this.children[index];
				if (column == null) {
					return Promise.reject(new Error('setColumnValues: 对应列不存在'));
				}
				const isSame = JSON.stringify(column.options) === JSON.stringify(options);
				if (isSame) {
					return Promise.resolve();
				}
				column.options = options;
				if (needReset) {
					column.setIndex(0);
				}
				return;
			},
			// get values of all columns
			getValues() {
				return this.children.map((child) => child.getValue());
			},
			// set values of all columns
			setValues(values) {
				const stack = values.map((value, index) => this.setColumnValue(index, value));
				return Promise.all(stack);
			},
			// get indexes of all columns
			getIndexes() {
				return this.children.map((child) => child.currentIndex);
			},
			// set indexes of all columns
			setIndexes(indexes) {
				const stack = indexes.map((optionIndex, columnIndex) => this.setColumnIndex(columnIndex, optionIndex));
				return Promise.all(stack);
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-picker {
		-webkit-text-size-adjust: 100%;
		background-color: $picker-background-color;
		overflow: hidden;
		position: relative;
		-webkit-user-select: none;
		user-select: none
	}

	.zebra-picker__toolbar {
		display: flex;
		height: $picker-toolbar-height;
		justify-content: space-between;
		line-height: $picker-toolbar-height
	}

	.zebra-picker__cancel,
	.zebra-picker__confirm {
		font-size: $picker-action-font-size;
		padding: $picker-action-padding
	}

	.zebra-picker__cancel--hover,
	.zebra-picker__confirm--hover {
		opacity: .7
	}

	.zebra-picker__confirm {
		color: $picker-confirm-action-color
	}

	.zebra-picker__cancel {
		color: $picker-cancel-action-color
	}

	.zebra-picker__title {
		font-size: $picker-option-font-size;
		font-weight: $font-weight-bold;
		max-width: 50%;
		text-align: center
	}

	.zebra-picker__columns {
		display: flex;
		position: relative
	}

	.zebra-picker ::v-deep .zebra-picker__column {
		flex: 1 1;
		width: 0
	}

	.zebra-picker__loading {
		align-items: center;
		background-color: $picker-loading-mask-color;
		bottom: 0;
		display: flex;
		justify-content: center;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 4
	}

	.zebra-picker__mask {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		background-image: linear-gradient(180deg, hsla(0, 0%, 100%, .9), hsla(0, 0%, 100%, .4)), linear-gradient(0deg, hsla(0, 0%, 100%, .9), hsla(0, 0%, 100%, .4));
		background-position: top, bottom;
		background-repeat: no-repeat;
		height: 100%;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 2
	}

	.zebra-picker__frame,
	.zebra-picker__mask {
		pointer-events: none;
		position: absolute
	}

	.zebra-picker__frame {
		left: 16px;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1
	}
</style>
