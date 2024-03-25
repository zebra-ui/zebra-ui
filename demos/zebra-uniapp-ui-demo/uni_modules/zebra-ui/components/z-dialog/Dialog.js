let queue = [];
const defaultOptions = {
	show: false,
	title: '',
	width: null,
	theme: 'default',
	message: '',
	zIndex: 100,
	overlay: true,
	selector: '#van-dialog',
	className: '',
	asyncClose: false,
	beforeClose: null,
	transition: 'scale',
	customStyle: '',
	messageAlign: '',
	overlayStyle: '',
	confirmButtonText: '确认',
	cancelButtonText: '取消',
	showConfirmButton: true,
	showCancelButton: false,
	closeOnClickOverlay: false,
	confirmButtonOpenType: '',
};
let currentOptions = Object.assign({}, defaultOptions);

function getContext() {
	const pages = getCurrentPages();
	return pages[pages.length - 1];
}
const Dialog = (options) => {
	options = Object.assign(Object.assign({}, currentOptions), options);
	return new Promise((resolve, reject) => {
		const context = options.context || getContext();
		// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY
		const dialog = context.$vm.$refs.zDialog;
		// #endif
		// #ifndef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY
		const dialog = context.$refs.zDialog;
		// #endif
		if (!dialog) {
			console.warn('未找到 z-dialog 节点，请确认节点声明了ref');
			return;
		}
		delete options.context;
		let newOptions = Object.assign({
			callback: (action, instance) => {
				action === 'confirm' ? resolve(instance) : reject(instance);
			}
		}, options);
		Object.keys(newOptions).forEach(key => {
			dialog[key] = newOptions[key];
		}); // [a,b]
		dialog.$nextTickAll(() => {
			dialog.show = true;
		});
		queue.push(dialog);
	});
};
Dialog.alert = (options) => Dialog(options);
Dialog.confirm = (options) => Dialog(Object.assign({
	showCancelButton: true
}, options));
Dialog.close = () => {
	queue.forEach((dialog) => {
		dialog.close();
	});
	queue = [];
};
Dialog.stopLoading = () => {
	queue.forEach((dialog) => {
		dialog.stopLoading();
	});
};
Dialog.currentOptions = currentOptions;
Dialog.defaultOptions = defaultOptions;
Dialog.setDefaultOptions = (options) => {
	currentOptions = Object.assign(Object.assign({}, currentOptions), options);
	Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions = () => {
	currentOptions = Object.assign({}, defaultOptions);
	Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions();
export default Dialog;
