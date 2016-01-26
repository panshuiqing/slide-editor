/**
 * @author boxizen
 * @since  2016/01/26
 * @description 设置工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./tool-setting.scss");
		var tpl = require('./tool-setting.tpl');
		$(dom).append(tpl());
	}	
}