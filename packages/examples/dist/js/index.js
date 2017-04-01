/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = m;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
Polyfill
*/

if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}
//# sourceMappingURL=object.assign.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _config = __webpack_require__(24);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
} // Mixins for j2c

// Creates j2c vendor key string from vendor list
// mixin.vendorize({'user-select': 'none'}, common.prefixes_user_select)
var vendorize = function vendorize(what, prefixes) {
    var vendorsSel = prefixes.map(function (v) {
        return '_' + v + '$';
    }).join('');
    return _defineProperty({}, vendorsSel, what);
};

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var offsetPx = offset + 'px';
    return {
        position: 'absolute',
        top: offsetPx,
        right: offsetPx,
        bottom: offsetPx,
        left: offsetPx
    };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
    var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (smoothing) {
        return {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        };
    } else {
        return {
            '-webkit-font-smoothing': 'subpixel-antialiased',
            '-moz-osx-font-smoothing': 'auto'
        };
    }
};

// Breaks off a line with ...
// unless lines is 'none'
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, 'em') // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';

    if (lines === 'none') {
        return {
            'text-overflow': 'initial',
            overflow: 'initial',
            display: 'block',
            height: 'auto'
        };
    }
    return _extends({}, {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'text-rendering': 'auto' // Samsung Android
    }, lines !== undefined ? {
        '-webkit-line-clamp': lines,
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box'
    } : null, lineHeight !== undefined ? {
        'max-height': lines * lineHeight + unit
    } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
    return {
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    };
};

// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
var hairline = function hairline() {
    return {};
};

// const hairline = (which) => ({
//     [`${which}-width`]: '1px',
//
//     ' html.pe-hairlines &': {
//         [`${which}-width`]: '0.5px'
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement('div');
//     el.style.border = '.5px solid transparent';
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector('html').classList.add('pe-hairlines');
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
    var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{ position: '-webkit-sticky' }, { position: '-moz-sticky' }, { position: '-o-sticky' }, { position: '-ms-sticky' }, { position: 'sticky' }, {
        top: 0,
        'z-index': zIndex
    }];
};

// Polythene utility function to generate style objects with scopes
// Used in theme files
var createStyles = function createStyles(common, fn) {
    if (Array.isArray(common)) {
        return common.map(function (o) {
            for (var scope in o) {
                return _defineProperty({}, scope, fn(o[scope]));
            };
        });
    } else {
        return fn(common);
    }
};

// Creats a transition with presets
// mixin.defaultTransition('opacity', config.animation_duration)
var defaultTransition = function defaultTransition() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config2.default.animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, _config2.default.prefixes_transition), vendorize({
        'transition-duration': duration
    }, _config2.default.prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, _config2.default.prefixes_transition), vendorize({
        'transition-property': properties
    }, _config2.default.prefixes_transition)];
};

// Scales an item dynamically between 2 screen sizes
// mixin.fluidScale('font-size', 'px', 50, 100);
// => 50px at 320 and below; scaling between sizes 50px and 100px in between the breakpoints; 100px at 1920 and above
var fluidScale = function fluidScale(property, unit, minValue, maxValue) {
    var minBreakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 320;
    var maxBreakpoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1920;
    var orientation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'horizontal';
    return fluidScales([property], unit, [[minBreakpoint, minValue], [maxBreakpoint, maxValue]], orientation);
};

// Scales an item dynamically between multiple screen sizes
// mixin.fluidScales(['padding-left', 'padding-right'], 'px', [[375, 40], [320, 35], [480, 55]])
// => 35px padding-left and padding-right at 320 and below; scaling between sizes 35px and 40px in between the breakpoints 320 and 375; scaling between sizes 40px and 55px in between the breakpoints 375 and 480; 55px at 480 and above
var fluidScales = function fluidScales(property, unit, sizes, orientation) {
    var sorted = sizes.sort();
    var minBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    var maxBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    maxBreakpoints.shift();
    maxBreakpoints.push(minBreakpoints[minBreakpoints.length - 1]);
    var minValues = sorted.map(function (data) {
        return data[1];
    });
    var maxValues = sorted.map(function (data) {
        return data[1];
    });
    maxValues.shift();
    maxValues.push(minValues[minValues.length - 1]);
    return sorted.map(function (data, index) {
        return fluidRule(property, unit, orientation, minBreakpoints[index], maxBreakpoints[index], minValues[index], maxValues[index], index === 0, index === sorted.length - 1);
    });
};

var fluidRule = function fluidRule(property, unit) {
    var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'horizontal';
    var minBreakpoint = arguments[3];
    var maxBreakpoint = arguments[4];
    var minValue = arguments[5];
    var maxValue = arguments[6];
    var isFirst = arguments[7];
    var isLast = arguments[8];

    var orientationUnit = orientation === 'vertical' ? 'vh' : 'vw';
    var orientationRule = orientation === 'vertical' ? 'height' : 'width';
    var rule = isLast ? ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px)'] : ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px) and (max-' + orientationRule + ': ' + maxBreakpoint + 'px)'];
    var multiplier = '((' + maxValue + ' - ' + minValue + ') / (' + maxBreakpoint + ' - ' + minBreakpoint + ') * 100' + orientationUnit + ')';
    var adder = '(((' + minValue + ' * ' + maxBreakpoint + ') - (' + maxValue + ' * ' + minBreakpoint + ')) / (' + maxBreakpoint + ' - ' + minBreakpoint + ')) * 1' + unit;
    var formula = 'calc(' + multiplier + ' + ' + adder + ')';
    var properties = Array.isArray(property) ? property : [property];
    return [isFirst ? properties.map(function (p) {
        return _defineProperty({}, p, '' + minValue + unit);
    }) : null, _defineProperty({}, rule, properties.map(function (p) {
        return _defineProperty({}, p, isLast ? '' + maxValue + unit : formula);
    }))];
};

exports.default = {
    clearfix: clearfix,
    createStyles: createStyles,
    defaultTransition: defaultTransition,
    ellipsis: ellipsis,
    fit: fit,
    fontSmoothing: fontSmoothing,
    fluidScale: fluidScale,
    fluidScales: fluidScales,
    hairline: hairline,
    sticky: sticky,
    vendorize: vendorize
};
//# sourceMappingURL=mixin.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _j2c = __webpack_require__(139);

var _j2c2 = _interopRequireDefault(_j2c);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var remove = function remove(id) {
    if (id) {
        var old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
var add = function add(id) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
    }

    addToDocument.apply(undefined, [{ id: id }].concat(styles));
};

/*
* opts: options object
  * id: identifier, used as HTMLElement id for the attached <style></style> element
  * document: document reference; default window.document
* styles: list of lists style Objects
*/
var addToDocument = function addToDocument(opts) {
    for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
    }

    var id = opts.id;
    var documentRef = opts.document || window.document;
    remove(id);
    var styleEl = documentRef.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach(function (styleList) {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach(function (style) {
                var scoped = { '@global': style };
                var sheet = _j2c2.default.sheet(scoped);
                styleEl.appendChild(documentRef.createTextNode(sheet));
            });
        }
    });
    documentRef.head.appendChild(styleEl);
};

exports.default = {
    add: add,
    addToDocument: addToDocument,
    remove: remove
};
//# sourceMappingURL=styler.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

var _default = __webpack_require__(25);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _default2.default, {
    // If we wanted to change the base color to orange:

    // color_primary: '255, 152, 0', // orange 500
    // color_primary_active: '251, 140, 0', // orange 600
    // color_primary_dark: '245, 124, 0', // orange 700
    // color_primary_faded: '255, 183, 77', // orange 300
    // color_primary_foreground: '255, 255, 255'
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _polythene = __webpack_require__(14);

var _polythene2 = _interopRequireDefault(_polythene);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _ripple = __webpack_require__(27);

var _ripple2 = _interopRequireDefault(_ripple);

var _shadow = __webpack_require__(17);

var _shadow2 = _interopRequireDefault(_shadow);

__webpack_require__(21);

__webpack_require__(39);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-button pe-button--text',
    content: 'pe-button__content',
    label: 'pe-button__label',
    raised: 'pe-button--raised',
    wash: 'pe-button__wash',
    focus: 'pe-button__focus',
    selected: 'pe-button--selected',
    disabled: 'pe-button--disabled',
    borders: 'pe-button--borders',
    inactive: 'pe-button--inactive',
    focusState: 'pe-button--focus'
};

var MAX_Z = 5;

var startType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchstart' : 'mousedown';
var endType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchend' : 'mouseup';

var tapStart = void 0,
    tapEnd = void 0,
    tapEndAll = void 0,
    downButtons = [];

var animateZ = function animateZ(ctrl, opts, name) {
    var baseZ = ctrl.baseZ();
    var increase = opts.increase || 1;
    var z = ctrl.z();
    if (name === 'down' && baseZ !== 5) {
        z = z + increase;
        z = Math.min(z, MAX_Z);
    } else if (name === 'up') {
        z = z - increase;
        z = Math.max(z, baseZ);
    }
    if (z !== ctrl.z()) {
        ctrl.z(z);
        _mithril2.default.redraw(); // make animation visible
    }
};

var inactivate = function inactivate(ctrl, opts) {
    ctrl.inactive = true;
    _mithril2.default.redraw();
    setTimeout(function () {
        ctrl.inactive = false;
        _mithril2.default.redraw();
    }, opts.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, ctrl, opts) {
    var tapHandler = function tapHandler(ctrl, opts, name) {
        if (name === 'down') {
            downButtons.push({ ctrl: ctrl, opts: opts });
        } else if (name === 'up') {
            if (opts.inactivate && !ctrl.inactive) {
                inactivate(ctrl, opts);
            }
        }
        // no z animation on touch
        if (opts.animateOnTap && !_polythene2.default.isTouch) {
            animateZ(ctrl, opts, name);
        }
    };
    tapStart = function tapStart() {
        return tapHandler(ctrl, opts, 'down');
    };
    tapEnd = function tapEnd() {
        return tapHandler(ctrl, opts, 'up');
    };
    tapEndAll = function tapEndAll() {
        downButtons.map(function (btn) {
            tapHandler(btn.ctrl, btn.opts, 'up');
        });
        downButtons = [];
    };
    el.addEventListener(startType, tapStart);
    el.addEventListener(endType, tapEnd);
    window.addEventListener(endType, tapEndAll);
};

var clearTapEvents = function clearTapEvents(el) {
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var noink = opts.ink !== undefined && opts.ink === false;
    var disabled = opts.disabled;
    var tag = opts.tag || 'a';
    ctrl.inactive = opts.inactive !== undefined ? opts.inactive === false ? false : true : ctrl.inactive;
    var tabIndex = disabled || ctrl.inactive ? -1 : opts.tabindex || 0;

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    var buttonConfig = function buttonConfig(el, isInited, context) {
        if (isInited) {
            return;
        }
        ctrl.el = el;
        if (!disabled && !ctrl.inactive) {
            initTapEvents(el, ctrl, _extends({}, opts, { animateOnTap: opts.animateOnTap !== false ? true : false }));
            context.onunload = function () {
                clearTapEvents(el);
            };
        }
    };
    var optsConfig = opts.config || function () {};
    var urlConfig = opts.url && opts.url.config ? opts.url.config : function () {};

    var props = _extends({}, {
        class: [opts.parentClass || CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, disabled ? CSS_CLASSES.disabled : null, ctrl.inactive ? CSS_CLASSES.inactive : null, opts.borders ? CSS_CLASSES.borders : null, opts.raised ? CSS_CLASSES.raised : null, ctrl.focus ? CSS_CLASSES.focusState : null, opts.class].join(' '),
        id: opts.id || '',
        tabindex: tabIndex,
        // handle focus events
        onfocus: function onfocus() {
            return ctrl.focus = !ctrl.mouseover;
        },
        onblur: function onblur() {
            return ctrl.focus = false;
        },
        // don't show focus on click (detected by not being in mouse over state)
        onmouseover: function onmouseover() {
            return ctrl.mouseover = true;
        },
        onmouseout: function onmouseout() {
            return ctrl.mouseover = false;
        },
        // if focus, dispatch click event on ENTER
        onkeydown: function onkeydown(e) {
            if (e.which === 13 && ctrl.focus && ctrl.el) {
                // ENTER
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                ctrl.el.dispatchEvent(event);
            }
        }
    }, opts.url ? opts.url : null, opts.formaction ? { formaction: opts.formaction } : null, opts.type ? { type: opts.type } : null, opts.events ? opts.events : null, {
        config: function config() {
            return [buttonConfig.apply(undefined, arguments), optsConfig.apply(undefined, arguments), urlConfig.apply(undefined, arguments)];
        }
    }, disabled ? {
        disabled: true
    } : null);

    var label = opts.content ? opts.content : opts.label ? _typeof(opts.label) === 'object' ? opts.label : (0, _mithril2.default)('div', { class: CSS_CLASSES.label }, opts.label) : null;

    var noWash = disabled || opts.wash !== undefined && !opts.wash;
    var wash = !noWash;
    var rippleOpts = _extends({}, opts.ripple, { inactive: noink });
    var content = (0, _mithril2.default)('div', {
        'class': CSS_CLASSES.content
    }, [opts.raised && !disabled ? (0, _mithril2.default)(_shadow2.default, {
        z: ctrl.z(),
        animated: true
    }) : null,
    // ripple
    disabled ? null : (0, _mithril2.default)(_ripple2.default, rippleOpts),
    // hover
    wash ? (0, _mithril2.default)('div', { class: CSS_CLASSES.wash }) : null,
    // focus
    disabled ? null : (0, _mithril2.default)('div', { class: CSS_CLASSES.focus }), label]);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;

        return {
            el: undefined,
            baseZ: _mithril2.default.prop(z),
            z: _mithril2.default.prop(z),
            inactive: undefined,
            focus: false,
            mouseover: false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=button.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _multiple = __webpack_require__(52);

var _multiple2 = _interopRequireDefault(_multiple);

var _dialogInstance = __webpack_require__(58);

var _dialogInstance2 = _interopRequireDefault(_dialogInstance);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _multiple2.default)({
    instance: _dialogInstance2.default,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});
//# sourceMappingURL=dialog.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repeatText = function repeatText(text, count) {
    var out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

var template = ['<div class="demo-content">', repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16), '</div>'].join('');

var shortBodyText = 'Discard draft?';

var cancelOkButtons = [_mithril2.default.component(_button2.default, {
    label: 'Cancel',
    events: {
        onclick: function onclick() {
            return _dialog2.default.hide();
        }
    }
}), _mithril2.default.component(_button2.default, {
    label: 'Discard',
    events: {
        onclick: function onclick() {
            return _dialog2.default.hide();
        }
    }
})];

var dialogProps = {
    class: 'demo-dialog',
    footer: cancelOkButtons,
    didHide: function didHide() {
        return _mithril2.default.route('/dialog');
    }
};

exports.default = {
    dialogProps: dialogProps,
    template: template,
    shortBodyText: shortBodyText,
    cancelOkButtons: cancelOkButtons
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

console.log("custom js");

exports.default = {
    button: function button(config) {
        var mainColor = '#e4521b';
        var textColor = '#fff';
        var configCustomCfg = _extends({}, config, {
            border_radius: 0,
            color_light_raised_normal_background: mainColor,
            color_light_raised_normal_text: textColor,
            color_dark_raised_normal_background: mainColor,
            color_dark_raised_normal_text: textColor
        });
        return [{ '': config }, // all pages
        { '.example-custom-theme ': configCustomCfg } // only this page
        ];
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(21);

__webpack_require__(68);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = opts.icon ? (0, _mithril2.default)(_icon2.default, opts.icon) : opts.content ? opts.content : null;
    return (0, _mithril2.default)(_button2.default, _extends({}, opts, {
        content: (0, _mithril2.default)('div', {
            class: CSS_CLASSES.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES.block, opts.compact ? CSS_CLASSES.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=icon-button.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _svg = __webpack_require__(92);

var _svg2 = _interopRequireDefault(_svg);

__webpack_require__(71);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var layoutContent = function layoutContent(opts) {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        var svgOpts = _extends({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return (0, _mithril2.default)(_svg2.default, svgOpts);
    } else if (opts.msvg) {
        return (0, _mithril2.default)('i.pe-svg', _mithril2.default.trust(opts.msvg));
    } else {
        return (0, _mithril2.default)('i', (0, _mithril2.default)('img', {
            src: opts.src
        }));
    }
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.icon, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = layoutContent(opts);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        _mithril2.default.redraw.strategy('none');
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=icon.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var layout = [{
    'display': '-webkit-box'
}, {
    'display': '-moz-box'
}, {
    'display': '-ms-flexbox',
    '-ms-flex-preferred-size': 'initial' // IE10
}, {
    'display': '-webkit-flex'
}, {
    'display': 'flex'
}];

var layoutInline = [layout, {
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

var layoutHorizontal = [layout, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
}];

var layoutHorizontalReverse = [layout, {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
}];

var layoutVertical = [layout, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
}];

var layoutVerticalReverse = [layout, {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
}];

var layoutWrap = [layout, {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
}];

var layoutWrapReverse = [layout, {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
}];

var layoutStart = [layout, {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
}];

var layoutCenter = [layout, {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
}];

var layoutEnd = [layout, {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
}];

var layoutJustified = [layout, {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
}];

var layoutStartJustified = [layout, {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
}];

var layoutCenterJustified = [layout, {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
}];

var layoutEndJustified = [layout, {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
}];

var flex = function flex() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}];
};

var flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexIndex = function flexIndex(index) {
    return {
        '-ms-flex': index,
        '-webkit-flex': index,
        'flex': index
    };
};

var flexGrow = function flexGrow(value) {
    return {
        '-webkit-flex-grow': value,
        'flex-grow': value
    };
};

var selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

var selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

var selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

var selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

exports.default = {
    flex: flex,
    flexAuto: flexAuto,
    flexAutoVertical: flexAutoVertical,
    flexIndex: flexIndex,
    flexGrow: flexGrow,
    layout: layout,
    layoutAroundJustified: layoutAroundJustified,
    layoutCenter: layoutCenter,
    layoutCenterCenter: layoutCenterCenter,
    layoutCenterJustified: layoutCenterJustified,
    layoutEnd: layoutEnd,
    layoutEndJustified: layoutEndJustified,
    layoutHorizontal: layoutHorizontal,
    layoutHorizontalReverse: layoutHorizontalReverse,
    layoutInline: layoutInline,
    layoutJustified: layoutJustified,
    layoutStart: layoutStart,
    layoutStartJustified: layoutStartJustified,
    layoutVertical: layoutVertical,
    layoutVerticalReverse: layoutVerticalReverse,
    layoutWrap: layoutWrap,
    layoutWrapReverse: layoutWrapReverse,
    selfCenter: selfCenter,
    selfEnd: selfEnd,
    selfStart: selfStart,
    selfStretch: selfStretch
};
//# sourceMappingURL=flex.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var blockMaxWidth = 720;
var listWidth = 360;
var margin = 20;

exports.default = {
    colorPrimary: '#219bf3',
    colorHeader: '#00c853',
    colorLink: '#0091EA',
    bodyBackgroundColor: '#eceff1',
    darkThemeBackgroundColor: '#263238',
    attentionColor: '#FF1744', // magento
    margin: margin,
    minWidth: 320,
    tabletWidth: 600,
    desktopWidth: 960,
    listWidth: listWidth,
    blockMaxWidth: blockMaxWidth,
    mediaTablet: blockMaxWidth + 2 * margin,
    mediaMobile: listWidth + 4 * margin
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _ripple = __webpack_require__(27);

var _ripple2 = _interopRequireDefault(_ripple);

__webpack_require__(78);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-list-tile',
    primary: 'pe-list-tile__primary',
    secondary: 'pe-list-tile__secondary',
    content: 'pe-list-tile__content',
    contentFront: 'pe-list-tile__content--front',
    title: 'pe-list-tile__title',
    subtitle: 'pe-list-tile__subtitle',
    highSubtitle: 'pe-list-tile__subtitle--high',
    selected: 'pe-list-tile--selected',
    disabled: 'pe-list-tile--disabled',
    sticky: 'pe-list-tile--sticky',
    hasSubtitle: 'pe-list-tile--subtitle',
    hasHighSubtitle: 'pe-list-tile--high-subtitle',
    hasFront: 'pe-list-tile--front',
    isCompact: 'pe-list-tile--compact',
    isHoverable: 'pe-list-tile--hoverable',
    isSelectable: 'pe-list-tile--selectable'
};

var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = opts.tag ? opts.tag : opts.url ? 'a' : 'div';

    var frontComp = opts.front ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }, opts.front) : opts.indent ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content + ' ' + CSS_CLASSES.contentFront
    }) : null;

    return (0, _mithril2.default)(tag, _extends({}, {
        class: CSS_CLASSES.primary
    }, opts.url, opts.events), [frontComp, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [opts.content ? opts.content : null, opts.title ? (0, _mithril2.default)('div', { class: CSS_CLASSES.title }, opts.title) : null, opts.subtitle ? (0, _mithril2.default)('div', { class: CSS_CLASSES.subtitle }, opts.subtitle) : null, opts.highSubtitle ? (0, _mithril2.default)('div', { class: CSS_CLASSES.subtitle + ' ' + CSS_CLASSES.highSubtitle }, opts.highSubtitle) : null])]);
};

var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var tag = void 0;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return (0, _mithril2.default)(tag, _extends({}, {
        class: CSS_CLASSES.secondary
    }, secondaryOpts.url, secondaryOpts.events), (0, _mithril2.default)('div', {
        class: CSS_CLASSES.content
    }, [secondaryOpts.icon ? (0, _mithril2.default)(_icon2.default, secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';

    var heightClass = opts.subtitle ? CSS_CLASSES.hasSubtitle : opts.highSubtitle ? CSS_CLASSES.hasHighSubtitle : opts.front || opts.indent ? CSS_CLASSES.hasFront : null;

    var props = {
        class: [CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, opts.disabled ? CSS_CLASSES.disabled : null, opts.sticky ? CSS_CLASSES.sticky : null, opts.compact ? CSS_CLASSES.isCompact : null, opts.hoverable ? CSS_CLASSES.isHoverable : null, opts.selectable ? CSS_CLASSES.isSelectable : null, heightClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
        // events and url are attached to primary content to not interfere with controls
    };
    var content = [opts.ink && !opts.disabled ? (0, _mithril2.default)(_ripple2.default, opts.ripple) : null, parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=list-tile.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

exports.default = {
    isTouch: isTouch
};
//# sourceMappingURL=polythene.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _polythene = __webpack_require__(14);

var _polythene2 = _interopRequireDefault(_polythene);

var _events = __webpack_require__(19);

var _events2 = _interopRequireDefault(_events);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _toolbar = __webpack_require__(20);

var _toolbar2 = _interopRequireDefault(_toolbar);

__webpack_require__(65);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    panel: 'pe-header-panel',
    header: 'pe-header',
    dropShadow: 'pe-header-panel__drop-shadow',
    outerContainer: 'pe-header-panel__outer-container',
    headerContainer: 'pe-header-panel__header-container',
    backgroundContainer: 'pe-header-panel__background-container',
    condensedBackground: 'pe-header-panel__condensed-background',
    headerBackground: 'pe-header-panel__header-background',
    mediaDimmer: 'pe-header-panel__media-dimmer',
    mainContainer: 'pe-header-panel__main-container',

    headerAnimated: 'pe-header--animated',
    fixed: 'pe-header-panel--fixed',
    cascaded: 'pe-header-panel--cascaded',
    modeCover: 'pe-header-panel--cover',
    modeScroll: 'pe-header-panel--scroll',
    modeSeamed: 'pe-header-panel--seamed',
    modeStandard: 'pe-header-panel--standard',
    modeTall: 'pe-header-panel--tall',
    modeWaterfallTall: 'pe-header-panel--waterfall-tall',
    modeWaterfall: 'pe-header-panel--waterfall',

    // lookups:
    toolbar: 'pe-toolbar',
    toolbarTopbar: 'pe-toolbar__bar--top',
    headerTall: 'pe-header--tall'
};

var DEFAULT_SHADOW_HEIGTH = 6;
var DEFAULT_HEADER_HEIGHT = 192;
var DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
var SCROLL_WATCH_TIMER = 150;

var scroller = void 0; // keep track of scrolling elements on the page
var scrollPositions = {};

var modeConfigs = {
    shadowAfterScroll: {
        'waterfall': 1,
        'waterfall-tall': 1
    },
    alwaysShadow: {
        'standard': 1,
        'tall': 1
    },
    noShadow: {
        'seamed': 1,
        'cover': 1,
        'scroll': 1
    },
    tallMode: {
        'tall': true,
        'waterfall-tall': true
    },
    outerScroll: {
        'scroll': 1
    }
};

var modeClasses = {
    'cover': CSS_CLASSES.modeCover,
    'scroll': CSS_CLASSES.modeScroll,
    'seamed': CSS_CLASSES.modeSeamed,
    'standard': CSS_CLASSES.modeStandard,
    'tall': CSS_CLASSES.modeTall,
    'waterfall-tall': CSS_CLASSES.modeWaterfallTall,
    'waterfall': CSS_CLASSES.modeWaterfall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return modeClasses[mode];
};

var setTransform = document.documentElement.style.transform !== undefined ? function (style, string) {
    style.transform = string;
} : function (style, string) {
    style.webkitTransform = string;
};

var translateY = function translateY(style, y) {
    var t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(style, t);
};

var createHeaderComponent = function createHeaderComponent() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tall = opts.tall || false;
    var tallClass = opts.tallClass || '';
    var toolbarOpts = opts.toolbar;
    if (toolbarOpts) {
        toolbarOpts.class = [toolbarOpts.class || null, tall ? tallClass : null].join(' ');
        if (!toolbarOpts.topBar) {
            toolbarOpts.topBar = (0, _mithril2.default)('div');
        }
        return (0, _mithril2.default)(_toolbar2.default, toolbarOpts);
    } else if (opts.content) {
        return (0, _mithril2.default)('div', {
            class: [CSS_CLASSES.header, opts.class || null, tall ? tallClass : null, opts.animated ? CSS_CLASSES.headerAnimated : ''].join(' ')
        }, opts.content);
    } else {
        return (0, _mithril2.default)('div', opts);
    }
};

var createViewHeader = function createViewHeader(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var initHeaderContainer = function initHeaderContainer(headerContainer, inited) {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem = headerContainer;
    };
    var header = opts.header ? createHeaderComponent(_extends({}, opts.header, ctrl.headerConfig)) : null;
    return (0, _mithril2.default)('div', {
        class: CSS_CLASSES.headerContainer,
        config: initHeaderContainer
    }, [(0, _mithril2.default)('div', {
        class: CSS_CLASSES.backgroundContainer
    }, [(0, _mithril2.default)('div', { class: CSS_CLASSES.condensedBackground }), (0, _mithril2.default)('div', { class: CSS_CLASSES.headerBackground }), (0, _mithril2.default)('div', { class: CSS_CLASSES.mediaDimmer })]), header, ctrl.mode === 'seamed' || ctrl.shadow === false ? null : (0, _mithril2.default)('div', { class: CSS_CLASSES.dropShadow })]);
};

var createViewContent = function createViewContent(ctrl, scrollConfig) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var initMainContainer = function initMainContainer(mainContainer, inited) {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem = mainContainer;
        }
    };
    return [(0, _mithril2.default)('div', {
        class: CSS_CLASSES.mainContainer,
        config: initMainContainer,
        onscroll: function onscroll(e) {
            scrollConfig.main(e);
            _events2.default.emit('scroll', e);
            ctrl.storeScrollPosition(e.target.scrollTop);
        }
    }, opts.content ? opts.content : null)];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var scrollerType = modeConfigs.outerScroll[ctrl.mode] ? 'outer' : 'main';
    var handleScroll = ctrl.handleScroll.bind(ctrl);
    var header = createViewHeader(ctrl, opts);
    var tag = opts.tag || 'div';

    var scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;

    var initOuterContainer = function initOuterContainer(outerContainer, inited) {
        var headerElem = outerContainer.querySelector('.' + CSS_CLASSES.header) || outerContainer.querySelector('.' + CSS_CLASSES.toolbar);
        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem) {
            return;
        }
        var headerContainer = outerContainer.querySelector('.' + CSS_CLASSES.headerContainer);
        var topBarElem = headerContainer.querySelector('.' + CSS_CLASSES.toolbarTopbar);
        var headerBg = headerContainer.querySelector('.' + CSS_CLASSES.headerBackground);
        var condensedHeaderBg = headerContainer.querySelector('.' + CSS_CLASSES.condensedBackground);

        ctrl.outerContainerElem = outerContainer;
        ctrl.headerElem = headerElem;
        ctrl.headerTopBarElem = topBarElem;
        ctrl.headerBg = headerBg;
        ctrl.condensedHeaderBg = condensedHeaderBg;

        if (!opts.animated) {
            ctrl.setHeight(headerContainer.clientHeight);
        }
        if (scrollConfig.outer) {
            ctrl.scrollerElem = outerContainer;
        }

        ctrl.restoreScrollPosition();
    };

    var props = _extends({}, {
        class: [CSS_CLASSES.panel, ctrl.fixed ? CSS_CLASSES.fixed : null, classForMode(ctrl.mode), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.headerPanelElem = el;
        }
    });

    var content = (0, _mithril2.default)('div', {
        class: CSS_CLASSES.outerContainer,
        config: initOuterContainer,
        onscroll: function onscroll(e) {
            scrollConfig.outer(e);
            _events2.default.emit('scroll', e);
        }
    }, [header, ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, scrollConfig, opts)]);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var ctrl = void 0,
            mode = void 0,
            y = void 0,
            scrolled = void 0,
            prevScrollTop = void 0,
            headerMargin = void 0,
            headerHeight = void 0;

        if (opts.mode) {
            mode = opts.mode;
        } else if (opts.header && opts.header.toolbar) {
            mode = opts.header.toolbar.mode;
        } else if (opts.header && opts.header.content) {
            mode = opts.header.mode;
        }
        mode = mode || 'standard';
        var tall = modeConfigs.tallMode[mode] || false;
        var tallClass = opts.tallClass || CSS_CLASSES.headerTall;
        var animated = opts.animated || false;
        var fixed = opts.fixed || false;
        var condenses = opts.condenses || false;
        var scrollAwayTopbar = opts.scrollAwayTopbar || false;
        var noReveal = opts.noReveal || false;
        var keepCondensedHeader = opts.keepCondensedHeader || false;
        var noDissolve = opts.noDissolve || false;
        var backgroundScrollSpeed = opts.backgroundScrollSpeed !== undefined ? opts.backgroundScrollSpeed : 0.5;
        y = 0;
        scrolled = false;
        prevScrollTop = 0;
        // defaults, finally set with setHeight
        var shadowHeight = DEFAULT_SHADOW_HEIGTH;
        headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
        var condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
        headerMargin = headerHeight - condensedHeaderHeight;

        var handleScrollFns = {
            standard: function standard() {
                //
            },
            fixed: function fixed() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: function animated() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                if (isScrolled !== scrolled) {
                    var headerElem = ctrl.headerElem;
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: function dynamicHeader() {
                var sy = void 0,
                    cascaded = false,
                    sTop = void 0;

                if (!ctrl.scrollInited && opts.initialScrollPosition) {
                    sTop = opts.initialScrollPosition;
                } else {
                    sTop = ctrl.scrollerElem.scrollTop;
                }

                if (!ctrl.scrollInited && opts.initialPositionFixed) {
                    prevScrollTop = sTop;
                    y = 0;
                    return;
                }

                if (sTop < headerMargin) {
                    sy = sTop;
                } else {
                    sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight, Math.max(0, noReveal || keepCondensedHeader ? sTop : y + sTop - prevScrollTop));
                    if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
                        sy = Math.max(sy, headerMargin);
                    }
                }
                if (sTop > 0) {
                    ctrl.transformHeader(sy);
                } else if (_polythene2.default.isTouch) {
                    ctrl.enlargeImage(sy);
                }
                if (!modeConfigs.noShadow[opts.mode]) {
                    if (sTop > sy) {
                        cascaded = true;
                    }
                    ctrl.showShadow(cascaded);
                }
                y = sy;
                prevScrollTop = Math.max(sTop, 0);
            }
        };

        var handleScrollFn = void 0;
        if (animated) {
            handleScrollFn = handleScrollFns.animated;
        } else if (mode === 'standard') {
            handleScrollFn = handleScrollFns.standard;
        } else if (fixed) {
            handleScrollFn = handleScrollFns.fixed;
        } else {
            handleScrollFn = handleScrollFns.dynamicHeader;
        }

        return {
            headerPanelElem: undefined,
            scrollerElem: undefined,
            outerContainerElem: undefined,
            headerContainerElem: undefined,
            headerTopBarElem: undefined,
            headerElem: undefined,
            headerBg: undefined,
            condensedHeaderBg: undefined,
            mode: mode,
            fixed: fixed,
            shadow: opts.shadow !== undefined && !opts.shadow ? false : true,
            scrollWatchId: 0,
            isScrolling: false,
            scrollInited: false,
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: function init(controller) {
                ctrl = controller;
            },

            setHeight: function setHeight(h) {
                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    var mainContainer = ctrl.outerContainerElem.querySelector('.' + CSS_CLASSES.mainContainer);
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: function handleScroll(e) {
                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling = true;
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(function () {
                        ctrl.isScrolling = false;
                        scroller = undefined;
                    }, SCROLL_WATCH_TIMER);
                }

                if (mode === 'scroll') {
                    return;
                }
                if (modeConfigs.alwaysShadow[mode]) {
                    ctrl.showShadow(true);
                }

                handleScrollFn();
                ctrl.scrollInited = true;

                if (e && opts.scroll) {
                    opts.scroll(e);
                }
            },

            condenseHeader: function condenseHeader(hy) {
                var reset = hy === null;

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem) {
                        translateY(ctrl.headerTopBarElem.style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                var hbg = ctrl.headerBg.style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        var chbg = ctrl.condensedHeaderBg.style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: function transformHeader(hy) {
                if (hy < 0) {
                    return;
                }
                translateY(ctrl.headerContainerElem.style, -hy);
                if (condenses) {
                    ctrl.condenseHeader(hy);
                }
                if (opts.transform) {
                    opts.transform({
                        y: hy,
                        height: headerHeight,
                        condensedHeight: condensedHeaderHeight
                    });
                }
            },

            enlargeImage: function enlargeImage(hy) {
                ctrl.headerBg.style.height = 100 / headerHeight * (headerHeight + Math.abs(hy / 2)) + '%';
            },

            showShadow: function showShadow(cascaded) {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem.classList[cascaded ? 'add' : 'remove'](CSS_CLASSES.cascaded);
            },

            storeScrollPosition: function storeScrollPosition(scrollTop) {
                if (opts.restoreScrollPositionId) {
                    scrollPositions[opts.restoreScrollPositionId] = scrollTop;
                }
            },

            restoreScrollPosition: function restoreScrollPosition() {
                if (opts.restoreScrollPositionId) {
                    var scrollTop = scrollPositions[opts.restoreScrollPositionId];
                    if (scrollTop !== undefined) {
                        var restore = function restore() {
                            return ctrl.scrollerElem.scrollTop = scrollTop;
                        };
                        restore();
                        setTimeout(restore, 0);
                    }
                }
            }
        };
    },

    view: function view(ctrl, opts) {
        if (scroller && scroller !== ctrl) {
            // if we are scrolling,
            // don't render other header-panels
            return {
                subtree: 'retain'
            };
        } else {
            return createView(ctrl, opts);
        }
    }
};

exports.default = component;
//# sourceMappingURL=header-panel.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

__webpack_require__(82);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-list',
    header: 'pe-list__header',
    borders: 'pe-list--borders',
    indentedBorders: 'pe-list--borders-indented',
    hasHeader: 'pe-list--header',
    isCompact: 'pe-list--compact',
    isHoverable: 'pe-list--hoverable',
    isSelectable: 'pe-list--selectable'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, opts.borders ? CSS_CLASSES.borders : null, opts.indentedBorders ? CSS_CLASSES.indentedBorders : null, opts.hoverable ? CSS_CLASSES.isHoverable : null, opts.selectable ? CSS_CLASSES.isSelectable : null, opts.header ? CSS_CLASSES.hasHeader : null, opts.compact ? CSS_CLASSES.isCompact : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var headerOpts = void 0;
    if (opts.header) {
        headerOpts = _extends({}, opts.header);
        headerOpts.class = [CSS_CLASSES.header, headerOpts.class || null].join(' ');
    }
    var content = [headerOpts ? (0, _mithril2.default)(_listTile2.default, headerOpts) : null, opts.tiles ? opts.tiles : null];
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=list.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(90);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

var classForDepth = function classForDepth() {
    var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return CSS_CLASSES.depth_n + Math.min(5, z);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var depthClass = classForDepth(opts.z);
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, opts.animated ? CSS_CLASSES.animated : '', opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = [opts.content ? opts.content : null, (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.bottomShadow, depthClass].join(' ')
    }), (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.topShadow, depthClass].join(' ')
    })];
    return (0, _mithril2.default)(tag, props, content);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=shadow.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config2.default.rgba;

