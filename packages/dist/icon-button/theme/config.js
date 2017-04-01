'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../../common/object.assign');

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('../../button/theme/config');

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var padding = (_config2.default.grid_unit_icon_button - _config2.default.unit_icon_size) / 2; // 12
var padding_compact = (_config2.default.grid_unit_icon_button - _config2.default.unit_icon_size) / 3; // 8

exports.default = _extends({}, _config4.default, {
    padding: padding,
    padding_compact: padding_compact,

    color_light_wash_opacity: _config2.default.blend_light_background_hover_medium,
    color_light_focus_opacity: _config2.default.blend_light_background_hover_medium,
    color_light_flat_normal_text: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),

    color_dark_wash_opacity: _config2.default.blend_dark_background_hover_medium,
    color_dark_focus_opacity: _config2.default.blend_dark_background_hover_medium,
    color_dark_flat_normal_text: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary)
});
//# sourceMappingURL=config.js.map