<template>
	<view class="z-calendar">
		<z-popup v-if="poppable" :custom-style="'height:'+popupHeight"
			:custom-class="'zebra-calendar__popup--'+position" close-icon-class="zebra-calendar__close-icon"
			:show="show" :round="round" :position="position" :closeable="showTitle || showSubtitle"
			:close-on-click-overlay="closeOnClickOverlay" @enter="onOpen" @close="onClose" @after-enter="onOpened"
			@after-leave="onClosed">
			<view class="zebra-calendar" :style="'height:'+height">
				<calendar-header :title="title" :mode="mode" :swiperLeftIConDisabled="swiperLeftIConDisabled"
					:swiperRightIConDisabled="swiperRightIConDisabled" :showTitle="showTitle" :subtitle="subtitle"
					:showSubtitle="showSubtitle" :firstDayOfWeek="firstDayOfWeek" @click-subtitle="onClickSubtitle"
					@click-left="onClickLeft" @click-right="onClickRight">
					<slot name="title" slot="title"></slot>
				</calendar-header>

				<template v-if="mode == 'scroll'">
					<scroll-view class="zebra-calendar__body" scroll-y :scroll-into-view="scrollIntoViewData">
						<calendar-month v-for="(item,index) in getMonths(minDate, maxDate)" :key="index"
							:id="'month'+index" class="month" :data-date="item" :date="item" :type="type" :color="color"
							:minDate="minDate" :maxDate="maxDate" :showMark="showMark" :formatter="formatter"
							:formatterString="formatterString" :rowHeight="rowHeight" :currentDate="currentDate"
							:showSubtitle="showSubtitle" :allowSameDay="allowSameDay"
							:showMonthTitle="index !== 0 || !showSubtitle" :firstDayOfWeek="firstDayOfWeek"
							@click="onClickDay" />
					</scroll-view>
				</template>

				<template v-if="mode == 'page'">
					<swiper :current="swiperCurrentIndex" class="zebra-calendar__swiper" :indicator-dots="false"
						:autoplay="false" @change="swiperChange">
						<swiper-item class="zebra-calendar__swiper-item"
							v-for="(item,index) in getMonths(minDate, maxDate)" :key="index">
							<calendar-month :id="'month'+index" class="month" :data-date="item" :date="item"
								:type="type" :color="color" :minDate="minDate" :maxDate="maxDate" :showMark="showMark"
								:formatter="formatter" :formatterString="formatterString" :rowHeight="rowHeight"
								:currentDate="currentDate" :showSubtitle="showSubtitle" :allowSameDay="allowSameDay"
								:showMonthTitle="index !== 0 || !showSubtitle" :firstDayOfWeek="firstDayOfWeek"
								@click="onClickDay" />
						</swiper-item>
					</swiper>
				</template>
				<view :class="[bemMethods('calendar__footer', { safeAreaInsetBottom })]">
					<slot name="footer"></slot>
				</view>

				<view :class="[bemMethods('calendar__footer', { safeAreaInsetBottom })]">
					<z-button v-if="showConfirm" round block type="info" :color="color"
						custom-class="zebra-calendar__confirm" :disabled="getButtonDisabled(type, currentDate)"
						nativeType="text" @click="onConfirm">
						{{getButtonDisabled(type, currentDate)? confirmDisabledText: confirmText}}
					</z-button>
				</view>
			</view>
		</z-popup>

		<view v-else class="zebra-calendar" :style="'height:'+height">
			<calendar-header :title="title" :mode="mode" :swiperLeftIConDisabled="swiperLeftIConDisabled"
				:swiperRightIConDisabled="swiperRightIConDisabled" :showTitle="showTitle" :subtitle="subtitle"
				:showSubtitle="showSubtitle" :firstDayOfWeek="firstDayOfWeek" @click-subtitle="onClickSubtitle"
				@click-left="onClickLeft" @click-right="onClickRight">
				<slot name="title" slot="title"></slot>
			</calendar-header>

			<template v-if="mode == 'scroll'">
				<scroll-view class="zebra-calendar__body" scroll-y :scroll-into-view="scrollIntoViewData">
					<calendar-month v-for="(item,index) in getMonths(minDate, maxDate)" :key="index" :id="'month'+index"
						class="month" :data-date="item" :date="item" :type="type" :color="color" :minDate="minDate"
						:maxDate="maxDate" :showMark="showMark" :formatter="formatter"
						:formatterString="formatterString" :rowHeight="rowHeight" :currentDate="currentDate"
						:showSubtitle="showSubtitle" :allowSameDay="allowSameDay"
						:showMonthTitle="index !== 0 || !showSubtitle" :firstDayOfWeek="firstDayOfWeek"
						@click="onClickDay" />
				</scroll-view>
			</template>

			<template v-if="mode == 'page'">
				<swiper :current="swiperCurrentIndex" class="zebra-calendar__swiper" :indicator-dots="false"
					:autoplay="false" @change="swiperChange">
					<swiper-item class="zebra-calendar__swiper-item" v-for="(item,index) in getMonths(minDate, maxDate)"
						:key="index">
						<calendar-month :id="'month'+index" class="month" :data-date="item" :date="item" :type="type"
							:color="color" :minDate="minDate" :maxDate="maxDate" :showMark="showMark"
							:formatter="formatter" :formatterString="formatterString" :rowHeight="rowHeight"
							:currentDate="currentDate" :showSubtitle="showSubtitle" :allowSameDay="allowSameDay"
							:showMonthTitle="index !== 0 || !showSubtitle" :firstDayOfWeek="firstDayOfWeek"
							@click="onClickDay" />
					</swiper-item>
				</swiper>
			</template>

			<view :class="[bemMethods('calendar__footer', { safeAreaInsetBottom })]">
				<slot name="footer"></slot>
			</view>

			<view :class="[bemMethods('calendar__footer', { safeAreaInsetBottom })]">
				<z-button v-if="showConfirm" round block type="info" :color="color"
					custom-class="zebra-calendar__confirm" :disabled="getButtonDisabled(type, currentDate)"
					nativeType="text" @click="onConfirm">
					{{getButtonDisabled(type, currentDate)? confirmDisabledText: confirmText}}
				</z-button>
			</view>
		</view>
		<!-- 选择年月的弹窗 -->
		<z-popup :show="showDatetimePicker" round position="bottom" @close="showDatetimePicker = false">
			<z-datetime-picker type="year-month" :value="currentDate" :min-date="minDate" :max-date="maxDate"
				@input="onInput" :formatter="datetimeFormatter" @confirm="datetimePickerConfirm"
				@cancel="showDatetimePicker = false" />
		</z-popup>
		<!-- <zebra-toast id="zebra-toast" /> -->
	</view>