var touch_height = _config2.default.unit_touch_height;
var height = 36;

exports.default = {
    margin_h: _config2.default.grid_unit,
    border_radius: _config2.default.unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * _config2.default.grid_unit,
    padding_v: 11,
    min_width: 8 * _config2.default.grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_flat_hover_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_flat_focus_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_flat_active_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_focus_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_raised_active_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_disabled),
    color_light_raised_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_flat_hover_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover),
    color_dark_flat_focus_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover),
    color_dark_flat_active_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba(_config2.default.color_primary),
    color_dark_raised_normal_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_raised_hover_background: _config2.default.color_primary_active,
    color_dark_raised_focus_background: _config2.default.color_primary_active,
    color_dark_raised_active_background: _config2.default.color_primary_dark,
    color_dark_raised_disabled_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled)
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    var wait = false;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, s);
        }
    };
};

var subscribe = function subscribe(eventName, listener, delay) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
    if (!listeners[eventName]) {
        return;
    }
    var index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

var emit = function emit(eventName, event) {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(function (listener) {
        listener(event);
    });
};

window.addEventListener('resize', function (e) {
    return emit('resize', e);
});
window.addEventListener('scroll', function (e) {
    return emit('scroll', e);
});
window.addEventListener('keydown', function (e) {
    return emit('keydown', e);
});

exports.default = {
    throttle: throttle,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    emit: emit
};
//# sourceMappingURL=events.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(101);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-toolbar',
    bar: 'pe-toolbar__bar',
    topBar: 'pe-toolbar__bar--top',
    middleBar: 'pe-toolbar__bar--middle',
    bottomBar: 'pe-toolbar__bar--bottom',
    animated: 'pe-header--animated',
    mediumTall: 'pe-header--medium-tall',
    tall: 'pe-header--tall'
};

var barWrapper = function barWrapper(className, content) {
    return (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.bar, className].join(' ')
    }, content);
};

var bar = function bar() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var bars = [];
    if (opts.content) {
        bars.push(barWrapper(CSS_CLASSES.topBar, opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper(CSS_CLASSES.topBar, opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper(CSS_CLASSES.middleBar, opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper(CSS_CLASSES.bottomBar, opts.bottomBar));
        }
    }
    return bars;
};

var modeClasses = {
    'medium-tall': CSS_CLASSES.mediumTall,
    tall: CSS_CLASSES.tall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return mode === 'standard' ? '' : modeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, CSS_CLASSES.animated, classForMode(opts.mode), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = bar(opts);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=toolbar.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);
//# sourceMappingURL=base-button.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'] || 'transparent';
    var activeBorder = config['color_' + tint + '_' + type + '_active_border'] || normalBorder;
    var disabledBorder = config['color_' + tint + '_' + type + '_disabled_border'] || normalBorder;
    return [_defineProperty({}, scope + '.pe-button', {
        '&, &:link, &:visited': {
            color: config['color_' + tint + '_' + type + '_normal_text']
        },

        ' .pe-button__content': {
            'background-color': config['color_' + tint + '_' + type + '_normal_background'],
            'border-color': normalBorder
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text'],

            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_disabled_background'],
                'border-color': disabledBorder
            }
        },

        '&.pe-button--selected': {
            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_active_background'],
                'border-color': activeBorder
            },
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        }
    })];
};

var noTouch = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'];
    var hoverBorder = config['color_' + tint + '_' + type + '_normal_border'] || normalBorder;
    return [_defineProperty({}, scope + '.pe-button:hover', {
        '&:not(.pe-button--selected) .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_hover_background'],
            'border-color': hoverBorder
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light', 'flat'), style(config, 'light', 'raised', '.pe-button--raised'), {
        'html.pe-no-touch': [noTouch(config, 'light', 'flat', ' '), noTouch(config, 'light', 'raised', ' .pe-button--raised')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', 'flat', ' '),
        // has dark theme
        style(config, 'dark', 'flat', '&'),
        //
        style(config, 'dark', 'raised', ' .pe-button--raised')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', 'flat', ' '), noTouch(config, 'dark', 'flat', '&'), noTouch(config, 'dark', 'raised', ' .pe-button--raised')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [{
        '.pe-button--text': {
            display: 'inline-block',
            'min-width': config.min_width + 'px',
            margin: '0 ' + config.margin_h + 'px',
            padding: config.outer_padding_v + 'px 0',
            background: 'transparent',
            border: 'none',

            ' .pe-button__content': {
                'border-width': 0,
                padding: '0 ' + config.padding_h + 'px',
                'border-radius': config.border_radius + 'px'
            },

            ' .pe-button__label': {
                padding: config.padding_v + 'px 0',
                'font-size': config.font_size + 'px',
                'line-height': config.font_size + 'px',
                'font-weight': config.font_weight,
                'text-transform': config.text_transform,
                'white-space': 'pre'
            },

            '&.pe-button--borders': {
                ' .pe-button__wash, pe-button__focus, .pe-ripple': _mixin2.default.fit(-1),

                ' .pe-button__content': {
                    'border-style': 'solid',
                    'border-width': '1px'
                },
                ' .pe-button__label': {
                    padding: config.padding_v - 1 + 'px 0'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = __webpack_require__(25);

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _default2.default;

// Example customization in custom config file:
//
// import 'polythene/common/object.assign';
// import config from 'polythene/config/default';
//
// export default Object.assign({}, config, {
//     // this site's base colors
//     color_primary: '255, 152, 0', // orange 500
//     color_primary_active: '251, 140, 0', // orange 600
//     color_primary_dark: '245, 124, 0', // orange 700
//     color_primary_faded: '255, 183, 77', // orange 300
//     color_primary_foreground: '255, 255, 255'
// });
// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the theme README.
//# sourceMappingURL=config.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// Global theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
    var bigint = parseInt(_hex.substring(1), 16);
    var r = bigint >> 16 & 255;
    var g = bigint >> 8 & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
};

var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return 'rgba(' + colorStr + ',' + opacity + ')';
};

var isInteger = function isInteger(nVal) {
    return typeof nVal === 'number' && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = 'cubic-bezier(.4, 0, .2, 1)';
var animation_curve_slow_in_linear_out = 'cubic-bezier(0, 0, .2, 1)';
var animation_curve_linear_in_fast_out = 'cubic-bezier(.4, 0, 1, 1)';

exports.default = {
    // util functions
    rgba: rgba,
    hex: hex,
    isInteger: isInteger,

    grid_unit: grid_unit,
    grid_unit_component: grid_unit_component,
    grid_unit_menu: 56,
    grid_unit_icon_button: 6 * grid_unit_component, // 48

    // common sizes
    unit_block_border_radius: 2,
    unit_item_border_radius: 2,
    unit_indent: 72,
    unit_side_padding: isDesktop ? 24 : 16,

    // buttons
    unit_touch_height: 48,
    unit_icon_size_small: 2 * grid_unit_component, // 16
    unit_icon_size: 3 * grid_unit_component, // 24
    unit_icon_size_medium: 4 * grid_unit_component, // 32
    unit_icon_size_large: 5 * grid_unit_component, // 40

    // screen dimensions
    unit_screen_size_extra_large: 1280,
    unit_screen_size_large: 960,
    unit_screen_size_medium: 480,
    unit_screen_size_small: 320,

    // transitions
    animation_duration: '.18s',
    animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
    animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
    animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
    animation_curve_default: 'ease-out',

    // font
    font_weight_light: 300,
    font_weight_normal: 400,
    font_weight_medium: 500,
    font_weight_bold: 700,
    font_size_title: 20,
    line_height: 1.3,

    // base colors
    color_primary: '33, 150, 243', // blue 500
    color_primary_active: '30, 136, 229', // blue 600
    color_primary_dark: '25, 118, 210', // blue 700
    color_primary_faded: '100, 181, 249', // blue 300
    color_primary_foreground: '255, 255, 255',

    color_light_background: '255, 255, 255',
    color_light_foreground: '0, 0, 0',
    color_dark_background: '34, 34, 34',
    color_dark_foreground: '255, 255, 255',

    // blends
    blend_light_text_primary: .87,
    blend_light_text_regular: .73,
    blend_light_text_secondary: .54,
    blend_light_text_tertiary: .40,
    blend_light_text_disabled: .26,
    blend_light_border_light: .11,
    blend_light_background_active: .14,
    blend_light_background_hover: .06,
    blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
    blend_light_background_disabled: .09,
    blend_light_overlay_background: .3,

    blend_dark_text_primary: 1,
    blend_dark_text_regular: .87,
    blend_dark_text_secondary: .70,
    blend_dark_text_tertiary: .40,
    blend_dark_text_disabled: .26,
    blend_dark_border_light: .10,
    blend_dark_background_active: .14,
    blend_dark_background_hover: .08,
    blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
    blend_dark_background_disabled: .12,
    blend_dark_overlay_background: .3,

    // css vendor prefixes
    prefixes_animation: ['o', 'moz', 'webkit'],
    prefixes_appearance: ['o', 'moz', 'ms', 'webkit'],
    prefixes_background_size: ['o', 'moz', 'webkit'],
    prefixes_box_shadow: ['moz', 'webkit'],
    prefixes_keyframes: ['o', 'moz', 'webkit'],
    prefixes_transform: ['o', 'moz', 'ms', 'webkit'],
    prefixes_transition: ['o', 'moz', 'webkit'],
    prefixes_user_select: ['moz', 'ms', 'webkit'],

    // breakpoints
    breakpoint_small_handset_portrait: 0,
    breakpoint_medium_handset_portrait: 360,
    breakpoint_large_handset_portrait: 400,
    breakpoint_small_tablet_portrait: 600,
    breakpoint_large_tablet_portrait: 720,
    // landscape
    breakpoint_small_handset_landscape: 480,
    breakpoint_medium_handset_landscape: 600,
    breakpoint_large_handset_landscape: 720,

    // environment
    env_tablet: window.innerWidth >= 600,
    env_desktop: window.innerWidth >= 1024,

    // z-index
    z_menu: 1000,
    z_header_container: 2000,
    z_fixed_header_container: 3000,
    z_notification: 4000,
    z_dialog: 5000
};
//# sourceMappingURL=default.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(18);

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(14);

var _polythene2 = _interopRequireDefault(_polythene);

var _transitionEvent = __webpack_require__(54);

var _transitionEvent2 = _interopRequireDefault(_transitionEvent);

__webpack_require__(85);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var transitionEvent = (0, _transitionEvent2.default)();
var DEFAULT_START_OPACITY = 0.2;
var OPACITY_DECAY_VELOCITY = 0.35;

var CSS_CLASSES = {
    ripple: 'pe-ripple',
    waves: 'pe-ripple__waves',
    mask: 'pe-ripple__mask',
    constrained: 'pe-ripple--constrained',
    animated: 'pe-ripple__waves--animated'
};

var makeRipple = function makeRipple(e, ctrl) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var el = ctrl.ripple();
    var wavesEl = ctrl.waves();
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var rect = el.getBoundingClientRect();
    var x = _polythene2.default.isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = _polythene2.default.isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var mx = opts.center ? rect.left + rect.width / 2 : x;
    var my = opts.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var initialOpacity = opts.initialOpacity !== undefined ? opts.initialOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = opts.opacityDecayVelocity !== undefined ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var duration = 1 / opacityDecayVelocity * initialOpacity;
    var color = window.getComputedStyle(el).color;
    var onEnd = function onEnd(evt) {
        wavesEl.classList.remove(CSS_CLASSES.animated);
        wavesEl.removeEventListener(transitionEvent, onEnd, false);
        if (opts.end) {
            opts.end(evt);
        }
    };

    wavesEl.classList.remove(CSS_CLASSES.animated);
    var style = wavesEl.style;
    style.width = style.height = waveRadius + 'px';
    style.top = ry + 'px';
    style.left = rx + 'px';
    style['animation-duration'] = style['-webkit-animation-duration'] = style['-moz-animation-duration'] = style['-o-animation-duration'] = duration + 's';
    style.backgroundColor = color;
    style.opacity = initialOpacity;
    wavesEl.addEventListener(transitionEvent, onEnd, false);

    if (opts.start) {
        opts.start(e);
    }
    wavesEl.classList.add(CSS_CLASSES.animated);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (opts.disabled) {
        return (0, _mithril2.default)('');
    }
    var initRipple = function initRipple(el, inited, context) {
        if (inited) {
            return;
        }
        ctrl.ripple(el);
        var parent = el.parentElement;
        if (!opts.inactive) {
            var onClick = function onClick(e) {
                makeRipple(e, ctrl, opts);
            };
            var endType = _polythene2.default.isTouch ? 'click' : 'mouseup';
            parent.addEventListener(endType, onClick, false);
            context.onunload = function () {
                parent.removeEventListener(endType, onClick, false);
            };
        }
    };
    var initWaves = function initWaves(waves, inited) {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.ripple, opts.constrained !== false ? CSS_CLASSES.constrained : null, opts.class].join(' '),
        id: opts.id || '',
        config: initRipple
    };
    var content = (0, _mithril2.default)('div', {
        class: CSS_CLASSES.mask
    }, (0, _mithril2.default)('div', {
        class: CSS_CLASSES.waves,
        config: initWaves
    }));
    return (0, _mithril2.default)(tag, props, content);
};

var component = {
    controller: function controller() {
        return {
            ripple: _mithril2.default.prop(),
            waves: _mithril2.default.prop(),
            delegate: _mithril2.default.prop()
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=ripple.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(88);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    inactive: 'pe-control--inactive',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }
    var checked = ctrl.checked();
    var selectable = opts.selectable(checked);
    var inactive = opts.disabled || !selectable;
    var tag = opts.tag || 'div';
    var name = opts.name || '';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.defaultClass, checked ? CSS_CLASSES.on : CSS_CLASSES.off, opts.disabled ? CSS_CLASSES.disabled : null, inactive ? CSS_CLASSES.inactive : null, classForType(opts.size), opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
        }
    }, opts.events ? opts.events : null);
    var content = [(0, _mithril2.default)('input', {
        class: CSS_CLASSES.input,
        name: name,
        value: ctrl.value(),
        type: opts.type, // set by checkbox / radio-button
        tabindex: -1, // set in selectionView / icon-button
        checked: checked,
        config: function config(el, inited) {
            if (inited) return;
            ctrl.setInputEl(el);
        }
    }), (0, _mithril2.default)('label', _extends({}, {
        class: CSS_CLASSES.label,
        tabindex: -1 }, inactive ? null : {
        onclick: function onclick() {
            return ctrl.toggle();
        }
    }), [opts.selectionView ? opts.selectionView(checked, opts) : null, opts.label ? (0, _mithril2.default)('span', opts.label) : null])];
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        var defaultChecked = false;
        var _value = opts.value || '1';
        var inputEl = void 0;

        var setInputElChecked = function setInputElChecked(isChecked) {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        var getOptsChecked = function getOptsChecked() {
            if (typeof opts.checked === 'function') {
                var v = opts.checked();
                return v !== undefined ? v : defaultChecked;
            } else {
                return opts.checked !== undefined ? opts.checked : defaultChecked;
            }
        };

        var setInputEl = function setInputEl(el) {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        var setChecked = function setChecked(isChecked) {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value: _value,
                    el: inputEl
                });
            }
        };

        var toggle = function toggle() {
            return setChecked(!inputEl.checked);
        };

        return {
            setInputEl: setInputEl,
            setChecked: setChecked,
            checked: function checked() {
                return inputEl ? inputEl.checked : getOptsChecked();
            },
            toggle: toggle,
            value: function value() {
                return _value;
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=selection-control.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

// Returns a style function to be used by checkbox and radio-button

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-control', {
        color: config['color_' + tint + '_on_text'], // override by specifying 'color'

        ' .pe-control__label': {
            ' span': {
                color: config['color_' + tint + '_label_text']
            }
        },
        ' .pe-control__box': {
            ' .pe-control__button': {
                color: 'currentcolor',

                ' .pe-control__button--on': {
                    color: 'currentcolor'
                },

                ' .pe-control__button--off': {
                    color: config['color_' + tint + '_off_icon']
                }
            }
        },
        '&.pe-control--off': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_off_opacity'],
                'background-color': config['color_' + tint + '_focus_off']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config['color_' + tint + '_focus_on']
            }
        },
        '&.pe-control--on': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_on_opacity'],
                'background-color': config['color_' + tint + '_focus_on']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config['color_' + tint + '_focus_off']
            }
        },

        '&.pe-control--disabled': {
            ' .pe-control__label span': {
                color: config['color_' + tint + '_disabled_text']
            },
            ' .pe-control__box': {
                ' .pe-control__button--on, .pe-control__button--off': {
                    color: config['color_' + tint + '_disabled_text']
                }
            }
        }
    })];
};

