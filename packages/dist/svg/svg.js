'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('../common/object.assign');

var _mithril = require('mithril');

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CSS_CLASSES = {
    block: 'pe-svg'
};

var globalCache = {};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = void 0,
        svg = void 0;
    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    if (opts.content) {
        content = opts.content;
    } else {
        var path = opts.src;
        if (ctrl.path() !== path) {
            // not the current svg
            svg = globalCache[path];
            if (svg) {
                // exists in cache
                content = _mithril2.default.trust(svg);
                preloadNext(ctrl, opts);
            } else {
                // load new, then wait until file has been loaded
                ctrl.path(path);
                loadSvg(path, ctrl, opts).then(_mithril2.default.redraw);
            }
        } else {
            // use the current svg
            svg = ctrl.svg();
            svg = svg || '';
            content = _mithril2.default.trust(svg);
            preloadNext(ctrl, opts);
        }
    }
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var loadSvg = function loadSvg(path, ctrl, opts) {
    var preloading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (System && System.import) {
        var normalizedName = System.normalizeSync(path);
        return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
            _systemImportTransformerGlobalIdentifier.require([normalizedName], resolve, reject);
        }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(require((normalizedName))) : Promise.resolve(_systemImportTransformerGlobalIdentifier[normalizedName])).then(function (data) {
            if (preloading) {
                globalCache[path] = data;
                ctrl.preloadingIndex++;
                preloadNext(ctrl, opts);
            } else {
                ctrl.svg(data);
            }
        });
    } else {
        if (console) {
            console.log('polythene/svg: System not found.');
        }
    }
};

var preloadNext = function preloadNext(ctrl, opts) {
    if (!ctrl.preloadingItems) {
        return;
    }
    if (ctrl.preloadingIndex >= ctrl.preloadingItems.length) {
        return;
    }
    var next = ctrl.preloadingItems[ctrl.preloadingIndex];
    if (!globalCache[next]) {
        loadSvg(next, ctrl, opts, true);
    } else {
        ctrl.preloadingIndex++;
        preloadNext(ctrl, opts);
    }
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _mithril2.default.redraw.strategy('none');
        return {
            path: _mithril2.default.prop(''),
            svg: _mithril2.default.prop(''),
            preloadingItems: opts.preload,
            preloadingIndex: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=svg.js.map