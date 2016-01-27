/**
 * @author boxizen
 * @since  2016/01/27
 * @description 添加幻灯片菜单组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		require("!style!css!sass!./menu-add.scss");
		var tpl = require('./menu-add.tpl');
		$(dom).append(tpl());
	}	
}