exports.default = style;
//# sourceMappingURL=color.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var activeColor = _config2.default.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
var rgba = _config2.default.rgba;
var label_padding = (_config2.default.grid_unit_icon_button - _config2.default.unit_icon_size) / 2; // 12

exports.default = {
    label_font_size: 2 * _config2.default.grid_unit_component, // 16
    label_height: 3 * _config2.default.grid_unit_component, // 24
    padding: Math.floor(1.7 * _config2.default.grid_unit_component),
    label_padding: label_padding,
    button_size: 6 * _config2.default.grid_unit_component,
    icon_size: 3 * _config2.default.grid_unit_component,
    animation_duration: _config2.default.animation_duration,

    color_light_on_text: _config2.default.rgba(activeColor),
    color_light_off_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_off_icon: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_label_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_disabled_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    color_light_focus_on: rgba(_config2.default.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba(_config2.default.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on_text: _config2.default.rgba(activeColor),
    color_dark_off_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_off_icon: '#fff',
    color_dark_label_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_disabled_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    color_dark_focus_on: rgba(_config2.default.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba(_config2.default.color_dark_foreground),
    color_dark_focus_off_opacity: .09
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}
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

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _selectionControl = __webpack_require__(28);

var _selectionControl2 = _interopRequireDefault(_selectionControl);

var _shadow = __webpack_require__(17);

var _shadow2 = _interopRequireDefault(_shadow);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

__webpack_require__(95);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

var selectionView = function selectionView(checked, opts) {
    var zOff = opts.zOff !== undefined ? opts.zOff : 1;
    var zOn = opts.zOn !== undefined ? opts.zOn : 2;
    var z = checked ? zOn : zOff;
    var raised = opts.disabled ? false : opts.raised !== undefined ? opts.raised : true;
    return [(0, _mithril2.default)('div', { class: CSS_CLASSES.track }), (0, _mithril2.default)(_iconButton2.default, {
        class: CSS_CLASSES.thumb,
        tabindex: opts.tabindex || 0,
        ink: opts.ink !== undefined ? opts.ink : false,
        wash: opts.wash,
        disabled: opts.disabled,
        content: [(0, _mithril2.default)('div', {
            class: CSS_CLASSES.knob
        }, [opts.icon ? opts.icon : null, raised ? (0, _mithril2.default)(_shadow2.default, {
            z: z,
            animated: true
        }) : null])]
    })];
};

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.defaultClass = CSS_CLASSES.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    opts.selectable = selectable;
    return (0, _mithril2.default)(_selectionControl2.default, opts);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=switch.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _dialogReplaceTwo = __webpack_require__(130);

var _dialogReplaceTwo2 = _interopRequireDefault(_dialogReplaceTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    body: 'Dialog One',
    footer: _mithril2.default.component(_button2.default, {
        label: 'Show Two',
        events: {
            onclick: function onclick() {
                return _dialog2.default.show(_dialogReplaceTwo2.default);
            }
        }
    })
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(53);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _toolbar = __webpack_require__(20);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _list = __webpack_require__(16);

var _list2 = _interopRequireDefault(_list);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

var _headerPanel = __webpack_require__(15);

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _nav = __webpack_require__(106);

var _nav2 = _interopRequireDefault(_nav);

var _github = __webpack_require__(104);

var _github2 = _interopRequireDefault(_github);

var _page = __webpack_require__(135);

var _page2 = _interopRequireDefault(_page);

__webpack_require__(97);

__webpack_require__(75);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _appStyle = __webpack_require__(103);

var _appStyle2 = _interopRequireDefault(_appStyle);

var _arrowRight = __webpack_require__(146);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _recycle = __webpack_require__(108);

var _recycle2 = _interopRequireDefault(_recycle);

var _button = __webpack_require__(111);

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(113);

var _card2 = _interopRequireDefault(_card);

var _checkbox = __webpack_require__(115);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _customTheme = __webpack_require__(116);

var _customTheme2 = _interopRequireDefault(_customTheme);

var _dialog3 = __webpack_require__(119);

var _dialog4 = _interopRequireDefault(_dialog3);

var _switch = __webpack_require__(137);

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Local styles


// Material Design style
_styler2.default.add('polythene-examples-app', _appStyle2.default);
// import mFab from './fab/fab';
// import mHeaderPanel from './header-panel/header-panel';
// import mIcon from './icon/icon';
// import mIconButton from './icon-button/icon-button';
// import mLayout from './layout/layout';
// import mList from './list/list';
// import mListControls from './list-controls/list-controls';
// import mListTile from './list-tile/list-tile';
// import mMenu from './menu/menu';
// import mNotification from './notification/notification';
// import mRadioButton from './radio-button/radio-button';
// import mRipple from './ripple/ripple';
// import mSearch from './search/search';
// import mShadow from './shadow/shadow';
// import mSlider from './slider/slider';
// import mSpeedTest from './speed-test/speed-test';
// import mSpinner from './spinner/spinner';
// import mSVG from './svg/svg';

// import mTabs from './tabs/tabs';
// import mTabsMenu from './tabs/tabs-menu';
// import mTabsRouting from './tabs/tabs-routing';
// import mTextfield from './textfield/textfield';
// import mToolbar from './toolbar/toolbar';
// import mValidation from './validation/validation';

var links = [{
  label: 'Components',
  links: [
  // {
  //   url: '/header-panel',
  //   module: mHeaderPanel,
  //   name: 'Header Panel',
  //   doc: 'http://polythene.js.org/#header-panel'
  // },
  // {
  //   url: '/toolbar',
  //   module: mToolbar,
  //   name: 'Toolbar',
  //   doc: 'http://polythene.js.org/#toolbar'
  // },
  // {
  //   url: '/list',
  //   module: mList,
  //   name: 'List'
  // },
  // {
  //   url: '/list-controls',
  //   module: mListControls,
  //   name: 'List Controls'
  // },
  {
    url: '/dialog',
    module: _dialog4.default,
    name: 'Dialog'
  },
  // {
  //   url: '/menu',
  //   module: mMenu,
  //   name: 'Menu'
  // },
  // {
  //   url: '/tabs',
  //   module: mTabs,
  //   name: 'Tabs'
  // },
  {
    url: '/card',
    module: _card2.default,
    name: 'Card'
  },
  // {
  //   url: '/notification',
  //   module: mNotification,
  //   name: 'Notification and Snackbar'
  // },
  {
    url: '/button',
    module: _button2.default,
    name: 'Button'
  },
  // {
  //   url: '/icon-button',
  //   module: mIconButton,
  //   name: 'Icon Button'
  // },
  // {
  //   url: '/fab',
  //   module: mFab,
  //   name: 'Floating Action Button'
  // },
  // {
  //   url: '/slider',
  //   module: mSlider,
  //   name: 'Slider'
  // },
  // {
  //   url: '/list-tile',
  //   module: mListTile,
  //   name: 'List Tile'
  // },
  // {
  //   url: '/textfield',
  //   module: mTextfield,
  //   name: 'Text field'
  // },
  {
    url: '/checkbox',
    module: _checkbox2.default,
    name: 'Checkbox'
  },
  // {
  //   url: '/radio-button',
  //   module: mRadioButton,
  //   name: 'Radio button'
  // },
  // {
  //   url: '/search',
  //   module: mSearch,
  //   name: 'Search'
  // },
  // {
  //   url: '/spinner',
  //   module: mSpinner,
  //   name: 'Spinner'
  // },
  {
    url: '/switch',
    module: _switch2.default,
    name: 'Switch'
  }]
}, {
  label: 'Layout and theming',
  links: [
  // {
  //   url: '/layout',
  //   module: mLayout,
  //   name: 'Layout'
  // },
  {
    url: '/custom-theme',
    module: _customTheme2.default,
    name: 'Custom theme'
  }]
}, {
  label: 'Tests',
  links: [
    // {
    //   url: '/speed-test',
    //   module: mSpeedTest,
    //   name: 'Mobile tap speed tests'
    // }
  ]
}];

var additionalRoutes = [{
  url: '/dialog/:any...',
  module: _dialog4.default
}];

var linkMap = {};
links.forEach(function (group) {
  group.links.forEach(function (linkData) {
    linkMap[linkData.url] = linkData;
  });
});
additionalRoutes.forEach(function (linkData) {
  linkMap[linkData.url] = linkData;
});

var sortLinkData = function sortLinkData(a, b) {
  var a1 = a.name.toLowerCase();
  var b1 = b.name.toLowerCase();
  return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
};

var getRouteBase = function getRouteBase(route) {
  return '/' + route.split(/\//)[1];
};

var item = function item(link) {
  return (0, _mithril2.default)(_listTile2.default, {
    title: link.name,
    url: {
      href: link.url,
      config: link.config !== undefined ? link.config : _mithril2.default.route
    }
  });
};

var index = {
  ctrl: function ctrl() {
    document.title = "Polythene Examples";
  },
  view: function view() {
    return (0, _mithril2.default)("div", [(0, _mithril2.default)(_toolbar2.default, {
      class: "app-toolbar",
      topBar: (0, _mithril2.default)("span", "Polythene Examples")
    }), (0, _mithril2.default)('.index', (0, _mithril2.default)('.index-list', [links.map(function (linkGroup) {
      return (0, _mithril2.default)(_list2.default, {
        header: {
          title: linkGroup.label
        },
        tiles: linkGroup.links.sort(sortLinkData).map(function (link) {
          return link.hidden ? null : item(link);
        }),
        hoverable: true
      });
    })])), _github2.default
    // m(list, {
    //   hoverable: true,
    //   tiles: pages.map(link => (
    //     m(listTile, {
    //       title: link.name,
    //       url: {
    //         href: link.path,
    //         config: m.route
    //       }
    //     })
    //   ))
    // })
    ]);
  }
};

_mithril2.default.route.mode = 'hash';
var mountNode = document.querySelector("#app");
var routes = {
  "/": index
};
links.forEach(function (group) {
  return group.links.forEach(function (data) {
    return routes[data.url] = (0, _page2.default)(data.name, data.module, "/");
  });
});
_mithril2.default.route(mountNode, "/", routes);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _layout = __webpack_require__(38);

var _layout2 = _interopRequireDefault(_layout);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_styler2.default.add('pe-base-button', _layout2.default);
//# sourceMappingURL=index.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var style = [{
    '.pe-button': [_mixin2.default.vendorize({
        'user-select': 'none'
    }, _config2.default.prefixes_user_select), {
        outline: 'none',
        padding: 0,
        'text-decoration': 'none',
        'text-align': 'center',
        cursor: 'pointer',

        '&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive': {
            cursor: 'default',
            'pointer-events': 'none'
        },

        ' .pe-button__content': {
            position: 'relative',
            'border-radius': 'inherit'
        },

        ' .pe-button__label': [_mixin2.default.fontSmoothing(), {
            position: 'relative',
            'z-index': 1, // stick above wash that has position absolute
            display: 'block',
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__wash, .pe-button__focus': [_mixin2.default.defaultTransition('background-color'), _mixin2.default.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__focus': {
            opacity: 0
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1
            }
        },

        ' .pe-button__wash': {
            'z-index': 1
        }
    }]
}];

exports.default = style;
//# sourceMappingURL=layout.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(23);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(22);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.button;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-button-text', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _shadow = __webpack_require__(17);

var _shadow2 = _interopRequireDefault(_shadow);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

__webpack_require__(43);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-card',
    overlay: 'pe-card__overlay',
    overlaySheet: 'pe-card__overlay--sheet',
    overlayContent: 'pe-card__overlay__content',
    mediaDimmer: 'pe-card__media__dimmer',
    mediaCropX: 'pe-card__media--crop-x',
    mediaCropY: 'pe-card__media--crop-y',
    media: 'pe-card__media',
    header: 'pe-card__header',
    headerTitle: 'pe-card__header-title',
    title: 'pe-card__title',
    subtitle: 'pe-card__subtitle',
    text: 'pe-card__text',
    primary: 'pe-card__primary',
    primaryMedia: 'pe-card__primary__media',
    actions: 'pe-card__actions',
    actionsHorizontal: 'pe-card__actions--horizontal',
    actionsVertical: 'pe-card__actions--vertical',
    actionsJustified: 'pe-card__actions--justified',
    actionsBordered: 'pe-card__actions--borders',
    mediaRatioSquare: 'pe-card__media--square',
    mediaRatioLandscape: 'pe-card__media--landscape',
    primaryHasMedia: 'pe-card__primary--media',
    mediaSmall: 'pe-card__media--small',
    mediaRegular: 'pe-card__media--regular',
    mediaMedium: 'pe-card__media--medium',
    mediaLarge: 'pe-card__media--large'
};

var imageRatios = {
    landscape: 16 / 9,
    square: 1
};

var createOverlay = function createOverlay() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tag = opts.tag || 'div';
    var content = opts.content.map(function (o) {
        var key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.overlay, opts.sheet ? CSS_CLASSES.overlaySheet : null].join(' ')
    }, [(0, _mithril2.default)(tag, {
        class: [CSS_CLASSES.overlayContent, opts.class].join(' ')
    }, content), (0, _mithril2.default)('div', {
        class: CSS_CLASSES.mediaDimmer
    })]);
};

var createText = function createText(o) {
    var opts = o.text || {};
    var tag = opts.tag || 'div';
    return (0, _mithril2.default)(tag, {
        class: [CSS_CLASSES.text, opts.class].join(' ')
    }, opts.content);
};

// media type to class

var mediaTypeClasses = {
    small: CSS_CLASSES.mediaSmall,
    regular: CSS_CLASSES.mediaRegular,
    medium: CSS_CLASSES.mediaMedium,
    large: CSS_CLASSES.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
    var opts = o.media || {};
    var ratio = opts.ratio || 'landscape';
    var origin = opts.origin || 'center';
    var tag = opts.tag || 'div';

    var initImage = function initImage(el, inited) {
        if (inited) {
            return;
        }
        var img = el.querySelector('img');
        if (img) {
            img.onload = function () {
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var naturalRatio = w / h;
                // crop-x: crop over x axis
                // crop-y: crop over y axis
                var cropClass = naturalRatio < imageRatios[ratio] ? CSS_CLASSES.mediaCropX : CSS_CLASSES.mediaCropY;
                img.className = cropClass;

                if (origin !== 'start') {
                    var clientWidth = el.clientWidth;
                    var clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        var imageHeight = clientWidth / naturalRatio;
                        var diff = clientHeight - imageHeight;
                        var offset = Math.ceil(origin === 'center' ? diff / 2 : diff);
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        var imageWidth = clientHeight * naturalRatio;
                        var _diff = clientWidth - imageWidth;
                        var _offset = Math.ceil(origin === 'center' ? _diff / 2 : _diff);
                        this.style.marginLeft = _offset + 'px';
                    }
                }
            };
        }
    };

    return (0, _mithril2.default)(tag, {
        class: [CSS_CLASSES.media, mediaClassForType(opts.type), ratio === 'landscape' ? CSS_CLASSES.mediaRatioLandscape : CSS_CLASSES.mediaRatioSquare, opts.class].join(' '),
        config: initImage
    }, [opts.content, opts.overlay ? createOverlay(opts.overlay) : (0, _mithril2.default)('div', { class: CSS_CLASSES.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
    var opts = o.header || {};
    return (0, _mithril2.default)(_listTile2.default, _extends({}, opts, {
        class: [CSS_CLASSES.header, opts.class].join(' ')
    }, opts.icon ? {
        front: (0, _mithril2.default)(_icon2.default, opts.icon)
    } : null));
};

var actionLayoutClasses = {
    horizontal: CSS_CLASSES.actionsHorizontal,
    vertical: CSS_CLASSES.actionsVertical,
    justified: CSS_CLASSES.actionsJustified
};
var actionClassForLayout = function actionClassForLayout() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'horizontal';
    return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
    var opts = o.actions || {};
    var tag = opts.tag || 'div';
    return (0, _mithril2.default)(tag, {
        class: [CSS_CLASSES.actions, actionClassForLayout(opts.layout), opts.class].join(' ')
    }, opts.content);
};

var createPrimary = function createPrimary(o) {
    var content = void 0,
        key = void 0,
        partOpts = void 0;
    var opts = o.primary || {};
    var tag = opts.tag || 'div';
    var primaryHasMedia = false;

    var lookup = {
        title: function title(pops) {
            return pops.attrs ? pops : (0, _mithril2.default)('div', { class: CSS_CLASSES.title }, [pops.title ? pops.title : null, pops.subtitle ? (0, _mithril2.default)('div', { class: CSS_CLASSES.subtitle }, pops.subtitle) : null]);
        },
        media: function media(pops) {
            primaryHasMedia = true;
            return (0, _mithril2.default)('div', {
                class: CSS_CLASSES.primaryMedia
            }, createMedia({
                media: pops
            }));
        },
        actions: function actions(pops) {
            return createActions({
                actions: pops
            });
        }
    };

    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (part) {
            key = Object.keys(part)[0];
            partOpts = part[key];
            if (lookup[key]) {
                return lookup[key](partOpts);
            } else {
                return part;
            }
        });
    } else {
        // shorthand for simple primary titles
        content = [opts.title ? lookup.title({
            title: opts.title,
            subtitle: opts.subtitle
        }) : null, opts.media ? lookup.media(opts.media) : null, opts.actions ? lookup.actions(opts.actions) : null, opts.content ? opts.content : null];
    }
    return (0, _mithril2.default)(tag, {
        class: [CSS_CLASSES.primary, primaryHasMedia ? CSS_CLASSES.primaryHasMedia : null].join(' ')
    }, content);
};

var contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || opts.url ? 'a' : 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);

    var content = void 0;
    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (o) {
            var key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift((0, _mithril2.default)(_shadow2.default, {
            z: ctrl.z(),
            animated: true
        }));
    } else {
        content = [(0, _mithril2.default)(_shadow2.default, {
            z: ctrl.z(),
            animated: true
        }), opts.content];
    }
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: _mithril2.default.prop(z)
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=card.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-card', {
        'background-color': config['color_' + tint + '_main_background']
    })];
};

var content = function content(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope, {
        ' .pe-card__title, .pe-list-tile__title': {
            'color': config['color_' + tint + '_title_text']
        },
        ' .pe-card__subtitle, .pe-list-tile__subtitle': {
            'color': config['color_' + tint + '_subtitle_text']
        },
        ' .pe-card__text': {
            'color': config['color_' + tint + '_text']
        },
        ' .pe-card__actions--borders': [_mixin2.default.hairline('border-top'), {
            'border-top': '1px solid ' + config['color_' + tint + '_actions_border']
        }]
    })];
};

var overlay = function overlay(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-card__overlay--sheet', {
        ' .pe-card__overlay__content': {
            'background-color': config['color_' + tint + '_overlay_background']
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), content(config, 'light', '.pe-card'), overlay(config, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '), content(config, 'dark', ' '), overlay(config, 'dark', ' ')]
    },
    // is dark theme
    style(config, 'dark', '.pe-dark-theme'), overlay(config, 'dark', '.pe-dark-theme '), content(config, 'dark', '.pe-card.pe-dark-theme')];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config2.default.rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

