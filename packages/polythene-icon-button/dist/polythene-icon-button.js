!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("mithril"),require("polythene-icon"),require("polythene-button"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-icon","polythene-button","polythene-css","polythene-theme"],o):o(e.polythene=e.polythene||{},e.m,e["polythene-icon"],e["polythene-button"],e["polythene-css"],e["polythene-theme"])}(this,function(e,o,t,n,r,a){"use strict";function c(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}o="default"in o?o.default:o,t="default"in t?t.default:t,n="default"in n?n.default:n;var l=a.vars.rgba,u=(a.vars.grid_unit_icon_button-a.vars.unit_icon_size)/2,_=(a.vars.grid_unit_icon_button-a.vars.unit_icon_size)/3,d=a.vars.rgba(a.vars.color_light_foreground,a.vars.blend_light_text_secondary),p=a.vars.rgba(a.vars.color_dark_foreground,a.vars.blend_dark_text_secondary),s={padding:u,padding_compact:_,color_background:"transparent",color_light:d,color_light_disabled:l(a.vars.color_light_foreground,a.vars.blend_light_text_disabled),color_light_wash:d,color_light_wash_opacity:a.vars.blend_light_background_hover_medium,color_light_focus_opacity:a.vars.blend_light_background_hover_medium,color_dark:p,color_dark_disabled:l(a.vars.color_dark_foreground,a.vars.blend_dark_text_disabled),color_dark_wash:p,color_dark_wash_opacity:a.vars.blend_dark_background_hover_medium,color_dark_focus_opacity:a.vars.blend_dark_background_hover_medium},h=function(e,o){return[c({},e,{display:"inline-block","vertical-align":"middle",cursor:"pointer",position:"relative","font-size":"1rem","border-radius":"50%",border:"none"," .pe-icon-button__content":{"line-height":1,padding:o.padding+"px"},".pe-icon-button--compact":{" .pe-icon-button__content":{padding:o.padding_compact+"px"}}})]},b=function(e,o,t,n){return[i({},e.map(function(e){return e+o}).join(","),{color:t["color_"+n],backgroundColor:t["color_"+n+"_background"]||t.color_background," .pe-button__wash":{opacity:t["color_"+n+"_wash_opacity"]},".pe-button--focus, &.pe-button--selected":{" .pe-button__focus":{opacity:t["color_"+n+"_focus_opacity"],backgroundColor:"currentcolor"}},".pe-button--disabled":{color:t["color_"+n+"_disabled"]}})]},g=function(e,o,t,n){return[i({},e.map(function(e){return e+o+":hover"}).join(","),{" .pe-button__wash":{backgroundColor:t["color_"+n+"_wash"]}})]},f=function(e,o){return[b([".pe-dark-tone",".pe-dark-tone "],e,o,"dark"),b(["",".pe-light-tone",".pe-light-tone "],e,o,"light"),g(["html.pe-no-touch .pe-dark-tone "],e,o,"dark"),g(["html.pe-no-touch ","html.pe-no-touch .pe-light-tone "],e,o,"light")]},v=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},y=[h,f],m=".pe-button.pe-icon-button",k=function(e,o){return r.styler.generateStyles([e,m],v({},s,o),y)};r.styler.generateStyles([m],s,y);var w=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j={component:"pe-button pe-icon-button",content:"pe-icon-button__content",compact:"pe-icon-button--compact"},O=function(e){var r=e.attrs,a=r.content?r.content:r.icon?o(t,r.icon):r.children||e.children;return o(n,w({},{content:o("div",{class:j.content},a),parentClass:[r.parentClass||j.component,r.compact?j.compact:null].join(" "),wash:!1,animateOnTap:!1},r))},x={theme:k,view:O};e.default=x,e.classes=j,e.vars=s,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-icon-button.js.map
