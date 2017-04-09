!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("mithril"),require("polythene-core"),require("polythene-css"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-css","polythene-theme"],r):r(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-css"],e["polythene-theme"])}(this,function(e,r,t,i,o){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}r="default"in r?r.default:r;var l=o.vars.rgba,s=o.vars.color_light_foreground,c=o.vars.color_dark_foreground,_=o.vars.color_primary,d=Math.max(40,12),u=Math.max(d,18),p=Math.max(52,18),h=Math.max(10,u/2-6),f=h+4,b={height:p,side_spacing:h,horizontal_layout_side_spacing:f,thumb_size:12,thumb_touch_size:d,track_height:p,bar_height:2,thumb_border_width:2,active_thumb_scale:1.5,animation_duration:o.vars.animation_duration,disabled_thumb_scale:2/3,active_pin_thumb_scale:2/6,step_width:2,pin_height:32,pin_width:26,pin_font_size:10,color_light_track_active:l(s,.38),color_light_track_inactive:l(s,.26),color_light_track_value:l(_),color_light_thumb_off:l(s,.26),color_light_thumb_off_focus:l(s),color_light_thumb_off_focus_opacity:.08,color_light_thumb_on:l(_),color_light_thumb_on_focus_opacity:.11,color_light_thumb_inactive:l(s,.26),color_light_tick:l(s,1),color_light_icon:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_secondary),color_light_disabled_icon:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_light_label:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_secondary),color_light_disabled_label:o.vars.rgba(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_dark_track_active:l(c,.3),color_dark_track_inactive:l(c,.2),color_dark_track_value:l(_),color_dark_thumb_off:l(c,.2),color_dark_thumb_off_focus:l(c),color_dark_thumb_off_focus_opacity:.08,color_dark_thumb_on:l(_),color_dark_thumb_on_focus_opacity:.11,color_dark_thumb_inactive:l(c,.2),color_dark_tick:l(c,1),color_dark_icon:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_secondary),color_dark_disabled_icon:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled),color_dark_label:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_secondary),color_dark_disabled_label:o.vars.rgba(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled)},v=function(e,r){return{borderWidth:r+"px",width:e-2*r+"px",height:e-2*r+"px",left:"2px",top:"2px"}},g=function(e,r){var t=Math.max(r.thumb_size,2*r.thumb_border_width),a=(r.active_thumb_scale-1)*t/2,l=t/2,s=Math.max(1,r.thumb_border_width/r.active_thumb_scale),c=r.thumb_touch_size,_=l-1;return[n({},e,[i.flex.layoutHorizontal,i.flex.flexGrow(1),{userSelect:"none",height:r.height+"px",marginTop:(r.height-r.track_height)/2+"px "," > .pe-icon":[i.flex.layoutCenter,{height:r.height+"px"}]," .pe-slider__track":[i.flex.layoutHorizontal,i.flex.flexGrow(1),i.mixin.defaultTransition("transform",r.animation_duration),{userSelect:"none",position:"relative",height:r.track_height+"px",margin:"0 "+r.side_spacing+"px",outline:0}]," div + .pe-slider__track":{margin:"0 "+r.horizontal_layout_side_spacing+"px"}," .pe-slider__control":[i.flex.selfCenter,i.mixin.defaultTransition("transform, background",r.animation_duration),{userSelect:"none",width:t+"px",height:t+"px",lineHeight:0,borderRadius:"50%",outline:0,zIndex:1,position:"relative","&:before":[i.mixin.defaultTransition("background-color",r.animation_duration),{content:'""',position:"absolute",borderRadius:"50%",left:-c/2+t/2+"px",top:-c/2+t/2+"px",width:c+"px",height:c+"px"}],"&:after":[i.mixin.defaultTransition("border",r.animation_duration),v(t,r.thumb_border_width),{content:'""',position:"absolute",borderRadius:"50%",borderStyle:"solid"}]}]," .pe-slider__thumb":[i.mixin.defaultTransition("opacity",r.animation_duration),i.mixin.fit(),{"&, .pe-icon":{width:"inherit",height:"inherit"}}]," .pe-slider__label":{height:r.height+"px",lineHeight:r.height+"px",minWidth:o.vars.unit_icon_size+"px",textAlign:"center",fontSize:"16px",fontWeight:o.vars.font_weight_medium}," .pe-slider__track-part":[i.flex.flex(),{userSelect:"none",height:r.bar_height+"px",margin:(r.track_height-r.bar_height)/2+"px 0",overflow:"hidden"}]," .pe-slider__track-value, .pe-slider__track-rest":i.flex.layoutHorizontal," .pe-slider__track-bar":[i.flex.flex(),{position:"relative",overflow:"hidden"}]," .pe-slider__track-bar-value":[i.flex.flex(),i.mixin.defaultTransition("transform, background-color",r.animation_duration),{height:r.bar_height+"px"}]," .pe-slider__track-value .pe-slider__track-bar":{marginLeft:l+"px"}," .pe-slider__track-rest .pe-slider__track-bar":{marginRight:l+"px"}," .pe-slider__ticks":[i.flex.layoutJustified,{userSelect:"none",position:"absolute",width:"calc(100% - "+2*_+"px)",height:r.bar_height+"px",left:0,top:r.height/2-1+"px",margin:"0 "+_+"px",pointerEvents:"none"}]," .pe-slider__ticks-tick":{width:r.step_width+"px",height:r.bar_height+"px"}," .pe-slider__pin":[i.mixin.vendorize({transform:"translateZ(0) scale(0) translate(0, 0)"},o.vars.prefixes_transform),i.mixin.vendorize({transformOrigin:"bottom"},o.vars.prefixes_transform),i.mixin.defaultTransition("transform",".11s"),{position:"absolute",zIndex:1,width:r.pin_width+"px",height:0,left:0,top:0,margin:"0 "+_+"px 0 "+(_-r.pin_width/2+1)+"px",pointerEvents:"none","&::before":[i.mixin.vendorize({transform:"rotate(-45deg)"},o.vars.prefixes_transform),{content:'""',position:"absolute",top:0,left:0,width:r.pin_width+"px",height:r.pin_width+"px",borderRadius:"50% 50% 50% 0",backgroundColor:"inherit"}],"&::after":{content:"attr(value)",position:"absolute",top:0,left:0,width:r.pin_width+"px",height:r.pin_height+"px",textAlign:"center",color:"#fff",fontSize:r.pin_font_size+"px",lineHeight:r.pin_width+"px"}}],"&.pe-slider--active:not(.pe-slider--ticks)":{" .pe-slider__control":[i.mixin.vendorize({transform:"scale("+r.active_thumb_scale+")"},o.vars.prefixes_transform),{borderWidth:s+"px"}]," .pe-slider__track-value .pe-slider__track-bar-value":[i.mixin.vendorize({transform:"translateX("+-a+"px)"},o.vars.prefixes_transform)]," .pe-slider__track-rest .pe-slider__track-bar-value":[i.mixin.vendorize({transform:"translateX("+a+"px)"},o.vars.prefixes_transform)]},"&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus":{" .pe-slider__pin":[i.mixin.vendorize({transform:"translateZ(0) scale(1) translate(0, -24px)"},o.vars.prefixes_transform)]," .pe-slider__control":[i.mixin.vendorize({transform:"scale("+r.active_pin_thumb_scale+")"},o.vars.prefixes_transform)]},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{cursor:"pointer"},"&.pe-slider--track":{" .pe-slider__track":{cursor:"pointer"}}},"&.pe-slider--disabled":{" .pe-slider__control":[i.mixin.vendorize({transform:"scale("+r.disabled_thumb_scale+")"},o.vars.prefixes_transform),{borderWidth:0}],"&.pe-slider--min":{" .pe-slider__control:after":[v(t,1/r.disabled_thumb_scale*r.thumb_border_width)]}}}])]},m=function(e,r,t,i){return[a({},e+r,{color:t["color_"+i+"_thumb_on"]," .pe-slider__control":{"&:after":{borderColor:"transparent"}}," .pe-slider__track-bar-value":{background:t["color_"+i+"_track_inactive"]}," .pe-slider__ticks-tick":{background:t["color_"+i+"_tick"]}," .pe-slider__pin":{backgroundColor:"currentcolor"}," > .pe-icon":{color:t["color_"+i+"_disabled_icon"]}," .pe-slider__label":{color:t["color_"+i+"_disabled_label"]},"&.pe-slider--active":{" .pe-slider__track-bar-value":{background:t["color_"+i+"_track_active"]}},".pe-slider--disabled":{" .pe-slider__control":{background:t["color_"+i+"_thumb_inactive"]}},"&:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:t["color_"+i+"_thumb_background"]||"currentcolor","&:before":{opacity:t["color_"+i+"_thumb_off_focus_opacity"]}}," .pe-slider__track-value .pe-slider__track-bar-value":{background:"currentcolor"},"&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,      &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:t["color_"+i+"_thumb_off_focus"]},"&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,      &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before":{backgroundColor:"currentcolor",opacity:t["color_"+i+"_thumb_on_focus_opacity"]}," > .pe-icon":{color:t["color_"+i+"_icon"]}," .pe-slider__label":{color:t["color_"+i+"_label"]}},"&.pe-slider--min:not(.pe-slider--disabled)":{" .pe-slider__control":{backgroundColor:"transparent"}," .pe-slider__thumb":{opacity:0}," .pe-slider__control:after":{borderColor:t["color_"+i+"_track_inactive"]},"&.pe-slider--active .pe-slider__control:after":{borderColor:t["color_"+i+"_track_active"]},"&.pe-slider--ticks":{" .pe-slider__control":{backgroundColor:t["color_"+i+"_tick"]}," .pe-slider__control:after":{borderColor:"transparent"}}," .pe-slider__pin":{backgroundColor:t["color_"+i+"_track_inactive"]}}})]},k=function(e,r){return[m("",e,r,"light"),m(".pe-dark-theme ",e,r,"dark")]},x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},y=[g,k],w=function(e,r){return i.styler.generateStyles([e,".pe-slider"],x({},b,r),y)};i.styler.generateStyles([".pe-slider"],b,y);var z=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},E={component:"pe-slider",thumb:"pe-slider__thumb",label:"pe-slider__label",track:"pe-slider__track",trackPart:"pe-slider__track-part",trackPartValue:"pe-slider__track-value",trackPartRest:"pe-slider__track-rest",trackBar:"pe-slider__track-bar",trackBarValue:"pe-slider__track-bar-value",control:"pe-slider__control",ticks:"pe-slider__ticks",tick:"pe-slider__ticks-tick",pin:"pe-slider__pin",isDisabled:"pe-slider--disabled",isActive:"pe-slider--active",hasTrack:"pe-slider--track",hasPin:"pe-slider--pin",hasFocus:"pe-slider--focus",isAtMin:"pe-slider--min",hasTicks:"pe-slider--ticks"},T=void 0,C=function(e){T&&T.blur(),T=void 0,e.hasFocus=!1},O=function(e,r){C(e),T=r,e.hasFocus=!0},W=function(e,r){return t.isTouch?r?e.touches[0].pageY:e.touches[0].pageX:r?e.pageY:e.pageX},P=function(e){if(e.controlEl&&e.pinEl){var r=e.fraction()*e.rangeWidth;e.pinEl.style.left=r+"px"}},M=function(e,r){e.setValue(r),P(e)},S=function(e,t,i){for(var o=Math.round((t-e)/i),n=[],a=o+1;a>0;)n.push(r("div",{class:E.tick})),a--;return n},A=function(e){if(e.controlEl){e.controlWidth=b.thumb_size,e.rangeWidth=e.trackEl.getBoundingClientRect().width-e.controlWidth;var r=window.getComputedStyle(e.trackEl);e.rangeOffset=parseFloat(r.marginLeft)}},D=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.clickOffset=e.trackEl.getBoundingClientRect().left-(e.rangeOffset-e.controlWidth/2)+r},R=function(e,r){var t=e.controlEl.getBoundingClientRect().left;D(e,W(r)-t-e.controlWidth/2)},V=function(e){return D(e,0)},j=function(e,t){var i=W(t)-e.clickOffset;M(e,e.min+(i-e.rangeOffset)/e.rangeWidth*(e.max-e.min)),r.redraw()},B=function(e,i,o){if(!e.isDragging){o.preventDefault(),e.isDragging=!0,e.isActive=!0,C(e);var n=function(r){e.isDragging&&j(e,r)},a=function i(){e.isDragging&&(e.isDragging=!1,e.isActive=!1,C(e),window.removeEventListener(t.moveEvent,n),window.removeEventListener(t.endEvent,i),r.redraw())};window.addEventListener(t.moveEvent,n),window.addEventListener(t.endEvent,a),A(e),i.pin&&P(e)}},F=function(e,r,t){t.preventDefault(),e.isDragging||(A(e),V(e),j(e,t),B(e,r,t))},H=function(e,i,o,n){var a=e.fraction(),l=Math.max(10,parseInt(i.step,10)||1),s=function(r){return F(e,i,r)},c=function(r){A(e),R(e,r),B(e,i,r)},_=a+" 1 0%",d=1-a,u=d+" 1 0%";return[r("div",z({},{class:E.track,oncreate:function(r){var t=r.dom;e.trackEl=t,i.pin&&setTimeout(function(){P(e)},0)}},!n||i.disabled||t.isTouch?null:{onmousedown:s},n&&!i.disabled&&t.isTouch?{ontouchstart:s}:null),[r("div",{class:E.trackPart+" "+E.trackPartValue,style:{flex:_,"-ms-flex":_,webkitFlex:_}},r("div",{class:E.trackBar},r("div",{class:E.trackBarValue}))),r("div",z({},{class:E.control,oncreate:function(r){var t=r.dom;e.controlEl=t}},i.disabled?{disabled:!0}:{tabindex:i.tabindex||0,onfocus:function(){return O(e,e.controlEl)},onblur:function(){return C(e)},onkeydown:function(r){27===r.which?e.controlEl.blur(r):37===r.which?e.decrease(r.shiftKey):38===r.which?e.increase(r.shiftKey):39===r.which?e.increase(r.shiftKey):40===r.which&&e.decrease(r.shiftKey),A(e),P(e)}},i.disabled||t.isTouch?null:{onmousedown:c},!i.disabled&&t.isTouch?{ontouchstart:c}:null,i.events?i.events:null,o?{step:l}:null),i.icon?r("div",{class:E.thumb},i.icon):null),r("div",{class:E.trackPart+" "+E.trackPartRest,style:{flex:u,"-ms-flex":u,webkitFlex:u,maxWidth:100*d+"%"}},r("div",{class:E.trackBar},r("div",{class:E.trackBarValue}))),o&&!i.disabled?r("div",{class:E.ticks},S(e.min,e.max,l)):null,o&&i.pin&&!i.disabled?r("div",{class:E.pin,value:Math.round(e.value()),oncreate:function(r){var t=r.dom;return e.pinEl=t}}):null])]},L=function(e){var i=e.attrs,o=e.state;"function"==typeof i.value&&o.setValue(i.value());var n=i.element||"div",a=void 0!==i.ticks&&i.ticks!==!1,l=void 0===i.interactiveTrack||i.interactiveTrack,s=z({},t.filterSupportedAttributes(i),{class:[E.component,i.disabled?E.isDisabled:null,i.pin?E.hasPin:null,l?E.hasTrack:null,o.isActive?E.isActive:null,o.hasFocus?E.hasFocus:null,0===o.fraction()?E.isAtMin:null,a?E.hasTicks:null,i.class].join(" ")}),c=H(o,i,a,l);return r(n,s,[i.before,c,i.after])},q=function(e){var r=e.attrs,t=void 0!==r.min?r.min:0,i=void 0!==r.max?r.max:100,o=void 0!==r.step?r.step:1,n=t,a=0;if("function"==typeof r.value){var l=r.value();a=void 0!==l?l:0}else a=void 0!==r.value?r.value:0;var s=function(e){e<t&&(e=t),e>i&&(e=i),a=o?Math.round(e/o)*o:e,n=(a-t)/(i-t),r.getValue&&r.getValue(a)};s(a),e.state=z(e.state,{min:t,max:i,trackEl:null,controlEl:null,pinEl:null,setValue:s,value:function(){return a},fraction:function(){return n},increase:function(e){return s(a+(e?10:1)*(o||1))},decrease:function(e){return s(a-(e?10:1)*(o||1))},isActive:!1,hasFocus:!1,isDragging:!1,controlWidth:0,rangeWidth:0,rangeOffset:0,clickOffset:0})},K={theme:w,oninit:q,view:L};e.default=K,e.classes=E,e.vars=b,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-slider.js.map