exports.default = {
    image_size_small: 1 * 80,
    image_size_regular: 1.4 * 80,
    image_size_medium: 2 * 80,
    image_size_large: 3 * 80,
    border_radius: _config2.default.unit_block_border_radius,
    padding_h: 16,
    offset_small_padding_v: padding_v - 16,
    padding_actions_h: 8,
    title_padding_h: 16,
    title_padding_v: 24,
    tight_title_padding_bottom: 16,
    text_padding_h: 16,
    text_padding_v: 16,
    text_padding_bottom: 24,
    tight_text_padding_bottom: 16,
    subtitle_line_height_padding_bottom: 7,
    text_line_height_padding_top: 6,
    text_line_height_padding_bottom: 7,
    one_line_height_with_icon: 72,
    icon_element_width: 72 - 4,
    one_line_padding_v: 8,
    actions_padding_v: padding_actions_v - 6,
    actions_button_margin_v: actions_button_margin_v,
    actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

    color_light_main_background: rgba(_config2.default.color_light_background),
    color_light_title_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_subtitle_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_regular),
    color_light_actions_border: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_border_light),
    color_light_overlay_background: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_overlay_background),

    color_dark_main_background: rgba(_config2.default.color_dark_background),
    color_dark_title_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_subtitle_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_regular),
    color_dark_actions_border: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_border_light),
    color_dark_overlay_background: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_overlay_background)
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(42);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(44);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(41);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.card;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-card', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [{
        '.pe-card': {
            display: 'block',
            position: 'relative',
            'border-radius': config.border_radius + 'px',

            ' .pe-card__media': {
                position: 'relative',
                overflow: 'hidden',
                'border-top-left-radius': 'inherit',
                'border-top-right-radius': 'inherit',
                'z-index': 1, // makes rounded corners on absolute imgages work

                '&.pe-card__media--landscape': {
                    'padding-bottom': 100 / 16 * 9 + '%'
                },
                '&.pe-card__media--square': {
                    'padding-bottom': '100%'
                },
                '&:last-child': {
                    '&, img': {
                        'border-bottom-left-radius': config.border_radius + 'px',
                        'border-bottom-right-radius': config.border_radius + 'px'
                    }
                },
                ' img': [_mixin2.default.fit(), {
                    display: 'none',
                    width: '100%',

                    '&.pe-card__media--crop-x': {
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    },
                    '&.pe-card__media--crop-y': {
                        height: '100%',
                        width: 'auto',
                        display: 'block'
                    }
                }]
            },

            ' .pe-card__header + .pe-card__media': {
                'border-top-left-radius': 0,
                'border-top-right-radius': 0
            },

            ' .pe-card__primary__media': {
                margin: '16px 16px 0 16px',

                ' .pe-card__media--small': {
                    width: config.image_size_small + 'px'
                },
                ' .pe-card__media--regular': {
                    width: config.image_size_regular + 'px'
                },
                ' .pe-card__media--medium': {
                    width: config.image_size_medium + 'px'
                },
                ' .pe-card__media--large': {
                    width: config.image_size_large + 'px',
                    'margin-bottom': '16px'
                },
                ' .pe-card__media': {
                    '&, img': {
                        'border-radius': 0
                    }
                },

                ' .shadow + &': {
                    // first child
                    '&, img': {
                        'border-top-left-radius': config.border_radius + 'px',
                        'border-top-right-radius': config.border_radius + 'px'
                    }
                }
            },

            ' .pe-card__overlay': _mixin2.default.fit(),

            ' .pe-card__media__dimmer': [_mixin2.default.fit(), {
                'z-index': 1
            }],

            ' .pe-card__overlay__content': {
                position: 'absolute',
                bottom: 0,
                top: 'auto',
                right: 0,
                left: 0,
                'z-index': 2
            },

            ' .pe-card__header': {
                height: config.one_line_height_with_icon + 'px',

                ' .pe-list-tile__title': {
                    'font-size': '14px',
                    'font-weight': _config2.default.font_weight_normal,
                    'line-height': '20px',
                    'margin-top': '2px'
                },
                ' .pe-list-tile__subtitle': {
                    'margin-top': '-1px'
                }
            },

            ' .pe-card__primary': [_flex2.default.layoutHorizontal, {
                position: 'relative',

                '&.pe-card__primary--media:not(:last-child)': {
                    'padding-bottom': '16px'
                },
                '&.pe-card__primary--media + .pe-card__actions': {
                    'margin-top': '-16px'
                },
                '& + .pe-card__text': {
                    'margin-top': '-16px'
                },
                '&.pe-card__primary--tight': {
                    ' .pe-card__title': {
                        'padding-bottom': config.tight_title_padding_bottom - config.subtitle_line_height_padding_bottom + 'px'
                    }
                }
            }],
            ' .pe-card__title': [_flex2.default.flex(), {
                padding: [config.title_padding_v, config.title_padding_h, config.title_padding_v - config.subtitle_line_height_padding_bottom, config.title_padding_h].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'font-size': '24px',
                'line-height': '29px'
            }],
            ' .pe-card__subtitle': {
                'font-size': '14px',
                'line-height': '24px'
            },

            ' .pe-card__actions': [{
                'min-height': 36 + 2 * 8 + 'px',
                padding: config.actions_padding_v + 'px' + ' ' + config.padding_actions_h + 'px',

                '&.pe-card__actions--tight': {
                    'min-height': 0
                },
                '&.pe-card__actions--horizontal:not(.pe-card__actions--justified)': [_flex2.default.layoutHorizontal, _flex2.default.layoutCenter, {
                    ' :first-child': {
                        'margin-left': 0
                    },
                    ' .pe-button': {
                        'min-width': 0
                    },
                    ' .pe-button--icon': {
                        'margin-right': '8px'
                    }
                }],

                '&.pe-card__actions--justified': [_flex2.default.layoutJustified],

                '&.pe-card__actions--vertical': [_flex2.default.layoutVertical, {
                    // vertical flex layout
                    'padding-top': config.actions_vertical_padding_v + 'px',
                    'padding-bottom': config.actions_vertical_padding_v + 'px',

                    // nested
                    ' .pe-card__actions': [{
                        'margin-left': -config.padding_actions_h + 'px',
                        'margin-right': -config.padding_actions_h + 'px',
                        'min-height': 0,

                        '&:first-child': {
                            'margin-top': -config.actions_vertical_padding_v + 'px'
                        },
                        '&:last-child': {
                            'margin-bottom': -config.actions_vertical_padding_v + 'px'
                        }
                    }],

                    ' .pe-button': {
                        height: '36px',
                        padding: 0,
                        'margin-top': config.actions_button_margin_v + 'px',
                        'margin-bottom': config.actions_button_margin_v + 'px'
                    }
                }]
            }],

            ' .pe-card__text': {
                'padding-top': config.text_padding_v - config.text_line_height_padding_top + 'px',
                'padding-right': config.text_padding_h + 'px',
                'padding-left': config.text_padding_h + 'px',
                'padding-bottom': config.tight_text_padding_bottom - config.text_line_height_padding_bottom + 'px',
                'font-size': '14px',
                'line-height': '24px',

                '&:last-child': {
                    'padding-bottom': config.text_padding_bottom - config.text_line_height_padding_bottom + 'px'
                },
                '&.pe-card__text--tight, &.pe-card__text--tight:last-child': {
                    'padding-bottom': config.tight_text_padding_bottom - config.text_line_height_padding_bottom + 'px'
                },
                ' .pe-card__actions + &': {
                    'margin-top': '8px'
                }
            },

            ' .pe-card__text, .pe-card__primary': {
                '& + .pe-card__actions:not(:last-child)': {
                    'margin-top': -(config.offset_small_padding_v + 1) + 'px',
                    'margin-bottom': -(config.offset_small_padding_v - 1) + 'px'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _selectionControl = __webpack_require__(28);

var _selectionControl2 = _interopRequireDefault(_selectionControl);

var _iconSelection = __webpack_require__(87);

var _iconSelection2 = _interopRequireDefault(_iconSelection);

var _theme = __webpack_require__(50);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// contains default icons

var selectable = function selectable() {
    return true;
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = _theme2.default;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = _iconSelection2.default;
    opts.selectable = selectable;
    return (0, _mithril2.default)(_selectionControl2.default, opts);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=checkbox.js.map

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _color = __webpack_require__(29);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [(0, _color2.default)(config, 'light', '.pe-control--checkbox'), {
        '.pe-dark-theme': [
        // inside dark theme
        (0, _color2.default)(config, 'dark', ' '),
        // has dark theme
        (0, _color2.default)(config, 'dark', '&')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(30);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// Note the generic config
exports.default = _config2.default;
//# sourceMappingURL=config.js.map

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
//# sourceMappingURL=icon-off.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
//# sourceMappingURL=icon-on.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(47);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(51);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(46);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _iconOff = __webpack_require__(48);

var _iconOff2 = _interopRequireDefault(_iconOff);

var _iconOn = __webpack_require__(49);

var _iconOn2 = _interopRequireDefault(_iconOn);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.checkbox;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-checkbox', (0, _layout2.default)(config), (0, _color2.default)(config));

// default icons
exports.default = {
    iconOff: _iconOff2.default,
    iconOn: _iconOn2.default
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _layout = __webpack_require__(31);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (config) {
    return _mixin2.default.createStyles(config, function (config) {
        return (0, _layout2.default)(config, '.pe-control--checkbox', 'checkbox');
    });
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
}; /*
   Helper module to manage multiple items of the same component type.
   */

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

/*
mOpts:
- instance
- defaultId
- tag
- noneTag
- bodyShowClass
*/
var multiple = function multiple(mOpts) {
    var items = [];

    var itemIndex = function itemIndex(id) {
        var item = findItem(id);
        return items.indexOf(item);
    };

    var removeItem = function removeItem(id) {
        var index = itemIndex(id);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    var replaceItem = function replaceItem(id, newItem) {
        var index = itemIndex(id);
        if (index !== -1) {
            items[index] = newItem;
        }
    };

    var findItem = function findItem(id) {
        // traditional for loop for IE10
        for (var i = 0; i < items.length; i++) {
            if (items[i].instanceId === id) {
                return items[i];
            }
        }
    };

    var next = function next() {
        if (items.length) {
            items[0].show = true;
            _mithril2.default.redraw();
        }
    };

    var _remove = function _remove(instanceId) {
        if (mOpts.queue) {
            items.shift();
            // add time to remove the previous instance before drawing the next one
            setTimeout(next, 0);
        } else {
            removeItem(instanceId);
        }
    };

    var setPauseState = function setPauseState(pause, instanceId) {
        var item = findItem(instanceId);
        if (item) {
            item.pause = pause;
            item.unpause = !pause;
        }
    };

    var makeItem = function makeItem(itemOpts, instanceId) {
        var resolveShow = void 0;
        var didShow = function didShow() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didShow) {
                opts.didShow(instanceId);
            }
            return resolveShow(instanceId);
        };
        var showPromise = new Promise(function (resolve) {
            resolveShow = resolve;
        });

        var resolveHide = void 0;
        var didHide = function didHide() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didHide) {
                opts.didHide(instanceId);
            }
            if (mOpts.queue) {
                _remove(instanceId);
            }
            return resolveHide(instanceId);
        };
        var hidePromise = new Promise(function (resolve) {
            resolveHide = resolve;
        });

        return _extends({}, mOpts, {
            instanceId: instanceId,
            opts: itemOpts,
            show: mOpts.queue ? false : true,
            showPromise: showPromise,
            hidePromise: hidePromise,
            didShow: didShow,
            didHide: didHide
        });
    };

    return {

        count: function count() {
            return items.length;
        },

        clear: function clear() {
            return items.length = 0;
        },

        show: function show(opts) {
            var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                item = makeItem(opts, instanceId);
                items.push(item);
                if (items.length === 1) {
                    next();
                }
            } else {
                var storedItem = findItem(instanceId);
                item = makeItem(opts, instanceId);
                if (!storedItem) {
                    items.push(item);
                } else {
                    replaceItem(instanceId, item);
                }
            }
            return item.showPromise;
        },

        hide: function hide() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                if (items.length) {
                    item = items[0];
                }
            } else {
                item = findItem(instanceId);
            }
            if (item) {
                item.hide = true;
                return item.hidePromise;
            }
            return Promise.resolve(instanceId);
        },

        remove: function remove() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            _remove(instanceId);
        },

        pause: function pause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(true, instanceId);
        },

        unpause: function unpause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(false, instanceId);
        },

        view: function view() {
            var toShowItems = items.filter(function (item) {
                return item.show;
            });
            if (!toShowItems.length) {
                document.body.classList.remove(mOpts.bodyShowClass);
                // placeholder because we cannot return null
                return (0, _mithril2.default)(mOpts.noneTag);
            } else {
                document.body.classList.add(mOpts.bodyShowClass);
            }
            return (0, _mithril2.default)(mOpts.tag, toShowItems.map(function (itemData) {
                return (0, _mithril2.default)(mOpts.instance, _extends({}, itemData, {
                    transitions: mOpts.transitions,
                    key: itemData.key || itemData.instanceId
                }));
            }));
        }
    };
};

exports.default = multiple;
//# sourceMappingURL=multiple.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fastclick = __webpack_require__(138);

var _fastclick2 = _interopRequireDefault(_fastclick);

var _polythene = __webpack_require__(14);

var _polythene2 = _interopRequireDefault(_polythene);

var _events = __webpack_require__(19);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var layer = document.body;
var throttleDelay = 150;
var reInitDelay = throttleDelay + 50;
var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var remove = function remove() {
    if (enabled) {
        fastClick.destroy();
        enabled = false;
    }
};

var add = function add() {
    if (!enabled) {
        fastClick = new _fastclick2.default(layer);
        enabled = true;
    }
};

var handleScroll = function handleScroll() {
    remove();
    if (timeoutId) {
        window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(add, reInitDelay);
};

var init = function init() {
    if (_polythene2.default.isTouch) {
        _events2.default.subscribe('scroll', handleScroll, throttleDelay);
        add();
    }
};

init();

exports.default = {
    add: add,
    remove: remove
};
//# sourceMappingURL=no-tap-delay.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (var a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
};
//# sourceMappingURL=transition-event.js.map

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

// defaults
var SHOW_DURATION = .220; // default dialog timing
/*
Generic show/hide transition module
*/

var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = 'both';

// See: transition
var show = function show(opts) {
    return transition(opts, 'show');
};

var hide = function hide(opts) {
    return transition(opts, 'hide');
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDuration !== undefined ? opts.showDuration : SHOW_DURATION : opts.hideDuration !== undefined ? opts.hideDuration : HIDE_DURATION;
    }
    return 0;
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDelay !== undefined ? opts.showDelay : SHOW_DELAY : opts.hideDelay !== undefined ? opts.hideDelay : HIDE_DELAY;
    }
    return 0;
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
    var deferred = _mithril2.default.deferred();
    var el = opts.el;
    if (!el) {
        deferred.resolve();
        return deferred.promise;
    }
    var transitionDuration = getDuration(opts, state) * 1000;
    var delay = getDelay(opts, state) * 1000;
    var style = el.style;
    var beforeTransition = opts.beforeShow && state === 'show' ? function () {
        style.transitionDuration = '0ms';
        style.transitionDelay = '0ms';
        opts.beforeShow();
    } : null;
    var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[state === 'show' ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && typeof opts.show === 'function' && state === 'show') {
            opts.show();
        }
        if (opts.hide && typeof opts.hide === 'function' && state === 'hide') {
            opts.hide();
        }
    };
    var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === 'hide') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.afterHide();
        }
    };

    var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    };

    var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
            doTransition();
        } else {
            setTimeout(function () {
                doTransition();
            }, 0);
        }
    };

    if (beforeTransition) {
        beforeTransition();
        setTimeout(function () {
            maybeDelayTransition();
        }, 0);
    } else {
        maybeDelayTransition();
    }

    return deferred.promise;
};

exports.default = {
    show: show,
    hide: hide
};
//# sourceMappingURL=transition.js.map

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

if (!window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
        var wf = document.createElement('script');
        wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}

var webfontLoader = {
    add: function add(vendor, family, key) {
        var vendorCfg = window.WebFontConfig[vendor] || {};
        vendorCfg.families = vendorCfg.families || [];
        vendorCfg.families.push(family);
        if (key) {
            vendorCfg.key = key;
        }
        window.WebFontConfig[vendor] = vendorCfg;
    }
};

exports.default = webfontLoader;
//# sourceMappingURL=webfontloader.js.map

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// import 'polythene/common/object.assign';
//
// export default {
//     button: (config) => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const configTestCfg = Object.assign({}, config, {
//             border_radius: 0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text: textColor,
//             color_dark_raised_normal_background: mainColor,
//             color_dark_raised_normal_text: textColor
//         });
//         return [
//             {'': config}, // all pages
//             {'.module-custom-theme': configTestCfg} // only this page
//         ];
//     }
// };

//# sourceMappingURL=custom.js.map

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _events = __webpack_require__(19);

var _events2 = _interopRequireDefault(_events);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _transition = __webpack_require__(55);

var _transition2 = _interopRequireDefault(_transition);

var _shadow = __webpack_require__(17);

var _shadow2 = _interopRequireDefault(_shadow);

__webpack_require__(61);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    block: 'pe-dialog',
    visible: 'pe-dialog--visible',
    body: 'pe-dialog__body',
    fullscreen: 'pe-dialog--fullscreen',
    content: 'pe-dialog__content',
    header: 'pe-dialog__header',
    footer: 'pe-dialog__footer',
    footerHigh: 'pe-dialog__footer--high',
    title: 'pe-dialog__title',
    actions: 'pe-dialog__actions',
    hasBackdrop: 'pe-dialog--backdrop',
    hasTopOverflow: 'pe-dialog--overflow-top',
    hasBottomOverflow: 'pe-dialog--overflow-bottom',
    menuContent: 'pe-menu__content'
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(ctrl) {
    var scroller = ctrl.scrollEl;
    if (!scroller) {
        return;
    }
    ctrl.topOverflow = scroller.scrollTop > 0;
    ctrl.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(ctrl) {
    var footerEl = ctrl.footerEl;
    if (footerEl) {
        var style = window.getComputedStyle(footerEl);
        var height = footerEl.getBoundingClientRect().height;
        var minHeight = parseInt(style.minHeight, 10);
        if (height > minHeight) {
            footerEl.classList.add(CSS_CLASSES.footerHigh);
        } else {
            footerEl.classList.remove(CSS_CLASSES.footerHigh);
        }
    }
};

var show = function show(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return _transition2.default.show(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }
    });
};

var hide = function hide(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return _transition2.default.hide(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        _dialog2.default.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        setTimeout(_mithril2.default.redraw, 0); // removes remainder of drawn component
    });
};

