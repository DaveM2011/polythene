'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _selectionControl = require('../selection-control/selection-control');

var _selectionControl2 = _interopRequireDefault(_selectionControl);

var _shadow = require('../shadow/shadow');

var _shadow2 = _interopRequireDefault(_shadow);

var _iconButton = require('../icon-button/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

var selectionView = function selectionView(checked, opts) {
    var zOff = opts.zOff !== undefined ? opts.zOff : 1;
    var zOn = opts.zOn !== undefined ? opts.zOn : 2;
    var z = checked ? zOn : zOff;
    var raised = opts.disabled ? false : opts.raised !== undefined ? opts.raised : true;
    return [(0, _mithril2.default)('div', { class: CSS_CLASSES.track }), (0, _mithril2.default)(_iconButton2.default, {
        class: CSS_CLASSES.thumb,
        tabindex: opts.tabindex || 0,
        ink: opts.ink !== undefined ? opts.ink : false,
        wash: opts.wash,
        disabled: opts.disabled,
        content: [(0, _mithril2.default)('div', {
            class: CSS_CLASSES.knob
        }, [opts.icon ? opts.icon : null, raised ? (0, _mithril2.default)(_shadow2.default, {
            z: z,
            animated: true
        }) : null])]
    })];
};

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.defaultClass = CSS_CLASSES.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    opts.selectable = selectable;
    return (0, _mithril2.default)(_selectionControl2.default, opts);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=switch.js.map