"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{6620:function(t,n,e){e.r(n),e.d(n,{default:function(){return o}});var r=e(9439),E=e(896),I=e(2791),c=e(2132),i=e(4049),h=e(184);function a(t){var n=t.trends;return(0,h.jsx)(c.Ul,{children:n.map((function(t){var n=t.title,e=t.id,r=t.poster_path;return(0,h.jsx)(c.Li,{children:(0,h.jsxs)(c.jJ,{to:"/movies/".concat(e),children:[(0,h.jsx)("img",{alt:n,src:r?"https://image.tmdb.org/t/p/original"+r:i,height:"300",width:"220"}),(0,h.jsx)("span",{children:n})]})},e)}))})}var u=e(7596),C=e(8786);function o(){var t=(0,I.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],o=(0,I.useState)(!1),s=(0,r.Z)(o,2),g=s[0],Q=s[1];return(0,I.useEffect)((function(){Q(!0),(0,E.Aj)().then((function(t){var n=t.results;i(n)})).catch((function(t){u.Am.error(t)})).finally((function(){return Q(!1)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.H1,{children:"Trending Today"}),g&&(0,h.jsx)(C.a,{}),(0,h.jsx)(a,{trends:e})]})}},896:function(t,n,e){e.d(n,{Aj:function(){return a},Jh:function(){return s},_r:function(){return Q},s_:function(){return C},z1:function(){return u}});var r=e(5861),E=e(7757),I=e.n(E),c=e(1243),i="e9d3be710fcd0188a22690b3d1ecf700",h="https://api.themoviedb.org/3",a=function(){var t=(0,r.Z)(I().mark((function t(){var n;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(h,"/trending/movie/day?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(I().mark((function t(n){var e;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(h,"/search/movie?query=").concat(n,"&api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function C(t){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(I().mark((function t(n){var e;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(h,"/movie/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(I().mark((function t(n){var e;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(h,"/movie/").concat(n,"/credits?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Q(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(I().mark((function t(n){var e;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(h,"/movie/").concat(n,"/reviews?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4049:function(t){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=620.6e3ad758.chunk.js.map