var createViewContent = function createViewContent(ctrl, opts) {
    // if flex "self-stretch" is not supported, calculate the maximum height
    var style = {};
    var bodyOpts = opts.body || opts.menu;

    return (0, _mithril2.default)('div', {
        class: CSS_CLASSES.body,
        style: style,
        config: function config(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollEl = el;
        },
        onscroll: function onscroll() {
            ctrl.isScrolling = true;
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(function () {
                ctrl.isScrolling = false;
            }, SCROLL_WATCH_TIMER);
        }
    }, bodyOpts);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var bodyOpts = opts.body || opts.menu;
    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var tag = opts.tag || 'form';

    var update = function update() {
        updateScrollState(ctrl);
        updateFooterState(ctrl);
        _mithril2.default.redraw();
    };

    var props = _extends({}, {
        class: [CSS_CLASSES.block, opts.fullscreen ? CSS_CLASSES.fullscreen : null, opts.backdrop ? CSS_CLASSES.hasBackdrop : null, ctrl.topOverflow || opts.borders ? CSS_CLASSES.hasTopOverflow : null, ctrl.bottomOverflow || opts.borders ? CSS_CLASSES.hasBottomOverflow : null, ctrl.visible ? CSS_CLASSES.visible : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var cleanup = function cleanup() {
                _events2.default.unsubscribe('resize', update);
                _events2.default.unsubscribe('keydown', handleEscape);
            };

            var handleEscape = function handleEscape(e) {
                if (opts.fullscreen || opts.modal) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
                }
            };

            // resize: update scroll state ('overflow' borders)
            _events2.default.subscribe('resize', update);
            _events2.default.subscribe('keydown', handleEscape);

            context.onunload = function () {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            show(ctrl, opts).then(function () {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                if (ctrl.topOverflow || ctrl.bottomOverflow) {
                    setTimeout(_mithril2.default.redraw, 0);
                }
            });
        },
        // click backdrop: close dialog
        onclick: function onclick(e) {
            if (e.target !== ctrl.el) {
                return;
            }
            if (opts.modal) {
                // not allowed
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, _extends({}, opts, { hideDelay: 0 }));
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    var body = bodyOpts ? ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts) : null;

    var content = (0, _mithril2.default)('div', {
        class: [CSS_CLASSES.content, opts.menu ? CSS_CLASSES.menuContent : null].join(' ')
    }, [opts.fullscreen ? null : (0, _mithril2.default)(_shadow2.default, {
        z: ctrl.z,
        animated: true
    }), opts.fullscreen ? null : opts.title ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.header,
        config: function config(el) {
            ctrl.headerHeight = el.scrollHeight;
        }
    }, [(0, _mithril2.default)('div', { class: CSS_CLASSES.title }, opts.title)]) : null, body, opts.fullscreen ? null : opts.footer ? (0, _mithril2.default)('div', {
        class: CSS_CLASSES.footer,
        config: function config(el, inited) {
            ctrl.footerHeight = el.scrollHeight;
            if (inited) {
                return;
            }
            ctrl.footerEl = el;
        }
    }, [(0, _mithril2.default)('div', { class: CSS_CLASSES.actions }, opts.footer)]) : null]);
    return (0, _mithril2.default)(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        var opts = instanceData.opts || {};
        var z = opts.z !== undefined ? opts.z : 3; // shadow depth
        return _extends({}, instanceData, {
            instanceId: instanceData.instanceId,
            z: z,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: false,
            headerHeight: 0,
            footerHeight: 0,
            el: null,
            visible: false,
            isTransitioning: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        return createView(ctrl, opts);
    }
};

exports.default = component;
//# sourceMappingURL=dialog-instance.js.map

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-dialog', {
        '&.pe-dialog--backdrop': {
            'background-color': config['color_' + tint + '_backdrop_background']
        },
        ' .pe-dialog__content': {
            'background-color': config['color_' + tint + '_content_background']
        },
        ' .pe-dialog__header .pe-dialog__title': {
            'color': config['color_' + tint + '_title_text']
        },
        ' .pe-dialog__body': {
            'color': config['color_' + tint + '_body_text']
        },
        '&.pe-dialog--overflow-top .pe-dialog__body': {
            'border-top-color': config['color_' + tint + '_body_border']
        },
        '&.pe-dialog--overflow-bottom .pe-dialog__body': {
            'border-bottom-color': config['color_' + tint + '_body_border']
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

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config2.default.rgba;

exports.default = {
    border_radius: _config2.default.unit_block_border_radius,
    padding: 3 * _config2.default.grid_unit_component,
    header_bottom: 20,
    header_height: 60,
    footer_height: 52,

    color_light_content_background: rgba(_config2.default.color_light_background),
    color_light_title_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_body_text: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_regular),
    color_light_body_border: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_border_light),
    color_light_backdrop_background: 'rgba(0, 0, 0, .4)',

    color_dark_content_background: rgba(_config2.default.color_dark_background),
    color_dark_title_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_body_text: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_regular),
    color_dark_body_border: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_border_light),
    color_dark_backdrop_background: 'rgba(0, 0, 0, .5)'
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(60);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(62);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(59);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.dialog;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-dialog', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    var padding = config.padding;
    var lineHeightTitle = 24;

    return [{
        '.pe-dialog': [_flex2.default.layoutCenterCenter,
        // transition-duration set in js
        _mixin2.default.vendorize({
            'transition-timing-function': 'ease-out'
        }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
            'transition-property': 'opacity'
        }, _config2.default.prefixes_transition), {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            'z-index': _config2.default.z_dialog,
            height: '100%', // 100vh would make the dialog go beneath Mobile Safari toolbar
            padding: padding + 'px 40px',
            opacity: 0,

            '&.pe-dialog--visible': {
                opacity: 1
            },

            '&.pe-dialog--fullscreen': {
                padding: 0,

                ' .pe-dialog__content': {
                    'border-radius': 0,
                    'max-width': 'none',
                    height: '100%',
                    width: '100%',

                    ' .pe-dialog__header, .pe-dialog__footer': {
                        display: 'none'
                    },

                    ' .pe-dialog__body': {
                        padding: 0,
                        height: '100%',
                        'max-height': 'calc(100%)',
                        border: 'none'
                    }
                }
            },

            ' .pe-dialog__header, pe-dialog__body, pe-dialog__header': {
                'z-index': 1
            },

            ' .pe-dialog__content': [_flex2.default.layoutVertical, {
                position: 'relative',
                'max-height': '100%',
                'min-width': 56 * 5 + 'px',
                'max-width': 7 * _config2.default.grid_unit_menu + 'px',
                'border-radius': config.border_radius + 'px',

                ' > .pe-shadow': {
                    'z-index': -1 // For IE10 to get click events on content
                },

                '&.pe-menu__content': {
                    ' .pe-dialog__body': {
                        padding: 0,
                        border: 'none'
                    }
                }
            }],

            ' .pe-dialog__title': {
                'font-size': _config2.default.font_size_title + 'px',
                'line-height': lineHeightTitle + 'px',
                'font-weight': _config2.default.font_weight_medium,

                '& + div': {
                    'margin-top': '16px'
                }
            },

            ' .pe-dialog__header': {
                padding: [padding - 4, padding, config.header_bottom - 4, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'min-height': config.header_height + 'px',

                ' .pe-dialog__title': [_mixin2.default.ellipsis(1), {
                    width: '100%'
                }]
            },

            ' .pe-dialog__body': [_flex2.default.selfStretch, _mixin2.default.hairline('border-top'), {
                'border-top-style': 'solid'
            }, _mixin2.default.hairline('border-top'), {
                'border-bottom-style': 'solid'
            }, {
                padding: [padding, padding, padding - 5, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'overflow-y': 'auto',
                '-webkit-overflow-scrolling': 'touch',
                'border-width': '1px',
                'border-style': 'solid none',
                'border-color': 'transparent',
                // initially set max-height; will be overridden by dialog core with actual heights
                'max-height': 'calc(100vh - ' + 2 * padding + 'px - ' + (config.header_height + config.footer_height) + 'px)'
            }],
            ' .pe-dialog__header + .pe-dialog__body': {
                'padding-top': 0
            },

            ' .pe-dialog__footer': {
                padding: '2px 8px',
                'min-height': config.footer_height + 'px',
                'font-size': 0, // remove inline block spacing

                '&.pe-dialog__footer--high': {
                    // when buttons are stacked vertically
                    'padding-bottom': '8px'
                }
            },

            ' .pe-dialog__actions': [_flex2.default.layoutHorizontal, _flex2.default.layoutEndJustified, _flex2.default.layoutWrap, {
                margin: '0 -4px',

                ' .pe-button': {
                    height: '36px',
                    'margin-top': '6px',
                    'margin-bottom': '6px',
                    padding: 0
                }
            }]
        }],

        ' body.pe-dialog--open': {
            overflow: 'hidden',
            left: 0,
            '-webkit-overflow-scrolling': 'touch',
            top: 0,
            width: '100%'
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _webfontloader = __webpack_require__(56);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_webfontloader2.default.add('google', 'Roboto:400,500,700,400italic:latin');
//# sourceMappingURL=theme.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    box_shadow: 'inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)',
    box_shadow_height: 6
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(64);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(66);

var _layout2 = _interopRequireDefault(_layout);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default['header-panel'];

// Does not contain color styles

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-header-panel', (0, _layout2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [{
        '.pe-header-panel': {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',

            '&.pe-header-panel--fit': _mixin2.default.fit(),

            ' .pe-header-panel__outer-container': [_mixin2.default.fit(), _flex2.default.layoutVertical],
            ' .pe-header-panel__main-container': [_flex2.default.flex(), {
                position: 'relative',
                'overflow-y': 'auto',
                'overflow-x': 'hidden',
                '-webkit-overflow-scrolling': 'touch'
            }],
            ' .pe-header-panel__header-container': {
                position: 'relative',

                ' .pe-toolbar': {
                    'z-index': 2
                },
                ' .pe-header-panel__drop-shadow': [_mixin2.default.vendorize({
                    transition: 'opacity 0.25s'
                }, _config2.default.prefixes_transition), _mixin2.default.vendorize({
                    transform: 'translate3d(0,0,0)'
                }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                    'box-shadow': config.box_shadow
                }, _config2.default.prefixes_box_shadow), {
                    opacity: 0,
                    position: 'absolute',
                    top: 'auto',
                    left: 0,
                    right: 0,
                    height: config.box_shadow_height + 'px',
                    'z-index': 1
                }]
            },
            ' .pe-header-panel__outer-container.pe-header-panel--cascaded > .pe-header-panel__header-container > .pe-header-panel__drop-shadow': {
                'opacity': 1
            },
            '&:not(.pe-header-panel--fixed) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,

                ' .pe-header-panel__background-container': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                },
                ' .pe-toolbar__top-bar': {
                    'z-index': 1
                },
                ' .pe-toolbar__bottom-bar': {}
            },
            ':not(.pe-header-panel--fit):not(.pe-header-panel--fixed):not(.pe-header-panel--scroll) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': _config2.default.z_header_container
            },
            '.pe-header-panel--fit > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': _config2.default.z_fixed_header_container
            },
            ' .pe-header-panel__condensed-background': {
                opacity: 0
            },
            ' .pe-header-panel__header-background, .pe-header-panel__condensed-background': [_mixin2.default.vendorize({
                'background-size': 'cover'
            }, _config2.default.prefixes_background_size), {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            }],
            ' .pe-header-panel__media-dimmer': _mixin2.default.fit(),

            '&.pe-header-panel--standard': {
                ' .pe-header-panel__drop-shadow': {
                    opacity: 1
                }
            },
            '&.pe-header-panel--seamed': {
                ' .pe-header-panel__drop-shadow': {
                    display: 'none'
                }
            },
            '&.pe-header-panel--scroll': {
                ' .pe-header-panel__main-container': {
                    overflow: 'visible'
                },
                ' .pe-header-panel__outer-container': {
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            '&.pe-header-panel--cover': {
                ' .main-panel': {
                    position: 'static'
                },
                ' .pe-header-panel__main-container': _mixin2.default.fit(),
                ' .pe-header-panel__drop-shadow': {
                    position: 'static',
                    width: '100%'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty({}, scope + '.pe-button.pe-button--icon', {
        color: config['color_' + tint + '_' + type + '_normal_text'],
        background: 'none',

        ' .pe-button__wash': {
            opacity: config['color_' + tint + '_wash_opacity']
        },

        '&.pe-button--focus, &.pe-button--selected': {
            ' .pe-button__focus': {
                opacity: config['color_' + tint + '_focus_opacity'],
                'background-color': 'currentcolor'
            }
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text']
        },

        '&.pe-button--raised': {
            'background-color': config['color_' + tint + '_background'],

            ' .pe-button__content': {
                background: 'transparent'
            }
        }
    })];
};

var noTouch = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty({}, scope + '.pe-button.pe-button--icon:hover', tint === 'light' ? {
        ' .pe-button__wash': {
            'background-color': 'currentcolor'
        }
    } : {
        ' .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_normal_text']
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light', 'flat'), {
        'html.pe-no-touch': [noTouch(config, 'light', 'flat', ' ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', 'flat', ' '),
        // has dark theme
        style(config, 'dark', 'flat', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', 'flat', ' ')]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(26);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(69);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(67);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default['icon-button'];

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-icon-button', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [{
        '.pe-button--icon': {
            // don't set button size to facilitate different icon sizes
            display: 'inline-block',
            'vertical-align': 'middle',
            cursor: 'pointer',
            position: 'relative',
            'font-size': '1rem',
            'border-radius': '50%',
            border: 'none',

            ' .pe-button__content': {
                padding: 0
            },

            ' .pe-button__label': {
                'line-height': 1,
                padding: config.padding + 'px'
            },

            '&.pe-button--compact': {
                ' .pe-button__label': {
                    padding: config.padding_compact + 'px'
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    size_small: _config2.default.unit_icon_size_small,
    size_regular: _config2.default.unit_icon_size,
    size_medium: _config2.default.unit_icon_size_medium,
    size_large: _config2.default.unit_icon_size_large
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(70);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(72);

var _layout2 = _interopRequireDefault(_layout);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.icon;

// Does not contain color styles

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-icon', (0, _layout2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var iconSizesPx = function iconSizesPx() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config2.default.unit_icon_size;
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-icon': {
            display: 'inline-block',
            'vertical-align': 'middle',
            'background-repeat': 'no-repeat',
            fill: 'currentcolor',
            position: 'relative',
            'font-size': 0,
            'line-height': 0,

            '&.pe-icon--avatar img': {
                border: 'none',
                'border-radius': '50%',
                width: '100%',
                height: '100%'
            },

            ' i': [_mixin2.default.fit(), {
                display: 'block',
                'font-size': 'inherit',
                color: 'inherit',
                'line-height': 'inherit',
                height: '100%',

                ' img': {
                    height: '100%'
                },

                ' svg': {
                    width: '100%',
                    height: '100%',
                    fill: 'currentcolor',
                    color: 'inherit',

                    ' path, rect, polygon': {
                        '&:not([fill=none])': {
                            fill: 'currentcolor'
                        }
                    }
                }
            }],

            '&.pe-icon--small': iconSizesPx(config.size_small),
            '&.pe-icon--regular': iconSizesPx(config.size_regular),
            '&.pe-icon--medium': iconSizesPx(config.size_medium),
            '&.pe-icon--large': iconSizesPx(config.size_large)
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var styles = [{
    '.pe-block': {
        display: 'block'
    },

    // ie support for hidden
    '.pe-hidden': {
        display: 'none !important'
    },

    '.pe-relative': {
        position: 'relative'
    },
    '.pe-fit': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    'body.pe-fullbleed': {
        margin: 0,
        height: '100vh'
    }
}];

exports.default = styles;
//# sourceMappingURL=common-style.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var styles = [{
    '.layout, .layout.horizontal, .flex.vertical': _flex2.default.layout,
    '.layout.horizontal.inline, .layout.vertical.inline': _flex2.default.layoutInline,
    '.layout.horizontal': _flex2.default.layoutHorizontal,
    '.layout.horizontal.reverse': _flex2.default.layoutHorizontalReverse,
    '.layout.vertical': _flex2.default.layoutVertical,
    '.layout.vertical.reverse': _flex2.default.layoutVerticalReverse,
    '.layout.wrap': _flex2.default.layoutWrap,
    '.layout.wrap.reverse': _flex2.default.layoutWrapReverse,
    '.flex': _flex2.default.flex(1),
    '.span.flex': {
        'display': 'block' // for IE 10
    },
    '.vertical.layout > .flex.auto-vertical': _flex2.default.flexAutoVertical,
    '.flex.auto': _flex2.default.flexAuto,
    '.flex.none': _flex2.default.flexIndex('none'),
    '.flex.one': _flex2.default.flexIndex(1),
    '.flex.two': _flex2.default.flexIndex(2),
    '.flex.three': _flex2.default.flexIndex(3),
    '.flex.four': _flex2.default.flexIndex(4),
    '.flex.five': _flex2.default.flexIndex(5),
    '.flex.six': _flex2.default.flexIndex(6),
    '.flex.seven': _flex2.default.flexIndex(7),
    '.flex.eight': _flex2.default.flexIndex(8),
    '.flex.nine': _flex2.default.flexIndex(9),
    '.flex.ten': _flex2.default.flexIndex(10),
    '.flex.eleven': _flex2.default.flexIndex(11),
    '.flex.twelve': _flex2.default.flexIndex(12),

    // alignment in cross axis
    '.layout.start': _flex2.default.layoutStart,
    '.layout.center, .layout.center-center': _flex2.default.layoutCenter,
    '.layout.end': _flex2.default.layoutEnd,

    // alignment in main axis
    '.layout.start-justified': _flex2.default.layoutStartJustified,
    '.layout.center-justified, .layout.center-center': _flex2.default.layoutCenterJustified,
    '.layout.end-justified': _flex2.default.layoutEndJustified,
    '.layout.around-justified': _flex2.default.layoutAroundJustified,
    '.layout.justified': _flex2.default.layoutJustified,

    // self alignment
    '.self-start': _flex2.default.selfStart,
    '.self-center': _flex2.default.selfCenter,
    '.self-end': _flex2.default.selfEnd,
    '.self-stretch': _flex2.default.selfStretch
}];

exports.default = styles;
//# sourceMappingURL=flex-style.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _flexStyle = __webpack_require__(74);

var _flexStyle2 = _interopRequireDefault(_flexStyle);

var _commonStyle = __webpack_require__(73);

var _commonStyle2 = _interopRequireDefault(_commonStyle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_styler2.default.add('pe-layout', _flexStyle2.default, _commonStyle2.default);
//# sourceMappingURL=theme.js.map

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-list-tile', {
        ' .pe-list-tile__title': {
            color: config['color_' + tint + '_title']
        },

        '&.pe-list__header': {
            'background-color': 'inherit',

            ' .pe-list-tile__title': {
                color: config['color_' + tint + '_list_header']
            }
        },

        ' .pe-list-tile__content, .pe-list-tile__subtitle': {
            color: config['color_' + tint + '_subtitle']
        },

        '&.pe-list-tile--disabled': {
            '&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle': {
                color: config['color_' + tint + '_text_disabled']
            }
        },
        '&.pe-list-tile--selected': {
            'background-color': config['color_' + tint + '_background_selected']
        }
    })];
};

var noTouch = function noTouch(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-list-tile', {
        '&:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
            'background-color': config['color_' + tint + '_background_hover']
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light'), {
        'html.pe-no-touch': [noTouch(config, 'light', ' .pe-list--hoverable'), noTouch(config, 'light', ' .pe-list--hoverable ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', ' .pe-list-tile--hoverable'), noTouch(config, 'dark', '.pe-list--hoverable '), noTouch(config, 'dark', ' .pe-list--hoverable ')],
        'html.pe-no-touch .pe-list--hoverable .pe-dark-theme': noTouch(config, 'dark')
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=color.js.map

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config2.default.rgba;

// SPECS
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76


var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

exports.default = {
    single_height: single_height,
    single_line_height: single_height - 2 * padding - (2 * 5 + 1),
    single_with_icon_height: single_with_icon_height,
    single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
    padding: 13,
    compact_padding: 9,
    subtitle_line_count: 1,
    has_subtitle_padding: 15,
    high_subtitle_line_count: 2,
    has_high_subtitle_padding: 13,
    front_item_width: 72,
    side_padding: 2 * _config2.default.grid_unit_component,
    font_size_title: 16,
    font_size_subtitle: 14,
    line_height_subtitle: 20,
    font_size_list_header: 14,
    font_size_small: 12,

    color_light_title: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_light_subtitle: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary),
    color_light_info: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_tertiary),
    color_light_text_disabled: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_disabled),
    color_light_list_header: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_tertiary),
    color_light_background_hover: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),
    color_light_background_selected: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_background_hover),

    color_dark_title: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary),
    color_dark_subtitle: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary),
    color_dark_info: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_tertiary),
    color_dark_text_disabled: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_disabled),
    color_dark_list_header: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_tertiary),
    color_dark_background_hover: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover),
    color_dark_background_selected: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_background_hover)
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(77);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(79);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(76);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default['list-tile'];

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-list-tile', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var paddingH = function paddingH(h) {
    return {
        'padding-left': h + 'px',
        'padding-right': h + 'px'
    };
};

