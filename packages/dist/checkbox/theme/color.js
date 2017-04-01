'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _color = require('../../selection-control/theme/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyles = function createStyles(config) {
    return [(0, _color2.default)(config, 'light', '.pe-control--checkbox'), {
        '.pe-dark-theme': [
        // inside dark theme
        (0, _color2.default)(config, 'dark', ' '),
        // has dark theme
        (0, _color2.default)(config, 'dark', '&')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map