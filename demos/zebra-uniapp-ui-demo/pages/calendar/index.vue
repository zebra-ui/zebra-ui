<template>
	<view>
		<demo-block title="基础用法">
			<z-cell is-link title="选择单个日期" :value="formatFullDate(date.selectSingle)"
				@click="show('single','selectSingle')" />

			<z-cell is-link title="选择单个日期(横向)" :value="formatFullDate(date.selectSingle)"
				@click="show('single','selectSingle1')" />

			<z-cell is-link title="选择多个日期" :value="formatMultiple(date.selectMultiple)"
				@click="show('multiple','selectMultiple')" />

			<z-cell is-link title="选择多个日期(横向)" :value="formatFullDate(date.selectSingle)"
				@click="show('multiple','selectMultiple1')" />

			<z-cell is-link title="选择日期区间" :value="formatRange(date.selectRange)"
				@click="show('range','selectRange')" />

			<z-cell is-link title="选择日期区间(横向)" :value="formatFullDate(date.selectSingle)"
				@click="show('range','selectRange1')" />
		</demo-block>

		<demo-block title="快捷选择">
			<z-cell is-link title="选择单个日期" :value="formatFullDate(date.quickSelect1)"
				@click="show('single','quickSelect1')" />

			<z-cell is-link title="选择日期区间" :value="formatRange(date.quickSelect2)"
				@click="show('range','quickSelect2')" />
		</demo-block>

		<demo-block title="自定义日历">
			<z-cell is-link title="自定义颜色" :value="formatRange(date.customColor)" @click="show('range','customColor')" />

			<z-cell is-link title="自定义日期范围" :value="formatFullDate(date.customRange)"
				@click="show('single','customRange')" />

			<z-cell is-link title="自定义按钮文字" :value="formatRange(date.customConfirm)"
				@click="show('range','customConfirm')" />

			<z-cell is-link title="自定义日期文案" :value="formatRange(dateCustom)" @click="showCustom()" />

			<z-cell is-link title="自定义弹出位置" :value="formatFullDate(date.customPosition)"
				@click="show('single','customPosition')" />

			<z-cell is-link title="日期区间最大范围" :value="formatRange(date.maxRange)" @click="show('range','maxRange')" />
		</demo-block>

		<demo-block title="平铺展示">
			<z-calendar title="日历" :poppable="false" height="1000rpx" :show-confirm="false" :min-date="tiledMinDate"
				:max-date="tiledMaxDate" :first-day-of-week="firstDayOfWeek" class="tiled-calendar" />
		</demo-block>

		<demo-block title="平铺展示(横向)">
			<z-calendar title="日历" :poppable="false" mode="page" height="1000rpx" :show-confirm="false"
				:min-date="tiledMinDate" :max-date="tiledMaxDate" :first-day-of-week="firstDayOfWeek"
				class="tiled-calendar" />
		</demo-block>

		<!-- 自定义日期文案 -->
		<z-calendar :show="showCalendarCustom" :formatter="formatterCustom" formatterString="formatterCustom"
			type="range" @close="onCloseCustom" @confirm="onConfirmCustom" />

		<z-calendar :show="showCalendar" :type="type" :mode="mode" :default-date="defaultDate" :color="color"
			:round="round" :position="position" :min-date="minDate" :max-date="maxDate" :max-range="maxRange"
			:formatter="formatter" formatterString="formatter" :show-confirm="showConfirm" :confirm-text="confirmText"
			:confirm-disabled-text="confirmDisabledText" :first-day-of-week="firstDayOfWeek" @confirm="onConfirm"
			@select="onSelect" @unselect="onUnselect" @open="onOpen" @opened="onOpened" @close="onClose"
			@closed="onClosed">
		</z-calendar>
	</view>
</template>