var paddingV = function paddingV(top, bottom) {
    return {
        'padding-top': top + 'px',
        'padding-bottom': (bottom || top) + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-list-tile': [_flex2.default.layout, {
            position: 'relative',
            overflow: 'hidden',

            '&.pe-list-tile--sticky': [_mixin2.default.sticky(2)],

            ' .pe-list-tile__primary, .pe-list-tile__secondary': [_flex2.default.layoutHorizontal, {
                ' a&': {
                    'text-decoration': 'none',
                    color: 'inherit',
                    border: 'none'
                }
            }],

            ' .pe-list-tile__primary': [_flex2.default.flex(), {
                position: 'relative',
                'z-index': 1, // in case a ripple is used (positioned absolute)

                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': [_flex2.default.flex(), paddingV(config.padding, config.padding + 1)]
            }],

            ' .pe-list-tile__secondary': {
                'text-align': 'right',
                'font-size': config.font_size_title + 'px',
                position: 'relative',
                'z-index': 1 },

            ' .pe-list-tile__content': [_flex2.default.layoutVertical, _flex2.default.selfCenter, paddingH(config.side_padding), {
                '&.pe-list-tile__content--front': [paddingV(config.padding - 5), {
                    width: config.front_item_width + 'px'
                }],

                ' small': {
                    'font-size': config.font_size_small + 'px'
                }
            }],

            ' .pe-list-tile__content--front + .pe-list-tile__content': {
                'padding-left': 0
            },

            ' .pe-list-tile__title': [_mixin2.default.ellipsis(1), {
                'font-size': config.font_size_title + 'px',
                'font-weight': _config2.default.font_weight_normal,
                'line-height': config.single_line_height + 'px'
            }],

            ' .pe-list-tile__subtitle': [_mixin2.default.ellipsis(config.subtitle_line_count, config.line_height_subtitle), {
                'font-size': config.font_size_subtitle + 'px',
                'line-height': config.line_height_subtitle + 'px',

                '&.pe-list-tile__subtitle--high': [_mixin2.default.ellipsis(config.high_subtitle_line_count, config.line_height_subtitle), {
                    'white-space': 'normal'
                }]
            }],

            '&.pe-list-tile--selected, &.pe-list-tile--disabled': {
                cursor: 'default'
            },

            '&.pe-list-tile--subtitle': {
                ' .pe-list-tile__content': [paddingV(config.has_subtitle_padding, config.has_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            '&.pe-list-tile--high-subtitle': {
                ' .pe-list-tile--high-subtitle .pe-list-tile__secondary': [_flex2.default.layoutHorizontal, _flex2.default.layoutStart],
                ' .pe-list-tile__content': [_flex2.default.selfStart, paddingV(config.has_high_subtitle_padding, config.has_high_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            // List header
            '&.pe-list__header': {
                height: config.single_height + 'px',

                ' .pe-list-tile__content': {
                    'padding-top': 0,
                    'padding-bottom': 0
                },
                ' .pe-list-tile__title': [_mixin2.default.ellipsis(1, config.single_height), {
                    'font-size': config.font_size_list_header + 'px',
                    'font-weight': _config2.default.font_weight_medium,
                    'line-height': config.single_height + 'px',
                    padding: 0
                }]
            },

            // Compact list

            ' .pe-list--compact &, &.pe-list-tile--compact': {
                '&:not(.pe-list__header)': {
                    ' .pe-list-tile__content': paddingV(config.compact_padding, config.compact_padding + 1)
                }
            },

            // Firefox only
            '@supports (-moz-appearance:none) and (display:contents)': {
                ' .pe-list-tile__primary, .pe-list-tile__content': {
                    overflow: 'hidden'
                }
            },

            // Menu

            '.pe-dialog .pe-menu__content &': {
                ' .pe-list-tile__title': _mixin2.default.ellipsis('none')
            },

            '.pe-menu__content &': {
                '&:not(.pe-list-tile--disabled)': {
                    cursor: 'default',

                    '&, .pe-list-tile__primary, .pe-list-tile__secondary': {
                        ' .pe-list-tile__title, .pe-list-tile__subtitle': [_mixin2.default.vendorize({
                            'user-select': 'none'
                        }, _config2.default.prefixes_user_select)]
                    }
                }
            },

            // Non-touch

            'html.pe-no-touch .pe-list--hoverable &, \
                html.pe-no-touch .pe-list--selectable &, \
                html.pe-no-touch &.pe-list-tile--hoverable, \
                html.pe-no-touch &.pe-list-tile--selectable': {
                '&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover': {
                    cursor: 'pointer'
                }
            }
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var _ref;

    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [(_ref = {}, _defineProperty(_ref, scope + '.pe-list', {
        '&.pe-list--borders': {
            ' .pe-list-tile:not(.pe-list__header)': {
                '&:not(:last-child)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        },

        '&.pe-list--borders-indented': {
            ' .pe-list-tile:not(.pe-list__header)': {
                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': {
                    'border-color': config['color_' + tint + '_border']
                }
            }
        }
    }), _defineProperty(_ref, ' .pe-list + .pe-list', {
        'border-color': config['color_' + tint + '_border']
    }), _ref)];
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

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config2.default.rgba;

exports.default = {
    padding: _config2.default.grid_unit_component,
    padding_compact: _config2.default.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba(_config2.default.color_light_foreground, _config2.default.blend_light_border_light),
    color_dark_border: rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_border_light)
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(81);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(83);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(80);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.list;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-list', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var borderStyle = function borderStyle(config) {
    return _mixin2.default.hairline('border-bottom'), {
        'border-style': 'none none solid none',
        'border-width': config.border_width_bordered + 'px'
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-list': {
            padding: config.padding + 'px 0',

            '&.pe-list--header': {
                'padding-top': 0
            },

            '&.pe-list--compact': {
                padding: config.padding_compact + 'px 0'
            },

            '& + &': [_mixin2.default.hairline('border-top'), {
                'border-style': 'solid none none none',
                'border-width': config.border_width_stacked + 'px'
            }],

            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        '&': borderStyle(config)
                    }
                }
            },

            '&.pe-list--borders-indented': {
                'border-top': 'none',

                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': borderStyle(config)
                    }
                }
            }
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    start_scale: 0.1,
    end_scale: 2,
    start_opacity: 0.2,
    end_opacity: 0
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(84);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(57);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(86);

var _layout2 = _interopRequireDefault(_layout);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.ripple;

// Does not contain color styles

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-ripple', (0, _layout2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var kfRipple = function kfRipple(config) {
    return {
        ' 100%': {
            transform: 'scale(' + config.end_scale + ')',
            'opacity': config.end_opacity
        }
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-ripple': [_mixin2.default.fit(), {
            color: 'inherit',
            'border-radius': 'inherit',

            '&.pe-ripple--constrained': {
                'border-radius': 'inherit',

                ' .pe-ripple__mask': {
                    overflow: 'hidden',
                    'border-radius': 'inherit'
                }
            },
            ' .pe-ripple__mask': [_mixin2.default.fit(), _mixin2.default.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, _config2.default.prefixes_transform)],

            ' .pe-ripple__waves': [_mixin2.default.vendorize({
                'transform': 'scale(' + config.start_scale + ')'
            }, _config2.default.prefixes_transform), _mixin2.default.vendorize({
                'animation': 'ripple ' + _config2.default.animation_curve_default
            }, _config2.default.prefixes_animation),
            // default durations; finally set in js
            _mixin2.default.vendorize({
                'animation-duration': _config2.default.animation_duration
            }, _config2.default.prefixes_animation), {
                outline: '1px solid transparent', // for IE10
                position: 'absolute',
                'border-radius': '50%',
                opacity: config.start_opacity,
                'pointer-events': 'none',
                display: 'none'
            }],
            ' .pe-ripple__waves--animated': {
                display: 'block'
            }
        }],

        '@keyframes ripple': kfRipple(config)
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
}; // Helper function for checkbox and radio button


__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var CSS_CLASSES = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return _extends({}, opts[onOffType] ? opts[onOffType] : {
        msvg: opts.theme[onOffType]
    }, {
        class: opts.class
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createSelection = function createSelection(checked, opts) {
    var selectable = opts.selectable(checked);
    return (0, _mithril2.default)('div', {
        class: CSS_CLASSES.box
    }, (0, _mithril2.default)(_iconButton2.default, _extends({}, {
        tag: 'div',
        class: CSS_CLASSES.button,
        content: [(0, _mithril2.default)(_icon2.default, createIcon('iconOn', _extends({}, {
            class: CSS_CLASSES.buttonOn
        }, opts))), (0, _mithril2.default)(_icon2.default, createIcon('iconOff', _extends({}, {
            class: CSS_CLASSES.buttonOff
        }, opts)))],
        ripple: {
            center: true
        },
        disabled: opts.disabled,
        inactive: !selectable
    }, opts.iconButton)));
};

exports.default = createSelection;
//# sourceMappingURL=icon-selection.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// No styles for this component

//# sourceMappingURL=index.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    transition: 'box-shadow 0.18s ease-out',

    'shadow-top-z-1': 'none',
    'shadow-bottom-z-1': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',

    'shadow-top-z-2': '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    'shadow-bottom-z-2': '0 6px 10px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-3': '0 11px 7px 0 rgba(0, 0, 0, 0.19)',
    'shadow-bottom-z-3': '0 13px 25px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-4': '0 14px 12px 0 rgba(0, 0, 0, 0.17)',
    'shadow-bottom-z-4': '0 20px 40px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-5': '0 17px 17px 0 rgba(0, 0, 0, 0.15)',
    'shadow-bottom-z-5': '0 27px 55px 0 rgba(0, 0, 0, 0.3)',

    'shadow-down-z-1': 'inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)',
    'shadow-down-z-2': 'inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)'
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(89);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(91);

var _layout2 = _interopRequireDefault(_layout);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.shadow;

// Does not contain color styles

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-shadow', (0, _layout2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var shadowDirective = function shadowDirective(dir) {
    return _mixin2.default.vendorize({
        'box-shadow': dir
    }, _config2.default.prefixes_box_shadow);
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-shadow': [_mixin2.default.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [_mixin2.default.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': _mixin2.default.vendorize({
                    'transition': config.transition
                }, _config2.default.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config['shadow-top-z-' + index])), _defineProperty(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

    if ({} && {}.import) {
        var normalizedName = {}.normalizeSync(path);
        return (typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
            _systemImportTransformerGlobalIdentifier.require([normalizedName], resolve, reject);
        }) : typeof module !== 'undefined' && module.exports && "function" !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? Promise.resolve(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND';; throw e; }())) : Promise.resolve(_systemImportTransformerGlobalIdentifier[normalizedName])).then(function (data) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(150), __webpack_require__(151)(module)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _color = __webpack_require__(29);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [(0, _color2.default)(config, tint, scope), _defineProperty({}, scope + '.pe-control--switch', {

        '&.pe-control--off': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_off_opacity'],
                'background-color': config['color_' + tint + '_track_off']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_off']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_off_opacity'],
                    'background-color': config['color_' + tint + '_focus_off']
                }
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_on_opacity'],
                'background-color': config['color_' + tint + '_track_on']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_on']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config['color_' + tint + '_focus_on_opacity'],
                    'background-color': config['color_' + tint + '_focus_on']
                }
            }
        },

        '&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled': {
            ' .pe-control--switch__track': {
                opacity: config['color_' + tint + '_track_disabled_opacity'],
                'background-color': config['color_' + tint + '_track_disabled']
            },
            ' .pe-control--switch__thumb': {
                color: config['color_' + tint + '_thumb_disabled']
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

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
}; // Note the generic config


__webpack_require__(1);

var _config = __webpack_require__(30);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(26);

var _config4 = _interopRequireDefault(_config3);

var _config5 = __webpack_require__(4);

var _config6 = _interopRequireDefault(_config5);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rgba = _config6.default.rgba;
var hit_area_padding = (_config6.default.grid_unit_icon_button - _config6.default.unit_icon_size) / 2; // 12

var config = _extends({}, _config2.default, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * _config6.default.grid_unit_component,
    icon_button_padding: _config4.default.padding,
    hit_area_padding: hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba(_config6.default.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba(_config6.default.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba(_config6.default.color_light_foreground, _config6.default.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba(_config6.default.color_light_foreground, _config6.default.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba(_config6.default.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba(_config6.default.color_primary_faded, _config6.default.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

exports.default = config;
//# sourceMappingURL=config.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(94);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(96);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(93);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.switch;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-switch', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _layout = __webpack_require__(31);

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var transition = function transition(config, properties) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.animation_duration;

    return [_mixin2.default.defaultTransition(properties, duration, 'ease-out')];
};

var customSize = function customSize(config, size) {
    var factor = size / _config2.default.unit_icon_size;
    var thumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2; // round to even
    var scaledTrackHeight = Math.floor(0.5 * config.track_height * factor) * 2; // round to even
    var scaledTrackWidth = Math.floor(0.5 * config.track_length * factor) * 2;
    var scaledThumbSize = Math.floor(0.5 * config.thumb_size * factor) * 2;
    var trackTop = (config.label_height * factor - scaledTrackHeight) / 2;
    var thumbPadding = config.icon_button_padding;
    var thumbMargin = (size - scaledThumbSize) / 2;
    var thumbOuterSize = size + 2 * thumbPadding;
    var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
    var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
    var thumbOffsetY = thumbOffsetMin + thumbMargin;
    var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

    return {
        ' .pe-control__label': {
            height: size + 'px',
            'min-width': scaledTrackWidth + 'px',

            ' span': {
                'padding-left': config.padding * factor + 8 + scaledTrackWidth + 'px'
            }
        },
        ' .pe-control--switch__track': {
            left: trackVisualOffset + 'px',
            height: scaledTrackHeight + 'px',
            width: scaledTrackWidth - 2 * trackVisualOffset + 'px',
            top: trackTop + 'px',
            'border-radius': scaledTrackHeight + 'px'
        },
        ' .pe-control--switch__thumb': {
            top: thumbOffsetY + 'px',
            left: thumbOffsetMin + 'px',
            'z-index': 1
        },

        ' .pe-control--switch__knob': {
            position: 'relative',
            width: scaledThumbSize + 'px',
            height: scaledThumbSize + 'px',
            'border-radius': '50%',
            margin: thumbMargin + 'px'
        },

        ' .pe-button__label': {
            ' .pe-control--switch__knob': {
                ' .pe-icon': [_mixin2.default.fit(), {
                    width: '100%',
                    height: '100%'
                }]
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: thumbOffsetMax + 'px'
            }
        }
    };
};

var createStyles = function createStyles(config) {
    return [(0, _layout2.default)(config, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [transition(config, 'background, opacity'), {
                position: 'absolute',
                left: 0
            }],

            ' .pe-control--switch__thumb': [transition(config, 'left, color'), {
                position: 'absolute',
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            ' .pe-button__focus': [transition(config, 'all')],

            '&.pe-control--small': customSize(config, _config2.default.unit_icon_size_small),
            '&.pe-control--regular': customSize(config, _config2.default.unit_icon_size),
            '&.pe-control--medium': customSize(config, _config2.default.unit_icon_size_medium),
            '&.pe-control--large': customSize(config, _config2.default.unit_icon_size_large)
        }
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _typography = __webpack_require__(98);

var _typography2 = _interopRequireDefault(_typography);

__webpack_require__(63);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

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

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(24);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var fontSize = 14;

var styles = [{
    ' h1, h2, h3, h4, h5, h6, p': {
        margin: 0,
        padding: 0
    }
}, {
    ' h1 small, h2 small, h3 small, h4 small, h5 small, h6 small': {
        'font-weight': _config2.default.font_weight_normal,
        'line-height': _config2.default.line_height,
        'letter-spacing': '-0.02em',
        'font-size': '0.6em'
    }
}, {
    ' h1': {
        'font-size': '56px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': _config2.default.line_height,
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h2': {
        'font-size': '45px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '48px',
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h3': {
        'font-size': '34px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '40px',
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h4': {
        'font-size': '24px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '32px',
        '-moz-osx-font-smoothing': 'grayscale',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' h5': {
        'font-size': '20px',
        'font-weight': _config2.default.font_weight_medium,
        'line-height': '1',
        'letter-spacing': '-0.02em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' h6': {
        'font-size': '16px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': '0.04em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' html, body': {
        'font-size': fontSize + 'px',
        'line-height': '20px',
        'font-weight': _config2.default.font_weight_normal
    },
    ' p': {
        'font-size': fontSize + 'px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': '0',
        'margin-bottom': '16px'
    },
    ' blockquote': {
        'position': 'relative',
        'font-size': '24px',
        'font-weight': _config2.default.font_weight_normal,
        'font-style': 'italic',
        'line-height': _config2.default.line_height,
        'letter-spacing': '0.08em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    },
    ' ul, ol': {
        'font-size': fontSize + 'px',
        'font-weight': _config2.default.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': 0
    },
    'b, strong': {
        'font-weight': _config2.default.font_weight_medium
    }
}];

exports.default = styles;
//# sourceMappingURL=typography.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

var style = function style(config, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty({}, scope + '.pe-toolbar', {
        color: config['color_' + tint + '_text']
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

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var margin_side = 2 * _config2.default.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
var height_desktop = _config2.default.grid_unit_component * 8; // 64
var height_mobile_portrait = _config2.default.grid_unit_component * 7; // 56
var height_mobile_landscape = _config2.default.grid_unit_component * 6; // 48

exports.default = {
    margin_side: margin_side,
    indent: _config2.default.unit_indent,
    transition_duration: _config2.default.animation_duration,
    font_size: _config2.default.font_size_title,
    line_height: _config2.default.line_height,

    height_desktop: height_desktop,
    height_mobile_portrait: height_mobile_portrait,
    height_mobile_landscape: height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_primary),
    color_dark_text: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_primary)
};
//# sourceMappingURL=config.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(100);

var _config2 = _interopRequireDefault(_config);

var _custom = __webpack_require__(8);

var _custom2 = _interopRequireDefault(_custom);

var _layout = __webpack_require__(102);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(99);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var customConfigFn = _custom2.default.toolbar;

var config = customConfigFn ? customConfigFn(_config2.default) : _config2.default;

_styler2.default.add('pe-toolbar', (0, _layout2.default)(config), (0, _color2.default)(config));
//# sourceMappingURL=index.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

var _flex = __webpack_require__(11);

var _flex2 = _interopRequireDefault(_flex);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var createStyles = function createStyles(config) {
    return [{
        '.pe-toolbar': [
        // use hardware-acceleration
        _mixin2.default.vendorize({
            transform: 'translate3d(0,0,0)'
        }, _config2.default.prefixes_transform), {
            display: 'block',
            position: 'relative',
            height: config.height_normal + 'px',
            'font-size': config.font_size + 'px',
            'line-height': config.line_height + 'em',
            'background-color': '#CFD8DC', // just a default color, will normally be overridden

            '&.pe-header--animated': _mixin2.default.defaultTransition('height', config.transition_duration, 'ease-in'),

            '&.pe-header--medium-tall': {
                height: config.height_medium_tall + 'px'
            },

            '&.pe-header--tall': {
                height: config.height_tall + 'px'
            },

            '&.pe-toolbar--narrow': {
                height: config.height_narrow + 'px',

                ' .pe-toolbar__bar': {
                    height: config.height_narrow + 'px',
                    padding: 0
                }
            },

            '&.pe-toolbar--narrow.pe-header--medium-tall': {
                height: config.height_narrow_medium_tall + 'px'
            },

            '&.pe-toolbar--narrow.pe-header--tall': {
                height: config.height_narrow_tall + 'px'
            },

            '&.pe-header--tall .pe-toolbar__bar--middle': _mixin2.default.vendorize({
                transform: 'translateY(100%)'
            }, _config2.default.prefixes_transform),

            ' .pe-toolbar__bar': [_flex2.default.layoutCenter, _flex2.default.layoutHorizontal, {
                '> *:not(.disabled)': {
                    // make elements (e.g. buttons) respond to mouse/touch events
                    'pointer-events': 'auto'
                }
            }, {
                '> :first-child': {
                    'margin-left': config.margin_side + 'px'
                }
            }, {
                '> :last-child': {
                    'margin-right': config.margin_side + 'px'
                }
            }, {
                ' .pe-button--icon + span, .pe-button--icon + .pe-title': {
                    'margin-left': config.indent - config.margin_side - _config2.default.grid_unit_icon_button + 'px'
                }
            }, {
                '> span, > .pe-title': [_mixin2.default.ellipsis(1, _config2.default.line_height, 'em'), _mixin2.default.vendorize({
                    'transform-origin': 'left 50%'
                }, _config2.default.prefixes_transform), {
                    'line-height': _config2.default.line_height + 'em',
                    'word-break': 'break-all'
                }]
            }, {
                '> span:first-child, .pe-toolbar__title--indent': [_mixin2.default.ellipsis(1, _config2.default.line_height, 'em'), {
                    'margin-left': config.indent + 'px'
                }]
            }, {
                width: '100%',
                position: 'absolute',
                height: config.height_normal + 'px',
                'pointer-events': 'none',

                ' .pe-fit': [_mixin2.default.fit(), {
                    width: 'auto',
                    margin: 0,

                    '.bottom': {
                        top: 'auto'
                    }
                }],
                ' .pe-header': _mixin2.default.ellipsis(1, _config2.default.line_height, 'em'),

                '&.pe-toolbar__bar--top': {
                    'z-index': 3
                },
                '&.pe-toolbar__bar--middle': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    'z-index': 2
                },
                '&.pe-toolbar__bar--bottom': {
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    left: 0,
                    'z-index': 1
                }
            }]
        }]
    }];
};

exports.default = function (config) {
    return _mixin2.default.createStyles(config, createStyles);
};
//# sourceMappingURL=layout.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = [_defineProperty({
    ' html, body': {
        'min-height': '100%',
        height: '100%'
    },
    ' body': {
        background: _commonVars2.default.bodyBackgroundColor,
        margin: 0,
        padding: 0,
        'min-width': '320px',
        color: '#333'
    },
    ' h1': {
        margin: '20px 0 0 0',
        'font-size': '2em',
        'line-height': 1,
        padding: 0,

        ' span': {
            'font-weight': 'normal',
            color: '#aaa',
            'margin-left': '.5em'
        }
    },
    ' h1, h2': {
        color: '#37474F'
    },
    ' a:link, a:visited': {
        'text-decoration': 'none',
        color: '#1565C0'
    },
    ' .demo-content': {
        padding: '0 0 1px 0',
        height: 'inherit'
    },

    ' .app': {
        paddingTop: "70px"
    },

    ' .app-toolbar': {
        backgroundColor: "rgba(255,255,255,.93)",
        position: 'fixed',
        zIndex: 99,
        left: 0,
        top: 0,
        width: "100vw",

        ' .pe-button--icon': {
            color: _commonVars2.default.colorLink
        }
    },

    ' .index': {
        padding: 0,
        margin: '0 0 32px 0'
    },
    ' .index-list': {
        width: _commonVars2.default.listWidth + 'px',
        margin: _commonVars2.default.margin + 'px auto',
        'background-color': '#fff',

        ' .pe-icon.index-cirle-icon': {
            width: '40px',
            height: '40px',
            'border-radius': '50%',
            'background-color': 'transparent',

            ' svg path': {
                fill: 'rgba(0, 0, 0, 0.4)'
            }
        },
        ' .pe-icon.index-cirle-icon i': {
            padding: '8px'
        },
        ' .pe-list-tile-secondary': {
            color: '#757575'
        }
    },
    ' html.pe-no-touch .index-list .pe-list--hoverable .pe-list-tile:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
        'background-color': '#f7f7f7'
    },
    '.p-block, .h-block': {
        'max-width': _commonVars2.default.blockMaxWidth + 'px',
        margin: '0 auto',

        '> p': {
            margin: '0 0 16px 0'
        },
        ' .p-block-header': {
            'font-weight': 400,
            margin: '0 0 24px 0',
            'font-size': '18px',
            'line-height': 1.3,
            color: 'inherit'
        },
        ' .p-block-header + p': {
            'margin-top': '-16px'
        }
    },
    '.p-block .p-block .p-block-header': {
        'font-size': '17px'
    },
    '.p-block': {
        padding: '32px 28px'
    },
    '.h-block + .p-block': {
        'margin-top': 0
    },
    '.p-block:not(.p-inner-block) + .p-block:not(.p-inner-block)': {
        'border-top': '1px solid #d6d6d6'
    },
    '.p-block.pe-dark-theme:not(.p-inner-block) + .p-block.pe-dark-theme:not(.p-inner-block)': {
        'border-top': '1px solid #555'
    },
    '.p-block.p-block-info': {
        'margin': '20px auto 10px auto',

        '&, p': {
            'font-size': '16px',
            'line-height': '24px'
        }
    },
    '.p-block.pe-dark-theme': {
        background: _commonVars2.default.darkThemeBackgroundColor,
        color: '#fff'
    },
    '.p-block.p-inner-block': {
        padding: '10px 0',
        margin: 0,
        'font-size': '1.2em'
    },
    '.h-block': {
        padding: '24px 24px 0 24px',
        'margin-top': '24px',

        ' h1, h2, h3, h4, h5, h6': {
            margin: 0
        }
    },
    ' .avatar': {
        'border-radius': '50%',
        'background-color': '#eee'
    }
}, '@media (max-width: ' + _commonVars2.default.mediaMobile + 'px)', {
    ' .p-block, .h-block': {
        'padding-left': '16px',
        'padding-right': '16px'
    }
})];

exports.default = styles;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = (0, _mithril2.default)('.github', _mithril2.default.trust('Polythene, a modular implementation of Material Design for Mithril.<br /><a href="http://polythene.js.org">Documentation</a> and <a href="https://github.com/ArthurClemens/Polythene">Github project page</a>.'));

var style = [{
  '.github': {
    margin: '24px 0 0 0',
    'text-align': 'center',
    padding: '24px 16px',
    'border-top': '1px solid rgba(0,0,0,.08)',
    'font-size': '14px',
    color: 'rgba(0,0,0,.35)',

    ' a:link, a:visited': {
      color: _commonVars2.default.colorLink
    }
  }
}];

_styler2.default.add('polythene-examples-github', style);

exports.default = content;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ref;

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerFontSizePx = '32px';
var headerBackgroundColor = _commonVars2.default.colorHeader;
var headerTextColor = '#fff';

var styles = [(_ref = {
    '.pe-header-panel.app-header': {
        ' .pe-header-panel__outer-container > .pe-header-panel__header-container:first-of-type': {
            ' .pe-toolbar': {
                'background-color': headerBackgroundColor,
                'font-size': '20px',
                padding: '0 4px',
                'font-weight': 400,

                ' .pe-toolbar__bar--top': {
                    color: headerTextColor,

                    ' a.pe-button--icon': {
                        color: headerTextColor
                    }
                }
            }
        }
    },
    /*
    Style for the large header
    */
    '.pe-header-panel.index-header': {
        ' .pe-header-panel__header-container .pe-title': {
            'font-size': headerFontSizePx,
            color: headerTextColor,
            'text-align': 'center'
        },
        ' .pe-icon.logo': {
            width: headerFontSizePx,
            height: headerFontSizePx,
            'margin-right': '16px',
            ' svg path': {
                fill: headerTextColor
            }
        }
    }
}, _defineProperty(_ref, '@media (max-width: ' + _commonVars2.default.mediaTablet + 'px)', {
    ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
        'margin-left': '20px'
    }
}), _defineProperty(_ref, '@media (max-width: ' + _commonVars2.default.mediaMobile + 'px)', {
    ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
        ' .pe-icon': {
            display: 'none'
        }
    }
}), _ref)];

exports.default = styles;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(14);

var _headerPanel = __webpack_require__(15);

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _navStyle = __webpack_require__(105);

var _navStyle2 = _interopRequireDefault(_navStyle);

var _apps = __webpack_require__(142);

var _apps2 = _interopRequireDefault(_apps);

var _arrowBack = __webpack_require__(34);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('polythene-examples-nav', _navStyle2.default);

var btn = function btn(name, opts) {
    var route = opts.back || '/';
    return _mithril2.default.component(_iconButton2.default, {
        tag: 'a',
        url: {
            href: opts.urlConfig !== undefined ? 'index.html' : route,
            config: opts.urlConfig !== undefined ? opts.urlConfig : _mithril2.default.route
        },
        icon: {
            msvg: opts.isSub ? _arrowBack2.default : _apps2.default
        }
        // events: {
        //     onclick: (e) => (e.preventDefault(), m.route(route))
        // }
    });
};

var toolbarRow = function toolbarRow(title, opts) {
    return [btn('apps', opts), (0, _mithril2.default)('span.flex', title)];
};

var nav = function nav(title, content) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return _mithril2.default.component(_headerPanel2.default, _extends(opts, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title, opts)
            }
        },
        content: content
    }));
};

exports.default = nav;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="st0" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,21.7c-5.4,0-9.7-4.4-9.7-9.7 S6.6,2.3,12,2.3s9.7,4.4,9.7,9.7S17.4,21.7,12,21.7z"/><path class="st0" d="M12,4.5c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S16.2,4.5,12,4.5z M12,17.3 c-2.9,0-5.3-2.4-5.3-5.3S9.1,6.7,12,6.7s5.3,2.4,5.3,5.3S14.9,17.3,12,17.3z"/><circle class="st0" cx="12" cy="12" r="3"/></svg>');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);module.exports = m.trust('<?xml version="1.0" encoding="utf-8"?><svg version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="-149.5 250.5 100 100" enable-background="new -149.5 250.5 100 100" xml:space="preserve"><g><path d="M-121.911,326.974l4.529,4.53h-21.011c-1.058,0-2.041-0.556-2.564-1.449c-0.507-0.868-0.507-1.945,0.001-2.814 l15.481-26.467l-7.046-4.123l-15.482,26.467c-1.995,3.412-1.995,7.65,0.002,11.062c1.984,3.385,5.666,5.487,9.609,5.487h21.007 l-4.524,4.525l5.772,5.771l14.379-14.378l-14.378-14.384L-121.911,326.974z"/><path d="M-51.021,322.837l-10.604-18.144l6.196,1.626l2.07-7.896l-19.671-5.161l-5.161,19.673l7.895,2.073l1.625-6.189 l10.599,18.134c0.533,0.917,0.55,2.048,0.048,2.941c-0.498,0.88-1.431,1.427-2.438,1.427l-30.657-0.011l-0.004,8.164l30.661,0.011 c3.942,0,7.599-2.135,9.55-5.582C-48.99,330.485-49.033,326.246-51.021,322.837z"/><path d="M-74.419,282.942l-15.458-26.484c-1.964-3.356-5.577-5.422-9.458-5.422c-0.059,0-0.117,0-0.176,0 c-3.91,0.063-7.547,2.236-9.492,5.678l-10.32,18.311l-1.718-6.167l-7.865,2.19l5.458,19.59l19.597-5.469l-2.194-7.862l-6.162,1.72 l10.312-18.301c0.524-0.923,1.487-1.508,2.515-1.525c0.016,0,0.029,0,0.045,0c0.99,0,1.912,0.528,2.41,1.38l15.455,26.478 L-74.419,282.942z"/></g></svg>');

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (opts) {
    var buttonOpts = [{
        label: 'Normal',
        raised: opts.raised
    }, {
        label: 'Disabled',
        disabled: true,
        raised: opts.raised
    }, {
        label: 'Wash only',
        ink: false,
        raised: opts.raised
    }, {
        label: 'Ink only',
        ink: true,
        raised: opts.raised,
        wash: false
    }, opts.raised ? {
        label: 'Raised more',
        raised: opts.raised,
        z: 2
    } : null, {
        label: '2 secs inactive',
        inactivate: 2,
        raised: opts.raised
    }];

    return buttonOpts.map(function (opts) {
        if (opts) {
            return _mithril2.default.component(_button2.default, opts);
        }
    });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-button': {
        ' .button-row': {
            'margin-left': '-4px'
        },
        ' .p-block.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor,
            color: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _buttonRow = __webpack_require__(109);

var _buttonRow2 = _interopRequireDefault(_buttonRow);

var _buttonStyle = __webpack_require__(110);

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('polythene-examples-button', _buttonStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.content ? args.content : null]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-button', [_mithril2.default.component(titleBlock, {
        title: 'Raised Light / Light theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: true
        }))
    }), _mithril2.default.component(titleBlock, {
        title: 'Flat Light / Light theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: false
        }))
    }), _mithril2.default.component(titleBlock, {
        title: 'Raised Dark / Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: true
        }))
    }), _mithril2.default.component(titleBlock, {
        title: 'Flat Dark / Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: false
        }))
    })]);
};

