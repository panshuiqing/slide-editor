/**
 * @author boxizen
 * @since  2016/01/26
 * @description 文本工具
 */


/**
 * 初始化组件
 * @param  {dom} dom
 * @api public
 */
var init = function(dom) {
    require("!style!css!sass!./tool-text.scss");
    var tpl = require('./tool-text.tpl');
    $(dom).append(tpl());
}
exports.init = init;

/**
 * 绑定相关事件
 * @api public
 */
var bind = function() {
	$('.text-edit-block').click(function(e) {
		$('.toolbar-text-panel').css('left', '120px');
		e.stopPropagation();
	});
	$(document).click(function() {
		$('.toolbar-text-panel').css('left', '-160px');
	});
}
exports.bind = bind;