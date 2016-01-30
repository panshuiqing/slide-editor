/**
 * @author boxizen
 * @since  2016/01/30
 * @description 键盘事件
 */

module.exports = {
    bind: function() {
        document.onkeydown = function(e) {
        	console.log(e.keyCode);
        }
    }
}