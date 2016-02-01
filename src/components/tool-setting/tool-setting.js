/**
 * @author boxizen
 * @since  2016/01/26
 * @description 设置工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(menu, panel) {
		var tpl = require('./tool-setting-menu.tpl');
		$(menu).append(tpl());
	}	
}