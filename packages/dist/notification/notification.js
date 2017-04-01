'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multiple = require('../common/multiple');

var _multiple2 = _interopRequireDefault(_multiple);

var _notificationInstance = require('./notification-instance');

var _notificationInstance2 = _interopRequireDefault(_notificationInstance);

var _transitions = require('./theme/notification/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

require('./theme/notification/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _multiple2.default)({
    instance: _notificationInstance2.default,
    class: 'pe-notification pe-notification--notification',
    defaultId: 'default_notification',
    tag: 'div.pe-notification__holder',
    noneTag: 'span.pe-notification__placeholder',
    bodyShowClass: 'pe-notification--open',
    queue: true,
    transitions: _transitions2.default
});
//# sourceMappingURL=notification.js.map