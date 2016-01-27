/**
 * @author boxizen
 * @since  2016/01/27
 * @description 保存菜单组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./menu-save.tpl');
		$(dom).append(tpl());
	}	
}