'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

exports.default = {
    isTouch: isTouch
};
//# sourceMappingURL=polythene.js.map