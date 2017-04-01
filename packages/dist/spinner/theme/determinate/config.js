'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../../../common/object.assign');

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('../common/config');

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _config4.default, {
    border_width_small: _config4.default.size_small / _config4.default.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: _config4.default.size_medium / _config4.default.size_regular * 3,
    border_width_large: _config4.default.size_large / _config4.default.size_regular * 3,
    border_width_fab: _config4.default.size_fab / _config4.default.size_regular * 3,

    color_light: _config2.default.rgba(_config2.default.color_primary),
    color_dark: _config2.default.rgba(_config2.default.color_primary)
});
//# sourceMappingURL=config.js.map