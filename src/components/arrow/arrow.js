/**
 * @author boxizen
 * @since  2016/01/27
 * @description 方向键
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./arrow.scss");
		var tpl = require('./arrow.tpl');
		$(dom).append(tpl());		
	}	
}