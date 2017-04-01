'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

var _timer = require('../common/timer');

var _timer2 = _interopRequireDefault(_timer);

var _transition = require('../common/transition');

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    content: 'pe-notification__content',
    title: 'pe-notification__title',
    multilineTitle: 'pe-notification__title--multiline',
    action: 'pe-notification__action',
    horizontal: 'pe-notification--horizontal',
    vertical: 'pe-notification--vertical'
};

var DEFAULT_TIME_OUT = 3;

var pause = function pause(ctrl) {
    ctrl.isPaused = true;
    if (ctrl.timer) {
        ctrl.timer.pause();
    }
};

var unpause = function unpause(ctrl) {
    ctrl.isPaused = false;
    if (ctrl.timer) {
        ctrl.timer.resume();
    }
};

var stopTimer = function stopTimer(ctrl) {
    if (ctrl.timer) {
        ctrl.timer.stop();
    }
};

var show = function show(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return _transition2.default.show(_extends({}, opts, ctrl.transitions.show(ctrl, opts))).then(function () {
        ctrl.isTransitioning = false;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }

        // set timer to hide in a few seconds
        var timeout = opts.timeout;
        if (timeout === 0) {
            // do not time out
        } else {
            var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
            ctrl.timer = new _timer2.default(function () {
                hide(ctrl, opts);
            }, timeoutSeconds * 1000);
        }
    });
};

var hide = function hide(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return _transition2.default.hide(_extends({}, opts, ctrl.transitions.hide(ctrl, opts))).then(function () {
        stopTimer(ctrl);
        ctrl.isTransitioning = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        _mithril2.default.redraw(); // removes remainder of drawn component
    });
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [ctrl.class, opts.layout === 'vertical' ? CSS_CLASSES.vertical : CSS_CLASSES.horizontal, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            // container element is used for transitioning the notification
            ctrl.containerEl = document.querySelector(opts.containerSelector || '.pe-notification__holder');
            show(ctrl, opts);
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    };
    var titleConfig = function titleConfig(el, inited) {
        if (inited) return;
        var height = el.getBoundingClientRect().height;
        var lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
        var paddingTop = parseInt(window.getComputedStyle(el).paddingTop, 10);
        var paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom, 10);
        if (height > lineHeight + paddingTop + paddingBottom) {
            el.classList.add(CSS_CLASSES.multilineTitle);
        }
    };
    var title = opts.title;
    var content = (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [title ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.title,
        config: titleConfig
    }, title) : null, opts.action ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.action
    }, [opts.action]) : null]);
    return (0, _mithril2.default)(tag, props, content);
};

var component = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        return _extends({}, instanceData, {
            el: null,
            containerEl: null,
            dismissEl: null,
            isTransitioning: false,
            timer: null,
            isPaused: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        if (instanceData.pause && !ctrl.isPaused) {
            pause(ctrl, opts);
        } else if (instanceData.unpause && ctrl.isPaused) {
            unpause(ctrl, opts);
        }
        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=notification-instance.js.map