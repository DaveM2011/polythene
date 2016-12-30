!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-config")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-config"],e):e(o.polythene=o.polythene||{},o.m,o["polythene-core"],o["polythene-css"],o["polythene-config"])}(this,function(o,e,t,n,a){"use strict";e="default"in e?e.default:e;var p={transition:"box-shadow 0.18s ease-out","shadow-top-z-1":"none","shadow-bottom-z-1":"0 1px 4px 0 rgba(0, 0, 0, 0.37)","shadow-top-z-2":"0 2px 2px 0 rgba(0, 0, 0, 0.2)","shadow-bottom-z-2":"0 6px 10px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-3":"0 11px 7px 0 rgba(0, 0, 0, 0.19)","shadow-bottom-z-3":"0 13px 25px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-4":"0 14px 12px 0 rgba(0, 0, 0, 0.17)","shadow-bottom-z-4":"0 20px 40px 0 rgba(0, 0, 0, 0.3)","shadow-top-z-5":"0 17px 17px 0 rgba(0, 0, 0, 0.15)","shadow-bottom-z-5":"0 27px 55px 0 rgba(0, 0, 0, 0.3)","shadow-down-z-1":"inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)","shadow-down-z-2":"inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"},i=function(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o},r=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},s=function(o){return n.mixin.vendorize({"box-shadow":o},a.appConfig.prefixes_box_shadow)},d=function(o){return[{".pe-shadow":[n.mixin.fit(),{"border-radius":"inherit","pointer-events":"none"," .pe-shadow__bottom, .pe-shadow__top":[n.mixin.fit(),{"border-radius":"inherit"}],"&.pe-shadow--animated":{" .pe-shadow__bottom, .pe-shadow__top":n.mixin.vendorize({transition:o.transition},a.appConfig.prefixes_transition)}},[1,2,3,4,5].map(function(e){var t;return t={},i(t," .pe-shadow__top.pe-shadow--z-"+e,s(o["shadow-top-z-"+e])),i(t," .pe-shadow__bottom.pe-shadow--z-"+e,s(o["shadow-bottom-z-"+e])),t})]}]},h=function(o){return n.mixin.createStyles(o,d)};n.styler.styleComponent("pe-shadow","shadow",a.componentsConfig,p,h);var w={component:"pe-shadow",topShadow:"pe-shadow__top",bottomShadow:"pe-shadow__bottom",animated:"pe-shadow--animated",depth_n:"pe-shadow--z-"},x=function(o){var n=o.attrs,a=""+w.depth_n+Math.min(5,void 0!==n.z?n.z:1),p=n.element||"div",i=r({},t.filterSupportedAttributes(n),{class:[w.component,n.animated&&w.animated,n.class].join(" ")}),s=[n.content&&n.content,e("div",{class:[w.bottomShadow,a].join(" ")}),e("div",{class:[w.topShadow,a].join(" ")})];return e(p,i,[n.before,s,n.after])},b={view:x};o.shadow=b,o.shadowConfig=p,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=shadow.js.map