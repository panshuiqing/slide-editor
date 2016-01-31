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
var bind = function(dom) {

    /**
     * 点击文本菜单创建文本框
     */
    $('#toolbar-text-btn').click(function() {
        var tpl = require('./text.tpl');
        $(dom).append(tpl());
        var index = $(dom).attr('edit-index');
        var target = parseInt(index) + 1;
        $(dom).attr('edit-index', target);
        return false;
    });

    /**
     * 点击文本框弹出详情面板
     */
    $(document).on('click', '.text-edit-block', function(e) {
        $('.toolbar-text-panel').css('left', '120px');
        e.stopPropagation();
    });

}

exports.bind = bind;