/**
 * @author boxizen
 * @since  2016/01/27
 * @description 折叠菜单组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./menu-collapse.tpl');
		$(dom).append(tpl());
	}	
}