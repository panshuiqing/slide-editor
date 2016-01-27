/**
 * @author boxizen
 * @since  2016/01/26
 * @description 设置工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./tool-setting.tpl');
		$(dom).append(tpl());
	}	
}