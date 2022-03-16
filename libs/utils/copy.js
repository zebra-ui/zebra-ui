export function zCopy(content) {
	// #ifdef H5
	return new Promise(function(resolve, reject) {
		if (!document.queryCommandSupported('copy')) {
			uni.$toast.fail("浏览器不支持复制")
			return reject('浏览器不支持复制');
		}
		let textarea = document.createElement("textarea")
		textarea.value = content
		textarea.readOnly = "readOnly"
		document.body.appendChild(textarea)
		textarea.select()
		textarea.setSelectionRange(0, content.length)
		let result = document.execCommand("copy")
		textarea.remove()
		if (result) {
			uni.$toast.success("复制成功")
			return resolve(result);
		} else {
			uni.$toast.fail("复制失败")
			return reject('复制失败');
		}
	});
	// #endif

	// #ifndef H5
	return new Promise(function(resolve, reject) {
		uni.setClipboardData({
			data: content,
			success: function(res) {
				uni.hideToast()
				uni.$toast.success("复制成功")
				return resolve(res);
			},
			fail: function(error) {
				uni.hideToast()
				uni.$toast.fail("复制失败")
				return reject(error);
			}
		});
	});
	// #endif
}
