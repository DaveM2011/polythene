!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("mithril"),require("polythene-spinner"),require("polythene-css"),require("polythene-theme"),require("polythene-utilities")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-spinner","polythene-css","polythene-theme","polythene-utilities"],r):r(e.polythene=e.polythene||{},e.m,e["polythene-spinner"],e["polythene-css"],e["polythene-theme"],e["polythene-utilities"])}(this,function(e,r,t,i,n,o){"use strict";function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r="default"in r?r.default:r;var l="default"in t?t.default:t,p={component:"pe-md-progress-spinner",animation:"pe-md-progress-spinner__animation",circle:"pe-md-progress-spinner__circle",circleRight:"pe-md-progress-spinner__circle-right",circleLeft:"pe-md-progress-spinner__circle-left"},c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},u=n.vars.rgba,d=c({},t.vars,{border_width_small:t.vars.size_small/t.vars.size_regular*3,border_width_regular:3,border_width_medium:t.vars.size_medium/t.vars.size_regular*3,border_width_large:t.vars.size_large/t.vars.size_regular*3,border_width_fab:t.vars.size_fab/t.vars.size_regular*3,animation_duration:"1.5s",color_light:u(n.vars.color_primary),color_dark:u(n.vars.color_primary)}),m=function(e,r){return[a({},e,{position:"relative"," .pe-md-progress-spinner__animation":{animationDuration:r.animationDuration,position:"absolute",width:"100%",height:"100%"}," .pe-md-progress-spinner__circle":{position:"absolute",boxSizing:"border-box",width:"100%",height:"100%",borderStyle:"solid",borderRadius:"50%"}," .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right":{transform:"rotate(0)",clip:"rect(0, 0, 0, 0)"},"&":["small","regular","medium","large","fab"].map(function(e){return a({},"&.pe-spinner--"+e,{" .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right":{borderWidth:r["border_width_"+e]+"px"}})})})]},g=function(e,r,t,i){return[s({},e.map(function(e){return e+r}).join(","),{color:t["color_"+i]," .pe-md-progress-spinner__circle":{borderColor:"currentcolor"}})]},f=function(e,r){return[g([".pe-dark-tone",".pe-dark-tone "],e,r,"dark"),g(["",".pe-light-tone",".pe-light-tone "],e,r,"light")]},h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},_=[m,f],v="."+p.component,y=function(e,r){return i.styler.generateStyles([e,v],h({},d,r),_)};i.styler.generateStyles([v],d,_);var b=function(){return d["size_"+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular")]},w=function(e,r){return e+(r-e)*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)},x=function(e,r,t,i){var n=e.style;n.transform=n["-webkit-transform"]=n["-moz-transform"]=n["-ms-transform"]=n["-o-transform"]="rotate("+w(r,t,i)+"deg)"},z=function(e,r,t){var i=e.querySelector("."+p.animation),n=i.style;n.clip=t<.5?"rect(0px, "+r+"px, "+r+"px, "+r/2+"px)":"rect(auto, auto, auto, auto)";var o=e.querySelector("."+p.circleLeft),a=e.querySelector("."+p.circleRight);o.style.clip=a.style.clip="rect(0px, "+r/2+"px, "+r+"px, 0px)",x(a,0,180,Math.min(1,2*t)),x(o,0,360,t)},P=function(e,r,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(r.el)if(r.previousPercentage=r.previousPercentage||0,i.animated&&r.previousPercentage!==e){var n=1e3*i.updateDuration,a=null,s=function i(s){a||(a=s);var l=s-a,p=1/n*l,c=r.previousPercentage+p*(e-r.previousPercentage);z(r.el,t,o.easing.easeInOutQuad(c)),r.previousPercentage=c,a&&l<n?window.requestAnimationFrame(i):a=null};window.requestAnimationFrame(s)}else z(r.el,t,e),r.previousPercentage=e},j=function(e){var t=e.attrs,i=b(t.type),n=d.raisedSize(i),o=n.padding,a=n.paddedSize,s=t.raised?a-2*o:i;return t.content=r("div",{class:p.animation,style:{width:s+"px",height:s+"px"}},[r("div",{class:[p.circle,p.circleLeft].join(" ")}),r("div",{class:[p.circle,p.circleRight].join(" ")})]),t.instanceClass=p.component,t.getPercentage=function(e,r){return P(e,r,s,t)},r(l,t)},q={theme:y,view:j};e.default=q,e.classes=p,e.vars=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-md-progress-spinner.js.map