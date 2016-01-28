/**
 * @author boxizen
 * @since  2016/01/29
 * @description 表情工具
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		var tpl = require('./tool-face.tpl');
		$(dom).append(tpl());
	}	
}