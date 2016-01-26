/**
 * @author boxizen
 * @since  2016/01/26
 * @description 工具条组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./toolbar.scss");
		var tpl = require('./toolbar.tpl');
		document.getElementById(dom).innerHTML = tpl();
	}	
}