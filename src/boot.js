// 初始化整体样式
require("!style!css!sass!./css/main.scss");

// 引入组件
var toolbar = require('./components/toolbar/toolbar.js');
var setting = require('./components/setting/setting.js');
toolbar.init('.widget-wrapper');
setting.init('.widget-wrapper');


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
    $('.edit-container').css('width', winW - 120 + 'px');
}