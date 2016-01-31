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
        /**
         * 引入样式
         */
        require('!style!css!sass!./edit-panel.scss');
    },
    /**
     * 绑定编辑面板相应事件
     * @api public
     */
    bind: function() {

        /**
         * 监听键盘事件
         */
        var keyboard = require('../../libs/keyboard.js');
        keyboard.bind('.edit-block.focus');

        /**
         * 销毁对象
         */
        $('.edit-container').mousedown(function() {
            // 还原所有编辑区                 
            $('.edit-block').removeClass('initialize');
            $('.edit-block').removeClass('focus');
            $('.edit-div').removeClass('focus').removeClass('cke_editable').attr('contenteditable', false);
            $('.anchor-block.focus').removeClass('focus');
            // 销毁编辑器实例和jquery对象
            for (var editor in CKEDITOR.instances) {
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                $('#cke_' + editor).remove();
            }
        })

        /**
         * 单击编辑框
         */
        $('.edit-block').dblclick(function(e) {
            var $editBlock = $(this);
            var $editDiv = $editBlock.children('.edit-div');
            var $anchorBlc = $editBlock.children('.anchor-block');
            // initialize表示已经被实例化, 无须再重复实例
            if (!$editBlock.hasClass('initialize')) {
                CKEDITOR.inline($editDiv.attr('id'));
                $editBlock.addClass('initialize');
                $editDiv.attr('contenteditable', true).focus();
            }
        })

        /**
         * 拖动div
         */        
        $('.edit-block').mousedown(function(e) {
            var $editBlock = $(this);
            var $editDiv = $editBlock.children('.edit-div');

            // 取消其他编辑区域高亮
            var $activeBlock = $('.edit-block.focus');
            for (var i = 0; i < $activeBlock.length; i++) {
                var $activeBlock = $activeBlock.eq(i);
                if ($activeBlock != $editBlock) {
                    $activeBlock.removeClass('focus');
                    $activeBlock.children('.edit-div.focus').removeClass('focus');
                    $activeBlock.children('.anchor-block.focus').removeClass('focus');
                }
            }

            var isMove = true;
            var firstX = e.pageX;
            var firstY = e.pageY;
            var staticLeft = $editBlock.css('left');
            var staticTop = $editBlock.css('top');

            // 激活高亮    
            $editBlock.addClass('focus');
            $editDiv.addClass('focus');
            $editBlock.children('.anchor-block').addClass('focus');
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

        /**
         * 拉伸编辑框 
         */
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