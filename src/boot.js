require("!style!css!sass!./css/main.scss");

var toolbar = require('./components/toolbar/toolbar.js');
var setting = require('./components/setting/setting.js');

toolbar.init('.wrapper');

setting.init('.wrapper');