<script>
	import DemoBlock from '../../components/DemoBlock/DemoBlock.vue';
	export default {
		components: {
			DemoBlock
		},
		data() {
			return {
				id: "",
				date: {
					maxRange: [],
					selectSingle: null,
					selectRange: [],
					selectMultiple: [],
					quickSelect1: null,
					quickSelect2: [],
					customColor: [],
					customConfirm: [],
					customRange: null,
					customDayText: [],
					customPosition: null,
				},
				defaultDate: "",
				mode: "scroll",
				dateCustom: "",
				type: 'single',
				round: true,
				color: undefined,
				minDate: Date.now(),
				maxDate: new Date(
					new Date().getFullYear(),
					new Date().getMonth() + 6,
					new Date().getDate()
				).getTime(),
				maxRange: undefined,
				position: undefined,
				formatter: null,
				formatterCustom: function dayFormatter(day) {
					const month = day.date.getMonth() + 1;
					const date = day.date.getDate();

					if (month === 10) {
						if (date === 1) {
							day.topInfo = '国庆节';
						} else if (date === 14) {
							day.topInfo = '重阳节';
						} else if (date === 20) {
							day.text = '今天';
						}
					}

					if (day.type === 'start') {
						day.bottomInfo = '入店';
					} else if (day.type === 'end') {
						day.bottomInfo = '离店';
					}

					return day;
				},
				showConfirm: false,
				showCalendar: false,
				showCalendarCustom: false,
				tiledMinDate: new Date(2012, 0, 10).getTime(),
				tiledMaxDate: new Date(2012, 2, 20).getTime(),
				confirmText: undefined,
				confirmDisabledText: undefined,
				firstDayOfWeek: 0,
			}
		},
		methods: {
			onConfirm(event) {
				this.showCalendar = false;
				this.date[this.id] = Array.isArray(event) ?
					event.map((date) => date.valueOf()) : event.valueOf()
			},
			onConfirmCustom(event) {
				this.showCalendarCustom = false;
				this.dateCustom = Array.isArray(event) ?
					event.map((date) => date.valueOf()) : event.valueOf()
			},
			onSelect(event) {},

			onUnselect(event) {},

			onClose() {
				this.showCalendar = false;
			},
			onCloseCustom() {
				this.showCalendarCustom = false;
			},
			onOpen() {},

			onOpened() {},

			onClosed() {},

			resetSettings() {
				this.round = true;
				this.color = null;
				this.minDate = Date.now();
				this.maxDate = new Date(
					new Date().getFullYear(),
					new Date().getMonth() + 6,
					new Date().getDate()
				).getTime();
				this.maxRange = null;
				this.position = 'bottom';
				this.formatter = null;
				this.showConfirm = true;
				this.confirmText = '确定';
				this.confirmDisabledText = '确定';
			},

			show(type, id) {
				this.resetSettings();
				const data = {
					id,
					type,
					showCalendar: true,
				};
				this.mode = "scroll";
				this.defaultDate = ""
				switch (id) {
					case 'quickSelect1':
					case 'quickSelect2':
						this.showConfirm = false;
						break;
					case 'customColor':
						this.color = '#07c160';
						break;
					case 'customConfirm':
						this.confirmText = '完成';
						this.confirmDisabledText = '请选择结束时间';
						break;
					case 'customRange':
						this.minDate = new Date(2010, 0, 1).getTime();
						this.maxDate = new Date(2011, 0, 31).getTime();
						this.defaultDate = new Date(2010, 5, 20).getTime()
						break;
					case 'customDayText':
						this.minDate = new Date(2010, 4, 1).getTime();
						this.maxDate = new Date(2010, 4, 31).getTime();
						break;
					case 'customPosition':
						this.round = false;
						this.position = 'right';
						break;
					case 'maxRange':
						this.maxRange = 3;
						break;
					case 'selectSingle1':
						this.mode = "page";
						this.defaultDate = new Date(2021, 10, 20).getTime()
						break;
					case 'selectMultiple1':
						this.mode = "page";
						break;
					case 'selectRange1':
						this.mode = "page";
						break;

				}
				this.id = data.id;
				this.showCalendar = data.showCalendar;
				this.type = data.type;
			},
			showCustom() {
				this.showCalendarCustom = true;
			},
			formatFullDate(date) {
				if (date) {
					date = new Date(date);
					return date.getFullYear() + '/' + this.formatDate(date);
				}
			},
			formatRange(dateRange) {
				if (dateRange.length) {
					return this.formatDate(dateRange[0]) + ' - ' + this.formatDate(dateRange[1]);
				}
			},
			formatMultiple(dates) {
				if (dates.length) {
					return '选择了 ' + dates.length + '个日期';
				}
			},
			formatDate(date) {
				if (date) {
					date = new Date(date);
					return date.getMonth() + 1 + '/' + date.getDate();
				}
			}
		}
	}
</script>

<style>

</style>
