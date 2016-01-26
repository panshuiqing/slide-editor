/**
 * @author boxizen
 * @since  2016/01/26
 * @description 设置组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./setting.scss");
		var tpl = require('./setting.tpl');
		//document.getElementById(dom).innerHTML = tpl();
		$(dom).append(tpl());
	}	
}