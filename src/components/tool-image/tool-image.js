/**
 * @author boxizen
 * @since  2016/01/26
 * @description 图片工具
 */


/**
 * 初始化组件
 * @param  {dom} dom
 * @api public
 */
var init = function(menu, panel) {
    require("!style!css!sass!./tool-image.scss");
    var tpl = require('./tool-image-menu.tpl');
    $(menu).append(tpl());
    var tpl = require('./tool-image-panel.tpl');
    $(panel).append(tpl());
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
    $('#toolbar-img-btn').click(function() {
        var tpl = require('./image-frame.tpl');
        $(dom).append(tpl());
        var index = $(dom).attr('edit-index');
        var target = parseInt(index) + 1;
        $(dom).attr('edit-index', target);
        return false;
    });

    /**
     * 点击文本框弹出详情面板
     */
    $(document).on('click', '.image-edit-block', function(e) {
        // 隐藏工具条详情面板
        $('.toolbar-block-panel').css('left', '-160px');
        $('#toolbar-image-panel').css('left', '0px');
        e.stopPropagation();
    });

    /**
     * 链接地址设置
     */
    $('#tool-image-src').bind('keypress', function(e) {
        if (e.keyCode == "13") {
            var input = $(this).val();
            $('.img-edit-div.focus img').attr('src', input);
        }
    });

}

exports.bind = bind;