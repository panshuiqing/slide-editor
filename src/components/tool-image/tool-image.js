/**
 * @author boxizen
 * @since  2016/01/26
 * @description 图片工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./tool-image.scss");
		var tpl = require('./tool-image.tpl');
		$(dom).append(tpl());
	}	
}