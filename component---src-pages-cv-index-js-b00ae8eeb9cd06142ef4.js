(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15,18],{"1s4z":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("IP2g"),r=a("TsPM"),o=a("w4+G"),m=a.n(o);t.default=function(){var e=Object(c.useStaticQuery)("150163851");return l.a.createElement("div",{className:m.a.container,"page-count":2},l.a.createElement("div",{className:m.a.nameContainer},l.a.createElement("div",{className:m.a.name},e.content.intro.name),l.a.createElement("div",{className:m.a.title},e.content.intro.title)),l.a.createElement("div",{className:m.a.locationContainer},l.a.createElement("div",{className:m.a.locationItem},l.a.createElement(i.a,{icon:r.b.home}),e.content.intro.home),l.a.createElement("div",{className:m.a.locationItem},l.a.createElement(i.a,{icon:r.b.location}),e.content.intro.location)))}},"6hO/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("hUj7"),r=a.n(i);t.default=function(){var e=Object(c.useStaticQuery)("2899373583");return l.a.createElement("p",{className:r.a.summary},e.content.intro.summary)}},Ghhp:function(e,t,a){e.exports={skillsContainer:"Skills-module--skillsContainer--3Piop",skillsTitle:"Skills-module--skillsTitle--wux8R",itemList:"Skills-module--itemList--3J64v",skillItem:"Skills-module--skillItem--v1tF3"}},MDjd:function(e,t,a){e.exports={contactItemContainer:"Contact-module--contactItemContainer--BzaPR"}},R2bp:function(e,t,a){"use strict";a.r(t);var n=a("Wbzz"),l=a("q1tI"),c=a.n(l),i=a("fpqP"),r=a.n(i),o=a("Te3d"),m=a("ExVU"),u=function(e){return m.DateTime.fromFormat(e,"M/yyyy").toFormat("MMM yyyy")},s=function(e){var t=e.institude,a=e.degree,n=e.startDate,l=e.endDate,i=e.grade,o=e.thesis;return c.a.createElement("div",{className:r.a.educationItemContainer},c.a.createElement("div",{className:r.a.dateContainer},c.a.createElement("span",null,u(n)),c.a.createElement("span",null,"-"),c.a.createElement("span",null,l?u(l):"current")),c.a.createElement("div",{className:r.a.contentContainer},c.a.createElement("div",{className:r.a.educationHeader},c.a.createElement("span",null,a),c.a.createElement("span",null,t),i&&c.a.createElement("div",{className:r.a.grade},i)),o&&c.a.createElement("div",{className:r.a.thesisDescription},c.a.createElement("b",null,"Thesis: "),o)))};t.default=function(){var e=Object(n.useStaticQuery)("124681757");return c.a.createElement(o.default,{title:"Education"},e.content.education.map((function(e){return c.a.createElement(s,e)})))}},RKqZ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("Ghhp"),r=a.n(i),o=a("Te3d");t.default=function(){var e=Object(c.useStaticQuery)("1717364376").content.intro.skills;return l.a.createElement(o.default,{title:"Skills"},e.map((function(e){var t=e.name,a=e.items;return l.a.createElement("div",{className:r.a.skillsContainer},l.a.createElement("div",{className:r.a.skillsTitle},t),l.a.createElement("div",{className:r.a.itemList},null==a?void 0:a.map((function(e){var t=e.name,a=e.tools;return l.a.createElement("span",{className:r.a.skillItem},l.a.createElement("b",null,t),(null==a?void 0:a.length)&&l.a.createElement("span",null," ","("+a.join(", ")+")"))}))))})))}},cYKe:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("TsPM"),r=a("Te3d"),o=a("IP2g"),m=a("MDjd"),u=a.n(m);t.default=function(){var e=Object(c.useStaticQuery)("92749885");return l.a.createElement(r.default,{title:"Contact",className:u.a.container},e.content.contacts.map((function(e){var t=e.value,a=e.icon;return l.a.createElement("div",{className:u.a.contactItemContainer},l.a.createElement(o.a,{icon:i.b[a]}),t)})))}},fpqP:function(e,t,a){e.exports={educationItemContainer:"Education-module--educationItemContainer--3i4hc",dateContainer:"Education-module--dateContainer--21kgq",contentContainer:"Education-module--contentContainer--NIvg9",educationHeader:"Education-module--educationHeader--2JECa",grade:"Education-module--grade--3p8I-",educationDescription:"Education-module--educationDescription--9gMaH"}},"h/VA":function(e,t,a){e.exports={container:"index-module--container--2C1mu",contentContainer:"index-module--contentContainer--3jBWt",leftContainer:"index-module--leftContainer--19hSi",rightContainer:"index-module--rightContainer--3GvN-",nextPage:"index-module--nextPage--2_b7-"}},hUj7:function(e,t,a){e.exports={summary:"Summary-module--summary--3enFY"}},"j+gt":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),i=a("Te3d"),r=a("xNQv"),o=a.n(r);t.default=function(){var e=Object(c.useStaticQuery)("630524092");return l.a.createElement(i.default,{title:"Languages"},e.content.intro.languages.map((function(e){var t=e.name,a=e.proficiency;return l.a.createElement("div",{className:o.a.languageItem},l.a.createElement("span",null,t),l.a.createElement("span",null,a))})))}},mh08:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),c=a("h/VA"),i=a.n(c),r=a("YwZP"),o=a("1s4z"),m=a("cYKe"),u=a("6hO/"),s=a("xAD9"),d=a("j+gt"),E=a("RKqZ"),f=a("R2bp");t.default=function(){var e=Object(r.useLocation)();return l.a.useEffect((function(){var t=new URLSearchParams(e.search).get("theme");document.documentElement.setAttribute("data-theme",t)}),[e.search]),l.a.createElement("div",{className:i.a.container},l.a.createElement(o.default,null),l.a.createElement("div",{className:i.a.contentContainer},l.a.createElement("div",{className:i.a.leftContainer},l.a.createElement(u.default,null),l.a.createElement(s.default,null),l.a.createElement(f.default,null)),l.a.createElement("div",{className:i.a.rightContainer},l.a.createElement(m.default,null),l.a.createElement(d.default,null),l.a.createElement(E.default,null))))}},"w4+G":function(e,t,a){e.exports={container:"NameSection-module--container--1scvE",nameContainer:"NameSection-module--nameContainer--1zk82",name:"NameSection-module--name--TrPdH",title:"NameSection-module--title--TH7MN",locationContainer:"NameSection-module--locationContainer--2oeaZ",locationItem:"NameSection-module--locationItem--3_0hG"}},xNQv:function(e,t,a){e.exports={languageItem:"Language-module--languageItem--2tclV"}}}]);
//# sourceMappingURL=component---src-pages-cv-index-js-b00ae8eeb9cd06142ef4.js.map