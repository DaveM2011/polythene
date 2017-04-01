'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _config3 = require('../common/config');

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it's 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

exports.default = {
    border_width_small: _config4.default.size_small / _config4.default.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: _config4.default.size_medium / _config4.default.size_regular * 3,
    border_width_large: _config4.default.size_large / _config4.default.size_regular * 3,
    border_width_fab: _config4.default.size_fab / _config4.default.size_regular * 3,
    rotation_duration: rotation_duration,
    arc_size: arc_size,
    arc_time: arc_time,
    arc_start_degrees: arc_start_degrees,

    color_light_single: _config2.default.rgba(_config2.default.color_primary),
    color_light_1: '#42a5f5', // blue 400
    color_light_2: '#f44336', // red 500
    color_light_3: '#fdd835', // yellow 600,
    color_light_4: '#4caf50', // green 500

    color_dark_single: _config2.default.rgba(_config2.default.color_primary),
    color_dark_1: '#42a5f5', // blue 400
    color_dark_2: '#f44336', // red 500
    color_dark_3: '#fdd835', // yellow 600,
    color_dark_4: '#4caf50' // green 500
};
//# sourceMappingURL=config.js.map