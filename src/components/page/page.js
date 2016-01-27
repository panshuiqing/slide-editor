/**
 * @author boxizen
 * @since  2016/01/27
 * @description 页码组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./page.scss");
		var tpl = require('./page.tpl');
		$(dom).append(tpl());		
	}	
}