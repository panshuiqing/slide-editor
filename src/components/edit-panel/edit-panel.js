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
            // 还原编辑器覆盖的区块                  
            $('.anchor-block').removeClass('focus');
            $('.edit-div').attr('contenteditable', false).attr('contenteditable', false).removeClass('focus').removeClass('cke_editable').removeClass('editing');
            for (var editor in CKEDITOR.instances) {
                // 销毁编辑器实例  
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                // 移除编辑器Jquery对象  
                $('#cke_' + editor).remove();
            }
        })

        // 单击事件
        $('.edit-div').click(function(e) {
            if ($(this).hasClass('focus') && !$(this).hasClass('editing')) {
                $(this).addClass('editing');
                CKEDITOR.inline($(this).attr('id'));
            }
            $(this).attr('contenteditable', true).addClass('focus').parent().children('.anchor-block').addClass('focus');
            e.stopPropagation();
        })

        // 拖动div
        $('.edit-block').mousedown(function(e) {
            var isMove = true;
            var firstX = e.pageX;
            var firstY = e.pageY;    
            var staticLeft = $(this).css('left');
            var staticTop = $(this).css('top');
            $(this).addClass('focus').parent().children('.anchor-block').addClass('focus');            
            var that = this;
            $(document).mousemove(function(event) {
                if(isMove) {
                    // 计算最终x坐标
                    var curX = event.pageX;
                    var distanceX = curX - firstX;
                    var finalX = parseInt(staticLeft) + distanceX;
                    $(that).css('left', finalX + 'px');
                    //计算最终y坐标
                    var curY = event.pageY;
                    var distanceY = curY - firstY;
                    var finalY = parseInt(staticTop) + distanceY;                    
                    $(that).css('top', finalY + 'px');                    
                }
            }).mouseup(function(e){
                isMove = false;
                $(document).unbind('mousemove');
            });

            e.stopPropagation();
        })
    }
}