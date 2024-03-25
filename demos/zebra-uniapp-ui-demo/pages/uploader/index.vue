<template>
	<view class="demo-uploader">
		<demo-block title="基础用法">
			<z-uploader name="1" v-model="fileList1" />
		</demo-block>
		<demo-block title="图片预览">
			<z-uploader name="2" v-model="fileList2" multiple />
		</demo-block>
		<demo-block title="上传状态">
			<z-uploader name="3" ref="uploadRef3" v-model="fileList3" />
		</demo-block>
		<demo-block title="限制上传数量">
			<z-uploader name="4" multiple :max-count="2" v-model="fileList4" />
		</demo-block>
		<demo-block title="限制上传大小">
			<z-uploader name="5" :max-size="5 * 1024" multiple @oversize="onOversize" v-model="fileList5" />
		</demo-block>
		<demo-block title="自定义上传样式">
			<z-uploader>
				<z-button icon="plus" type="primary">上传文件</z-button>
			</z-uploader>
		</demo-block>
		<demo-block title="禁用文件上传">
			<z-uploader disabled />
		</demo-block>
		<demo-block title="上传前校验">
			<z-uploader name="6" ref="uploadRef6" v-model="fileList6" />
		</demo-block>
		<z-toast ref="zToast"></z-toast>
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
				fileList1: [],
				fileList2: [{
					url: 'https://cdn.zebraui.com/zebra-ui/images/demo-images/test1.jpg'
				}, {
					url: 'https://cdn.zebraui.com/zebra-ui/images/demo-images/test2.jpg'
				}],
				fileList3: [{
					url: 'https://cdn.zebraui.com/zebra-ui/images/demo-images/test1.jpg',
					status: 'uploading',
					message: '上传中...',
				}, {
					url: 'https://cdn.zebraui.com/zebra-ui/images/demo-images/test2.jpg',
					status: 'failed',
					message: '上传失败',
				}],
				fileList4: [],
				fileList5: [],
				fileList6: []
			}
		},
		onReady() {
			this.$refs.uploadRef3.setAfterRead(this.afterReadFailed);
			this.$refs.uploadRef6.setBeforeRead(this.beforeRead);
		},
		methods: {
			afterReadFailed(item) {
				item.status = 'uploading';
				item.message = '上传中...';

				setTimeout(() => {
					item.status = 'failed';
					item.message = '上传失败';
				}, 1000);
			},
			afterRead(event) {},
			afterRead1(event) {
				event.file.status = 'uploading';
				event.file.message = '上传中...';
				this[`fileList${event.name}`].push(event.file)
				setTimeout(() => {
					this[`fileList${event.name}`][event.index].status = 'failed';
					this[`fileList${event.name}`][event.index].message = '上传失败';
					this.$forceUpdate();
				}, 2000)
			},
			onOversize(file) {
				this.$toast('文件大小不能超过 500kb');
			},
			beforeRead(file) {
				if (file.url.indexOf('jpg') < 0) {
					uni.$toast('请选择jpg图片上传');
					return false;
				}
				return true;
			},
		}
	}
</script>

<style scoped lang="scss">
	.demo-uploader {}
</style>
