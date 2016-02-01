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

        var inputFocus = false;

        /**
         * 绑定文本框事件
         */
        var textCmp = require('../tool-text/tool-text.js');
        textCmp.bind('.edit-page.active');

        /**
         * 绑定图形框事件
         */
        var imgCmp = require('../tool-image/tool-image.js');
        imgCmp.bind('.edit-page.active');

        /**
         * 绑定iframe框事件
         */
        var iframeCmp = require('../tool-iframe/tool-iframe.js');
        iframeCmp.bind('.edit-page.active');

        /**
         * 绑定iframe框事件
         */
        var codeCmp = require('../tool-code/tool-code.js');
        codeCmp.bind('.edit-page.active');

        /**
         * 销毁对象
         */
        $(document).on('mousedown', '.edit-container', function() {
            // 还原所有文本编辑区                 
            $('.text-edit-block').removeClass('initialize');
            $('.text-edit-block').removeClass('focus');
            $('.edit-div').removeClass('focus').removeClass('cke_editable').attr('contenteditable', false);
            // 取消编辑区聚焦
            $('.anchor-block.focus').removeClass('focus');
            // 销毁编辑器实例和jquery对象
            for (var editor in CKEDITOR.instances) {
                CKEDITOR.remove(CKEDITOR.instances[editor]);
                $('#cke_' + editor).remove();
            }
            // 隐藏工具条详情面板
            $('.toolbar-block-panel').css('left', '-160px');
        });

        /**
         * 单击编辑框
         */
        $(document).on('dblclick', '.text-edit-block', function(e) {
            var $editBlock = $(this);
            var $editDiv = $editBlock.children('.edit-div');
            var $anchorBlc = $editBlock.children('.anchor-block');
            // initialize表示已经被实例化, 无须再重复实例
            if (!$editBlock.hasClass('initialize')) {
                CKEDITOR.inline($editDiv.attr('id'));
                $editBlock.addClass('initialize');
                $editDiv.attr('contenteditable', true).focus();
            }
        });

        /**
         * 拖动div
         */
        $(document).on('mousedown', '.edit-block', function(e) {
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
        $(document).on('mousedown', '.anchor-block', function(e) {            
            var $anchor = $(this);
            var isMove = true;
            var firstX = e.pageX;
            var firstY = e.pageY;
            var width = $anchor.parent('.edit-block').width();
            var height = $anchor.parent('.edit-block').height();
            var top = parseInt($anchor.parent('.edit-block').css('top'));
            var left = parseInt($anchor.parent('.edit-block').css('left'));
            var that = this;
            $(document).mousemove(function(event) {
                if (isMove) {
                    var curX = event.pageX;
                    var curY = event.pageY;

                    if ($(that).hasClass('anchor-right')) {
                        var dist = curX - firstX;
                        var $editBlock = $(that).parent('.edit-block');
                        if (width + dist > 20) {
                            $editBlock.css('width', (width + dist) + 'px');
                        }
                    } else if ($(that).hasClass('anchor-left')) {
                        var dist = firstX - curX;
                        var $editBlock = $(that).parent('.edit-block');
                        if (width + dist > 20) {
                            $editBlock.css('width', (width + dist) + 'px').css('left', (left - dist));
                        }
                    } else if ($(that).hasClass('anchor-bottom')) {
                        var dist = curY - firstY;
                        var $editBlock = $(that).parent('.edit-block');
                        if (height + dist > 20) {
                            $editBlock.css('height', (height + dist) + 'px');
                        }
                    } else {
                        var dist = firstY - curY;
                        var $editBlock = $(that).parent('.edit-block');
                        if (height + dist > 20) {
                            $editBlock.css('height', (height + dist) + 'px').css('top', (top - dist) + 'px');
                        }
                    }
                }
            }).mouseup(function(e) {
                isMove = false;
                $(document).unbind('mousemove');
            })
            e.stopPropagation();
        });

        /**
         * 键盘删除按键
         */
        document.onkeydown = function(e) {
            var code = e.keyCode;
            if (code == 8) {
                var editing = $('.edit-block.focus').children('.edit-div').attr('contenteditable');
                if (editing == 'false' && inputFocus == false) {
                    $('.edit-block.focus').remove();
                    return false;
                }
            }
        };

        /**
         * 焦点状态监听
         */
        $('input').focus(function() {
            inputFocus = true;
        }).blur(function() {
            inputFocus = false;
        });
    }
}