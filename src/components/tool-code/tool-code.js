/**
 * @author boxizen
 * @since  2016/01/26
 * @description 代码工具
 */

/**
 * 初始化组件
 * @param  {dom} dom
 * @api public
 */
var init = function(menu, panel) {
    var tpl = require('./tool-code-menu.tpl');
    $(menu).append(tpl());
    var tpl = require('./tool-code-panel.tpl');
    $(menu).append(tpl());
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
    $('#toolbar-code-btn').click(function() {
        var tpl = require('./code-frame.tpl');
        $(dom).append(tpl());
        var index = $(dom).attr('edit-index');
        var target = parseInt(index) + 1;
        $(dom).attr('edit-index', target);
        return false;
    });

    /**
     * 点击文本框弹出详情面板
     */
    $(document).on('click', '.code-edit-block', function(e) {
        // 隐藏工具条详情面板
        $('.toolbar-block-panel').css('left', '-160px');
        $('.toolbar-text-panel').css('left', '0px');
        e.stopPropagation();
    });

}

exports.bind = bind;