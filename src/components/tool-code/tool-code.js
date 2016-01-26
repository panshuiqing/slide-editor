/**
 * @author boxizen
 * @since  2016/01/26
 * @description 代码工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./tool-code.scss");
		var tpl = require('./tool-code.tpl');
		$(dom).append(tpl());
	}	
}