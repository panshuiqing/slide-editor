/**
 * @author boxizen
 * @since  2016/01/26
 * @description 代码工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./tool-code.tpl');
		$(dom).append(tpl());
	}	
}