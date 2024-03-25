// 部分小程序不支持nextTick，所以在这里做统一处理
function nextTick(cb, vm) {
	// #ifdef H5
	vm.$nextTick(cb);
	// #endif
	
	// #ifdef MP
	if (uni.canIUse('nextTick')) {
		vm.$nextTick(cb);
	} else {
		setTimeout(() => {
			cb();
		}, 1000 / 30);
	}
	// #endif
}

export default nextTick;
