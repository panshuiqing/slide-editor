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
        $('.edit-container').mousedown(function() {
            console.log('全局事件');
            // 还原所有编辑区                 
            $('.edit-block').removeClass('initialize');
            $('.anchor-block.focus').removeClass('focus');
            $('.edit-div.focus').removeClass('focus').removeClass('cke_editable').attr('contenteditable', false);
            // 销毁编辑器实例和jquery对象
            for (var editor in CKEDITOR.instances) {
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                $('#cke_' + editor).remove();
            }
        })

        // 编辑框单击
        $('.edit-block').dblclick(function(e) {
            var $editBlock = $(this);
            var $editDiv = $editBlock.children('.edit-div');
            var $anchorBlc = $editBlock.children('.anchor-block');
            // 已经初始化过的不需要再实例化
            if (!$editBlock.hasClass('initialize')) {
                $editBlock.addClass('initialize');
                CKEDITOR.inline($editDiv.attr('id'));
                $editDiv.addClass('focus').attr('contenteditable', true).focus();
                $anchorBlc.addClass('focus');
            }
        })

        // 拖动div
        $('.edit-block').mousedown(function(e) {
            // 还原其他编辑区
            //$('.anchor-block.focus').removeClass('focus');
            // $('.edit-div.focus').removeClass('focus').removeClass('cke_editable').attr('contenteditable', false);

            var $editBlock = $(this);
            var isMove = true;
            var firstX = e.pageX;
            var firstY = e.pageY;
            var staticLeft = $editBlock.css('left');
            var staticTop = $editBlock.css('top');
            // 激活高亮
            $editBlock.children('.anchor-block').addClass('focus');
            $editBlock.children('.edit-div').addClass('focus');
            var that = this;
            // 编辑状态
            var editing = $editBlock.children('.edit-div').attr('contenteditable');
            $(document).mousemove(function(event) {
                // 编辑状态不允许移动
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
            e.stopPropagation();
        })

        // 拉长编辑框 
        $('.anchor-block').mousedown(function(e) {
            var $anchor = $(this);
            var isMove = true;
            var firstX = e.pageX;
            var width = $anchor.parent('.edit-block').width();
            var left = parseInt($anchor.parent('.edit-block').css('left'));
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
            e.stopPropagation();
        });
    }
}