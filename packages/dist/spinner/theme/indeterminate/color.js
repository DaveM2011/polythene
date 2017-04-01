'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*
                                                                                                                                                                                                                  Derived from https://github.com/PolymerElements/paper-spinner
                                                                                                                                                                                                                  
                                                                                                                                                                                                                  @license
                                                                                                                                                                                                                  Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
                                                                                                                                                                                                                  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
                                                                                                                                                                                                                  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
                                                                                                                                                                                                                  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
                                                                                                                                                                                                                  Code distributed by Google as part of the polymer project is also
                                                                                                                                                                                                                  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
                                                                                                                                                                                                                  */

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-spinner-indeterminate', {

        color: config['color_' + tint + '_single'],

        ' .pe-spinner-indeterminate__layer': {
            'border-color': 'currentcolor'
        },

        '&:not(.pe-spinner--single-color)': {
            ' .pe-spinner-indeterminate__layer--1': {
                'border-color': config['color_' + tint + '_1']
            },
            ' .pe-spinner-indeterminate__layer--2': {
                'border-color': config['color_' + tint + '_2']
            },
            ' .pe-spinner-indeterminate__layer--3': {
                'border-color': config['color_' + tint + '_3']
            },
            ' .pe-spinner-indeterminate__layer--4': {
                'border-color': config['color_' + tint + '_4']
            }
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map