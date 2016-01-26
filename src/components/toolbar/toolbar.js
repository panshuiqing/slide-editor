/**
 * @author boxizen
 * @since  2016/01/26
 * @description 工具条组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./toolbar.scss");
		var tpl = require('./toolbar.tpl');
		$(dom).append(tpl());

		// 初始化设置组件
		var textCmp = require('../tool-setting/tool-setting.js');
		textCmp.init('.toolbar-list');

		// 初始化文本组件
		var textCmp = require('../tool-text/tool-text.js');
		textCmp.init('.toolbar-list');		

		// 初始化图片组件
		var textCmp = require('../tool-image/tool-image.js');
		textCmp.init('.toolbar-list');		

		// 初始化iframe组件
		var textCmp = require('../tool-iframe/tool-iframe.js');
		textCmp.init('.toolbar-list'); 

		// 初始化code组件
		var textCmp = require('../tool-code/tool-code.js');
		textCmp.init('.toolbar-list');
	}	
}