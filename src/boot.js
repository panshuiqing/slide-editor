/**
 * @author boxizen
 * @since  2016/01/30
 * @description 启动文件
 */

/**
 * 根据窗口大小动态调整幻灯片大小
 * @api private
 */
function resize() {
    var winW = $(window).width(),
        winH = $(window).height();
    $('.edit-container').css('width', winW - 190 + 'px');
}

/**
 * 初始化项目
 * @api private
 */
function init() {
    /**
     * 整体样式
     */
    require("!style!css!sass!./css/main.scss");

    /**
     * 菜单组件
     */
    var menu = require('./components/menu/menu.js');
    menu.init('.menu-wrapper');

    /**
     * 工具条组件
     */
    var toolbar = require('./components/toolbar/toolbar.js');
    toolbar.init('.tool-wrapper');

    /**
     * 设置组件
     */
    var setting = require('./components/setting/setting.js');
    setting.init('.edit-panel');

    /**
     * 页码组件
     */
    var page = require('./components/page/page.js');
    page.init('.widget-wrapper');

    /**
     * 编辑组件
     */
    var editRegion = require('./components/edit-panel/edit-panel.js');
    editRegion.init();
    editRegion.bind();

    /**
     * 调整编辑区大小
     */
    resize();
    $(window).bind('resize', resize);

    /**
     * 监听键盘事件
     */
    var keyboard = require('./libs/keyboard.js');
    keyboard.bind();
}

init();