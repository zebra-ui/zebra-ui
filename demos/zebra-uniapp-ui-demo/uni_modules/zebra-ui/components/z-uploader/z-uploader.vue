<template>
	<view class="zebra-uploader">
		<view class="zebra-uploader__wrapper">
			<!-- 预览样式 -->
			<view v-if="previewImage" v-for="(item,index) in lists" :key="index" class="zebra-uploader__preview"
				:data-index="index" @click="onClickPreview">
				<image v-if="item.isImage" :mode="imageFit" :src="item.thumb || item.url"
					:alt="item.name || ('图片' + index)" class="zebra-uploader__preview-image"
					:style="[sizeStyle({ previewSize })]" :data-index="index" @click="onPreviewImage" />
				<video v-else-if="item.isVideo" :src="item.url" :title="item.name || ('视频' + index)"
					:poster="item.thumb" :autoplay="item.autoplay" class="zebra-uploader__preview-image"
					:style="[sizeStyle({ previewSize })]" :data-index="index" @click="onPreviewVideo">
				</video>
				<view v-else class="zebra-uploader__file" :style="[sizeStyle({ previewSize })]" :data-index="index"
					@click="onPreviewFile">
					<z-icon name="description" class="zebra-uploader__file-icon" />
					<view class="zebra-uploader__file-name zebra-ellipsis">{{ item.name || item.url }}</view>
				</view>
				<view v-if="item.status === 'uploading' || item.status === 'failed'" class="zebra-uploader__mask">
					<view v-if="item.status === 'failed'" class="zebra-uploader__mask-icon">
						<z-icon name="close_big" />
					</view>
					<view v-else class="zebra-uploader__loading">
						<z-loading />
					</view>
					<text v-if="item.message" class="zebra-uploader__mask-message">{{ item.message }}</text>
				</view>
				<view v-if="deletable && item.deletable" class="zebra-uploader__preview-delete"
					@click.stop="onDelete(item,index)">
					<view class="zebra-uploader__preview-delete-icon">
						<z-icon name="close_big" />
					</view>
				</view>
			</view>

			<!-- 上传样式 -->
			<template v-if="isInCount">
				<view class="zebra-uploader__slot" @click="startUpload">
					<slot />
				</view>

				<!-- 默认上传样式 -->
				<view v-if="showUpload"
					:class="['zebra-uploader__upload',disabled ? 'zebra-uploader__upload--disabled': '']"
					:style="[sizeStyle({ previewSize })]" @click="startUpload">
					<view class="zebra-uploader__upload-icon">
						<z-icon :name="uploadIcon" />
					</view>
					<text v-if="uploadText" class="zebra-uploader__upload-text">{{ uploadText }}</text>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import bem from '../../static/utils/bem.js';
	import addUnit from '../../static/utils/add-unit.js';
	import {
		isImageFile,
		chooseFile,
		isVideoFile
	} from '../../libs/utils/utils.js';
	import {
		isBoolean,
		isPromise
	} from '../../libs/utils/validator.js';
	import {
		ChildrenMixin
	} from '../../libs/mixins/relation.js';
	export default {
		name: "z-uploader",
		mixins: [ChildrenMixin('zField')],
		props: {
			value: {
				type: Array,
				default: function() {
					return []
				},
				// observer: 'formatFileList',
			},
			disabled: Boolean,
			multiple: Boolean,
			uploadText: String,
			previewSize: {
				type: null,
				default: 160,
			},
			name: {
				type: null,
				default: '',
			},
			accept: {
				type: String,
				default: 'image',
			},
			maxSize: {
				type: Number,
				default: Number.MAX_VALUE,
			},
			maxCount: {
				type: Number,
				default: 100,
			},
			deletable: {
				type: Boolean,
				default: true,
			},
			showUpload: {
				type: Boolean,
				default: true,
			},
			previewImage: {
				type: Boolean,
				default: true,
			},
			previewFullImage: {
				type: Boolean,
				default: true,
			},
			imageFit: {
				type: String,
				default: 'scaleToFill',
			},
			uploadIcon: {
				type: String,
				default: 'image_alt',
			},
			sizeType: {
				type: Array,
				default: function() {
					return ['original', 'compressed']
				},
			},
			capture: {
				type: Array,
				default: function() {
					return ['album', 'camera']
				},
			},
			capture: {
				type: Array,
				default: function() {
					return ['album', 'camera']
				},
			},
			compressed: {
				type: Boolean,
				default: true,
			},
			maxDuration: {
				type: Number,
				default: 60,
			},
			camera: {
				type: String,
				default: 'back',
			},
		},
		data() {
			return {
				fileList: [],
				lists: [],
				isInCount: true,
				afterRead: null,
				beforeRead: null,
				beforeDelete: null
			}
		},
		watch: {
			value: {
				handler(val) {
					this.fileList = val;
					this.formatFileList();
				},
				deep: true
			}
		},
		mounted() {
			this.fileList = this.value;
			this.formatFileList();
		},
		methods: {
			setBeforeRead(methodValue) {
				this.beforeRead = methodValue;
			},
			setAfterRead(methodValue) {
				this.afterRead = methodValue;
			},
			setBeforeDelete(methodValue) {
				this.beforeDelete = methodValue;
			},
			bemMethods(name, conf) {
				return bem(name, conf);
			},
			sizeStyle(data) {
				return {
					width: addUnit(data.previewSize),
					height: addUnit(data.previewSize),
				};
			},
			formatFileList() {
				const {
					fileList = [], maxCount
				} = this;
				const lists = fileList.map((item) => (Object.assign(Object.assign({}, item), {
					isImage: isImageFile(item),
					isVideo: isVideoFile(item),
					deletable: isBoolean(item.deletable) ? item.deletable : true
				})));
				this.lists = lists;
				this.isInCount = lists.length < maxCount;
			},
			getDetail(index) {
				return {
					name: this.name,
					index: index == null ? this.fileList.length : index,
				};
			},
			startUpload() {
				const {
					maxCount,
					multiple,
					lists,
					disabled
				} = this;
				if (disabled) {
					return;
				}

				chooseFile(Object.assign(Object.assign({}, {
						accept: this.accept,
						multiple: this.multiple,
						capture: this.capture,
						compressed: this.compressed,
						maxDuration: this.maxDuration,
						sizeType: this.sizeType,
						camera: this.camera,
						maxCount: this.maxCount
					}), {
						maxCount: maxCount - lists.length
					}))
					.then((res) => {
						this.onBeforeRead(multiple ? res : res[0]);
					})
					.catch((error) => {
						this.$emit('error', error);
					});
			},
			onBeforeRead(file) {
				const {
					beforeRead
				} = this;
				if (this.beforeRead) {
					const response = this.beforeRead(file, this.getDetail());

					if (!response) {
						return;
					}

					if (isPromise(response)) {
						response
							.then((data) => {
								if (data) {
									this.onAfterRead(data);
								} else {
									this.onAfterRead(file);
								}
							})
							.catch();

						return;
					}
				}
				this.onAfterRead(file);
			},
			async onAfterRead(file) {
				const {
					maxSize,
					afterRead
				} = this;
				if (Array.isArray(file)) {
					for (let i = 0; i < file.length; i++) {
						let result = await uni.getFileInfo({
							filePath: file[i].url
						});
						file[i].size = result[1].size;
					}
				} else {
					let result = await uni.getFileInfo({
						filePath: file.url
					});
					file.size = result[1].size;
				}
				const oversize = Array.isArray(file) ?
					file.some((item) => item.size > maxSize) :
					file.size > maxSize;
				if (oversize) {
					this.$emit('oversize', Object.assign({
						file
					}, this.getDetail()));
					return;
				}
				if (typeof afterRead === 'function') {
					afterRead(file, this.getDetail());
				}
				this.$emit('input', [...this.fileList, ...this.toArray(file)]);
			},
			toArray(item) {
				if (Array.isArray(item)) {
					return item;
				}
				return [item];
			},
			// 删除图片
			onDelete(file, index) {
				const beforeDelete = file.beforeDelete ? file.beforeDelete : this.beforeDelete;
				if (beforeDelete) {
					const response = beforeDelete(file, this.getDetail(index));

					if (!response) {
						return;
					}

					if (isPromise(response)) {
						response
							.then(() => {
								this.deleteFile(file, index);
							})
							.catch((error) => {
								console.error(error)
							});
						return;
					}
				}
				this.deleteFile(file, index);
			},
			deleteFile(file, index) {
				const fileList = this.fileList.slice(0);
				fileList.splice(index, 1);

				this.$emit('input', fileList);
				this.$emit('delete', file, this.getDetail(index));
			},
			onPreviewImage(event) {
				if (!this.previewFullImage)
					return;
				const {
					index
				} = event.currentTarget.dataset;
				const {
					lists
				} = this;
				const item = lists[index];
				uni.previewImage({
					urls: lists.filter((item) => isImageFile(item)).map((item) => item.url),
					current: item.url,
					fail() {
						uni.showToast({
							title: '预览图片失败',
							icon: 'none'
						});
					},
				});
			},
			onPreviewVideo(event) {
				if (!this.data.previewFullImage)
					return;
				const {
					index
				} = event.currentTarget.dataset;
				const {
					lists
				} = this.data;
				uni.previewMedia({
					sources: lists
						.filter((item) => isVideoFile(item))
						.map((item) => (Object.assign(Object.assign({}, item), {
							type: 'video'
						}))),
					current: index,
					fail() {
						wx.showToast({
							title: '预览视频失败',
							icon: 'none'
						});
					},
				});
			},
			onPreviewFile(event) {
				const {
					index
				} = event.currentTarget.dataset;
				wx.openDocument({
					filePath: this.data.lists[index].url,
					showMenu: true,
				});
			},
			onClickPreview(event) {
				const {
					index
				} = event.currentTarget.dataset;
				const item = this.lists[index];
				this.$emit('click-preview', Object.assign(Object.assign({}, item), this.getDetail(index)));
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/var";

	.zebra-uploader {
		display: inline-block;
		position: relative;

		&__wrapper {
			display: flex;
			flex-wrap: wrap
		}

		&__slot:empty {
			display: none
		}

		&__slot:not(:empty)+&__upload {
			display: none !important
		}

		&__upload {
			align-items: center;
			background-color: var(--uploader-upload-background-color, #f7f8fa);
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			height: var(--uploader-size, 80px);
			justify-content: center;
			margin: 0 8px 8px 0;
			position: relative;
			width: var(--uploader-size, 80px)
		}

		&__upload:active {
			background-color: var(--uploader-upload-active-color, #f2f3f5)
		}

		&__upload-icon {
			color: var(--uploader-icon-color, #dcdee0);
			font-size: var(--uploader-icon-size, 24px)
		}

		&__upload-text {
			color: var(--uploader-text-color, #969799);
			font-size: var(--uploader-text-font-size, 12px);
			margin-top: var(--padding-xs, 8px)
		}

		&__upload--disabled {
			opacity: var(--uploader-disabled-opacity, .5)
		}

		&__preview {
			cursor: pointer;
			margin: 0 8px 8px 0;
			position: relative
		}

		&__preview-image {
			display: block;
			height: var(--uploader-size, 80px);
			overflow: hidden;
			width: var(--uploader-size, 80px)
		}

		&__preview-delete,
		&__preview-delete:after {
			height: var(--uploader-delete-icon-size, 14px);
			position: absolute;
			right: 0;
			top: 0;
			width: var(--uploader-delete-icon-size, 14px)
		}

		&__preview-delete:after {
			background-color: var(--uploader-delete-background-color, rgba(0, 0, 0, .7));
			border-radius: 0 0 0 12px;
			content: ""
		}

		&__preview-delete-icon {
			color: var(--uploader-delete-color, #fff);
			font-size: var(--uploader-delete-icon-size, 14px);
			position: absolute;
			right: 0;
			top: 0;
			transform: scale(.7) translate(10%, -10%);
			z-index: 1
		}

		&__file {
			align-items: center;
			background-color: var(--uploader-file-background-color, #f7f8fa);
			display: flex;
			flex-direction: column;
			height: var(--uploader-size, 80px);
			justify-content: center;
			width: var(--uploader-size, 80px)
		}

		&__file-icon {
			color: var(--uploader-file-icon-color, #646566);
			font-size: var(--uploader-file-icon-size, 20px)
		}

		&__file-name {
			box-sizing: border-box;
			color: var(--uploader-file-name-text-color, #646566);
			font-size: var(--uploader-file-name-font-size, 12px);
			margin-top: var(--uploader-file-name-margin-top, 8px);
			padding: var(--uploader-file-name-padding, 0 4px);
			text-align: center;
			width: 100%
		}

		&__mask {
			align-items: center;
			background-color: var(--uploader-mask-background-color, rgba(50, 50, 51, .88));
			bottom: 0;
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			left: 0;
			position: absolute;
			right: 0;
			top: 0
		}

		&__mask-icon {
			font-size: var(--uploader-mask-icon-size, 22px)
		}

		&__mask-message {
			font-size: var(--uploader-mask-message-font-size, 12px);
			line-height: var(--uploader-mask-message-line-height, 14px);
			margin-top: 6px;
			padding: 0 var(--padding-base, 4px)
		}

		&__loading {
			color: var(--uploader-loading-icon-color, #fff) !important;
			height: var(--uploader-loading-icon-size, 22px);
			width: var(--uploader-loading-icon-size, 22px)
		}
	}
</style>
