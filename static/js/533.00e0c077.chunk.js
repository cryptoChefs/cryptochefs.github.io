(self.webpackChunklandingpage=self.webpackChunklandingpage||[]).push([[533],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(1256)},3044:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(9439),o=t(3366),i=t(7462),a=t(2791),u=t(8182),c=t(767),l=t(7630),s=t(1046),f=t(4223),d=t(184),v=(0,f.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=t(5159);function p(e){return(0,m.Z)("MuiAvatar",e)}(0,t(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],h=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,t=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:n.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:n.palette.background.default,backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]})})),g=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),w=(0,l.ZP)(v,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var b=a.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiAvatar"}),l=t.alt,f=t.children,v=t.className,m=t.component,b=void 0===m?"div":m,y=t.imgProps,S=t.sizes,x=t.src,R=t.srcSet,k=t.variant,M=void 0===k?"circular":k,C=(0,o.Z)(t,Z),N=null,P=function(e){var n=e.crossOrigin,t=e.referrerPolicy,o=e.src,i=e.srcSet,u=a.useState(!1),c=(0,r.Z)(u,2),l=c[0],s=c[1];return a.useEffect((function(){if(o||i){s(!1);var e=!0,r=new Image;return r.onload=function(){e&&s("loaded")},r.onerror=function(){e&&s("error")},r.crossOrigin=n,r.referrerPolicy=t,r.src=o,i&&(r.srcset=i),function(){e=!1}}}),[n,t,o,i]),l}((0,i.Z)({},y,{src:x,srcSet:R})),z=x||R,A=z&&"error"!==P,F=(0,i.Z)({},t,{colorDefault:!A,component:b,variant:M}),D=function(e){var n=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(t,p,n)}(F);return N=A?(0,d.jsx)(g,(0,i.Z)({alt:l,src:x,srcSet:R,sizes:S,ownerState:F,className:D.img},y)):null!=f?f:z&&l?l[0]:(0,d.jsx)(w,{className:D.fallback}),(0,d.jsx)(h,(0,i.Z)({as:b,ownerState:F,className:(0,u.Z)(D.root,v),ref:n},C,{children:N}))}))},7621:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(7462),o=t(3366),i=t(2791),a=t(8182),u=t(767),c=t(7630),l=t(1046),s=t(703),f=t(5159);function d(e){return(0,f.Z)("MuiCard",e)}(0,t(208).Z)("MuiCard",["root"]);var v=t(184),m=["className","raised"],p=(0,c.ZP)(s.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),Z=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCard"}),i=t.className,c=t.raised,s=void 0!==c&&c,f=(0,o.Z)(t,m),Z=(0,r.Z)({},t,{raised:s}),h=function(e){var n=e.classes;return(0,u.Z)({root:["root"]},d,n)}(Z);return(0,v.jsx)(p,(0,r.Z)({className:(0,a.Z)(h.root,i),elevation:s?8:void 0,ref:n,ownerState:Z},f))}))},3060:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(9439),o=t(4942),i=t(3366),a=t(7462),u=t(2791),c=t(8182),l=t(767),s=t(8529),f=t(2065),d=t(4036),v=t(7630),m=t(1046),p=t(3031),Z=t(4843),h=t(890),g=t(5159);function w(e){return(0,g.Z)("MuiLink",e)}var b=(0,t(208).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=t(184),S=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},R=(0,v.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState,r=(0,s.D)(n,"palette.".concat(function(e){return x[e]||e}(t.color)))||t.color;return(0,a.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,f.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===t.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(b.focusVisible),{outline:"auto"}))})),k=u.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiLink"}),o=t.className,s=t.color,f=void 0===s?"primary":s,v=t.component,h=void 0===v?"a":v,g=t.onBlur,b=t.onFocus,x=t.TypographyClasses,k=t.underline,M=void 0===k?"always":k,C=t.variant,N=void 0===C?"inherit":C,P=(0,i.Z)(t,S),z=(0,p.Z)(),A=z.isFocusVisibleRef,F=z.onBlur,D=z.onFocus,E=z.ref,I=u.useState(!1),T=(0,r.Z)(I,2),j=T[0],V=T[1],q=(0,Z.Z)(n,E),B=(0,a.Z)({},t,{color:f,component:h,focusVisible:j,underline:M,variant:N}),L=function(e){var n=e.classes,t=e.component,r=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,d.Z)(o)),"button"===t&&"button",r&&"focusVisible"]};return(0,l.Z)(i,w,n)}(B);return(0,y.jsx)(R,(0,a.Z)({className:(0,c.Z)(L.root,o),classes:x,color:f,component:h,onBlur:function(e){F(e),!1===A.current&&V(!1),g&&g(e)},onFocus:function(e){D(e),!0===A.current&&V(!0),b&&b(e)},ref:q,ownerState:B,variant:N},P))}))},703:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(3366),o=t(7462),i=t(2791),a=t(8182),u=t(767),c=t(2065),l=t(7630),s=t(1046),f=t(5159);function d(e){return(0,f.Z)("MuiPaper",e)}(0,t(208).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=t(184),m=["className","component","elevation","square","variant"],p=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},Z=(0,l.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!t.square&&n.rounded,"elevation"===t.variant&&n["elevation".concat(t.elevation)]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({backgroundColor:n.palette.background.paper,color:n.palette.text.primary,transition:n.transitions.create("box-shadow")},!t.square&&{borderRadius:n.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat(n.palette.divider)},"elevation"===t.variant&&(0,o.Z)({boxShadow:n.shadows[t.elevation]},"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,c.Fq)("#fff",p(t.elevation)),", ").concat((0,c.Fq)("#fff",p(t.elevation)),")")}))})),h=i.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiPaper"}),i=t.className,c=t.component,l=void 0===c?"div":c,f=t.elevation,p=void 0===f?1:f,h=t.square,g=void 0!==h&&h,w=t.variant,b=void 0===w?"elevation":w,y=(0,r.Z)(t,m),S=(0,o.Z)({},t,{component:l,elevation:p,square:g,variant:b}),x=function(e){var n=e.square,t=e.elevation,r=e.variant,o=e.classes,i={root:["root",r,!n&&"rounded","elevation"===r&&"elevation".concat(t)]};return(0,u.Z)(i,d,o)}(S);return(0,v.jsx)(Z,(0,o.Z)({as:l,ownerState:S,className:(0,a.Z)(x.root,i),ref:n},y))}))},9259:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(7462),o=t(3366),i=t(2791),a=t(8182),u=t(767),c=t(4036),l=t(1046),s=t(7630),f=t(5159);function d(e){return(0,f.Z)("MuiSvgIcon",e)}(0,t(208).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=t(184),m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,"inherit"!==t.color&&n["color".concat((0,c.Z)(t.color))],n["fontSize".concat((0,c.Z)(t.fontSize))]]}})((function(e){var n,t,r=e.theme,o=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:r.transitions.create("fill",{duration:r.transitions.duration.shorter}),fontSize:{inherit:"inherit",small:r.typography.pxToRem(20),medium:r.typography.pxToRem(24),large:r.typography.pxToRem(35)}[o.fontSize],color:null!=(n=null==(t=r.palette[o.color])?void 0:t.main)?n:{action:r.palette.action.active,disabled:r.palette.action.disabled,inherit:void 0}[o.color]}})),Z=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiSvgIcon"}),i=t.children,s=t.className,f=t.color,Z=void 0===f?"inherit":f,h=t.component,g=void 0===h?"svg":h,w=t.fontSize,b=void 0===w?"medium":w,y=t.htmlColor,S=t.inheritViewBox,x=void 0!==S&&S,R=t.titleAccess,k=t.viewBox,M=void 0===k?"0 0 24 24":k,C=(0,o.Z)(t,m),N=(0,r.Z)({},t,{color:Z,component:g,fontSize:b,inheritViewBox:x,viewBox:M}),P={};x||(P.viewBox=M);var z=function(e){var n=e.color,t=e.fontSize,r=e.classes,o={root:["root","inherit"!==n&&"color".concat((0,c.Z)(n)),"fontSize".concat((0,c.Z)(t))]};return(0,u.Z)(o,d,r)}(N);return(0,v.jsxs)(p,(0,r.Z)({as:g,className:(0,a.Z)(z.root,s),ownerState:N,focusable:"false",color:y,"aria-hidden":!R||void 0,role:R?"img":void 0,ref:n},P,C,{children:[i,R?(0,v.jsx)("title",{children:R}):null]}))}));Z.muiName="SvgIcon";var h=Z},4223:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7462),o=t(2791),i=t(9259),a=t(184);function u(e,n){var t=function(t,o){return(0,a.jsx)(i.Z,(0,r.Z)({"data-testid":"".concat(n,"Icon"),ref:o},t,{children:e}))};return t.muiName=i.Z.muiName,o.memo(o.forwardRef(t))}},1256:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return i.Z},debounce:function(){return a},deprecatedPropType:function(){return u},isMuiElement:function(){return l},ownerDocument:function(){return f},ownerWindow:function(){return d},requirePropFactory:function(){return v},setRef:function(){return m},unstable_ClassNameGenerator:function(){return R.Z},unstable_useEnhancedEffect:function(){return p},unstable_useId:function(){return g},unsupportedProp:function(){return w},useControlled:function(){return b.Z},useEventCallback:function(){return y.Z},useForkRef:function(){return S.Z},useIsFocusVisible:function(){return x.Z}});var r=t(4036);var o=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),(function(){}))},i=t(4223);var a=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var u=function(){e.apply(r,i)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r};var u=function(e,n){return function(){return null}},c=t(2791);var l=function(e,n){return c.isValidElement(e)&&-1!==n.indexOf(e.type.muiName)};function s(e){return e&&e.ownerDocument||document}var f=s;var d=function(e){return s(e).defaultView||window};t(7462);var v=function(e,n){return function(){return null}},m=t(2971).Z,p=t(5721).Z,Z=t(9439),h=0;var g=function(e){var n=c.useState(e),t=(0,Z.Z)(n,2),r=t[0],o=t[1],i=e||r;return c.useEffect((function(){null==r&&o("mui-".concat(h+=1))}),[r]),i};var w=function(e,n,t,r,o){return null},b=t(8744),y=t(6868),S=t(4843),x=t(3031),R=t(7125)},8744:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(9439),o=t(2791);var i=function(e){var n=e.controlled,t=e.default,i=(e.name,e.state,o.useRef(void 0!==n).current),a=o.useState(t),u=(0,r.Z)(a,2),c=u[0],l=u[1];return[i?n:c,o.useCallback((function(e){i||l(e)}),[])]}},6868:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2791),o=t(5721);var i=function(e){var n=r.useRef(e);return(0,o.Z)((function(){n.current=e})),r.useCallback((function(){return n.current.apply(void 0,arguments)}),[])}},4843:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(2791),o=t(2971);var i=function(e,n){return r.useMemo((function(){return null==e&&null==n?null:function(t){(0,o.Z)(e,t),(0,o.Z)(n,t)}}),[e,n])}},3031:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var r,o=t(2791),i=!0,a=!1,u={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){e.metaKey||e.altKey||e.ctrlKey||(i=!0)}function l(){i=!1}function s(){"hidden"===this.visibilityState&&a&&(i=!0)}function f(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return i||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!u[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var d=function(){var e=o.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",c,!0),n.addEventListener("mousedown",l,!0),n.addEventListener("pointerdown",l,!0),n.addEventListener("touchstart",l,!0),n.addEventListener("visibilitychange",s,!0))}),[]),n=o.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!f(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(a=!0,window.clearTimeout(r),r=window.setTimeout((function(){a=!1}),100),n.current=!1,!0)},ref:e}}},2971:function(e,n,t){"use strict";function r(e,n){"function"===typeof e?e(n):e&&(e.current=n)}t.d(n,{Z:function(){return r}})},5721:function(e,n,t){"use strict";var r=t(2791),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;n.Z=o}}]);
//# sourceMappingURL=533.00e0c077.chunk.js.map