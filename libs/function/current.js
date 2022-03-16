function getCurrentPage() {
	const pages = getCurrentPages();
	// #ifdef MP-WEIXIN
	return pages[pages.length - 1].$vm
	// #endif
	// #ifndef MP-WEIXIN
	return pages[pages.length - 1];
	// #endif
}

export default getCurrentPage;
