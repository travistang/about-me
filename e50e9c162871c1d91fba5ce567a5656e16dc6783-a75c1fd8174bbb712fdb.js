/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-a75c1fd8174bbb712fdb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{3346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("q1tI"),r=n("Jv69");t.mockMediaQueryList={media:"",matches:!1,onchange:r.noop,addListener:r.noop,removeListener:r.noop,addEventListener:r.noop,removeEventListener:r.noop,dispatchEvent:function(e){return!0}};var i=function(e){return function(n,i){void 0===i&&(i=!1);var a=o.useState(i),c=a[0],l=a[1],u=r.queryObjectToString(n);return e((function(){var e=!0,n="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(u),o=function(){e&&l(Boolean(n.matches))};return n.addListener(o),l(n.matches),function(){e=!1,n.removeListener(o)}}),[u]),c}};t.useMedia=i(o.useEffect),t.useMediaLayout=i(o.useLayoutEffect),t.default=t.useMedia},"8meJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("nKC+");t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],n=e[1],r=o.default(t),i=n;return"boolean"==typeof i?i?r:"not "+r:("number"==typeof i&&/[height|width]$/.test(r)&&(i+="px"),"("+r+": "+i+")")})).join(" and ")}},BQQ9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var o=n("q1tI"),r=n.n(o),i={visibileSections:[],onChangeVisibileSection:function(){}},a=r.a.createContext(i),c=function(e){var t=e.children,n=r.a.useState(i),o=n[0],c=n[1],l=function(e,t){if(t)return[e]},u=Object.assign({},o,{onChangeVisibileSection:function(e,t){return c(Object.assign({},o,{visibileSections:l(e,t)}))}});return r.a.createElement(a.Provider,{value:u},t)}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=l;var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},i=n("Wbzz"),a=n("dj5g"),c=n("PDH8");function l(e){var t=e.to,n=e.title,o=e.children,c=e.className,l=e.stripHash,u=void 0!==l&&l,s={to:u?(0,a.stripHashedLocation)(t):t,onClick:function(e){return u?(0,a.handleStrippedLinkClick)(t,e):(0,a.handleLinkClick)(t,e)}};return n&&(s.title=n),c&&(s.className=c),r.default.createElement(i.Link,s,Boolean(o)?o:n)}l.propTypes=c.anchorLinkTypes},G4Lk:function(e,t,n){"use strict";var o=n("Wbzz"),r=n("q1tI"),i=n.n(r),a=n("Rk0v"),c=n.n(a),l=n("G7fN"),u=n("TsPM"),s=n("IP2g"),d=n("NsN6"),f=n("TSYQ"),p=n.n(f),m=function(e){var t=e.value,n=e.icon,o=e.name;return i.a.createElement("div",{className:c.a.contactItemContainer,onClick:function(){switch(o){case"Email":window.open("mailto:"+t);break;case"Github":window.open("https://github.com/"+t,"_blank");break;case"LinkedIn":window.open("https://www.linkedin.com/in/"+t,"_blank");break;default:window.open("https://"+t,"_blank")}}},i.a.createElement("span",{className:c.a.icon},i.a.createElement(s.a,{icon:u.b[n]})))},h=function(e){e.contacts;var t=Object(d.a)(),n=Object(o.useStaticQuery)("1240692965");return i.a.createElement("div",{className:p()(c.a.content,t&&c.a.mobile)},n.content.contacts.map((function(e){return i.a.createElement(m,e)})))};t.a=function(){var e=Object(d.a)();return i.a.createElement(l.a,{anchor:"contact",className:p()(c.a.container,e&&c.a.mobile)},i.a.createElement("div",{className:c.a.footer},i.a.createElement("div",{className:c.a.logo}," Travis' Homepage"),e&&i.a.createElement(h,null),i.a.createElement("div",null,"Copyright ",i.a.createElement(s.a,{icon:u.b.copyright})," 2020 Tang Yiu Ting. All rights reserved.")),!e&&i.a.createElement(h,null))}},G7fN:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("TSYQ"),a=n.n(i),c=n("aqT/"),l=n.n(c),u=n("BQQ9"),s=n("knEM"),d=n.n(s);t.a=function(e){var t=e.children,n=e.title,o=e.fullPage,i=e.className,c=e.anchor,s=void 0===c?"":c,f=r.a.useContext(u.a).onChangeVisibileSection;return r.a.createElement("div",{id:s,className:a()(d.a.sectionContainer,o&&d.a.fullPage,i)},r.a.createElement(l.a,{onChange:function(e){return f(s,e)}},r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:d.a.title},n),t)))}},Jv69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("nKC+");t.camelToHyphen=o.default;var r=n("8meJ");t.queryObjectToString=r.default;var i=n("ZQ31");t.noop=i.default},LbRr:function(e,t,n){"use strict";var o=n("q1tI"),r=n.n(o),i=n("aOmW"),a=n.n(i),c=n("TsPM"),l=n("IP2g"),u=n("oEq0"),s=n("BQQ9"),d=n("NsN6"),f=n("TSYQ"),p=n.n(f),m=function(e){var t=e.title,n=e.anchor,o=e.onClick,i=r.a.useContext(s.a).visibileSections;return r.a.createElement(u.AnchorLink,{to:"/#"+n,className:p()(a.a.headerLinkWrapper,n===(null==i?void 0:i[0])&&a.a.active)},r.a.createElement("div",{onClick:o},r.a.createElement("span",null,t),r.a.createElement("div",{className:a.a.headerLinkBottomUnder})))},h=function(){var e=("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):"light")||"light",t=r.a.useState("light"===e?"moon":"sun"),n=t[0],o=t[1],i=function(e){localStorage.setItem("data-theme",e),document.documentElement.setAttribute("data-theme",e),o("light"===e?"moon":"sun")};return r.a.useEffect((function(){var e=localStorage.getItem("data-theme");i(e||"light")}),[]),r.a.createElement("div",{className:a.a.themeButton,onClick:function(){i("light"===e?"dark":"light")}},r.a.createElement(l.a,{icon:c.b[n]}))},b=function(e){var t=e.opened,n=e.onClick;return r.a.createElement("div",{className:a.a.burgerMenu,onClick:n},r.a.createElement(l.a,{icon:t?c.b.burgerClose:c.b.burgerOpen}))},v=function(e){var t=e.opened,n=e.onSelected,o=Object(d.a)();return r.a.createElement("div",{className:p()(a.a.headerLinkGroup,o&&a.a.mobile,t&&a.a.opened)},r.a.createElement(m,{onClick:n,title:"About",anchor:"about"}),r.a.createElement(m,{onClick:n,title:"Experience",anchor:"experience"}),r.a.createElement(m,{onClick:n,title:"Education",anchor:"education"}),r.a.createElement(m,{onClick:n,title:"Projects",anchor:"projects"}),r.a.createElement(m,{onClick:n,title:"Contact",anchor:"contact"}))};t.a=function(){var e=Object(d.a)(),t=r.a.useState(!1),n=t[0],o=t[1],i=function(){return o(!1)};return r.a.createElement("header",{className:a.a.container},r.a.createElement("nav",{className:p()(a.a.navContainer,e&&a.a.mobile)},e&&r.a.createElement(b,{opened:n,onClick:function(){return o(!n)}}),r.a.createElement(v,{opened:n,onSelected:i}),r.a.createElement("div",{className:a.a.rightContainer},r.a.createElement(h,null)),e&&n&&r.a.createElement("div",{className:a.a.overlay,onClick:i})))}},NsN6:function(e,t,n){"use strict";var o=n("krAY");t.a=function(){return Object(o.useMedia)({maxWidth:768})}},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var o,r=(o=n("17x9"))&&o.__esModule?o:{default:o};var i={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,children:r.default.node};t.anchorLinkTypes=i},Rk0v:function(e,t,n){e.exports={container:"index-module--container--3muAy",mobile:"index-module--mobile--3iE6y",footer:"index-module--footer--3a59k",content:"index-module--content--2h3z-",logo:"index-module--logo--20I3U",contactItemContainer:"index-module--contactItemContainer--2tgWb"}},TSYQ:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},ZQ31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},aOmW:function(e,t,n){e.exports={container:"header-module--container--1n86u",navContainer:"header-module--navContainer--15Jb5",rightContainer:"header-module--rightContainer--TwBuV",mobile:"header-module--mobile--Bk0tF",themeButton:"header-module--themeButton--5Xygd",headerLinkWrapper:"header-module--headerLinkWrapper--lt6Zz",active:"header-module--active--2pIok",headerLinkBottomUnder:"header-module--headerLinkBottomUnder--3ia6D",burgerMenu:"header-module--burgerMenu--2kv4C",overlay:"header-module--overlay--AqN7C",headerLinkGroup:"header-module--headerLinkGroup--2Ya1I",opened:"header-module--opened--3HjzU"}},"aqT/":function(e,t,n){var o;o=function(e,t){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){e.exports=n(5)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=function(e,t,n){var o=e.direction,r=e.value;switch(o){case"top":return n.top+r<t.top&&n.bottom>t.bottom&&n.left<t.left&&n.right>t.right;case"left":return n.left+r<t.left&&n.bottom>t.bottom&&n.top<t.top&&n.right>t.right;case"bottom":return n.bottom-r>t.bottom&&n.left<t.left&&n.right>t.right&&n.top<t.top;case"right":return n.right-r>t.right&&n.left<t.left&&n.top<t.top&&n.bottom>t.bottom}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var o=n(1),r=n.n(o),i=n(2),a=n.n(i),c=n(0),l=n.n(c),u=n(3),s=n.n(u);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=p(t).call(this,e),n=!r||"object"!==d(r)&&"function"!=typeof r?m(o):r,b(m(n),"getContainer",(function(){return n.props.containment||window})),b(m(n),"addEventListener",(function(e,t,o,r){var i;n.debounceCheck||(n.debounceCheck={});var a=function(){i=null,n.check()},c={target:e,fn:r>-1?function(){i||(i=setTimeout(a,r||0))}:function(){clearTimeout(i),i=setTimeout(a,o||0)},getLastTimeout:function(){return i}};e.addEventListener(t,c.fn),n.debounceCheck[t]=c})),b(m(n),"startWatching",(function(){n.debounceCheck||n.interval||(n.props.intervalCheck&&(n.interval=setInterval(n.check,n.props.intervalDelay)),n.props.scrollCheck&&n.addEventListener(n.getContainer(),"scroll",n.props.scrollDelay,n.props.scrollThrottle),n.props.resizeCheck&&n.addEventListener(window,"resize",n.props.resizeDelay,n.props.resizeThrottle),!n.props.delayedCall&&n.check())})),b(m(n),"stopWatching",(function(){if(n.debounceCheck)for(var e in n.debounceCheck)if(n.debounceCheck.hasOwnProperty(e)){var t=n.debounceCheck[e];clearTimeout(t.getLastTimeout()),t.target.removeEventListener(e,t.fn),n.debounceCheck[e]=null}n.debounceCheck=null,n.interval&&(n.interval=clearInterval(n.interval))})),b(m(n),"check",(function(){var e,t,o=n.node;if(!o)return n.state;if(e=function(e){return void 0===e.width&&(e.width=e.right-e.left),void 0===e.height&&(e.height=e.bottom-e.top),e}(n.roundRectDown(o.getBoundingClientRect())),n.props.containment){var r=n.props.containment.getBoundingClientRect();t={top:r.top,left:r.left,bottom:r.bottom,right:r.right}}else t={top:0,left:0,bottom:window.innerHeight||document.documentElement.clientHeight,right:window.innerWidth||document.documentElement.clientWidth};var i=n.props.offset||{};"object"===d(i)&&(t.top+=i.top||0,t.left+=i.left||0,t.bottom-=i.bottom||0,t.right-=i.right||0);var a={top:e.top>=t.top,left:e.left>=t.left,bottom:e.bottom<=t.bottom,right:e.right<=t.right},c=e.height>0&&e.width>0,l=c&&a.top&&a.left&&a.bottom&&a.right;if(c&&n.props.partialVisibility){var u=e.top<=t.bottom&&e.bottom>=t.top&&e.left<=t.right&&e.right>=t.left;"string"==typeof n.props.partialVisibility&&(u=a[n.props.partialVisibility]),l=n.props.minTopValue?u&&e.top<=t.bottom-n.props.minTopValue:u}"string"==typeof i.direction&&"number"==typeof i.value&&(console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",i.direction,i.value),l=s()(i,e,t));var f=n.state;return n.state.isVisible!==l&&(f={isVisible:l,visibilityRect:a},n.setState(f),n.props.onChange&&n.props.onChange(l)),f})),n.state={isVisible:null,visibilityRect:{}},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.node=a.a.findDOMNode(this),this.props.active&&this.startWatching()}},{key:"componentWillUnmount",value:function(){this.stopWatching()}},{key:"componentDidUpdate",value:function(e){this.node=a.a.findDOMNode(this),this.props.active&&!e.active?(this.setState({isVisible:null,visibilityRect:{}}),this.startWatching()):this.props.active||this.stopWatching()}},{key:"roundRectDown",value:function(e){return{top:Math.floor(e.top),left:Math.floor(e.left),bottom:Math.floor(e.bottom),right:Math.floor(e.right)}}},{key:"render",value:function(){return this.props.children instanceof Function?this.props.children({isVisible:this.state.isVisible,visibilityRect:this.state.visibilityRect}):r.a.Children.only(this.props.children)}}])&&f(n.prototype,o),i&&f(n,i),t}(r.a.Component);b(v,"defaultProps",{active:!0,partialVisibility:!1,minTopValue:0,scrollCheck:!1,scrollDelay:250,scrollThrottle:-1,resizeCheck:!1,resizeDelay:250,resizeThrottle:-1,intervalCheck:!0,intervalDelay:100,delayedCall:!1,offset:{},containment:null,children:r.a.createElement("span",null)}),b(v,"propTypes",{onChange:l.a.func,active:l.a.bool,partialVisibility:l.a.oneOfType([l.a.bool,l.a.oneOf(["top","right","bottom","left"])]),delayedCall:l.a.bool,offset:l.a.oneOfType([l.a.shape({top:l.a.number,left:l.a.number,bottom:l.a.number,right:l.a.number}),l.a.shape({direction:l.a.oneOf(["top","right","bottom","left"]),value:l.a.number})]),scrollCheck:l.a.bool,scrollDelay:l.a.number,scrollThrottle:l.a.number,resizeCheck:l.a.bool,resizeDelay:l.a.number,resizeThrottle:l.a.number,intervalCheck:l.a.bool,intervalDelay:l.a.number,containment:"undefined"!=typeof window?l.a.instanceOf(window.Element):l.a.any,children:l.a.oneOfType([l.a.element,l.a.func]),minTopValue:l.a.number})},function(e,t,n){"use strict";var o=n(6);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}])},e.exports=o(n("q1tI"),n("i8i4"))},knEM:function(e,t,n){e.exports={sectionContainer:"index-module--sectionContainer--1nHOn",fullPage:"index-module--fullPage--jEcUH",title:"index-module--title--3e-il"}},krAY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("3346");t.default=o.default,t.useMedia=o.useMedia,t.useMediaLayout=o.useMediaLayout},"nKC+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return o.AnchorLink}});var o=n("F0uZ")}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-a75c1fd8174bbb712fdb.js.map