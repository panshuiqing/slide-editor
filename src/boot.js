// 初始化整体样式
require("!style!css!sass!./css/main.scss");

// 引入菜单组件
var menu = require('./components/menu/menu.js');
menu.init('.menu-wrapper');
// 引入工具条组件
var toolbar = require('./components/toolbar/toolbar.js');
toolbar.init('.tool-wrapper');
// 引入设置组件
var setting = require('./components/setting/setting.js');
setting.init('.edit-panel');
// 引入页码组件
var page = require('./components/page/page.js');
page.init('.widget-wrapper');

// 自适应窗口变化
resize();
$(window).bind('resize', resize);

/**
 * 根据窗口大小动态调整幻灯片大小
 * @api private
 */
function resize() {
    var winW = $(window).width(),
        winH = $(window).height();
    $('.edit-container').css('width', winW - 190 + 'px');
}

$('.editDiv').dblclick(function() {
	$(this).attr('contenteditable', true);
})

$('.editDiv').click(function() {
	$(this).css('border', '2px solid #20C7EC');
})