!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("mithril"),require("polythene-selection-control"),require("polythene-css")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-selection-control","polythene-css"],t):t(e.polythene=e.polythene||{},e.m,e["polythene-selection-control"],e["polythene-css"])}(this,function(e,t,o,n){"use strict";t="default"in t?t.default:t;var r=function(e,t){return o.layout(e,t,"checkbox")},c=function(e,t){return o.color(e,t)},l=t.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>'),s=t.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},h=[r,c],u=".pe-control.pe-checkbox-control",a=function(e,t){return n.styler.generateStyles([e,u],i({},o.vars,t),h)};n.styler.generateStyles([u],o.vars,h);var p={iconOff:l,iconOn:s},f={component:"pe-checkbox-control"},v=function(e){return t(o.selectionControl,i({},e.attrs,{theme:p,controlView:o.controlView,selectable:e.attrs.selectable||function(){return!0},defaultClass:f.component,type:"checkbox"}))},y={theme:a,view:v};e.checkbox=y,e.classes=f,e.vars=o.vars,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-checkbox.js.map