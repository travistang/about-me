/*! For license information please see component---src-pages-cv-education-js-4d3d630db3c7c2d447b1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,16],{"6G1K":function(e,t,a){e.exports={container:"Section-module--container--3J2sT",sectionTitle:"Section-module--sectionTitle--3quln",title:"Section-module--title--23iUt"}},R2bp:function(e,t,a){"use strict";a.r(t);var n=a("Wbzz"),i=a("q1tI"),r=a.n(i),c=a("fpqP"),o=a.n(c),l=a("Te3d"),u=a("ExVU"),s=function(e){return u.DateTime.fromFormat(e,"M/yyyy").toFormat("MMM yyyy")},d=function(e){var t=e.institude,a=e.degree,n=e.startDate,i=e.endDate,c=e.grade,l=e.thesis;return r.a.createElement("div",{className:o.a.educationItemContainer},r.a.createElement("div",{className:o.a.dateContainer},r.a.createElement("span",null,s(n)),r.a.createElement("span",null,"-"),r.a.createElement("span",null,i?s(i):"current")),r.a.createElement("div",{className:o.a.contentContainer},r.a.createElement("div",{className:o.a.educationHeader},r.a.createElement("span",null,a),r.a.createElement("span",null,t),c&&r.a.createElement("div",{className:o.a.grade},c)),l&&r.a.createElement("div",{className:o.a.thesisDescription},r.a.createElement("b",null,"Thesis: "),l)))};t.default=function(){var e=Object(n.useStaticQuery)("124681757");return r.a.createElement(l.default,{title:"Education"},e.content.education.map((function(e){return r.a.createElement(d,e)})))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var c=i.apply(null,n);c&&e.push(c)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},Te3d:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("6G1K"),c=a.n(r),o=a("TSYQ"),l=a.n(o);t.default=function(e){var t=e.title,a=e.children,n=e.className;return i.a.createElement("div",{className:l()(c.a.container,n)},i.a.createElement("div",{className:c.a.sectionTitle},i.a.createElement("div",{className:c.a.title},t)),a)}},fpqP:function(e,t,a){e.exports={educationItemContainer:"Education-module--educationItemContainer--3i4hc",dateContainer:"Education-module--dateContainer--21kgq",contentContainer:"Education-module--contentContainer--NIvg9",educationHeader:"Education-module--educationHeader--2JECa",grade:"Education-module--grade--3p8I-",educationDescription:"Education-module--educationDescription--9gMaH"}}}]);
//# sourceMappingURL=component---src-pages-cv-education-js-4d3d630db3c7c2d447b1.js.map