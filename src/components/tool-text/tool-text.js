/**
 * @author boxizen
 * @since  2016/01/26
 * @description 文本工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./tool-text.scss");
		var tpl = require('./tool-text.tpl');
		$(dom).append(tpl());
	}	
}