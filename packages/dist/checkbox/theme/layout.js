'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = require('../../common/mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _layout = require('../../selection-control/theme/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
    return _mixin2.default.createStyles(config, function (config) {
        return (0, _layout2.default)(config, '.pe-control--checkbox', 'checkbox');
    });
};
//# sourceMappingURL=layout.js.map