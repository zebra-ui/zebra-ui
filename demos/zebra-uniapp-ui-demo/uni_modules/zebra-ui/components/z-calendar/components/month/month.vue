<template>
	<view class="zebra-calendar__month" :style="[getMonthStyle(visible, date, rowHeight)]">
		<view v-if="showMonthTitle" class="zebra-calendar__month-title">
			{{ formatMonthTitle(date) }}
		</view>

		<view v-if="visible" class="zebra-calendar__days">
			<view v-if="showMark" class="zebra-calendar__month-mark">
				{{ getMark(date) }}
			</view>

			<view v-for="(item,index) in days" :key="index"
				:style="[getDayStyle(item.type, index, date, rowHeight, color, firstDayOfWeek)]"
				:class="[bemMethods('calendar__day', [item.type]),item.className]" :data-index="index" @click="onClick">
				<view v-if="item.type === 'selected'" class="zebra-calendar__selected-day"
					:style="[{'background': color}]">
					<view v-if="item.topInfo" class="zebra-calendar__top-info">{{ item.topInfo }}</view>
					{{ item.text }}
					<view v-if="item.bottomInfo" class="zebra-calendar__bottom-info">
						{{ item.bottomInfo }}
					</view>
				</view>

				<view v-else>
					<view v-if="item.topInfo" class="zebra-calendar__top-info">{{ item.topInfo }}</view>
					{{ item.text }}
					<view v-if="item.bottomInfo" class="zebra-calendar__bottom-info">
						{{ item.bottomInfo }}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import bem from '../../../../static/utils/bem.js';
	import {
		getParent
	} from '../../../../static/utils/utils.js';
	var ROW_HEIGHT = 64;
	export default {
		name: "z-calendar-month",
		props: {
			date: {
				type: null,
				// observer: 'setDays',
			},
			type: {
				type: String,
				// observer: 'setDays',
			},
			color: String,
			minDate: {
				type: null,
				// observer: 'setDays',
			},
			maxDate: {
				type: null,
				// observer: 'setDays',
			},
			showMark: Boolean,
			rowHeight: null,
			// formatter: {
			// 	type: Function,
			// 	// observer: 'setDays',
			// },
			currentDate: {
				type: null,
				// observer: 'setDays',
			},
			firstDayOfWeek: {
				type: Number,
				// observer: 'setDays',
			},
			allowSameDay: Boolean,
			showSubtitle: Boolean,
			showMonthTitle: {
				type: Boolean,
				default: true
			},
			formatterString: String
		},
		watch: {
			date: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			type: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			minDate: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			maxDate: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			formatter: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			currentDate: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			},
			firstDayOfWeek: {
				immediate: true,
				handler: function() {
					this.setDays();
				}
			}
		},
		data() {
			return {
				visible: true,
				days: [],
				formatter: null
			}
		},
		mounted() {
			this.formatter = getParent(this, 'z-calendar').formatterMonth;
		},
		methods: {
			onClick(event) {
				const {
					index
				} = event.currentTarget.dataset;
				const item = this.days[index];
				if (item.type !== 'disabled') {
					this.$emit('click', item);
				}
			},
			setDays() {
				const days = [];
				const startDate = new Date(this.date);
				const year = startDate.getFullYear();
				const month = startDate.getMonth();
				const totalDay = this.getMonthEndDay(startDate.getFullYear(), startDate.getMonth() + 1);
				for (let day = 1; day <= totalDay; day++) {
					const date = new Date(year, month, day);
					const type = this.getDayType(date);
					let config = {
						date,
						type,
						text: day,
						bottomInfo: this.getBottomInfo(type),
					};
					if (this.formatter) {
						config = this.formatter(config);
					}
					days.push(config);
				}
				this.days = days;
			},
			getMultipleDayType(day) {
				const {
					currentDate
				} = this;
				if (!Array.isArray(currentDate)) {
					return '';
				}
				const isSelected = (date) => currentDate.some((item) => this.compareDay(item, date) === 0);
				if (isSelected(day)) {
					const prevDay = this.getPrevDay(day);
					const nextDay = this.getNextDay(day);
					const prevSelected = isSelected(prevDay);
					const nextSelected = isSelected(nextDay);
					if (prevSelected && nextSelected) {
						return 'multiple-middle';
					}
					if (prevSelected) {
						return 'end';
					}
					return nextSelected ? 'start' : 'multiple-selected';
				}
				return '';
			},
			getPrevDay(date) {
				return this.getDayByOffset(date, -1);
			},
			getNextDay(date) {
				return this.getDayByOffset(date, 1);
			},
			getDayByOffset(date, offset) {
				date = new Date(date);
				date.setDate(date.getDate() + offset);
				return date;
			},
			getRangeDayType(day) {
				const {
					currentDate,
					allowSameDay
				} = this;
				if (!Array.isArray(currentDate)) {
					return '';
				}
				const [startDay, endDay] = currentDate;
				if (!startDay) {
					return '';
				}
				const compareToStart = this.compareDay(day, startDay);
				if (!endDay) {
					return compareToStart === 0 ? 'start' : '';
				}
				const compareToEnd = this.compareDay(day, endDay);
				if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
					return 'start-end';
				}
				if (compareToStart === 0) {
					return 'start';
				}
				if (compareToEnd === 0) {
					return 'end';
				}
				if (compareToStart > 0 && compareToEnd < 0) {
					return 'middle';
				}
				return '';
			},
			getDayType(day) {
				const {
					type,
					minDate,
					maxDate,
					currentDate
				} = this;
				if (this.compareDay(day, minDate) < 0 || this.compareDay(day, maxDate) > 0) {
					return 'disabled';
				}
				if (type === 'single') {
					return this.compareDay(day, currentDate) === 0 ? 'selected' : '';
				}
				if (type === 'multiple') {
					return this.getMultipleDayType(day);
				}
				if (type === 'range') {
					return this.getRangeDayType(day);
				}
				return '';
			},
			getBottomInfo(type) {
				if (this.type === 'range') {
					if (type === 'start') {
						return '开始';
					}
					if (type === 'end') {
						return '结束';
					}
					if (type === 'start-end') {
						return '开始/结束';
					}
				}
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			getMonthStyle(visible, date, rowHeight) {
				if (!visible) {
					date = new Date(date);

					var totalDay = this.getMonthEndDay(
						date.getFullYear(),
						date.getMonth() + 1
					);
					var offset = new Date(date).getDay();
					var padding = Math.ceil((totalDay + offset) / 7) * rowHeight;

					return {
						'padding-bottom': padding + 'px'
					};
				}
			},
			getMonthEndDay(year, month) {
				return 32 - new Date(year, month - 1, 32).getDate();
			},
			formatMonthTitle(date) {
				date = new Date(date);
				return date.getFullYear() + '年' + (date.getMonth() + 1) + '月';
			},
			getMark(date) {
				return new Date(date).getMonth() + 1;
			},
			getDayStyle(type, index, date, rowHeight, color, firstDayOfWeek) {
				var style = {};
				var current = new Date(date).getDay() || 7;
				var offset = current < firstDayOfWeek ? (7 - firstDayOfWeek + current) :
					current === 7 && firstDayOfWeek === 0 ? 0 :
					(current - firstDayOfWeek);

				if (index === 0) {
					style['margin-left'] = (100 * offset) / 7 + '%'
				}

				if (rowHeight !== ROW_HEIGHT) {
					style['height'] = rowHeight + 'px'
					// style.push(['height', rowHeight + 'px']);
				}

				if (color) {
					if (
						type === 'start' ||
						type === 'end' ||
						type === 'start-end' ||
						type === 'multiple-selected' ||
						type === 'multiple-middle'
					) {
						style['background'] = color;
					} else if (type === 'middle') {
						style['color'] = color;
					}
				}
				return style;
			},
			compareMonth(date1, date2) {
				if (!(date1 instanceof Date)) {
					date1 = new Date(date1);
				}
				if (!(date2 instanceof Date)) {
					date2 = new Date(date2);
				}
				const year1 = date1.getFullYear();
				const year2 = date2.getFullYear();
				const month1 = date1.getMonth();
				const month2 = date2.getMonth();
				if (year1 === year2) {
					return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
				}
				return year1 > year2 ? 1 : -1;
			},
			compareDay(day1, day2) {
				if (!(day1 instanceof Date)) {
					day1 = new Date(day1);
				}
				if (!(day2 instanceof Date)) {
					day2 = new Date(day2);
				}
				const compareMonthResult = this.compareMonth(day1, day2);
				if (compareMonthResult === 0) {
					const date1 = day1.getDate();
					const date2 = day2.getDate();
					return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
				}
				return compareMonthResult;
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../../static/css/var.scss';

	.zebra-calendar {
		background-color: $calendar-background-color;
		display: flex;
		flex-direction: column;
		height: 100%
	}

	.zebra-calendar__month-title {
		font-size: $calendar-month-title-font-size;
		font-weight: $font-weight-bold;
		height: $calendar-header-title-height;
		line-height: $calendar-header-title-height;
		text-align: center
	}

	.zebra-calendar__days {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		-webkit-user-select: none;
		user-select: none
	}

	.zebra-calendar__month-mark {
		color: $calendar-month-mark-color;
		font-size: $calendar-month-mark-font-size;
		left: 50%;
		pointer-events: none;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 0
	}

	.zebra-calendar__day,
	.zebra-calendar__selected-day {
		align-items: center;
		display: flex;
		justify-content: center;
		text-align: center
	}

	.zebra-calendar__day {
		font-size: $calendar-day-font-size;
		height: $calendar-day-height;
		position: relative;
		width: 14.285%
	}

	.zebra-calendar__day--end,
	.zebra-calendar__day--multiple-middle,
	.zebra-calendar__day--multiple-selected,
	.zebra-calendar__day--start,
	.zebra-calendar__day--start-end {
		background-color: $calendar-range-edge-background-color;
		color: $calendar-range-edge-color
	}

	.zebra-calendar__day--start {
		border-radius: 8rpx 0 0 8rpx
	}

	.zebra-calendar__day--end {
		border-radius: 0 8rpx 8rpx 0
	}

	.zebra-calendar__day--multiple-selected,
	.zebra-calendar__day--start-end {
		border-radius: 8rpx
	}

	.zebra-calendar__day--middle {
		color: $calendar-range-middle-color
	}

	.zebra-calendar__day--middle:after {
		background-color: currentColor;
		bottom: 0;
		content: "";
		left: 0;
		opacity: $calendar-range-middle-background-opacity;
		position: absolute;
		right: 0;
		top: 0
	}

	.zebra-calendar__day--disabled {
		color: $calendar-day-disabled-color;
		cursor: default
	}

	.zebra-calendar__bottom-info,
	.zebra-calendar__top-info {
		font-size: $calendar-info-font-size;
		left: 0;
		line-height: $calendar-info-line-height;
		position: absolute;
		right: 0
	}

	@media (max-width:700px) {

		.zebra-calendar__bottom-info,
		.zebra-calendar__top-info {
			font-size: 18rpx
		}
	}

	.zebra-calendar__top-info {
		top: 12rpx
	}

	.zebra-calendar__bottom-info {
		bottom: 12rpx
	}

	.zebra-calendar__selected-day {
		background-color: $calendar-selected-day-background-color;
		border-radius: 8rpx;
		color: $calendar-selected-day-color;
		height: $calendar-selected-day-size;
		width: $calendar-selected-day-size;
	}
</style>
