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
            $('.anchor-block.focus').removeClass('focus');
            $('.edit-div').attr('contenteditable', false).attr('contenteditable', false).removeClass('focus').removeClass('cke_editable').removeClass('editing');
            for (var editor in CKEDITOR.instances) {
                // 销毁编辑器实例  
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                // 移除编辑器Jquery对象  
                $('#cke_' + editor).remove();
            }
        })

        // 编辑框单击
        $('.edit-block').click(function(e) {
            var $editDiv = $(this).children('.edit-div');
            if ($editDiv.hasClass('focus') && !$editDiv.hasClass('editing')) {
                $editDiv.addClass('editing');
                CKEDITOR.inline($editDiv.attr('id'));
            }
            $editDiv.attr('contenteditable', true).addClass('focus').parent().children('.anchor-block').addClass('focus');
            e.stopPropagation();
        })

        // 拖动div
        $('.edit-block').mousedown(function(e) {
            var isMove = true;
            var firstX = e.pageX;
            var firstY = e.pageY;
            var staticLeft = $(this).css('left');
            var staticTop = $(this).css('top');
            $(this).children('.anchor-block').addClass('focus');
            $(this).children('.edit-div').addClass('focus');
            var that = this;
            // 编辑状态
            var editing = $(this).children('.edit-div').attr('contenteditable');
            $(document).mousemove(function(event) {
                if (isMove && editing == 'false') {
                    // 计算最终坐标
                    var curX = event.pageX;
                    var distanceX = curX - firstX;
                    var finalX = parseInt(staticLeft) + distanceX;
                    var curY = event.pageY;
                    var distanceY = curY - firstY;
                    var finalY = parseInt(staticTop) + distanceY;
                    $(that).css('left', finalX + 'px').css('top', finalY + 'px');
                }
            }).mouseup(function(e) {
                isMove = false;
                $(document).unbind('mousemove');
            });
        })

        // 拉长编辑框 
        $('.anchor-block').mousedown(function(e) {
            var isMove = true;
            var firstX = e.pageX;
            var width = $(this).parent('.edit-block').width();
            var left = parseInt($(this).parent('.edit-block').css('left'));
            var that = this;
            $(document).mousemove(function(event) {
                if (isMove) {
                    var curX = event.pageX;

                    if ($(that).hasClass('anchor-right')) {
                        var dist = curX - firstX;
                        var $editBlock = $(that).parent('.edit-block');
                        if (width + dist > 20) {
                            $editBlock.css('width', (width + dist) + 'px');
                        }
                    } else {
                        var dist = firstX - curX;
                        var $editBlock = $(that).parent('.edit-block');
                        if (width + dist > 20) {
                            $editBlock.css('width', (width + dist) + 'px').css('left', (left - dist));
                        }
                    }
                }
            }).mouseup(function(e) {
                isMove = false;
                $(document).unbind('mousemove');
            })
        });
    }
}