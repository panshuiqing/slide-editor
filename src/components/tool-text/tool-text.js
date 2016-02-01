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
var init = function(menu, panel) {
    require("!style!css!sass!./tool-text.scss");
    var menuTpl = require('./tool-text-menu.tpl');
    $(menu).append(menuTpl());
    var detailTpl = require('./tool-text-panel.tpl');
    $(panel).append(detailTpl());
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
        var tpl = require('./text-frame.tpl');
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
        // 隐藏工具条详情面板
        $('.toolbar-block-panel').css('left', '-160px');
        $('#toolbar-text-panel').css('left', '0px');
        e.stopPropagation();
    });

    /**
     * 内边距设置
     */
    $('#tool-text-padding').bind('keypress', function(e) {
        if (e.keyCode == "13") {
            var input = $(this).val();
            if (input.match(/^\d+$/ig) || input.match(/^\d+px$/ig)) {
                var padding = input.match(/\d+/g)[0];
                $('.text-edit-div.focus').css('padding', padding);
            }
        }
    });

    /**
     * 透明度设置
     */
    $('#tool-text-opacity').bind('keypress', function(e) {
        if (e.keyCode == "13") {
            var input = $(this).val();
            if (input.match(/^\d+%$/ig)) {
                var opacity = input.match(/\d+/g)[0] + '%';
                $('.text-edit-block.focus').css('opacity', opacity);
            } else if (input.match(/\.\d+$/ig)) {
                console.log(input);
                $('.text-edit-block.focus').css('opacity', input);
            }
        }
    });

    /**
     * 文本间距设置
     */
    $('#tool-text-lineheight').bind('keypress', function(e) {
        if (e.keyCode == "13") {
            var input = $(this).val();
            if (input.match(/^\d+%$/ig)) {
                var lineHeight = input.match(/\d+/g)[0] + '%';
                $('.text-edit-div.focus').css('line-height', lineHeight);
            } else if (input.match(/^\d+px$/ig)) {
                var lineHeight = input.match(/\d+/g)[0] + 'px';
                $('.text-edit-div.focus').css('line-height', lineHeight);
            } else if (input.match(/^\d+$/ig)) {
                $('.text-edit-div.focus').css('line-height', input);
            }
        }
    });

    /**
     * 层级设置 - 升
     */
    $('#tool-text-coml').bind('click', function(e) {
        var index = $('.text-edit-block.focus').css('z-index');
        if (index == 'auto') {
            $('.text-edit-block.focus').css('z-index', 1);
        } else {
            var target = parseInt(index) + 1;
            $('.text-edit-block.focus').css('z-index', target);
        }
    });

    /**
     * 层级设置 - 降
     */
    $('#tool-text-comr').bind('click', function(e) {
        var index = $('.text-edit-block.focus').css('z-index');
        if (index == 'auto') {
            $('.text-edit-block.focus').css('z-index', -1);
        } else {
            var target = parseInt(index) - 1;
            $('.text-edit-block.focus').css('z-index', target);
        }
    });
}

exports.bind = bind;