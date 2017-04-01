'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _polythene = require('../polythene/polythene');

var _polythene2 = _interopRequireDefault(_polythene);

var _events = require('./events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layer = document.body;
var throttleDelay = 150;
var reInitDelay = throttleDelay + 50;
var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var remove = function remove() {
    if (enabled) {
        fastClick.destroy();
        enabled = false;
    }
};

var add = function add() {
    if (!enabled) {
        fastClick = new _fastclick2.default(layer);
        enabled = true;
    }
};

var handleScroll = function handleScroll() {
    remove();
    if (timeoutId) {
        window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(add, reInitDelay);
};

var init = function init() {
    if (_polythene2.default.isTouch) {
        _events2.default.subscribe('scroll', handleScroll, throttleDelay);
        add();
    }
};

init();

exports.default = {
    add: add,
    remove: remove
};
//# sourceMappingURL=no-tap-delay.js.map