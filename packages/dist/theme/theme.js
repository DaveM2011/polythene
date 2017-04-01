'use strict';

var _styler = require('../common/styler');

var _styler2 = _interopRequireDefault(_styler);

var _typography = require('./typography');

var _typography2 = _interopRequireDefault(_typography);

require('../font-roboto/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roboto = [{
    'html, body, input, textarea': {
        'font-family': 'Roboto, Helvetica, Arial, sans-serif'
    }
}];

var general = [{
    // apply a natural box layout model to all elements, but allow elements to change
    ' html': {
        'box-sizing': 'border-box'
    },
    ' *, *:before, *:after': {
        'box-sizing': 'inherit'
    },
    ' *': [
    // remove tap highlight in mobile Safari
    {
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
    }, {
        '-webkit-tap-highlight-color': 'transparent' // For some Androids
    }],

    // Remove dotted link borders in Firefox
    ' a, a:active, a:focus, input:active, input[type]:focus': {
        outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    ' input:disabled': {
        opacity: 1
    }
}];

_styler2.default.add('pe-theme', roboto, _typography2.default, general);
//# sourceMappingURL=theme.js.map