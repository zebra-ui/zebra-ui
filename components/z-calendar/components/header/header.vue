<template>
	<view class="zebra-calendar__header">
		<block v-if="showTitle">
			<!-- <view class="zebra-calendar__header-title">
				<slot name="title"></slot>
			</view> -->
			<view class="zebra-calendar__header-title">
				{{ title }}
			</view>
		</block>

		<view v-if="showSubtitle" class="zebra-calendar__header-subtitle" @click="onClickSubtitle">
			<view
				:class="['zebra-calendar__header-subtitle-left',swiperLeftIConDisabled?'zebra-calendar__subtitle-disabled':'']"
				v-if="mode == 'page'" @click.stop="leftClick">
				<z-icon name="chevron_big_left" />
			</view>
			{{ subtitle }}
			<view
				:class="['zebra-calendar__header-subtitle-right',swiperRightIConDisabled?'zebra-calendar__subtitle-disabled':'']"
				v-if="mode == 'page'" @click.stop="rightClick">
				<z-icon name="chevron_big_right" />
			</view>

		</view>

		<view class="zebra-calendar__weekdays">
			<view v-for="(item,index) in weekdays" :key="index" class="zebra-calendar__weekday">
				{{ item }}
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'z-calendar-header',
		props: {
			mode: {
				type: String,
				default: 'scroll',
			},
			title: {
				type: String,
				default: '日期选择',
			},
			subtitle: String,
			showTitle: Boolean,
			showSubtitle: Boolean,
			firstDayOfWeek: {
				type: Number
			},
			swiperLeftIConDisabled: Boolean,
			swiperRightIConDisabled: Boolean,
		},
		watch: {
			firstDayOfWeek: {
				immediate: true,
				handler: function() {
					this.initWeekDay();
				}
			},
			mode: {
				immediate: true,
				handler: function(val) {
				}
			},
		},
		data() {
			return {
				weekdays: [],
			}
		},
		created() {
			this.initWeekDay();
		},
		methods: {
			initWeekDay() {
				const defaultWeeks = ['日', '一', '二', '三', '四', '五', '六'];
				const firstDayOfWeek = this.firstDayOfWeek || 0;
				this.weekdays = [
					...defaultWeeks.slice(firstDayOfWeek, 7),
					...defaultWeeks.slice(0, firstDayOfWeek),
				];
			},
			onClickSubtitle(event) {
				if (this.mode == "page") {
					this.$emit('click-subtitle', event);
				}
			},
			leftClick() {
				if (!this.swiperLeftIConDisabled) {
					this.$emit('click-left');
				}

			},
			rightClick() {
				if (!this.swiperRightIConDisabled) {
					this.$emit('click-right');
				}

			},
		}
	}
</script>

<style scoped lang="scss">
	@import '../../../../static/css/var.scss';

	.zebra-calendar__header {
		box-shadow: $calendar-header-box-shadow;
		flex-shrink: 0
	}

	.zebra-calendar__header-subtitle,
	.zebra-calendar__header-title {
		font-weight: $font-weight-bold;
		height: $calendar-header-title-height;
		line-height: $calendar-header-title-height;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.zebra-calendar__header-subtitle-left {
		margin-right: 30rpx;
		font-size: 44rpx;
	}

	.zebra-calendar__header-subtitle-right {
		margin-left: 30rpx;
		font-size: 44rpx;
	}

	.zebra-calendar__subtitle-disabled {
		color: #c8c9cc;
		cursor: not-allowed;
	}

	.zebra-calendar__header-title+.zebra-calendar__header-title,
	.zebra-calendar__header-title:empty {
		display: none
	}

	.zebra-calendar__header-title:empty+.zebra-calendar__header-title {
		display: block !important
	}

	.zebra-calendar__weekdays {
		display: flex
	}

	.zebra-calendar__weekday {
		flex: 1;
		font-size: $calendar-weekdays-font-size;
		line-height: $calendar-weekdays-height;
		text-align: center
	}
</style>
