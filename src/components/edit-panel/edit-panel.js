/**
 * @author boxizen
 * @since  2016/01/28
 * @description 编辑面板
 */

module.exports = {
    /**
     * 初始化编辑面板样式
     * @api public
     */
    init: function() {
        require('!style!css!sass!./edit-panel.scss');
    },
    /**
     * 绑定编辑面板相应事件
     * @api public
     */
    bind: function() {
        $('.edit-div').dblclick(function() {
            $(this).attr('contenteditable', true);
        })

        $('.edit-div').click(function() {
            $(this).css('border', '1px solid #20C7EC');
        })
    }
}