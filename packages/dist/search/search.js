'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _textfield = require('../textfield/textfield');

var _textfield2 = _interopRequireDefault(_textfield);

require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-search',
    content: 'pe-search__content',
    searchInset: 'pe-search--inset',
    searchFullwidth: 'pe-search--fullwidth'
};

var mapButtonState = function mapButtonState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.focus && state.dirty) {
        return 'focus_dirty';
    } else if (state.focus) {
        return 'focus';
    } else if (state.dirty) {
        return 'dirty';
    }
    return 'none';
};

var typeClasses = {
    inset: CSS_CLASSES.searchInset,
    fullwidth: CSS_CLASSES.searchFullwidth
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inset';

    return typeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var state = mapButtonState(ctrl.state());
    var buttons = (opts.buttons || {})[state] || {};
    var textfieldOpts = opts.textfield || {};
    var content = (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [buttons.before ? buttons.before : null, (0, _mithril2.default)(_textfield2.default, _extends({}, textfieldOpts, {
        getState: function getState(state) {
            ctrl.state(state);
            if (textfieldOpts.getState) {
                textfieldOpts.getState(state);
            }
        }
    })), buttons.after ? buttons.after : null]);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var state = _mithril2.default.prop();
        return {
            state: state
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=search.js.map