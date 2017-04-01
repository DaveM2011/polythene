'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = require('../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button/button');

var _button2 = _interopRequireDefault(_button);

require('../base-button/base-button');

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = opts.icon ? (0, _mithril2.default)(_icon2.default, opts.icon) : opts.content ? opts.content : null;
    return (0, _mithril2.default)(_button2.default, _extends({}, opts, {
        content: (0, _mithril2.default)('div', {
            class: CSS_CLASSES.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES.block, opts.compact ? CSS_CLASSES.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=icon-button.js.map