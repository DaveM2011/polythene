'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _selectionControl = require('../selection-control/selection-control');

var _selectionControl2 = _interopRequireDefault(_selectionControl);

var _iconSelection = require('../selection-control/icon-selection');

var _iconSelection2 = _interopRequireDefault(_iconSelection);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// contains default icons

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = _theme2.default;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = _iconSelection2.default;
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
//# sourceMappingURL=checkbox.js.map