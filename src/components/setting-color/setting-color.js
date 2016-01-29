/**
 * @author boxizen
 * @since  2016/01/27
 * @description 页面颜色组件
 */

module.exports = {          
	
	/**
	 * 初始化
	 */
	init: function(dom) {
		// 初始化样式
		require("!style!css!sass!./setting-color.scss");
		var tpl = require('./setting-color.tpl');
		$(dom).append(tpl());		
		// 颜色画板
		$('#colorpick').click(function() {
			var $colorpicker = $('.colorpicker');
			if($colorpicker.hasClass('hidden')) {
				$colorpicker.removeClass('hidden');
			} else {
				$colorpicker.addClass('hidden');
			}			
			return false;
		})
		// 颜色选择器
		$('.colorpicker .coloritem').click(function() {
			var color = $(this).css('background');
			$('.edit-panel').css('background', color);
		})
	}	
}