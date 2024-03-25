function isObj(x) {
	const type = typeof x;
	return x !== null && (type === 'object' || type === 'function');
}
const defaultOptions = {
	type: 'text',
	mask: false,
	message: '',
	show: true,
	zIndex: 1000,
	duration: 1000,
	position: 'middle',
	forbidClick: false,
	loadingType: 'circular',
	iconSize: '72rpx',
	icon: '',
	loadingTemplate: ''
};
let queue = [];
let currentOptions = Object.assign({}, defaultOptions);

function parseOptions(message) {
	return isObj(message) ? message : {
		message
	};
}

function getContext() {
	const pages = getCurrentPages();
	return pages[pages.length - 1];
}

function Toast(toastOptions) {
	const options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
	const context = options.context || getContext();
	// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY
	const toast = context.$vm.$refs.zToast;
	// #endif
	// #ifndef MP-WEIXIN || MP-TOUTIAO || MP-ALIPAY
	const toast = context.$refs.zToast;
	// #endif
	if (!toast) {
		console.warn('未找到 z-toast 节点，请确认节点声明了ref');
		return;
	}
	delete options.context;
	toast.clear = () => {
		toast.show = false;
		if (options.onClose) {
			options.onClose();
		}
	};
	queue.push(toast);
	toast.show = options.show;
	toast.options = options;
	clearTimeout(toast.timer);
	if (options.duration != null && options.duration > 0) {
		toast.timer = setTimeout(() => {
			toast.clear();
			queue = queue.filter((item) => item !== toast);
		}, options.duration);
	}
	return toast;
}
const createMethod = (type) => (options) => Toast(Object.assign({
	type
}, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
	queue.forEach((toast) => {
		toast.clear();
	});
	queue = [];
};
Toast.setDefaultOptions = (options) => {
	Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
	currentOptions = Object.assign({}, defaultOptions);
};
export default Toast;
