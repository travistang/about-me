/*! For license information please see component---src-pages-404-js-f1d96113157cb7e42da7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{3346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI"),a=n("Jv69");t.mockMediaQueryList={media:"",matches:!1,onchange:a.noop,addListener:a.noop,removeListener:a.noop,addEventListener:a.noop,removeEventListener:a.noop,dispatchEvent:function(e){return!0}};var o=function(e){return function(n,o){void 0===o&&(o=!1);var i=r.useState(o),u=i[0],c=i[1],s=a.queryObjectToString(n);return e((function(){var e=!0,n="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(s),r=function(){e&&c(Boolean(n.matches))};return n.addListener(r),c(n.matches),function(){e=!1,n.removeListener(r)}}),[s]),u}};t.useMedia=o(r.useEffect),t.useMediaLayout=o(r.useLayoutEffect),t.default=t.useMedia},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},"8meJ":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("nKC+");t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],n=e[1],a=r.default(t),o=n;return"boolean"==typeof o?o?a:"not "+a:("number"==typeof o&&/[height|width]$/.test(a)&&(o+="px"),"("+a+": "+o+")")})).join(" and ")}},"8ypT":function(e,t,n){},BQQ9:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n("KQm4"),a=n("q1tI"),o=n.n(a),i={visibileSections:[],onChangeVisibileSection:function(){}},u=o.a.createContext(i),c=function(e){var t=e.children,n=o.a.useState(i),a=n[0],c=n[1],s=a.visibleSections,l=void 0===s?[]:s,f=Object.assign({},a,{onChangeVisibileSection:function(e,t){return c(Object.assign({},a,{visibileSections:t?[].concat(Object(r.a)(l),[e]):l.filter((function(t){return t!==e}))}))}});return o.a.createElement(u.Provider,{value:f},t)}},F0uZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=c;var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("Wbzz"),i=n("dj5g"),u=n("PDH8");function c(e){var t=e.to,n=e.title,r=e.children,u=e.className,c=e.stripHash,s=void 0!==c&&c,l={to:s?(0,i.stripHashedLocation)(t):t,onClick:function(e){return s?(0,i.handleStrippedLinkClick)(t,e):(0,i.handleLinkClick)(t,e)}};return n&&(l.title=n),u&&(l.className=u),a.default.createElement(o.Link,l,Boolean(r)?r:n)}c.propTypes=u.anchorLinkTypes},Jv69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("nKC+");t.camelToHyphen=r.default;var a=n("8meJ");t.queryObjectToString=a.default;var o=n("ZQ31");t.noop=o.default},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("aOmW"),i=n.n(o),u=n("TsPM"),c=n("IP2g"),s=n("oEq0"),l=n("BQQ9"),f=n("NsN6"),d=n("TSYQ"),p=n.n(d),m=function(e){var t=e.title,n=e.anchor,r=a.a.useContext(l.a).visibileSections;return a.a.createElement(s.AnchorLink,{to:"/#"+n,className:p()(i.a.headerLinkWrapper,n===(null==r?void 0:r[0])&&i.a.active)},a.a.createElement("span",null,t),a.a.createElement("div",{className:i.a.headerLinkBottomUnder}))},h=function(){var e=document.documentElement.getAttribute("data-theme")||"light",t=a.a.useState("light"===e?"moon":"sun"),n=t[0],r=t[1],o=function(e){localStorage.setItem("data-theme",e),document.documentElement.setAttribute("data-theme",e),r("light"===e?"moon":"sun")};return a.a.useEffect((function(){var e=localStorage.getItem("data-theme");o(e||"light")}),[]),a.a.createElement("div",{className:i.a.themeButton,onClick:function(){o("light"===e?"dark":"light")}},a.a.createElement(c.a,{icon:u.b[n]}))},y=function(e){var t=e.opened,n=e.onClick;return a.a.createElement("div",{className:i.a.burgerMenu,onClick:n},a.a.createElement(c.a,{icon:t?u.b.burgerClose:u.b.burgerOpen}))},v=function(e){var t=e.opened,n=Object(f.a)();return a.a.createElement("div",{className:p()(i.a.headerLinkGroup,n&&i.a.mobile,t&&i.a.opened)},a.a.createElement(m,{title:"About",anchor:"about"}),a.a.createElement(m,{title:"Experience",anchor:"experience"}),a.a.createElement(m,{title:"Education",anchor:"education"}),a.a.createElement(m,{title:"Projects",anchor:"projects"}),a.a.createElement(m,{title:"Contact",anchor:"contact"}))};t.a=function(){var e=Object(f.a)(),t=a.a.useState(!1),n=t[0],r=t[1];return a.a.createElement("header",{className:i.a.container},a.a.createElement("nav",{className:p()(i.a.navContainer,e&&i.a.mobile)},e&&a.a.createElement(y,{opened:n,onClick:function(){return r(!n)}}),a.a.createElement(v,{opened:n}),a.a.createElement("div",{className:i.a.rightContainer},a.a.createElement(h,null)),e&&n&&a.a.createElement("div",{className:i.a.overlay,onClick:function(){return r(!1)}})))}},NsN6:function(e,t,n){"use strict";var r=n("krAY");t.a=function(){var e=getComputedStyle(document.documentElement).getPropertyValue("--mobile-breakpoint");return Object(r.useMedia)({maxWidth:e})}},PDH8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var r,a=(r=n("17x9"))&&r.__esModule?r:{default:r};var o={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,children:a.default.node};t.anchorLinkTypes=o},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},ZQ31:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},aOmW:function(e,t,n){e.exports={container:"header-module--container--1n86u",navContainer:"header-module--navContainer--15Jb5",rightContainer:"header-module--rightContainer--TwBuV",mobile:"header-module--mobile--Bk0tF",themeButton:"header-module--themeButton--5Xygd",headerLinkWrapper:"header-module--headerLinkWrapper--lt6Zz",active:"header-module--active--2pIok",headerLinkBottomUnder:"header-module--headerLinkBottomUnder--3ia6D",burgerMenu:"header-module--burgerMenu--2kv4C",overlay:"header-module--overlay--AqN7C",headerLinkGroup:"header-module--headerLinkGroup--2Ya1I",opened:"header-module--opened--3HjzU"}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],i[s[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},krAY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("3346");t.default=r.default,t.useMedia=r.useMedia,t.useMediaLayout=r.useMediaLayout},"nKC+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},oEq0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return r.AnchorLink}});var r=n("F0uZ")},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));var r,a,o,i,u=n("17x9"),c=n.n(u),s=n("8+s/"),l=n.n(s),f=n("bmMU"),d=n.n(f),p=n("q1tI"),m=n.n(p),h=n("YVoz"),y=n.n(h),v="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",C="href",O="http-equiv",A="innerHTML",S="itemprop",j="name",k="property",L="rel",P="src",M="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",N="defer",_="encodeSpecialCharacters",q="onChangeClientState",B="titleTemplate",R=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[T.NOSCRIPT,T.SCRIPT,T.STYLE],Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Q=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,T.TITLE),n=$(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},V=function(e){return $(e,q)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===L&&"canonical"===e[n].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==A&&u!==E&&u!==S||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=y()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(T.BODY,r),ce(T.HTML,a),ue(f,d);var p={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,u),scriptTags:se(T.SCRIPT,s),styleTags:se(T.STYLE,l)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(T.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[m.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===A||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===A||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(T.BASE,t,r),bodyAttributes:de(v,n,r),htmlAttributes:de(b,a,r),link:de(T.LINK,o,r),meta:de(T.META,i,r),noscript:de(T.NOSCRIPT,u,r),script:de(T.SCRIPT,c,r),style:de(T.STYLE,s,r),title:de(T.TITLE,{title:f,titleAttributes:d},r)}},me=l()((function(e){return{baseTag:Z([C,M],e),bodyAttributes:J(v,e),defer:$(e,N),encode:$(e,_),htmlAttributes:J(b,e),linkTags:G(T.LINK,[L,C],e),metaTags:G(T.META,[j,w,O,k,S],e),noscriptTags:G(T.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:G(T.SCRIPT,[P,A],e),styleTags:G(T.STYLE,[E],e),title:K(e),titleAttributes:J(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=me,i=o=function(e){function t(){return D(this,t),Q(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case T.BODY:return U({},a,{bodyAttributes:U({},o)});case T.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),m.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},w2l6:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("LbRr"),u=(n("8ypT"),function(e){var t,n=e.children,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{siteTitle:(null===(t=r.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,n),a.a.createElement("footer",{style:{marginTop:"2rem"}},"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}),c=n("qhky");function s(e){var t,n,r=e.description,i=e.lang,u=e.meta,s=e.title,l=Object(o.useStaticQuery)("63159454").site,f=r||l.siteMetadata.description,d=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return a.a.createElement(c.a,{htmlAttributes:{lang:i},title:s,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=l.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u)})}s.defaultProps={lang:"en",meta:[],description:""};var l=s;t.default=function(){return a.a.createElement(u,null,a.a.createElement(l,{title:"404: Not found"}),a.a.createElement("h1",null,"404: Not Found"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}}}]);
//# sourceMappingURL=component---src-pages-404-js-f1d96113157cb7e42da7.js.map