import Toast from "./components/z-toast/Toast.js";
import Dialog from "./components/z-dialog/Dialog.js";
// 生成全局唯一guid字符串
import guid from './libs/function/guid.js'
import GetCurrentPage from "./libs/function/current.js";
import nextTick from './libs/function/nextTick.js';
import {
	zCopy
} from "./libs/utils/copy.js"

const $z = {
	guid
}

uni.$toast = Toast;
uni.$dialog = Dialog;
// $u挂载到uni对象上
uni.$z = $z
uni.$zCopy = zCopy;
const install = Vue => {
	Vue.prototype.$toast = Toast;
	Vue.prototype.$dialog = Dialog;
	Vue.prototype.$getCurrentPage = GetCurrentPage;
	Vue.prototype.$z = $z;
	Vue.prototype.$nextTickAll = function(fn) {
		return nextTick(fn, this)
	};
}

export default {
	install
}
