'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _iconButton = require('../icon-button/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _mithril2.default)(_iconButton2.default, _extends({}, opts, {
        parentClass: [CSS_CLASSES.block, opts.mini ? CSS_CLASSES.mini : null].join(' '),
        raised: true,
        ripple: {
            center: true,
            opacityDecayVelocity: 0.24
        },
        shadow: {
            increase: 5
        },
        ink: true,
        wash: true,
        animateOnTap: true
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=fab.js.map