</template>

<script>
	/**
	 * calendar 日历
	 * @description Calendar 日历
	 * @tutorial 
	 * @property {String} mode	模式 scroll:滚动  page:分页  默认滚动
	 * @property {String} popup-height	弹窗高度
	 * @property {String} height	日历高度
	 * @property {String} type 选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间
	 * @property {String} title	日历标题
	 * @property {String} color	主题色，对底部按钮和选中日期生效
	 * @property {timestamp} min-date	可选择的最小日期
	 * @property {timestamp} max-date	可选择的最大日期
	 * @property {timestamp} default-date	默认选中的日期，type为multiple或range时为数组
	 * @property {number | string} row-height	日期行高	
	 * @property {(day: Day) => Day} formatter	日期格式化函数
	 * @property {Boolean} poppable		是否以弹层的形式展示日历
	 * @property {Boolean} show-mark	是否显示月份背景水印
	 * @property {Boolean} show-title	是否展示日历标题
	 * @property {Boolean} show-subtitle	是否展示日历副标题（年月）
	 * @property {Boolean} show-confirm	是否展示确认按钮
	 * @property {String} confirm-text	确认按钮的文字
	 * @property {String} confirm-disabled-text	确认按钮处于禁用状态时的文字
	 * @property {Number} first-day-of-week	设置周起始日
	 * @property {Boolean} readonly	是否为只读状态，只读状态下不能选择日期
	 * 当 Calendar 的 poppable 为 true 时，支持以下 props:
	 * @property {Boolean} show	是否显示日历弹窗
	 * @property {String} position	弹出位置，可选值为 top right left
	 * @property {Boolean} round	是否显示圆角弹窗
	 * @property {Boolean} close-on-click-overlay	是否在点击遮罩层后关闭
	 * @property {Boolean} safe-area-inset-bottom	是否开启底部安全区适配
	 * @property {Number|String} max-range	日期区间最多可选天数，默认无限制
	 * @property {string | null} range-prompt	范围选择超过最多可选天数时的提示文案
	 * @property {Boolean} show-range-prompt	范围选择超过最多可选天数时，是否展示提示文案
	 * @property {Boolean} allow-same-day	是否允许日期范围的起止时间为同一天
	 */
	import calendarHeader from './components/header/header.vue';
	import calendarMonth from './components/month/month.vue';
	import bem from '../../static/utils/bem.js';
	const initialMinDate = new Date().getTime();
	const initialMaxDate = (() => {
		const now = new Date();
		return new Date(now.getFullYear(), now.getMonth() + 6, now.getDate()).getTime();
	})();
	var ROW_HEIGHT = 64;
	export default {
		name: "z-calendar",
		options: {
			styleIsolation: 'shared'
		},
		components: {
			calendarHeader,
			calendarMonth
		},
		props: {
			// 模式 scroll:滚动  page:分页  默认滚动
			mode: {
				type: String,
				default: "scroll"
			},
			//弹窗高度
			popupHeight: {
				type: String,
				default: "80%"
			},
			// 日历高度
			height: {
				type: String,
				default: "100%"
			},
			// 选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间
			type: {
				type: String,
				default: "single"
			},
			rowHeight: {
				type: null,
				default: ROW_HEIGHT,
			},
			// 日历标题
			title: {
				type: String,
				default: "日期选择"
			},
			// 主题色，对底部按钮和选中日期生效
			color: {
				type: String,
				default: "#1989fa"
			},
			// 可选择的最小日期
			minDate: {
				type: Number,
				default: initialMinDate
			},
			// 可选择的最大日期
			maxDate: {
				type: Number,
				default: initialMaxDate
			},
			// 默认选中的日期，type为multiple或range时为数组
			defaultDate: {
				type: null
			},
			// 日期格式化函数
			formatter: {
				type: null
			},
			// 是否以弹层的形式展示日历	
			poppable: {
				type: Boolean,
				default: true
			},
			// 是否显示月份背景水印
			showMark: {
				type: Boolean,
				default: true
			},
			// 是否展示日历标题
			showTitle: {
				type: Boolean,
				default: true
			},
			// 是否展示日历副标题（年月）
			showSubtitle: {
				type: Boolean,
				default: true
			},
			// 是否展示确认按钮
			showConfirm: {
				type: Boolean,
				default: true
			},
			// 确认按钮的文字
			confirmText: {
				type: String,
				default: "确定"
			},
			// 确认按钮处于禁用状态时的文字
			confirmDisabledText: {
				type: String,
				default: "确定"
			},
			// 设置周起始日
			firstDayOfWeek: {
				type: Number,
				default: 0
			},
			// 是否为只读状态，只读状态下不能选择日期
			readonly: {
				type: Boolean,
				default: false
			},
			// 是否显示日历弹窗
			show: {
				type: Boolean,
				default: false
			},
			// 弹出位置，可选值为 top right left
			position: {
				type: String,
				default: "bottom"
			},
			// 是否显示圆角弹窗
			round: {
				type: Boolean,
				default: true
			},
			// 是否在点击遮罩层后关闭
			closeOnClickOverlay: {
				type: Boolean,
				default: true
			},
			// 是否开启底部安全区适配
			safeAreaInsetBottom: {
				type: Boolean,
				default: true
			},
			// 日期区间最多可选天数，默认无限制
			maxRange: {
				type: [Number, String],
				default: ""
			},
			// 范围选择超过最多可选天数时的提示文案
			rangePrompt: {
				type: String,
				default: "选择天数不能超过 xx 天"
			},
			// 范围选择超过最多可选天数时，是否展示提示文案
			showRangePrompt: {
				type: Boolean,
				default: true
			},
			// 是否允许日期范围的起止时间为同一天
			allowSameDay: {
				type: Boolean,
				default: false
			},
			formatterString: String,
		},
		data() {
			return {
				subtitle: '',
				currentDate: null,
				scrollIntoViewData: '',
				swiperCurrentIndex: '',
				swiperLeftIConDisabled: false,
				swiperRightIConDisabled: false,
				showDatetimePicker: false,
				datetimeFormatter: function formatter(type, value) {
					if (type === 'year') {
						return `${value}年`;
					}
					if (type === 'month') {
						return `${value}月`;
					}
					return value;
				},
				formatterMonth: null
			}
		},
		watch: {
			show(val) {
				if (val) {
					this.initRect();
					this.scrollIntoView();
				}
			},
			defaultDate(val) {
				this.currentDate = val;
				this.scrollIntoView();
			},
			type() {
				this.reset();
			},
			formatter: {
				immediate: true,
				handler: function(val) {}
			},
			mode: {
				immediate: true,
				handler: function(val) {}
			},
			swiperCurrentIndex(val) {}
		},
		created() {
			this.currentDate = this.getInitialDate(this.defaultDate);
		},
		mounted() {
			// #ifdef H5
			this.parent = this.$parent.$parent;
			// #endif
			// #ifndef H5
			this.parent = this.$parent;
			// #endif
			this.formatterMonth = this.parent[this.formatterString];
			if (this.show || !this.poppable) {
				this.initRect();
				this.scrollIntoView();
			}
		},
		methods: {
			datetimePickerConfirm(e) {
				const months = this.getMonths(this.minDate, this.maxDate);
				months.some((month, index) => {
					if (this.compareMonth(month, e) === 0) {
						this.swiperCurrentIndex = index;
						this.showDatetimePicker = false;
						return true;
					}
					return false;
				});
			},
			onInput(e) {},
			onClickLeft() {
				if (this.swiperCurrentIndex > 0) {
					this.swiperCurrentIndex -= 1;
					this.swiperRightIConDisabled = false;
				}
				if (this.swiperCurrentIndex == 0) {
					this.swiperLeftIConDisabled = true;
				}

			},
			onClickRight() {
				const months = this.getMonths(this.minDate, this.maxDate);
				if (this.swiperCurrentIndex < months.length - 1) {
					this.swiperCurrentIndex += 1;
					this.swiperLeftIConDisabled = false;
				}
				if (this.swiperCurrentIndex == months.length - 1) {
					this.swiperRightIConDisabled = true;
				}
			},
			swiperChange(e) {
				this.swiperCurrentIndex = e.detail.current;
				if (e.detail.current == 0) {
					this.swiperLeftIConDisabled = true;
				} else {
					this.swiperLeftIConDisabled = false;
				}
				const months = this.getMonths(this.minDate, this.maxDate);
				if (e.detail.current == months.length - 1) {
					this.swiperRightIConDisabled = true;
				} else {
					this.swiperRightIConDisabled = false;
				}
				this.subtitle = this.formatMonthTitle(this.swiperGetSubtitle(e.detail.current));
			},
			swiperGetSubtitle(current) {
				const months = this.getMonths(this.minDate, this.maxDate);
				let monthData = "";
				months.some((month, index) => {
					if (index == current) {
						monthData = month;
						return true;
					}
					return false;
				});
				return monthData
			},
			getButtonDisabled(type, currentDate) {
				if (currentDate == null) {
					return true;
				}

				if (type === 'range') {
					return !currentDate[0] || !currentDate[1];
				}

				if (type === 'multiple') {
					return !currentDate.length;
				}

				return !currentDate;
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			getMonths(minDate, maxDate) {
				var months = [];
				var cursor = new Date(minDate);

				cursor.setDate(1);

				do {
					months.push(cursor.getTime());
					cursor.setMonth(cursor.getMonth() + 1);
				} while (this.compareMonth(cursor, new Date(maxDate)) !== 1);

				return months;
			},
			reset() {
				// this.setData({
				// 	currentDate: this.getInitialDate()
				// });
				this.currentDate = this.getInitialDate();
				this.scrollIntoView();
			},
			initRect() {
				this.$nextTick(() => {
					if (this.contentObserver != null) {
						this.contentObserver.disconnect();
					}
					const contentObserver = uni.createIntersectionObserver(this, {
						thresholds: [0, 0.1, 0.9, 1],
						observeAll: true,
					});
					this.contentObserver = contentObserver;
					contentObserver.relativeTo('.zebra-calendar__body');
					contentObserver.observe('.month', (res) => {
						if (res.boundingClientRect.top <= res.relativeRect.top) {
							this.subtitle = this.formatMonthTitle(res.dataset.date);
						}
					});
				})
			},
			limitDateRange(date, minDate = null, maxDate = null) {
				minDate = minDate || this.minDate;
				maxDate = maxDate || this.maxDate;
				if (this.compareDay(date, minDate) === -1) {
					return minDate;
				}
				if (this.compareDay(date, maxDate) === 1) {
					return maxDate;
				}
				return date;
			},
			getInitialDate(defaultDate = null) {
				const {
					type,
					minDate,
					maxDate
				} = this;
				const now = new Date().getTime();
				if (type === 'range') {
					if (!Array.isArray(defaultDate)) {
						defaultDate = [];
					}
					const [startDay, endDay] = defaultDate || [];
					const start = this.limitDateRange(startDay || now, minDate, this.getPrevDay(new Date(maxDate))
						.getTime());
					const end = this.limitDateRange(endDay || now, this.getNextDay(new Date(minDate)).getTime());
					return [start, end];
				}
				if (type === 'multiple') {
					if (Array.isArray(defaultDate)) {
						return defaultDate.map((date) => this.limitDateRange(date));
					}
					return [this.limitDateRange(now)];
				}
				if (!defaultDate || Array.isArray(defaultDate)) {
					defaultDate = now;
				}
				return this.limitDateRange(defaultDate);
			},
			scrollIntoView() {
				// requestAnimationFrame(() => {
				const {
					currentDate,
					type,
					show,
					poppable,
					minDate,
					maxDate,
				} = this;
				// @ts-ignore
				const targetDate = type === 'single' ? currentDate : currentDate[0];
				const displayed = show || !poppable;
				if (!targetDate || !displayed) {
					return;
				}
				const months = this.getMonths(minDate, maxDate);
				months.some((month, index) => {
					if (this.compareMonth(month, targetDate) === 0) {
						if (this.mode == "scroll") {
							this.scrollIntoViewData = `month${index}`;
						}
						if (this.mode == "page") {
							this.swiperCurrentIndex = index;
							this.subtitle = this.formatMonthTitle(this.swiperGetSubtitle(index));
							this.swiperGetSubtitle(index)
							if (index == 0) {
								this.swiperLeftIConDisabled = true;
							} else {
								this.swiperLeftIConDisabled = false;
							}
							if (index == months.length - 1) {
								this.swiperRightIConDisabled = true;
							} else {
								this.swiperRightIConDisabled = false;
							}
						}

						return true;
					}
					return false;
				});
				// });
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
			},
			formatMonthTitle(date) {
				if (!(date instanceof Date)) {
					date = new Date(date);
				}
				return `${date.getFullYear()}年${date.getMonth() + 1}月`;
			},
			copyDates(dates) {
				if (Array.isArray(dates)) {
					return dates.map((date) => {
						if (date === null) {
							return date;
						}
						return new Date(date);
					});
				}
				return new Date(dates);
			},
			onOpen() {
				this.$emit('open');
			},
			onOpened() {
				this.$emit('opened');
			},
			onClose() {
				this.$emit('close');
			},
			onClosed() {
				this.$emit('closed');
			},
			onClickDay(event) {
				if (this.readonly) {
					return;
				}
				const {
					date
				} = event;
				const {
					type,
					currentDate,
					allowSameDay
				} = this;
				if (type === 'range') {
					const [startDay, endDay] = currentDate;
					if (startDay && !endDay) {
						const compareToStart = this.compareDay(date, startDay);
						if (compareToStart === 1) {
							this.select([startDay, date], true);
						} else if (compareToStart === -1) {
							this.select([date, null]);
						} else if (allowSameDay) {
							this.select([date, date]);
						}
					} else {
						this.select([date, null]);
					}
				} else if (type === 'multiple') {
					let selectedIndex;
					const selected = currentDate.some((dateItem, index) => {
						const equal = this.compareDay(dateItem, date) === 0;
						if (equal) {
							selectedIndex = index;
						}
						return equal;
					});
					if (selected) {
						const cancelDate = currentDate.splice(selectedIndex, 1);
						this.currentDate = currentDate;
						this.unselect(cancelDate);
					} else {
						this.select([...currentDate, date]);
					}
				} else {
					this.select(date, true);
				}
			},
			unselect(dateArray) {
				const date = dateArray[0];
				if (date) {
					this.$emit('unselect', this.copyDates(date));
				}
			},
			select(date, complete) {
				if (complete && this.type === 'range') {
					const valid = this.checkRange(date);
					if (!valid) {
						if (this.showConfirm) {
							this.emit([
								date[0],
								this.getDayByOffset(date[0], this.maxRange - 1),
							]);
						} else {
							this.emit(date);
						}
						return;
					}
				}
				this.emit(date);
				if (complete && !this.showConfirm) {
					this.onConfirm();
				}
			},
			emit(date) {
				const getTime = (date) => date instanceof Date ? date.getTime() : date;
				this.currentDate = Array.isArray(date) ? date.map(getTime) : getTime(date);
				this.$emit('select', this.copyDates(date));
			},
			calcDateNum(date) {
				const day1 = new Date(date[0]).getTime();
				const day2 = new Date(date[1]).getTime();
				return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
			},
			checkRange(date) {
				const {
					maxRange,
					rangePrompt,
					showRangePrompt
				} = this;
				if (maxRange && this.calcDateNum(date) > maxRange) {
					if (showRangePrompt) {
						uni.$toast(rangePrompt || `选择天数不能超过 ${maxRange} 天`)
					}
					this.$emit('over-range');
					return false;
				}
				return true;
			},
			onConfirm() {
				if (this.type === 'range' &&
					!this.checkRange(this.currentDate)) {
					return;
				}
				this.$nextTick(() => {
					this.$emit('confirm', this.copyDates(this.currentDate));
				});
			},
			onClickSubtitle(event) {
				this.showDatetimePicker = true;
			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../static/css/var.scss';

	.zebra-calendar {
		background-color: $calendar-background-color;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.zebra-calendar__swiper {
		height: 100%;
	}

	.zebra-calendar__swiper-item {
		display: flex;
		align-items: center;
	}

	.zebra-calendar__close-icon {
		top: 22rpx
	}

	// .z-calendar ::v-deep .zebra-calendar__popup--bottom {
	// 	height: $calendar-popup-height
	// }

	// .z-calendar ::v-deep .zebra-calendar__popup--right {
	// 	height: $calendar-popup-height
	// }

	// .z-calendar ::v-deep .zebra-calendar__popup--top {
	// 	height: $calendar-popup-height
	// }

	.zebra-calendar__popup--left,
	.zebra-calendar__popup--right {
		height: 100%
	}

	.zebra-calendar__body {
		-webkit-overflow-scrolling: touch;
		flex: 1;
		overflow: auto
	}

	.zebra-calendar__footer {
		flex-shrink: 0;
		padding: 0 $padding-md
	}

	.zebra-calendar__footer--safe-area-inset-bottom {
		padding-bottom: env(safe-area-inset-bottom)
	}

	.zebra-calendar__footer+.zebra-calendar__footer,
	.zebra-calendar__footer:empty {
		display: none
	}

	.zebra-calendar__footer:empty+.zebra-calendar__footer {
		display: block !important
	}

	.z-calendar ::v-deep .zebra-calendar__confirm {
		height: $calendar-confirm-button-height !important;
		line-height: 68rpx !important;
		margin: $calendar-confirm-button-margin !important
	}
</style>