exports.default = _module;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-card': {
        ' .demo-cards': {
            margin: '-10px'
        },
        ' .demo-card': {
            width: '400px',
            margin: '10px',
            ':not(.overlay.pe-dark-theme) .button__content': {
                color: '#5C6BC0'
            },

            '&.small': {
                width: '170px',
                ' .pe-card-overlay': {
                    background: 'none'
                }
            },
            '&.on .pe-card__media__dimmer, &.small .pe-card__media__dimmer': _mixin2.default.vendorize({
                'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
            }, _config2.default.prefixes_box_shadow),
            '&.extra-large': {
                width: _commonVars2.default.listWidth + 'px'
            },
            '&.custom': {
                width: '344px',
                '&.custom-travel .pe-button .pe-button__content': {
                    color: '#5C6BC0'
                }
            },
            '&.custom-sand.pe-dark-theme': {
                'background-color': '#B89E58'
            },
            '&.custom-sky.pe-dark-theme': {
                'background-color': '#227586'
            },
            '&.custom-bucket.pe-dark-theme': {
                'background-color': '#871E6A'
            }
        },
        ' a[href].demo-card:hover .pe-card__media__dimmer': _mixin2.default.vendorize({
            'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
        }, _config2.default.prefixes_box_shadow)
    }
}];

exports.default = styles;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _card = __webpack_require__(40);

var _card2 = _interopRequireDefault(_card);

var _list = __webpack_require__(16);

var _list2 = _interopRequireDefault(_list);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _cardStyle = __webpack_require__(112);

var _cardStyle2 = _interopRequireDefault(_cardStyle);

var _heart = __webpack_require__(148);

var _heart2 = _interopRequireDefault(_heart);

var _bookmark = __webpack_require__(147);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _share = __webpack_require__(149);

var _share2 = _interopRequireDefault(_share);

var _expandLess = __webpack_require__(143);

var _expandLess2 = _interopRequireDefault(_expandLess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('polythene-examples-card', _cardStyle2.default);

var IMG_URL = 'http://arthurclemens.github.io/assets/polythene/examples/';

var listTitle = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
var listSubtitle = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var titleLineText = 'Title';
var infoLineText = 'Subhead';
var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.';
var shortIpsum = 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var iconButtonRow = [(0, _mithril2.default)('.flex'), _mithril2.default.component(_iconButton2.default, {
    icon: {
        msvg: _heart2.default
    }
}), _mithril2.default.component(_iconButton2.default, {
    icon: {
        msvg: _bookmark2.default
    }
}), _mithril2.default.component(_iconButton2.default, {
    icon: {
        msvg: _share2.default
    }
})];

var justifiedButtonRow = {
    layout: 'justified',
    class: 'pe-card__actions--tight',
    content: [_mithril2.default.component(_iconButton2.default, {
        icon: {
            msvg: _heart2.default
        }
    }), _mithril2.default.component(_iconButton2.default, {
        icon: {
            msvg: _bookmark2.default
        }
    }), _mithril2.default.component(_iconButton2.default, {
        icon: {
            msvg: _share2.default
        }
    })]
};

var titleImage = function titleImage(type, title) {
    return {
        class: 'demo-card',
        content: [{
            primary: {
                title: title,
                subtitle: 'Subtitle',
                media: {
                    ratio: 'square',
                    type: type,
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }
        }, {
            actions: {
                content: [_mithril2.default.component(_button2.default, {
                    label: 'Action 1'
                }), _mithril2.default.component(_button2.default, {
                    label: 'Action 2'
                })]
            }
        }]
    };
};

var titleImageExtraLarge = function titleImageExtraLarge(ratio) {
    return {
        class: 'demo-card extra-large',
        content: [{
            primary: {
                content: [{
                    media: {
                        ratio: ratio,
                        type: 'large',
                        content: (0, _mithril2.default)('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, (0, _mithril2.default)('.flex'), {
                    actions: {
                        layout: 'vertical',
                        content: [_mithril2.default.component(_iconButton2.default, {
                            icon: {
                                msvg: _heart2.default
                            }
                        }), _mithril2.default.component(_iconButton2.default, {
                            icon: {
                                msvg: _bookmark2.default
                            }
                        }), _mithril2.default.component(_iconButton2.default, {
                            icon: {
                                msvg: _share2.default
                            }
                        })]
                    }
                }]
            }
        }]
    };
};

var block = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.label), args.info ? args.info : null, (0, _mithril2.default)('.demo-cards.horizontal.layout.wrap', [args.card ? _mithril2.default.component(_card2.default, args.card) : null, args.cards ? args.cards.map(function (cardArgs) {
            return _mithril2.default.component(_card2.default, cardArgs);
        }) : null])]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-card', [_mithril2.default.component(block, {
        label: 'Any content: list',
        card: {
            class: 'demo-card',
            content: _mithril2.default.component(_list2.default, {
                hoverable: true,
                tiles: [_mithril2.default.component(_listTile2.default, {
                    title: listTitle,
                    subtitle: listSubtitle
                }), _mithril2.default.component(_listTile2.default, {
                    title: listTitle,
                    subtitle: listSubtitle
                }), _mithril2.default.component(_listTile2.default, {
                    title: listTitle,
                    subtitle: listSubtitle
                })]
            })
        }
    }), _mithril2.default.component(block, {
        label: 'Text only',
        card: {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Header with icon',
        cards: [{
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Primary text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Primary text with supporting text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title ' + shortIpsum,
                    subtitle: 'Subtitle ' + shortIpsum
                }
            }, {
                text: {
                    content: ipsum
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Primary text with action row and text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), _mithril2.default.component(_iconButton2.default, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }, {
                text: {
                    content: ipsum
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Bottom action row, bordered',
        cards: [{
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                text: {
                    content: ipsum
                }
            }, {
                actions: {
                    class: 'pe-card__actions--borders',
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), _mithril2.default.component(_iconButton2.default, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                actions: {
                    layout: 'vertical',
                    content: [(0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', _mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    })), (0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    })), (0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', _mithril2.default.component(_button2.default, {
                        label: 'Action 3'
                    }))]
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: '16:9 media with square image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: '16:9 media with landscape image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: '16:9 media with portrait image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: '1:1 media with square image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Overlay with sheet',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        sheet: true,
                        content: [{
                            primary: {
                                title: 'Primary title',
                                subtitle: 'Subtitle'
                            }
                        }, {
                            actions: {
                                content: [_mithril2.default.component(_button2.default, {
                                    label: 'Action 1'
                                }), _mithril2.default.component(_button2.default, {
                                    label: 'Action 2'
                                })]
                            }
                        }]
                    }
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Overlay without sheet',
        cards: [{
            class: 'demo-card small',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        content: [{
                            primary: {
                                title: 'Title'
                            }
                        }]
                    }
                }
            }, {
                actions: justifiedButtonRow
            }]
        }, {
            class: 'demo-card small',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        content: [{
                            primary: {
                                title: 'Title'
                            }
                        }]
                    }
                }
            }, {
                actions: justifiedButtonRow
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Title images',
        cards: [titleImage('small', 'Title image small'), titleImage('regular', 'Title image regular'), titleImage('medium', 'Title image medium')]
    }), _mithril2.default.component(block, {
        label: 'Title image large',
        cards: [titleImageExtraLarge('square'), titleImageExtraLarge('landscape')]
    }), _mithril2.default.component(block, {
        label: 'Card URL',
        cards: [{
            class: 'demo-card',
            url: {
                href: 'http://en.wikipedia.org/wiki/Road_to_Nowhere',
                config: null
            },
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    },
                    url: {
                        href: 'http://www.imdb.com/name/nm0260632/',
                        config: null
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1',
                        events: {
                            onclick: function onclick(e) {
                                // prevent URL
                                e.preventDefault();
                            }
                        }
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2',
                        events: {
                            onclick: function onclick(e) {
                                // prevent URL
                                e.preventDefault();
                            }
                        }
                    })]
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Card events',
        cards: [{
            class: 'demo-card',
            events: {
                onmouseover: function onmouseover() {
                    this.classList.add('on');
                },
                onmouseout: function onmouseout() {
                    this.classList.remove('on');
                },
                onclick: function onclick() {
                    window.alert('Card clicked');
                }
            },
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1',
                        events: {
                            onclick: function onclick(e) {
                                // prevent card event
                                e.stopPropagation();
                                window.alert('Action 1 clicked');
                            }
                        }
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2',
                        events: {
                            onclick: function onclick(e) {
                                // prevent card event
                                e.stopPropagation();
                                window.alert('Action 2 clicked');
                            }
                        }
                    })]
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Dark theme',
        card: {
            class: 'demo-card pe-dark-theme',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title ' + shortIpsum,
                    subtitle: 'Subtitle ' + shortIpsum
                }
            }, {
                text: {
                    content: ipsum
                }
            }, {
                actions: {
                    class: 'pe-card__actions--borders',
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), _mithril2.default.component(_iconButton2.default, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }]
        }
    }), _mithril2.default.component(block, {
        label: 'Custom cards',
        cards: [{
            class: 'demo-card custom custom-travel',
            content: [{
                primary: {
                    content: [{
                        title: (0, _mithril2.default)('.pe-card__title', [(0, _mithril2.default)('.pe-card__subtitle', 'Travel'), (0, _mithril2.default)('span', 'Road Trip')])
                    }, {
                        media: {
                            ratio: 'square',
                            type: 'small',
                            content: (0, _mithril2.default)('img', {
                                src: IMG_URL + '1.jpg'
                            })
                        }
                    }]
                }
            }, {
                text: {
                    content: 'A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile.'
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-sand pe-dark-theme',
            content: [{
                primary: {
                    title: 'Get Ready',
                    subtitle: '2 Unlimited',
                    media: {
                        ratio: 'square',
                        type: 'medium',
                        content: (0, _mithril2.default)('img', {
                            src: 'http://www.the2unlimited.com/pochettes/GET%20READY%2001.JPG'
                        })
                    }
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Listen now'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-sky pe-dark-theme',
            content: [{
                primary: {
                    title: 'Supermodel',
                    subtitle: 'Foster the People',
                    media: {
                        ratio: 'square',
                        type: 'medium',
                        content: (0, _mithril2.default)('img', {
                            src: 'http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg'
                        })
                    }
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Listen now'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-bucket pe-dark-theme',
            content: [{
                primary: {
                    title: 'Bucket List'
                }
            }, {
                text: {
                    content: _mithril2.default.trust('<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>')
                }
            }, {
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Edit'
                    })]
                }
            }]
        }]
    }), _mithril2.default.component(block, {
        label: 'Depth',
        cards: [{
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Normal'
                }
            }]
        }, {
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Flat'
                }
            }],
            z: 0
        }, {
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Raised'
                }
            }],
            z: 2
        }]
    }), _mithril2.default.component(block, {
        label: 'Separate elements combined',
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '3.jpg'
                    })
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                text: {
                    content: _mithril2.default.trust('<strong>Normal - 24px bottom padding</strong> ' + ipsum)
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                text: {
                    content: _mithril2.default.trust('<strong>Class: card__text--tight: 16px bottom padding</strong> ' + ipsum),
                    class: 'pe-card__text--tight'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Normal - 24px bottom padding'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Class: card__primary--tight: 16px bottom padding',
                    class: 'pe-card__primary--tight'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    tag: '.layout.vertical.start',
                    content: [_mithril2.default.component(_button2.default, {
                        label: 'Action 1'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 2'
                    }), _mithril2.default.component(_button2.default, {
                        label: 'Action 3'
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    })]);
};

exports.default = _module;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customColor = '15, 157, 88';

var styles = [{
    '.module-checkbox': {
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--checkbox': {
                color: 'rgb(' + customColor + ')'
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + customColor + ')'
            }
        },
        ' .pe-control--checkbox': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _checkbox = __webpack_require__(45);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _checkboxStyle = __webpack_require__(114);

var _checkboxStyle2 = _interopRequireDefault(_checkboxStyle);

var _star = __webpack_require__(145);

var _star2 = _interopRequireDefault(_star);

var _starBorder = __webpack_require__(144);

var _starBorder2 = _interopRequireDefault(_starBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('polythene-examples-checkbox', _checkboxStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('all');
    return {
        checkboxState: _mithril2.default.prop(false),
        checkboxValue: _mithril2.default.prop(undefined),
        checkboxListenerState: _mithril2.default.prop(false)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-checkbox', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', [(0, _mithril2.default)('span', 'See also '), (0, _mithril2.default)('a', {
        href: '/switch',
        config: _mithril2.default.route
    }, 'Switch'), (0, _mithril2.default)('span', ' and '), (0, _mithril2.default)('a', {
        href: '/radio-button',
        config: _mithril2.default.route
    }, 'Radio button'), (0, _mithril2.default)('span', '.')]), (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, ENTER to select.'])]), _mithril2.default.component(titleBlock, {
        title: 'Default checkbox',
        content: (0, _mithril2.default)('.row', [_mithril2.default.component(_checkbox2.default), _mithril2.default.component(_checkbox2.default, {
            checked: true
        })])
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom hover behavior',
        content: (0, _mithril2.default)('.row', [_mithril2.default.component(_checkbox2.default, {
            name: 'custom1',
            checked: false,
            iconButton: {
                wash: true,
                ink: false
            }
        }), _mithril2.default.component(_checkbox2.default, {
            checked: true,
            name: 'custom2',
            iconButton: {
                wash: true,
                ink: false
            }
        })])
    }), _mithril2.default.component(titleBlock, {
        title: 'With label',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: false
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: false
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom size',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [_mithril2.default.component(_checkbox2.default, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: false,
                size: size
            })]);
        })
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom icon',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [_mithril2.default.component(_checkbox2.default, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: false,
                iconOn: {
                    msvg: _star2.default
                },
                iconOff: {
                    msvg: _starBorder2.default
                },
                size: size
            })]);
        })
    }), _mithril2.default.component(titleBlock, {
        title: 'Checked state: ' + ctrl.checkboxState(),
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: ctrl.checkboxState,
            getState: function getState(state) {
                return ctrl.checkboxState(state.checked);
            }
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Setting the value from outside',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Initiator',
            getState: function getState(state) {
                return ctrl.checkboxListenerState(state.checked);
            }
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Result',
            disabled: true,
            checked: ctrl.checkboxListenerState
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Disabled',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: false,
            disabled: true
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: true,
            disabled: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: false
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: [_mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: false,
            disabled: true
        }), _mithril2.default.component(_checkbox2.default, {
            label: 'Checkbox',
            checked: true,
            disabled: true
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _primaryButton = __webpack_require__(117);

var _primaryButton2 = _interopRequireDefault(_primaryButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content ? args.content : null]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.example-custom-theme', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('Theming is described in the <a href="https://github.com/ArthurClemens/Polythene/blob/master/theme/theme.md">Polythene theme documentation</a>.'))), _mithril2.default.component(titleBlock, {
        title: 'Sub-classing a component',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Creating a wrapper around a Polythene component.')),
        content: (0, _mithril2.default)('div', {
            style: {
                margin: '0 -4px'
            }
        }, [_mithril2.default.component(_primaryButton2.default, { label: 'One' }), _mithril2.default.component(_primaryButton2.default, { label: 'Two' }), _mithril2.default.component(_primaryButton2.default, { label: 'Three' })])
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom style as configuration',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Enhancing/replacing styles with configuration per component. This new configuration is scoped to this page.')),
        content: (0, _mithril2.default)('div', {
            style: {
                margin: '0 -4px'
            }
        }, [_mithril2.default.component(_button2.default, { raised: true, label: 'One' }), _mithril2.default.component(_button2.default, { raised: true, label: 'Two' }), _mithril2.default.component(_button2.default, { raised: true, label: 'Three' })])
    })]);
};

exports.default = _module;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

__webpack_require__(1);

var _config = __webpack_require__(18);

var _config2 = _interopRequireDefault(_config);

var _layout = __webpack_require__(23);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(22);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reconfig = function reconfig(cfg) {
    return [{ '.my-button--primary': _extends({}, cfg, {
            border_radius: 0,
            text_transform: 'none',
            color_light_flat_normal_background: '#673ab7',
            color_light_flat_normal_text: '#fff'
        }) }];
};

var newConfig = reconfig(_config2.default);
_styler2.default.add('my-button-primary', (0, _layout2.default)(newConfig), (0, _color2.default)(newConfig));

exports.default = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        opts.class = (opts.class || '') + ' my-button--primary';
        opts.borders = true;
        return _mithril2.default.component(_button2.default, opts);
    }
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(2);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-dialog': {
        '&.pe-dialog--fullscreen': {
            ' .pe-header-panel .pe-header-panel__main-container': {
                padding: '24px'
            }
        },
        '&.fullwidth-dialog': {
            ' .pe-dialog__content': {
                width: '280px'
            }
        },
        ' .pe-dialog__content': {
            'max-width': 56 * 8 + 'px',

            ' .demo-content': {
                height: 'auto'
            }
        },
        ' .pe-dialog__footer': {
            ' .pe-button:not(.pe-button--disabled)': {
                color: '#009688'
            },
            ' .pe-button--disabled': {
                color: '#ccc'
            }
        },
        ' .pe-toolbar': {
            'background-color': '#009688',
            color: '#fff'
        },
        '&.dialog-simple .pe-icon': {
            color: '#00bad2'
        },
        ' .item.demo-item': {
            height: '56px'
        },
        ' .demo-dialog-settingsmenu .pe-list-item': [_mixin2.default.vendorize({
            'user-select': 'none'
        }, _config2.default.prefixes_user_select)]
    }
}];

exports.default = styles;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _switch = __webpack_require__(32);

var _switch2 = _interopRequireDefault(_switch);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _dialogShort = __webpack_require__(132);

var _dialogShort2 = _interopRequireDefault(_dialogShort);

var _dialogNotransition = __webpack_require__(129);

var _dialogNotransition2 = _interopRequireDefault(_dialogNotransition);

var _dialogLong = __webpack_require__(124);

var _dialogLong2 = _interopRequireDefault(_dialogLong);

var _dialogForm = __webpack_require__(121);

var _dialogForm2 = _interopRequireDefault(_dialogForm);

var _dialogModal = __webpack_require__(125);

var _dialogModal2 = _interopRequireDefault(_dialogModal);

var _dialogDark = __webpack_require__(120);

var _dialogDark2 = _interopRequireDefault(_dialogDark);

var _dialogSimpleFullscreen = __webpack_require__(133);

var _dialogSimpleFullscreen2 = _interopRequireDefault(_dialogSimpleFullscreen);

var _dialogFullscreen = __webpack_require__(122);

var _dialogFullscreen2 = _interopRequireDefault(_dialogFullscreen);

var _dialogSimple = __webpack_require__(134);

var _dialogSimple2 = _interopRequireDefault(_dialogSimple);

var _dialogSettingsmenu = __webpack_require__(131);

var _dialogSettingsmenu2 = _interopRequireDefault(_dialogSettingsmenu);

var _dialogFullwidth = __webpack_require__(123);

var _dialogFullwidth2 = _interopRequireDefault(_dialogFullwidth);

var _dialogMultiRoute = __webpack_require__(128);

var _dialogMultiRoute2 = _interopRequireDefault(_dialogMultiRoute);

var _dialogReplace = __webpack_require__(33);

var _dialogReplace2 = _interopRequireDefault(_dialogReplace);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _dialogStyle = __webpack_require__(118);

var _dialogStyle2 = _interopRequireDefault(_dialogStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routeDialog from './dialogs/dialog-route';
/*
In index.es6.js the dialog is rendered in the app.view function.
*/
_styler2.default.add('polythene-examples-dialog', _dialogStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, (0, _mithril2.default)('div', args.content)]);
    }
};

var dialogsData = [{
    title: 'Short dialog',
    dialog: _dialogShort2.default,
    info: 'Dialog without title.',
    url: '/dialog/short'
}, {
    title: 'No transition',
    dialog: _dialogNotransition2.default,
    info: 'Dialog appears without fadein/out.',
    url: '/dialog/notransition'
}, {
    title: 'Form dialog',
    dialog: _dialogForm2.default,
    info: 'Shows conditional button states.',
    url: '/dialog/form'
}, {
    title: 'Long dialog',
    dialog: _dialogLong2.default,
    info: 'Shows content borders with scrolled content.',
    url: '/dialog/long'
}, {
    title: 'Modal dialog with backdrop',
    dialog: _dialogModal2.default,
    info: 'A modal dialog can only be closed by a confirming action.',
    url: '/dialog/modal'
}, {
    title: 'Modal dialog dark theme',
    dialog: _dialogDark2.default,
    url: '/dialog/dark'
}, {
    title: 'Fullscreen dialog (simple)',
    dialog: _dialogSimpleFullscreen2.default,
    info: 'Example of a simple fullscreen dialog.',
    url: '/dialog/simple-fullscreen'
}, {
    title: 'Fullscreen dialog (confirm)',
    dialog: _dialogFullscreen2.default,
    info: 'Example with secondary (stacked) dialog with a confirm action.',
    url: '/dialog/fullscreen'
}, {
    title: 'Simple dialog',
    dialog: _dialogSimple2.default,
    info: 'Simple dialogs can present additional details about a list item or provide actions related to the primary task.',
    url: '/dialog/simple'
}, {
    title: 'Simple dialog as settings menu',
    dialog: _dialogSettingsmenu2.default,
    info: 'Simple dialogs can be used as enhanced settings menu.',
    url: '/dialog/settingsmenu'
}, {
    title: 'Full width button',
    dialog: _dialogFullwidth2.default,
    info: 'Stacked buttons.',
    url: '/dialog/fullwidth'
},
// {
//     title: 'Persistent dialog',
//     dialog: routeDialog,
//     info: 'Persists across route change.',
//     url: '/dialog/route'
// },
{
    title: 'Replace dialog',
    dialog: _dialogReplace2.default,
    info: 'Change dialog contents/behavior by calling \'show\' with new options.',
    url: '/dialog/replace'
}, {
    title: 'Routes within a dialog',
    dialog: _dialogMultiRoute2.default,
    info: 'Keep dialog, change dialog contents.',
    url: '/dialog/multi-route'
}];

// for the 'multi' demo we need to keep the dialog
var additionalRoutes = [
    // {
    //     url: '/dialog/multi-route/one',
    //     dialog: multiRouteDialog
    // }, {
    //     url: '/dialog/multi-route/two',
    //     dialog: multiRouteDialog
    // }
];

var dataForPath = function dataForPath(path) {
    var allData = dialogsData.concat(additionalRoutes);
    return allData.reduce(function (found, data) {
        return data.url === path ? data : found;
    }, null);
};

var _module = {};
_module.ctrl = function (_ref) {
    var path = _ref.path;

    // see if we need to show a dialog on load
    // only when we use routes (otherwise no route in url to use)
    var data = dataForPath(path);
    if (data) {
        _dialog2.default.show(data.dialog).then(function (dialogId) {
            return console.log('route dialog shown', dialogId);
        });;
    } else {
        _dialog2.default.hide().then(function (dialogId) {
            return console.log('route dialog hidden', dialogId);
        });
    }
    // return module;
    return {
        checked: false
    };
};
// module.ctrl = () => {
//     return {
//         checked: false
//     }
// }
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-dialog', [_mithril2.default.component(titleBlock, {
        content: _mithril2.default.component(_switch2.default, {
            label: 'Use routing',
            getState: function getState(state) {
                return console.log("state", state), ctrl.checked = state.checked;
            }
        })
    }), dialogsData.map(function (data) {
        return _mithril2.default.component(titleBlock, {
            title: data.title,
            info: data.info ? (0, _mithril2.default)('p', data.info) : null,
            content: _mithril2.default.component(_button2.default, {
                label: 'Open',
                raised: true,
                events: {
                    onclick: function onclick(e) {
                        e.preventDefault();
                        if (ctrl.checked) {
                            _mithril2.default.route(data.url);
                        } else {
                            _dialog2.default.show(data.dialog).then(function (dialogId) {
                                return console.log('dialog shown', dialogId);
                            });
                        }
                    }
                }
            })
        });
    })]);
};

exports.default = _module;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog pe-dark-theme',
    title: 'Modal dialog dark theme',
    body: _mithril2.default.trust(_common2.default.template),
    modal: true,
    backdrop: true
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmptyValue = true;

