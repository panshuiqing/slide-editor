/**
 * @author boxizen
 * @since  2016/01/27
 * @description 观看菜单组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./menu-play.tpl');
		$(dom).append(tpl());
	}	
}