'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Helper function for checkbox and radio button


require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = require('../icon/icon');

var _icon2 = _interopRequireDefault(_icon);

var _iconButton = require('../icon-button/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return _extends({}, opts[onOffType] ? opts[onOffType] : {
        msvg: opts.theme[onOffType]
    }, {
        class: opts.class
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createSelection = function createSelection(checked, opts) {
    var selectable = opts.selectable(checked);
    return (0, _mithril2.default)('div', {
        class: CSS_CLASSES.box
    }, (0, _mithril2.default)(_iconButton2.default, _extends({}, {
        tag: 'div',
        class: CSS_CLASSES.button,
        content: [(0, _mithril2.default)(_icon2.default, createIcon('iconOn', _extends({}, {
            class: CSS_CLASSES.buttonOn
        }, opts))), (0, _mithril2.default)(_icon2.default, createIcon('iconOff', _extends({}, {
            class: CSS_CLASSES.buttonOff
        }, opts)))],
        ripple: {
            center: true
        },
        disabled: opts.disabled,
        inactive: !selectable
    }, opts.iconButton)));
};

exports.default = createSelection;
//# sourceMappingURL=icon-selection.js.map