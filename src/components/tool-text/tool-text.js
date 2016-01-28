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
 * 展开编辑面板
 * @api public
 */
var showPanel = function() {

}
exports.showPanel = showPanel;