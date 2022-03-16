<template>
	<z-picker ref="zDatetimePicker" class="zebra-datetime-picker" active-class="active-class"
		toolbar-class="toolbar-class" column-class="column-class" :title="title" :columns="columns"
		:item-height="itemHeight" :show-toolbar="showToolbar" :visible-item-count="visibleItemCount"
		:confirm-button-text="confirmButtonText" :cancel-button-text="cancelButtonText" @change="onChange"
		@confirm="onConfirm" @cancel="onCancel" />
</template>

<script>
	/**
	 * z-datetime-picker 时间选择器
	 * @description z-datetime-picker 时间选择器
	 * @tutorial 
	 * @property {String} title	顶部栏标题
	 * @property {Boolean} loading	是否显示加载状态
	 * @property {Boolean} show-toolbar	是否显示顶部栏
	 * @property {String} cancel-button-text	取消按钮文字
	 * @property {String} confirm-button-text	确认按钮文字
	 * @property {Number} visible-item-count	可见的选项个数
	 * @property {Number} item-height	选项高度
	 * @property {String|Number} value	当前选中值
	 * @property {Function} filter	选项过滤函数
	 * @property {String} type	类型，可选值为 date time year-month 不建议动态修改
	 * @property {Function} formatter	选项格式化函数
	 * @property {Number} min-date	可选的最小时间，精确到分钟
	 * @property {Number} max-date	可选的最大时间，精确到分钟
	 * @property {Number} min-hour	可选的最小小时，针对 time 类型
	 * @property {Number} max-hour	可选的最大小时，针对 time 类型
	 * @property {Number} min-minute	可选的最小分钟，针对 time 类型
	 * @property {Number} max-minute	可选的最大分钟，针对 time 类型
	 */
	const currentYear = new Date().getFullYear();
	const defaultFormatter = (type, value) => value;
	export default {
		name: "z-datetime-picker",
		props: {
			//@property {String} title	顶部栏标题
			title: String,
			//@property {String} loading	是否显示加载状态
			loading: Boolean,
			//@property {String} cancel-button-text	取消按钮文字
			cancelButtonText: {
				type: String,
				default: '取消',
			},
			//@property {String} confirm-button-text	确认按钮文字
			confirmButtonText: {
				type: String,
				default: '确认',
			},
			//@property {Number} visible-item-count	可见的选项个数
			visibleItemCount: {
				type: Number,
				default: 6,
			},
			//@property {Number} item-height	选项高度
			itemHeight: {
				type: Number,
				default: 88,
			},
			//@property {String|Number} value	当前选中值
			value: {
				type: null,
				// observer: 'updateValue',
			},
			//@property {Function} filter	选项过滤函数
			filter: null,
			// @property {String} type	类型，可选值为 date time year-month 不建议动态修改
			type: {
				type: String,
				default: 'datetime',
				// observer: 'updateValue',
			},
			// @property {Boolean} show-toolbar	是否显示顶部栏
			showToolbar: {
				type: Boolean,
				default: true,
			},
			// @property {Function} formatter	选项格式化函数
			formatter: {
				type: Function,
				default: defaultFormatter,
			},
			// @property {Number} min-date	可选的最小时间，精确到分钟
			minDate: {
				type: Number,
				default: new Date(currentYear - 10, 0, 1).getTime(),
				// observer: 'updateValue',
			},
			//@property {Number} max-date	可选的最大时间，精确到分钟
			maxDate: {
				type: Number,
				default: new Date(currentYear + 10, 11, 31).getTime(),
				// observer: 'updateValue',
			},
			//@property {Number} min-hour	可选的最小小时，针对 time 类型
			minHour: {
				type: Number,
				default: 0,
				// observer: 'updateValue',
			},
			// @property {Number} max-hour	可选的最大小时，针对 time 类型
			maxHour: {
				type: Number,
				default: 23,
				// observer: 'updateValue',
			},
			//  @property {Number} min-minute	可选的最小分钟，针对 time 类型
			minMinute: {
				type: Number,
				default: 0,
				// observer: 'updateValue',
			},
			// @property {Number} max-minute	可选的最大分钟，针对 time 类型
			maxMinute: {
				type: Number,
				default: 59,
				// observer: 'updateValue',
			},
		},
		watch: {
			value: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			type: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			minDate: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			maxDate: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			minHour: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			maxHour: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			minMinute: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
			maxMinute: {
				immediate: true,
				handler: function(value) {
					this.updateValue();
				}
			},
		},
		data() {
			return {
				innerValue: Date.now(),
				columns: [],
			}
		},
		created() {
			const innerValue = this.correctValue(this.value);
			this.updateColumnValue(innerValue).then(() => {
				this.$emit('input', innerValue);
			});
		},
		beforeDestroy() {
		},
		methods: {
			updateValue() {
				const val = this.correctValue(this.value);
				const isEqual = val === this.innerValue;
				this.updateColumnValue(val).then(() => {
					if (!isEqual) {
						this.$emit('input', val);
					}
				});
			},
			async getPicker() {
				await this.$nextTick(() => {
					if (this.picker == null) {
						this.picker = this.$refs.zDatetimePicker;
						const {
							picker
						} = this;
						const {
							setColumnValues
						} = picker;
						picker.setColumnValues = (...args) => setColumnValues.apply(picker, [...
							args, false
						]);
					}
				})
				return this.picker;
			},
			updateColumns() {
				const formatter = this.formatter || defaultFormatter;
				const results = this.getOriginColumns().map((column) => ({
					values: column.values.map((value) => formatter(column.type, value)),
				}));
				this.columns = results;
				return;
			},
			getOriginColumns() {
				const {
					filter
				} = this;
				const results = this.getRanges().map(({
					type,
					range
				}) => {
					let values = this.times(range[1] - range[0] + 1, (index) => {
						const value = range[0] + index;
						return type === 'year' ? `${value}` : this.padZero(value);
					});
					if (filter) {
						values = filter(type, values);
					}
					return {
						type,
						values
					};
				});
				return results;
			},
			getRanges() {
				const data = this;
				if (data.type === 'time') {
					return [{
							type: 'hour',
							range: [data.minHour, data.maxHour],
						},
						{
							type: 'minute',
							range: [data.minMinute, data.maxMinute],
						},
					];
				}
				const {
					maxYear,
					maxDate,
					maxMonth,
					maxHour,
					maxMinute,
				} = this.getBoundary('max', data.innerValue);
				const {
					minYear,
					minDate,
					minMonth,
					minHour,
					minMinute,
				} = this.getBoundary('min', data.innerValue);
				const result = [{
						type: 'year',
						range: [minYear, maxYear],
					},
					{
						type: 'month',
						range: [minMonth, maxMonth],
					},
					{
						type: 'day',
						range: [minDate, maxDate],
					},
					{
						type: 'hour',
						range: [minHour, maxHour],
					},
					{
						type: 'minute',
						range: [minMinute, maxMinute],
					},
				];
				if (data.type === 'date')
					result.splice(3, 2);
				if (data.type === 'year-month')
					result.splice(2, 3);
				return result;
			},
			correctValue(value) {
				const data = this;
				const isDateType = data.type !== 'time';
				if (isDateType && !this.isValidDate(value)) {
					value = data.minDate;
				} else if (!isDateType && !value) {
					const {
						minHour
					} = data;
					value = `${this.padZero(minHour)}:00`;
				}
				if (!isDateType) {
					let [hour, minute] = value.split(':');
					hour = this.padZero(this.range(hour, data.minHour, data.maxHour));
					minute = this.padZero(this.range(minute, data.minMinute, data.maxMinute));
					return `${hour}:${minute}`;
				}
				value = Math.max(value, data.minDate);
				value = Math.min(value, data.maxDate);
				return value;
			},
			getBoundary(type, innerValue) {
				const value = new Date(innerValue);
				const boundary = new Date(this[`${type}Date`]);
				const year = boundary.getFullYear();
				let month = 1;
				let date = 1;
				let hour = 0;
				let minute = 0;
				if (type === 'max') {
					month = 12;
					date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
					hour = 23;
					minute = 59;
				}
				if (value.getFullYear() === year) {
					month = boundary.getMonth() + 1;
					if (value.getMonth() + 1 === month) {
						date = boundary.getDate();
						if (value.getDate() === date) {
							hour = boundary.getHours();
							if (value.getHours() === hour) {
								minute = boundary.getMinutes();
							}
						}
					}
				}
				return {
					[`${type}Year`]: year,
					[`${type}Month`]: month,
					[`${type}Date`]: date,
					[`${type}Hour`]: hour,
					[`${type}Minute`]: minute,
				};
			},
			onCancel() {
				this.$emit('cancel');
			},
			onConfirm() {
				this.$emit('confirm', this.innerValue);
			},
			async onChange() {
				let value;
				const picker = await this.getPicker();
				const originColumns = this.getOriginColumns();
				if (this.type === 'time') {
					const indexes = picker.getIndexes();
					value = `${+originColumns[0].values[indexes[0]]}:${+originColumns[1]
			                    .values[indexes[1]]}`;
				} else {
					const indexes = picker.getIndexes();
					const values = indexes.map((value, index) => originColumns[index].values[value]);
					const year = this.getTrueValue(values[0]);
					const month = this.getTrueValue(values[1]);
					const maxDate = this.getMonthEndDay(year, month);
					let date = this.getTrueValue(values[2]);
					if (this.type === 'year-month') {
						date = 1;
					}
					date = date > maxDate ? maxDate : date;
					let hour = 0;
					let minute = 0;
					if (this.type === 'datetime') {
						hour = this.getTrueValue(values[3]);
						minute = this.getTrueValue(values[4]);
					}
					value = new Date(year, month - 1, date, hour, minute);
				}
				value = this.correctValue(value);
				this.updateColumnValue(value).then(() => {
					this.$emit('input', value);
					this.$emit('change', value);
				});
			},
			async updateColumnValue(value) {
				let values = [];
				const {
					type
				} = this;
				const formatter = this.formatter || defaultFormatter;
				// #ifdef MP-TOUTIAO
				setTimeout(async () => {
					const picker = await this.getPicker();
					if (type === 'time') {
						const pair = value.split(':');
						values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
					} else {
						const date = new Date(value);
						values = [
							formatter('year', `${date.getFullYear()}`),
							formatter('month', this.padZero(date.getMonth() + 1)),
						];
						if (type === 'date') {
							values.push(formatter('day', this.padZero(date.getDate())));
						}
						if (type === 'datetime') {
							values.push(formatter('day', this.padZero(date.getDate())), formatter('hour',
									this.padZero(date
										.getHours())),
								formatter('minute', this.padZero(date.getMinutes())));
						}
					}
					this.innerValue = value;
					await this.updateColumns();
					picker.setValues(values)
				}, 200)
				// #endif
				// #ifndef MP-TOUTIAO
				const picker = await this.getPicker();
				if (type === 'time') {
					const pair = value.split(':');
					values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
				} else {
					const date = new Date(value);
					values = [
						formatter('year', `${date.getFullYear()}`),
						formatter('month', this.padZero(date.getMonth() + 1)),
					];
					if (type === 'date') {
						values.push(formatter('day', this.padZero(date.getDate())));
					}
					if (type === 'datetime') {
						values.push(formatter('day', this.padZero(date.getDate())), formatter('hour',
								this.padZero(date
									.getHours())),
							formatter('minute', this.padZero(date.getMinutes())));
					}
				}
				this.innerValue = value;
				await this.updateColumns();
				picker.setValues(values)
				// #endif
			},

			isValidDate(date) {
				return this.isDef(date) && !isNaN(new Date(date).getTime());
			},
			isDef(value) {
				return value !== undefined && value !== null;
			},
			range(num, min, max) {
				return Math.min(Math.max(num, min), max);
			},
			padZero(val) {
				return `00${val}`.slice(-2);
			},
			times(n, iteratee) {
				let index = -1;
				const result = Array(n < 0 ? 0 : n);
				while (++index < n) {
					result[index] = iteratee(index);
				}
				return result;
			},
			getTrueValue(formattedValue) {
				if (formattedValue === undefined) {
					formattedValue = '1';
				}
				while (isNaN(parseInt(formattedValue, 10))) {
					formattedValue = formattedValue.slice(1);
				}
				return parseInt(formattedValue, 10);
			},
			getMonthEndDay(year, month) {
				return 32 - new Date(year, month - 1, 32).getDate();
			},
		}
	}
</script>

<style>
</style>
