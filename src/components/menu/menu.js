/**
 * @author boxizen
 * @since  2016/01/26
 * @description 菜单组件
 */

module.exports = {
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./menu.scss");
		var tpl = require('./menu.tpl');
		$(dom).append(tpl());
		// 引入观看菜单
		var playMenu = require("../menu-play/menu-play.js");
		playMenu.init('.menu-primary');
		// 引入保存菜单
		var saveMenu = require("../menu-save/menu-save.js");
		saveMenu.init('.menu-primary');
		// 引入折叠菜单
		var collapseMenu = require("../menu-collapse/menu-collapse.js");
		collapseMenu.init('.menu-primary');
		// 引入更多菜单
		var moreMenu = require("../menu-more/menu-more.js");
		moreMenu.init('.menu-primary');
	}	
}