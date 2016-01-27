/**
 * @author boxizen
 * @since  2016/01/26
 * @description iframe工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./tool-iframe.tpl');
		$(dom).append(tpl());
	}	
}