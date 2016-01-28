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
        // 销毁对象
        $('.edit-container').click(function() {
            for (var editor in CKEDITOR.instances) {
                // 还原编辑器覆盖的区块                  
                $('#' + editor).parent().children('.anchor-block').removeClass('focus');
                $('#' + editor).attr('contenteditable', false).removeClass('focus').removeClass('cke_editable');
                // 销毁编辑器实例  
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                // 移除编辑器Jquery对象  
                $('#cke_' + editor).remove();
            }
        })

        // 单击事件
        $('.edit-div').click(function(e) {
            if ($(this).hasClass('focus')) {
                console.log('has focus');
                CKEDITOR.inline($(this).attr('id'));
            }
            $(this).attr('contenteditable', true).addClass('focus');
            $(this).parent().children('.anchor-block').addClass('focus');
            e.stopPropagation();            
        })
    }
}