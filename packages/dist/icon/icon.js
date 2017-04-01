'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _svg = require('../svg/svg');

var _svg2 = _interopRequireDefault(_svg);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var layoutContent = function layoutContent(opts) {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        var svgOpts = _extends({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return (0, _mithril2.default)(_svg2.default, svgOpts);
    } else if (opts.msvg) {
        return (0, _mithril2.default)('i.pe-svg', _mithril2.default.trust(opts.msvg));
    } else {
        return (0, _mithril2.default)('i', (0, _mithril2.default)('img', {
            src: opts.src
        }));
    }
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.icon, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = layoutContent(opts);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        _mithril2.default.redraw.strategy('none');
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=icon.js.map