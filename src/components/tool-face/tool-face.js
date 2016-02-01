/**
 * @author boxizen
 * @since  2016/01/29
 * @description 表情工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(menu, panel) {
		var tpl = require('./tool-face-menu.tpl');
		$(menu).append(tpl());
	}	
}