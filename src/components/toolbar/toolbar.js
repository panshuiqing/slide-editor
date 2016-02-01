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
		var setCmp = require('../tool-setting/tool-setting.js');
		setCmp.init('.toolbar-list', '.toolbar-panel');		

		// 初始化文本组件
		var textCmp = require('../tool-text/tool-text.js');
		textCmp.init('.toolbar-list', '.toolbar-panel');		

		// 初始化图片组件
		var imgCmp = require('../tool-image/tool-image.js');
		imgCmp.init('.toolbar-list', '.toolbar-panel');		

		// 初始化iframe组件
		var iframeCmp = require('../tool-iframe/tool-iframe.js');
		iframeCmp.init('.toolbar-list', '.toolbar-panel'); 

		// 初始化code组件
		var codeCmp = require('../tool-code/tool-code.js');
		codeCmp.init('.toolbar-list', '.toolbar-panel');

		// 初始化表情组件
		var faceCmp = require('../tool-face/tool-face.js');
		faceCmp.init('.toolbar-list', '.toolbar-panel');
	}
}