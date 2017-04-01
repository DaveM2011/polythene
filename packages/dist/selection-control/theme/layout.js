'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('polythene/config/config');

var _config2 = _interopRequireDefault(_config);

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = require('../../layout/theme/flex');

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// Returns a style function to be used by checkbox and radio-button

var getSize = function getSize(config, height) {
    var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config2.default.unit_icon_size;

    var labelSize = iconSize + 2 * config.label_padding;
    var iconOffset = (labelSize - iconSize) / 2;
    return {
        ' .pe-control__label': {
            height: height + 'px'
        },
        ' .pe-control__box': {
            width: iconSize + 'px',
            height: iconSize + 'px'
        },
        ' .pe-button__label': {
            width: labelSize + 'px',
            height: labelSize + 'px',

            ' .pe-icon': [_mixin2.default.fit(iconOffset)]
        }
    };
};

var activeButton = function activeButton() {
    return {
        opacity: 1,
        'z-index': 1
    };
};

var inactiveButton = function inactiveButton() {
    return {
        opacity: 0,
        'z-index': 0
    };
};

var createStyles = function createStyles(config, className, type) {
    var _peControl;

    return [{
        '.pe-control': (_peControl = {
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            padding: 0,

            ' .pe-control__label': [_flex2.default.layoutHorizontal, _flex2.default.layoutCenter, {
                position: 'relative',
                cursor: 'pointer',
                'font-size': config.label_font_size + 'px',
                'line-height': config.label_height + 'px',
                margin: 0,
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            '&.pe-control--inactive': {
                ' .pe-control__label': {
                    cursor: 'default'
                }
            }

        }, _defineProperty(_peControl, ' input[type=' + type + '].pe-control__input', [_mixin2.default.vendorize({
            'appearance': 'none'
        }, _config2.default.prefixes_appearance), {
            'line-height': config.label_height + 'px',
            // Hide input element
            position: 'absolute',
            'z-index': '-1',
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            opacity: 0,
            border: 'none',
            'pointer-events': 'none'
        }]), _defineProperty(_peControl, ' .pe-control__box', {
            position: 'relative',
            display: 'inline-block',
            'box-sizing': 'border-box',
            width: config.label_height + 'px',
            height: config.label_height + 'px',
            color: 'inherit',

            ':focus': {
                outline: 0
            }
        }), _defineProperty(_peControl, ' .pe-control__button', [_mixin2.default.defaultTransition('opacity', config.animation_duration), {
            position: 'absolute',
            left: -((config.button_size - config.icon_size) / 2) + 'px',
            top: -((config.button_size - config.icon_size) / 2) + 'px',
            'z-index': 1
            // opacity: 0,
            // 'pointer-events': 'auto'
        }]), _defineProperty(_peControl, '&.pe-control--off', {
            ' .pe-control__button--on': inactiveButton(),
            ' .pe-control__button--off': activeButton()
        }), _defineProperty(_peControl, '&.pe-control--on', {
            ' .pe-control__button--on': activeButton(),
            ' .pe-control__button--off': inactiveButton()
        }), _defineProperty(_peControl, ' .pe-control__label span', {
            'padding-left': config.padding + 'px',
            'padding-right': config.padding + 'px'
        }), _defineProperty(_peControl, '&.pe-control--disabled', {
            ' .pe-control__label': {
                cursor: 'auto'
            },
            ' .pe-control__button': {
                'pointer-events': 'none'
            }
        }), _defineProperty(_peControl, ' .pe-button__label', {
            ' .pe-icon': {
                position: 'absolute'
            }
        }), _defineProperty(_peControl, '&.pe-control--small', getSize(config, _config2.default.unit_icon_size_small, _config2.default.unit_icon_size_small)), _defineProperty(_peControl, '&.pe-control--regular', getSize(config, config.label_height, _config2.default.unit_icon_size)), _defineProperty(_peControl, '&.pe-control--medium', getSize(config, _config2.default.unit_icon_size_medium, _config2.default.unit_icon_size_medium)), _defineProperty(_peControl, '&.pe-control--large', getSize(config, _config2.default.unit_icon_size_large, _config2.default.unit_icon_size_large)), _peControl)
    }];
};

exports.default = createStyles;
//# sourceMappingURL=layout.js.map