// use a function to have the state of isEmptyValue reflected in the dialog
var componentFn = function componentFn() {
    return _extends({}, _common2.default.dialogProps, {
        title: 'Select a file...',
        body: (0, _mithril2.default)('input', {
            type: 'file',
            id: 'file',
            name: 'file',
            onchange: function onchange(e) {
                var fileInput = e.target;
                isEmptyValue = fileInput.value === undefined;
            }
        }),
        formOptions: {
            name: 'demo',
            type: 'post',
            enctype: 'multipart/form-data',
            onsubmit: function onsubmit(e) {
                e.preventDefault();
                var form = e.target;
                alert('Posted: ' + form.file.value);
                _dialog2.default.hide();
                isEmptyValue = true;
            }
        },
        footer: [_mithril2.default.component(_button2.default, {
            label: 'Cancel',
            events: {
                onclick: function onclick() {
                    return _dialog2.default.hide();
                }
            }
        }), _mithril2.default.component(_button2.default, {
            disabled: isEmptyValue ? true : false,
            label: 'Post',
            tag: 'button',
            type: 'submit'
        })],
        didHide: function didHide() {
            isEmptyValue = true;
        }
    });
};

exports.default = componentFn;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _headerPanel = __webpack_require__(15);

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _close = __webpack_require__(35);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIALOG_CONFIRM = 'confirm-fullscreen';

var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
    return [_mithril2.default.component(_iconButton2.default, {
        icon: {
            msvg: _close2.default
        },
        events: {
            onclick: function onclick() {
                _dialog2.default.show(confirmDialogOptsFn, DIALOG_CONFIRM);
            }
        }
    }), (0, _mithril2.default)('span.flex', title), _mithril2.default.component(_button2.default, {
        label: 'Save',
        events: {
            onclick: function onclick() {
                _dialog2.default.hide();
            }
        }
    })];
};

var fullscreenPanelBlock = {
    view: function view(ctrl, opts) {
        return _mithril2.default.component(_headerPanel2.default, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event', opts)
                }
            },
            content: _mithril2.default.trust(_common2.default.template)
        });
    }
};

var confirmDialogOptsFn = function confirmDialogOptsFn() {
    return _extends({}, _common2.default.dialogProps, {
        class: 'demo-dialog',
        footer: [_mithril2.default.component(_button2.default, {
            label: 'Cancel',
            events: {
                onclick: function onclick() {
                    _dialog2.default.hide(DIALOG_CONFIRM);
                }
            }
        }), _mithril2.default.component(_button2.default, {
            label: 'Discard',
            events: {
                onclick: function onclick() {
                    _dialog2.default.hide(DIALOG_CONFIRM);
                    _dialog2.default.hide();
                }
            }
        })],
        body: _common2.default.shortBodyText,
        modal: true,
        backdrop: true
    });
};

var confirmDialogShown = _mithril2.default.prop(false);

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    body: [_mithril2.default.component(fullscreenPanelBlock, {
        confirmDialogShown: confirmDialogShown
    })],
    fullscreen: true
});

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonEvents = {
    onclick: function onclick() {
        _dialog2.default.hide();
    }
};

var buttons = [_mithril2.default.component(_button2.default, {
    label: 'Turn on location services',
    events: buttonEvents
}), _mithril2.default.component(_button2.default, {
    label: 'No thanks',
    events: buttonEvents
})];

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog fullwidth-dialog',
    body: [(0, _mithril2.default)('.pe-dialog__title', 'Let your apps know your location'), (0, _mithril2.default)('div', 'This means that your location data will be sent to our servers, anonymously of course.')],
    footer: buttons
});

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    title: 'Long dialog with a very long title that surely won\'t fit here',
    body: _mithril2.default.trust(_common2.default.template)
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    title: 'Modal',
    body: _mithril2.default.trust(_common2.default.template),
    modal: true,
    backdrop: true
});

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    view: function view() {
        return (0, _mithril2.default)('.layout.vertical', (0, _mithril2.default)('p', 'This is page one'), _mithril2.default.component(_button2.default, {
            raised: true,
            label: 'Go to page two',
            events: {
                onclick: function onclick() {
                    _mithril2.default.route('/dialog/multi-route/two');
                }
            }
        }));
    }
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    view: function view() {
        return (0, _mithril2.default)('.layout.vertical', (0, _mithril2.default)('p', 'This is page two'), _mithril2.default.component(_button2.default, {
            raised: true,
            label: 'Go to page one',
            events: {
                onclick: function onclick() {
                    _mithril2.default.route('/dialog/multi-route/one');
                }
            }
        }));
    }
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _dialogMultiRoutePage = __webpack_require__(126);

var _dialogMultiRoutePage2 = _interopRequireDefault(_dialogMultiRoutePage);

var _dialogMultiRoutePage3 = __webpack_require__(127);

var _dialogMultiRoutePage4 = _interopRequireDefault(_dialogMultiRoutePage3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return {
        body: (0, _mithril2.default)('div', _mithril2.default.route() === '/dialog/multi-route/two' ? _dialogMultiRoutePage4.default : _dialogMultiRoutePage2.default),
        footer: _mithril2.default.component(_button2.default, {
            label: 'Close',
            events: {
                onclick: function onclick() {
                    return _dialog2.default.hide();
                }
            }
        }),
        didHide: function didHide() {
            _mithril2.default.route('/dialog');
        }
    };
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    body: _common2.default.shortBodyText,
    transition: 'none'
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _dialogReplace = __webpack_require__(33);

var _dialogReplace2 = _interopRequireDefault(_dialogReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    body: 'Dialog Two',
    footer: _mithril2.default.component(_button2.default, {
        label: 'Show One',
        events: {
            onclick: function onclick() {
                return _dialog2.default.show(_dialogReplace2.default);
            }
        }
    })
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _list = __webpack_require__(16);

var _list2 = _interopRequireDefault(_list);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createListTile = function createListTile(title) {
    return _mithril2.default.component(_listTile2.default, {
        title: title,
        events: {
            onclick: function onclick() {
                return _dialog2.default.hide();
            }
        },
        ink: true
    });
};

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    menu: _mithril2.default.component(_list2.default, {
        hoverable: true,
        tiles: [createListTile('Show all notification content including sensitive notification content'), createListTile('Hide sensitive notification content'), createListTile('Hide all notification content')]
    }),
    hideDelay: .15,
    header: null,
    footer: null
});

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(1);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    body: _common2.default.shortBodyText
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _headerPanel = __webpack_require__(15);

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _button = __webpack_require__(5);

var _button2 = _interopRequireDefault(_button);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _close = __webpack_require__(35);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
    return [_mithril2.default.component(_iconButton2.default, {
        icon: {
            msvg: _close2.default
        },
        events: {
            onclick: function onclick() {
                _dialog2.default.hide();
            }
        }
    }), (0, _mithril2.default)('span.flex', title), _mithril2.default.component(_button2.default, {
        label: 'Save',
        events: {
            onclick: function onclick() {
                _dialog2.default.hide();
            }
        }
    })];
};

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    body: _mithril2.default.component(_headerPanel2.default, {
        class: 'pe-dark-theme',
        fixed: true,
        header: {
            toolbar: {
                content: fullscreenToolbarRow('New event')
            }
        },
        content: _mithril2.default.trust(_common2.default.template)
    }),
    fullscreen: true
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(1);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _list = __webpack_require__(16);

var _list2 = _interopRequireDefault(_list);

var _listTile = __webpack_require__(13);

var _listTile2 = _interopRequireDefault(_listTile);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _accountCircle = __webpack_require__(141);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _common2.default.dialogProps, {
    class: 'demo-dialog dialog-simple',
    title: 'Set backup account',
    menu: _mithril2.default.component(_list2.default, {
        hoverable: true,
        tiles: [1, 2, 3].map(function () {
            return _mithril2.default.component(_listTile2.default, {
                class: 'demo-item',
                front: _mithril2.default.component(_icon2.default, {
                    type: 'large',
                    msvg: _accountCircle2.default
                }),
                title: 'Account',
                events: {
                    onclick: function onclick() {
                        _dialog2.default.hide();
                    }
                }
            });
        })
    }),
    footer: null
});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _toolbar = __webpack_require__(20);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _iconButton = __webpack_require__(9);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _dialog = __webpack_require__(6);

var _dialog2 = _interopRequireDefault(_dialog);

var _arrowBack = __webpack_require__(34);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (name, pageContent, previous) {
  return {
    ctrl: function ctrl() {
      return document.title = name;
    },
    view: function view() {
      return [(0, _mithril2.default)("div", (0, _mithril2.default)(_toolbar2.default, {
        class: "app-toolbar",
        topBar: [previous && (0, _mithril2.default)(_iconButton2.default, {
          icon: { msvg: _arrowBack2.default },
          url: {
            href: "/",
            config: _mithril2.default.route.link
          },
          style: {
            color: "#0091EA"
          }
        }), (0, _mithril2.default)("span", name)]
      })), (0, _mithril2.default)(pageContent), (0, _mithril2.default)(_dialog2.default)];
    }
  };
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(12);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customThumbColor = '#fc4482';
var neutralStr = '100, 100, 100';
var purpleStr = '156, 39, 176';

var styles = [{
    '.module-switch': {
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--switch__track': {
                'background-color': '#fd8b83'
            },
            ' .pe-control--off .pe-control--switch__thumb': {
                color: '#fff'
            },
            ' .pe-control--on .pe-control--switch__thumb': {
                color: customThumbColor
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': customThumbColor
            }
        },
        ' .pe-control--switch': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        },
        ' .custom-icon': {
            ' .pe-control--off': {
                ' .pe-control--switch__track': {
                    'background-color': '#aaa'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + neutralStr + ')'
                }
            },
            ' .pe-control--on': {
                ' .pe-control--switch__track': {
                    'background-color': '#ba83fd'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + purpleStr + ')'
                }
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + purpleStr + ')'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _switch = __webpack_require__(32);

var _switch2 = _interopRequireDefault(_switch);

var _styler = __webpack_require__(3);

var _styler2 = _interopRequireDefault(_styler);

var _switchStyle = __webpack_require__(136);

var _switchStyle2 = _interopRequireDefault(_switchStyle);

var _icon = __webpack_require__(10);

var _icon2 = _interopRequireDefault(_icon);

var _bullseye = __webpack_require__(107);

var _bullseye2 = _interopRequireDefault(_bullseye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styler2.default.add('polythene-examples-switch', _switchStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content]);
    }
};

var _module = {};
_module.controller = function () {
    return {
        switchState: _mithril2.default.prop(false),
        switchListenerState: _mithril2.default.prop(false)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-switch', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', [(0, _mithril2.default)('span', 'See also '), (0, _mithril2.default)('a', {
        href: '/checkbox',
        config: _mithril2.default.route
    }, 'Checkbox'), (0, _mithril2.default)('span', ' and '), (0, _mithril2.default)('a', {
        href: '/radio-button',
        config: _mithril2.default.route
    }, 'Radio button'), (0, _mithril2.default)('span', '.')]), (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, ENTER to select.'])]), _mithril2.default.component(titleBlock, {
        title: 'Default switch',
        content: (0, _mithril2.default)('.row', [_mithril2.default.component(_switch2.default)])
    }), _mithril2.default.component(titleBlock, {
        title: 'With label',
        content: [_mithril2.default.component(_switch2.default, {
            label: 'Switch'
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: [_mithril2.default.component(_switch2.default)]
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom icon',
        class: 'custom-icon',
        content: [_mithril2.default.component(_switch2.default, {
            icon: _mithril2.default.component(_icon2.default, {
                msvg: _bullseye2.default
            })
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'No shadow, custom color',
        class: 'custom-color',
        content: (0, _mithril2.default)('.row', [_mithril2.default.component(_switch2.default, {
            raised: false,
            wash: false
        })])
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom shadow depth',
        info: (0, _mithril2.default)('p', 'Starting at depth 0.'),
        class: 'custom-color',
        content: (0, _mithril2.default)('.row', [_mithril2.default.component(_switch2.default, {
            zOff: 0,
            zOn: 1
        })])
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom size',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [_mithril2.default.component(_switch2.default, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                size: size
            })]);
        })
    }), _mithril2.default.component(titleBlock, {
        title: 'Checked state: ' + ctrl.switchState(),
        content: [_mithril2.default.component(_switch2.default, {
            checked: ctrl.switchState,
            getState: function getState(state) {
                return ctrl.switchState(state.checked);
            }
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Setting the value from outside',
        content: [_mithril2.default.component(_switch2.default, {
            label: 'Initiator',
            getState: function getState(state) {
                return ctrl.switchListenerState(state.checked);
            }
        }), _mithril2.default.component(_switch2.default, {
            label: 'Result',
            disabled: true,
            checked: ctrl.switchListenerState
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Disabled',
        content: [_mithril2.default.component(_switch2.default, {
            label: 'Off',
            disabled: true
        }), _mithril2.default.component(_switch2.default, {
            label: 'On',
            disabled: true,
            checked: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: [_mithril2.default.component(_switch2.default, {
            label: 'Switch'
        }), _mithril2.default.component(_switch2.default, {
            label: 'Switch',
            checked: true
        })]
    }), _mithril2.default.component(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: [_mithril2.default.component(_switch2.default, {
            label: 'Off',
            disabled: true
        }), _mithril2.default.component(_switch2.default, {
            label: 'On',
            disabled: true,
            checked: true
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return FastClick;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyObject = {};
var emptyArray = [];
var type = emptyObject.toString;
var own =  emptyObject.hasOwnProperty;
var OBJECT = type.call(emptyObject);
var ARRAY =  type.call(emptyArray);
var STRING = type.call('');
/*/-inline-/*/
// function cartesian(a, b, res, i, j) {
//   res = [];
//   for (j in b) if (own.call(b, j))
//     for (i in a) if (own.call(a, i))
//       res.push(a[i] + b[j]);
//   return res;
// }
/*/-inline-/*/

/* /-statements-/*/
function cartesian(a,b, selectorP, res, i, j) {
  res = []
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(concat(a[i], b[j], selectorP))
  return res
}

function concat(a, b, selectorP) {
  // `b.replace(/&/g, a)` is never falsy, since the
  // 'a' of cartesian can't be the empty string
  // in selector mode.
  return selectorP && (
    /^[-\w$]+$/.test(b) && ':-error-bad-sub-selector-' + b ||
    /&/.test(b) && /* never falsy */ b.replace(/&/g, a)
  ) || a + b
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {array|object|string} o - the declarations.
 * @param {string[]} buf - the buffer in which the final style sheet is built.
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {string} vendors - a list of vendor prefixes.
 * @Param {boolean} local - are we in @local or in @global scope.
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes.
 * @param {function} ns.e - @extend helper.
 * @param {function} ns.l - @local helper.
 */

function declarations(o, buf, prefix, vendors, local, ns, /*var*/ k, v, kk) {
  if (o==null) return
  if (/\$/.test(prefix)) {
    for (kk in (prefix = prefix.split('$'))) if (own.call(prefix, kk)) {
      declarations(o, buf, prefix[kk], vendors, local, ns)
    }
    return
  }
  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)
      declarations(o[k], buf, prefix, vendors, local, ns)
    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-')
    for (k in o) if (own.call(o, k)){
      v = o[k]
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk))
          declarations(v, buf, prefix + k[kk], vendors, local, ns)
      } else {
        declarations(v, buf, prefix + k, vendors, local, ns)
      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair.
    // otherwise, `prefix` is the property name, and
    // `o` is the value.
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize)

    if (local && (k == 'animation-name' || k == 'animation')) {
      o = o.split(',').map(function (o) {
        return o.replace(/()(?::global\(\s*([-\w]+)\s*\)|()([-\w]+))/, ns.l)
      }).join(',')
    }
    if (/^animation|^transition/.test(k)) vendors = ['webkit']
    // '@' in properties also triggers the *ielte7 hack
    // Since plugins dispatch on the /^@/ for at-rules
    // we swap the at for an asterisk
    // http://browserhacks.com/#hack-6d49e92634f26ae6d6e46b3ebc10019a

    k = k.replace(/^@/, '*')

/*/-statements-/*/
    // vendorify
    for (kk = 0; kk < vendors.length; kk++)
      buf.push('-', vendors[kk], '-', k, k ? ':': '', o, ';\n')
/*/-statements-/*/

    buf.push(k, k ? ':': '', o, ';\n')

  }
}

var findClass = /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g

/**
 * Hanldes at-rules
 *
 * @param {string} k - The at-rule name, and, if takes both parameters and a
 *                     block, the parameters.
 * @param {string[]} buf - the buffer in which the final style sheet is built
 * @param {string[]} v - Either parameters for block-less rules or their block
 *                       for the others.
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {string} rawPrefix - as above, but without localization transformations
 * @param {string} vendors - a list of vendor prefixes
 * @Param {boolean} local - are we in @local or in @global scope?
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes
 * @param {function} ns.e - @extend helper
 * @param {function} ns.l - @local helper
 */

function at(k, v, buf, prefix, rawPrefix, vendors, local, ns){
  var kk
  if (/^@(?:namespace|import|charset)$/.test(k)) {
    if(type.call(v) == ARRAY){
      for (kk = 0; kk < v.length; kk++) {
        buf.push(k, ' ', v[kk], ';\n')
      }
    } else {
      buf.push(k, ' ', v, ';\n')
    }
  } else if (/^@keyframes /.test(k)) {
    k = local ? k.replace(
      // generated by script/regexps.js
      /( )(?::global\(\s*([-\w]+)\s*\)|()([-\w]+))/,
      ns.l
    ) : k
    // add a @-webkit-keyframes block too.

    buf.push('@-webkit-', k.slice(1), ' {\n')
    sheet(v, buf, '', '', ['webkit'])
    buf.push('}\n')

    buf.push(k, ' {\n')
    sheet(v, buf, '', '', vendors, local, ns)
    buf.push('}\n')

  } else if (/^@extends?$/.test(k)) {

    /*eslint-disable no-cond-assign*/
    // pick the last class to be extended
    while (kk = findClass.exec(rawPrefix)) k = kk[4]
    /*eslint-enable no-cond-assign*/
    if (k == null || !local) {
      // we're in a @global{} block
      buf.push('@-error-cannot-extend-in-global-context ', JSON.stringify(rawPrefix), ';\n')
      return
    } else if (/^@extends?$/.test(k)) {
      // no class in the selector
      buf.push('@-error-no-class-to-extend-in ', JSON.stringify(rawPrefix), ';\n')
      return
    }
    ns.e(
      type.call(v) == ARRAY ? v.map(function (parent) {
        return parent.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l)
      }).join(' ') : v.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l),
      k
    )

  } else if (/^@(?:font-face$|viewport$|page )/.test(k)) {
    sheet(v, buf, k, k, emptyArray)

  } else if (/^@global$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 0, ns)

  } else if (/^@local$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 1, ns)

  } else if (/^@(?:media |supports |document )./.test(k)) {
    buf.push(k, ' {\n')
    sheet(v, buf, prefix, rawPrefix, vendors, local, ns)
    buf.push('}\n')

  } else {
    buf.push('@-error-unsupported-at-rule ', JSON.stringify(k), ';\n')
  }
}

/**
 * Add rulesets and other CSS statements to the sheet.
 *
 * @param {array|string|object} statements - a source object or sub-object.
 * @param {string[]} buf - the buffer in which the final style sheet is built
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {string} rawPrefix - as above, but without localization transformations
 * @param {string} vendors - a list of vendor prefixes
 * @Param {boolean} local - are we in @local or in @global scope?
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes
 * @param {function} ns.e - @extend helper
 * @param {function} ns.l - @local helper
 */
function sheet(statements, buf, prefix, rawPrefix, vendors, local, ns) {
  var k, kk, v, inDeclaration

  switch (type.call(statements)) {

  case ARRAY:
    for (k = 0; k < statements.length; k++)
      sheet(statements[k], buf, prefix, rawPrefix, vendors, local, ns)
    break

  case OBJECT:
    for (k in statements) {
      v = statements[k]
      if (prefix && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1
          buf.push(( prefix || '*' ), ' {\n')
        }
        declarations(v, buf, k, vendors, local, ns)
      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = (inDeclaration && buf.push('}\n') && 0)

        at(k, v, buf, prefix, rawPrefix, vendors, local, ns)

      } else {
        // selector or nested sub-selectors

        inDeclaration = (inDeclaration && buf.push('}\n') && 0)

        sheet(v, buf,
          (kk = /,/.test(prefix) || prefix && /,/.test(k)) ?
            cartesian(prefix.split(','), ( local ?
          k.replace(
            /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g, ns.l
          ) : k
        ).split(','), prefix).join(',') :
            concat(prefix, ( local ?
          k.replace(
            /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g, ns.l
          ) : k
        ), prefix),
          kk ?
            cartesian(rawPrefix.split(','), k.split(','), rawPrefix).join(',') :
            concat(rawPrefix, k, rawPrefix),
          vendors,
          local, ns
        )
      }
    }
    if (inDeclaration) buf.push('}\n')
    break
  case STRING:
    buf.push(
        ( prefix || ':-error-no-selector' ) , ' {\n'
      )
    declarations(statements, buf, '', vendors, local, ns)
    buf.push('}\n')
  }
}

var scope_root = '_j2c_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_';
var counter = 0;
function j2c(res) {
  res = res || {}
  var extensions = []

  function finalize(buf, i) {
    for (i = 0; i< extensions.length; i++) buf = extensions[i](buf) || buf
    return buf.join('')
  }

  res.use = function() {
    var args = arguments
    for (var i = 0; i < args.length; i++){
      extensions.push(args[i])
    }
    return res
  }
/*/-statements-/*/
  res.sheet = function(ns, statements) {
    if (arguments.length === 1) {
      statements = ns; ns = {}
    }
    var
      suffix = scope_root + counter++,
      locals = {},
      k, buf = []
    // pick only non-numeric keys since `(NaN != NaN) === true`
    for (k in ns) if (k-0 != k-0 && own.call(ns, k)) {
      locals[k] = ns[k]
    }
    sheet(
      statements, buf, '', '', emptyArray /*vendors*/,
      1, // local
      {
        e: function extend(parent, child) {
          var nameList = locals[child]
          locals[child] =
            nameList.slice(0, nameList.lastIndexOf(' ') + 1) +
            parent + ' ' +
            nameList.slice(nameList.lastIndexOf(' ') + 1)
        },
        l: function localize(match, space, global, dot, name) {
          if (global) {
            return space + global
          }
          if (!locals[name]) locals[name] = name + suffix
          return space + dot + locals[name].match(/\S+$/)
        }
      }
    )
    /*jshint -W053 */
    buf = new String(finalize(buf))
    /*jshint +W053 */
    for (k in locals) if (own.call(locals, k)) buf[k] = locals[k]
    return buf
  }
/*/-statements-/*/
  res.inline = function (locals, decl, buf) {
    if (arguments.length === 1) {
      decl = locals; locals = {}
    }
    declarations(
      decl,
      buf = [],
      '', // prefix
      emptyArray, // vendors
      1,
      {
        l: function localize(match, space, global, dot, name) {
          if (global) return space + global
          if (!locals[name]) return name
          return space + dot + locals[name]
        }
      })
    return finalize(buf)
  }

  res.prefix = function(val, vendors) {
    return cartesian(
      vendors.map(function(p){return '-' + p + '-'}).concat(['']),
      [val]
    )
  }
  return res
}

j2c.global = function(x) {
  return ':global(' + x + ')'
}

j2c.kv = kv
function kv (k, v, o) {
  o = {}
  o[k] = v
  return o
}

j2c.at = function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)))
    _at.toString = function(){return '@' + rule + ' ' + params}
    return _at
  }
  else return kv('@' + rule + ' ' + params, block)
}

j2c(j2c)
delete j2c.use

module.exports = j2c;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 140;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>');


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>');


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>');


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>');


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>');


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 4,11L 4,13L 16.0104,13L 10.5052,18.5052L 11.9194,19.9194L 19.8388,12L 11.9194,4.08058L 10.5052,5.49479L 16.0104,11L 4,11 Z "/></svg>');


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#050708" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z "/></svg>');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z "/></svg>');


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 20.9994,10.9981L 13.9994,3.99807L 13.9994,7.99807C 6.9994,8.99807 3.9994,13.9981 2.9994,18.9981C 5.4994,15.4981 8.9994,13.8981 13.9994,13.8981L 13.9994,17.9981L 20.9994,10.9981 Z "/></svg>');


/***/ }),
/* 150 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(36);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map