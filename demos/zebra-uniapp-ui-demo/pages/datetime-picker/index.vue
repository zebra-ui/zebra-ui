<template>
	<view>
		<demo-block :card="false" title="选择完整时间">
			<z-cell title="选择完整时间" is-link :value="value1" @click="showDatePicker1 = true" />
			<z-popup :show="showDatePicker1" round position="bottom" @close="showDatePicker1 = false">
				<z-datetime-picker type="datetime" :loading="loading" :value="currentDate1" :min-date="minDate"
					@input="onInput($event,'datetime')" @confirm="datePicker1Confirm"
					@cancel="showDatePicker1 = false" />
			</z-popup>
		</demo-block>

		<demo-block :card="false" title="选择日期（年月日）">
			<z-cell title="选择日期（年月日）" is-link :value="value2" @click="showDatePicker2 = true" />
			<z-popup :show="showDatePicker2" round position="bottom" @close="showDatePicker2 = false">
				<z-datetime-picker type="date" :value="currentDate2" :min-date="minDate" @input="onInput($event,'date')"
					:formatter="formatter" @confirm="datePicker2Confirm" @cancel="showDatePicker2 = false" />
			</z-popup>
		</demo-block>

		<demo-block :card="false" title="选择日期（年月）">
			<z-cell title="选择日期（年月）" is-link :value="value3" @click="showDatePicker3 = true" />
			<z-popup :show="showDatePicker3" round position="bottom" @close="showDatePicker3 = false">
				<z-datetime-picker type="year-month" :value="currentDate3" :min-date="minDate"
					@input="onInput($event,'year-month')" :formatter="formatter" @confirm="datePicker3Confirm"
					@cancel="showDatePicker3 = false" />
			</z-popup>

		</demo-block>

		<demo-block title="选择时间">
			<z-datetime-picker type="time" :value="currentDate4" :min-hour="minHour" :max-hour="maxHour"
				@input="onInput($event,'time')" />
		</demo-block>

		<demo-block title="选项过滤器">
			<z-datetime-picker type="time" :value="currentDate4" :filter="filter" />
		</demo-block>

		<!-- <van-toast id="van-toast" /> -->

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
				value1: "",
				showDatePicker1: false,
				value2: "",
				showDatePicker2: false,
				value3: "",
				showDatePicker3: false,
				minHour: 10,
				maxHour: 20,
				minDate: new Date(2018, 0, 1).getTime(),
				maxDate: new Date(2019, 10, 1).getTime(),
				currentDate1: new Date(2018, 2, 31).getTime(),
				currentDate2: null,
				currentDate3: new Date(2018, 0, 1),
				currentDate4: '12:00',
				loading: false,
				formatter: function formatter(type, value) {
					if (type === 'year') {
						return `${value}年`;
					}
					if (type === 'month') {
						return `${value}月`;
					}
					return value;
				},
				filter(type, options) {
					if (type === 'minute') {
						return options.filter(option => option % 5 === 0);
					}

					return options;
				}
			}
		},
		methods: {

			datePicker1Confirm(e) {
				this.value1 = e + "";
				this.showDatePicker1 = false;
			},
			datePicker2Confirm(e) {
				this.value2 = e + "";
				this.showDatePicker2 = false;
			},
			datePicker3Confirm(e) {
				this.value3 = e + "";
				this.showDatePicker3 = false;
			},
			onInput(event, type) {
				const result = this.getResult(event, type);
			},
			getResult(time, type) {
				const date = new Date(time);
				switch (type) {
					case 'datetime':
						return date.toLocaleString();
					case 'date':
						return date.toLocaleDateString();
					case 'year-month':
						return `${date.getFullYear()}/${date.getMonth() + 1}`;
					case 'time':
						return time;
					default:
						return '';
				}
			}
		}
	}
</script>

<style>

</style>
