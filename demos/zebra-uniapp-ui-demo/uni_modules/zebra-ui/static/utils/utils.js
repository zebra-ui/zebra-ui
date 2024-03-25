import {
	isPlainObject
} from "../../libs/utils/validator.js"

export function getAllRect(context, selector) {
	return new Promise((resolve) => {
		uni.createSelectorQuery()
			.in(context)
			.selectAll(selector)
			.boundingClientRect()
			.exec((rect = []) => resolve(rect[0]));
	});
}

export function getRect(context, selector) {
	return new Promise((resolve) => {
		uni.createSelectorQuery()
			.in(context)
			.select(selector)
			.boundingClientRect()
			.exec((rect = []) => resolve(rect[0]));
	});
}

export function requestAnimationFrame(cb) {
	const systemInfo = uni.getSystemInfoSync();
	if (systemInfo.platform === 'devtools') {
		return setTimeout(() => {
			cb();
		}, 1000 / 30);
	}
	return uni
		.createSelectorQuery()
		.selectViewport()
		.boundingClientRect()
		.exec(() => {
			cb();
		});
}

export function getParent(dom, name = undefined) {
	let parent = dom.$parent;
	// 通过while历遍，这里主要是为了H5需要多层解析的问题
	while (parent) {
		// 父组件
		if (parent.$options && parent.$options.name !== name) {
			// 如果组件的name不相等，继续上一级寻找
			parent = parent.$parent;
		} else {
			return parent;
		}
	}
	return false;
}

export function getChildren(child, name = undefined) {
	let arr = [];
	child.forEach(item => {
		const loop = data => {
			if (data.$options && data.$options.name == name) {
				arr.push(data);
				return arr;
			}
			let children = data.$children;
			if (children) {
				for (let i = 0; i < children.length; i++) {
					loop(children[i])
				}
			}
		}
		loop(item);
	})
	return arr;
}

// 样式转对象
export function styleToObj(style) {
	if (!style || style == '') {
		return
	}
	var Arr = style.split(';')
	Arr = Arr.filter(item => {
		return item != ''
	})
	let str = ''
	Arr.forEach(item => {
		let test = ''
		trim(item).split(':').forEach(item2 => {
			test += '"' + trim(item2) + '":'
		})
		str += test + ','
	})
	str = str.replace(/:,/g, ',')
	str = str.substring(0, str.lastIndexOf(','))
	str = '{' + str + '}'
	return JSON.parse(str)
}

// 样式转字符串
export function styleToString(style) {

	if (!style || style == '') {
		return ""
	}
	let str = '';
	Object.keys(style).forEach(key => {
		str += (key + ':' + style[key] + ';')
	});
	return str;
}

/**
 * 去掉字符串前后所有空格
 */
function trim(str, isglobal) {
	var result;
	result = str.replace(/(^\s+)|(\s+$)/g, '');
	if (isglobal && isglobal.toLowerCase() === 'g') {
		result = result.replace(/\s/g, '')
	}
	return result
}

export function pickExclude(obj, keys) {
	if (!isPlainObject(obj)) {
		return {};
	}
	return Object.keys(obj).reduce((prev, key) => {
		if (!keys.includes(key)) {
			prev[key] = obj[key];
		}
		return prev;
	}, {});
}
