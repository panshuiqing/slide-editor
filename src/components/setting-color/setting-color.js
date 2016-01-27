/**
 * @author boxizen
 * @since  2016/01/27
 * @description 页面颜色组件
 */

module.exports = {          
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./setting-color.scss");
		var tpl = require('./setting-color.tpl');
		$(dom).append(tpl());		
	}	
}