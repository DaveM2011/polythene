'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _easing = require('./easing');

var _easing2 = _interopRequireDefault(_easing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
opts:
    element: HTML Element
    to: position
    duration: seconds
    direction: 'vertical' or 'horizontal'


Function returns a Promise:

    scrollTo({
        element: scroller,
        to: left,
        duration: .5,
        direction: 'horizontal'
    }).then(() => {
        console.log('scroll done')
    });

*/
var scrollTo = function scrollTo(opts) {
    var element = opts.element;
    var which = opts.direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
    var to = opts.to;
    var duration = opts.duration * 1000;
    var start = element[which];
    var change = to - start;
    var animationStart = new Date().getTime();
    var animating = true;
    return new Promise(function (resolve) {
        var animateScroll = function animateScroll() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            var now = new Date().getTime();
            var percentage = (now - animationStart) / duration;
            var val = start + change * _easing2.default.easeInOutCubic(percentage);
            element[which] = val;
            if (percentage >= 1) {
                element[which] = to;
                animating = false;
                resolve();
            }
        };
        requestAnimFrame(animateScroll);
    });
}; /*
   Animated scroll to a position.
   Derived from https://github.com/madebysource/animated-scrollto
   Adapted to Mithril and rewritten to es6.
   */

var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

exports.default = scrollTo;
//# sourceMappingURL=scroll-to.js.map