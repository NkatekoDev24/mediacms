!function(){var e,t={4497:function(e,t,n){"use strict";var r=n(2985),i=n(1482);(0,r.C)("page-home",i.HomePage)},7664:function(e,t,n){"use strict";n.r(t),n.d(t,{CircleIconButton:function(){return r.i},FilterOptions:function(){return i.P},FiltersToggleButton:function(){return u.I},MaterialIcon:function(){return o.Z},NavigationContentApp:function(){return a.V},NavigationMenuList:function(){return c.S},Notifications:function(){return l.$},NumericInputWithUnit:function(){return s._},PopupMain:function(){return f.AP},PopupTop:function(){return f.cp},SpinnerLoader:function(){return d.x},UserThumbnail:function(){return m.c}});var r=n(5321),i=n(7256),u=n(3135),o=n(2828),a=n(5305),c=n(7201),l=n(6089),s=n(3818),f=n(2901),d=n(6568),m=n(878)},5841:function(e,t,n){"use strict";n.r(t),n.d(t,{InlineSliderItemListAsync:function(){return f}});var r=n(9471),i=n(7460),u=n(5338),o=n(4685),a=n(2495),c=n(4433),l=n(5633);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e){const{visibleSidebar:t}=(0,u.useLayout)(),[n,o,f,d,m,p,g,v,h,y,b,P,w]=(0,u.useItemListInlineSlider)(e);return(0,r.useEffect)((()=>{h()}),[t]),(0,r.useEffect)((()=>(m(new l.B(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,p,g)),i.PageStore.on("window_resize",v),()=>{i.PageStore.removeListener("window_resize",v),f&&(f.cancelAll(),m(null))})),[]),o?n.length?r.createElement("div",{className:d.listOuter},P(),r.createElement("div",{ref:y,className:"items-list-wrap"},r.createElement("div",{ref:b,className:d.list},n.map(((t,n)=>r.createElement(c.c,s({key:n},(0,c.k)(e,t,n))))))),w()):null:r.createElement(a.e,{className:d.listOuter})}f.propTypes={...o.ItemListAsync.propTypes},f.defaultProps={...o.ItemListAsync.defaultProps,pageItems:12}},4685:function(e,t,n){"use strict";n.r(t),n.d(t,{ItemListAsync:function(){return d}});var r=n(9471),i=n(8713),u=n.n(i),o=n(5338),a=n(4737),c=n(2495),l=n(4433),s=n(5633);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e){const[t,n,i,u,a,d,m,p,g,v,h]=(0,o.useItemListSync)(e);return(0,r.useEffect)((()=>(u(new s.B(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,p,g)),()=>{i&&(i.cancelAll(),u(null))})),[]),t?n.length?r.createElement("div",{className:a.listOuter},v(),r.createElement("div",{ref:d,className:"items-list-wrap"},r.createElement("div",{ref:m,className:a.list},n.map(((t,n)=>r.createElement(l.c,f({key:n},(0,l.k)(e,t,n))))))),h()):null:r.createElement(c.e,{className:a.listOuter})}d.propTypes={...a.k.propTypes,items:u().array,requestUrl:u().string.isRequired,firstItemRequestUrl:u().string},d.defaultProps={...a.k.defaultProps,requestUrl:null,firstItemRequestUrl:null,pageItems:24}},1936:function(e,t,n){"use strict";n.r(t),n.d(t,{PageHeader:function(){return r.z},PageMain:function(){return i.P},PageSidebar:function(){return u.E},PageSidebarContentOverlay:function(){return o.B}});var r=n(1254),i=n(3212),u=n(795),o=n(1470)},7143:function(e,t,n){const r=n(2063).Dispatcher;e.exports=new r},6403:function(e,t,n){"use strict";n.d(t,{g:function(){return o},m:function(){return u}});var r=n(8004);function i(e,t,n){let r;switch(n){case TypeError:case RangeError:case SyntaxError:case ReferenceError:r=new n(t[0]);break;default:r=new Error(t[0])}return e(r.message,...t.slice(1)),r}function u(e,t){return i(r.z,e,t)}function o(e,t){return i(r.R,e,t)}},977:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(7143);function i(e,t){return r.register(e[t].bind(e)),e}},463:function(e,t,n){"use strict";n.d(t,{c:function(){return u}});var r=n(4571),i=n.n(r);function u(e,t){let n=i()(e,{});return""!==n.origin&&"null"!==n.origin&&n.origin||(n=i()(t+"/"+e.replace(/^\//g,""),{})),n.toString()}},1838:function(e,t,n){"use strict";n.d(t,{BrowserEvents:function(){return r.GT},PositiveInteger:function(){return f.e},PositiveIntegerOrZero:function(){return f.R},addClassname:function(){return r.zc},cancelAnimationFrame:function(){return r.uU},csrfToken:function(){return c.G},deleteRequest:function(){return p.Fb},exportStore:function(){return u.A},formatInnerLink:function(){return o.c},formatViewsNumber:function(){return a.A},getRequest:function(){return p.iq},greaterCommonDivision:function(){return s.p7},hasClassname:function(){return r.CX},imageExtension:function(){return l.t},isPositiveIntegerOrZero:function(){return s.tR},logErrorAndReturnError:function(){return i.m},logWarningAndReturnError:function(){return i.g},postRequest:function(){return p.MB},publishedOnDate:function(){return d.A},putRequest:function(){return p.zi},quickSort:function(){return m.g},removeClassname:function(){return r.qk},requestAnimationFrame:function(){return r.xi},supportsSvgAsImg:function(){return r.kN}});var r=n(1134),i=n(6403),u=n(977),o=n(463),a=n(4632),c=n(5393),l=n(1554),s=(n(8004),n(8354)),f=n(1702),d=n(7673),m=n(1453),p=n(5930)},8004:function(e,t,n){"use strict";n.d(t,{R:function(){return u},z:function(){return o}});var r=n(8974);const i=(...e)=>r[e[0]](...e.slice(1)),u=(...e)=>i("warn",...e),o=(...e)=>i("error",...e)},8354:function(e,t,n){"use strict";n.d(t,{p7:function(){return a},q6:function(){return u},tR:function(){return o}});const r=e=>e===Math.trunc(e),i=e=>((e,t)=>e>0)(e),u=e=>r(e)&&i(e),o=e=>r(e)&&(i(e)||(e=>0===e)(e)),a=(e,t)=>t?a(t,e%t):e},1702:function(e,t,n){"use strict";n.d(t,{R:function(){return u},e:function(){return o}});var r=n(6403),i=n(8354);const u=function(e,t,n){return void 0===e[t]||(0,i.tR)(e[t])?null:(0,r.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer or zero` ("+e[t]+")."])},o=function(e,t,n){return void 0===e[t]||(0,i.q6)(e[t])?null:(0,r.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer` ("+e[t]+")."])}},5930:function(e,t,n){"use strict";n.d(t,{Fb:function(){return c},MB:function(){return o},iq:function(){return u},zi:function(){return a}});var r=n(8266),i=n.n(r);async function u(e,t,n,i){const u={timeout:null,maxContentLength:null};function o(e){n instanceof Function&&n(e)}function a(e){if(i instanceof Function){let t=e;if(void 0===e.response)t={type:"network",error:e};else if(void 0!==e.response.status)switch(e.response.status){case 401:t={type:"private",error:e,message:"Media is private"};break;case 400:t={type:"unavailable",error:e,message:"Media is unavailable"}}i(t)}}t?await(0,r.get)(e,u).then(o).catch(a||null):(0,r.get)(e,u).then(o).catch(a||null)}async function o(e,t,n,i,u,o){function a(e){u instanceof Function&&u(e)}function c(e){o instanceof Function&&o(e)}t=t||{},i?await(0,r.post)(e,t,n||null).then(a).catch(c||null):(0,r.post)(e,t,n||null).then(a).catch(c||null)}async function a(e,t,n,i,u,o){function a(e){u instanceof Function&&u(e)}function c(e){o instanceof Function&&o(e)}t=t||{},i?await(0,r.put)(e,t,n||null).then(a).catch(c||null):(0,r.put)(e,t,n||null).then(a).catch(c||null)}async function c(e,t,n,r,u){function o(e){r instanceof Function&&r(e)}function a(e){u instanceof Function&&u(e)}t=t||{},n?await i().delete(e,t||null).then(o).catch(a||null):i().delete(e,t||null).then(o).catch(a||null)}},4407:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MediaMultiListWrapper=void 0;var i=r(n(9471));n(2101),t.MediaMultiListWrapper=function(e){var t=e.className,n=e.style,r=e.children;return i.default.createElement("div",{className:(t?t+" ":"")+"media-list-wrapper",style:n},r||null)}},1482:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HomePage=void 0;var o=u(n(9471)),a=n(8790),c=n(7460),l=n(6190),s=n(4407),f=n(4685),d=n(5841),m=n(9287),p=function(e){return o.default.createElement(a.LinksConsumer,null,(function(e){return o.default.createElement("div",{className:"empty-media"},o.default.createElement("div",{className:"welcome-title"},"Welcome to MediaCMS!"),o.default.createElement("div",{className:"start-uploading"},"Start uploading media and sharing your work!"),o.default.createElement("a",{href:e.user.addMedia,title:"Upload media",className:"button-link"},o.default.createElement("i",{className:"material-icons","data-icon":"video_call"}),"UPLOAD MEDIA"))}))};t.HomePage=function(e){var t=e.id,n=void 0===t?"home":t,r=e.featured_title,i=void 0===r?c.PageStore.get("config-options").pages.home.sections.featured.title:r,u=e.recommended_title,g=void 0===u?c.PageStore.get("config-options").pages.home.sections.recommended.title:u,v=e.latest_title,h=void 0===v?c.PageStore.get("config-options").pages.home.sections.latest.title:v,y=e.latest_view_all_link,b=void 0!==y&&y,P=e.featured_view_all_link,w=void 0===P||P,S=e.recommended_view_all_link,E=void 0===S||S,_=o.useState(!1),O=_[0],I=_[1],A=o.useState(!1),k=A[0],M=A[1],L=o.useState(!1),N=L[0],q=L[1],R=o.useState(!1),C=R[0],j=R[1],U=function(e){M(0<e),I(0===e)},x=function(e){q(0<e)},F=function(e){j(0<e)};return o.default.createElement(m.Page,{id:n},o.default.createElement(a.LinksConsumer,null,(function(e){return o.default.createElement(a.ApiUrlConsumer,null,(function(t){return o.default.createElement(s.MediaMultiListWrapper,{className:"items-list-ver"},c.PageStore.get("config-enabled").pages.featured&&c.PageStore.get("config-enabled").pages.featured.enabled&&o.default.createElement(l.MediaListRow,{title:i,style:N?void 0:{display:"none"},viewAllLink:w?e.featured:null},o.default.createElement(d.InlineSliderItemListAsync,{requestUrl:t.featured,itemsCountCallback:x,hideViews:!c.PageStore.get("config-media-item").displayViews,hideAuthor:!c.PageStore.get("config-media-item").displayAuthor,hideDate:!c.PageStore.get("config-media-item").displayPublishDate})),c.PageStore.get("config-enabled").pages.recommended&&c.PageStore.get("config-enabled").pages.recommended.enabled&&o.default.createElement(l.MediaListRow,{title:g,style:C?void 0:{display:"none"},viewAllLink:E?e.recommended:null},o.default.createElement(d.InlineSliderItemListAsync,{requestUrl:t.recommended,itemsCountCallback:F,hideViews:!c.PageStore.get("config-media-item").displayViews,hideAuthor:!c.PageStore.get("config-media-item").displayAuthor,hideDate:!c.PageStore.get("config-media-item").displayPublishDate})),o.default.createElement(l.MediaListRow,{title:h,style:k?void 0:{display:"none"},viewAllLink:b?e.latest:null},o.default.createElement(f.ItemListAsync,{pageItems:30,requestUrl:t.media,itemsCountCallback:U,hideViews:!c.PageStore.get("config-media-item").displayViews,hideAuthor:!c.PageStore.get("config-media-item").displayAuthor,hideDate:!c.PageStore.get("config-media-item").displayPublishDate})),O&&o.default.createElement(p,null))}))})))}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var u=n[e]={exports:{}};return t[e].call(u.exports,u,u.exports,r),u.exports}r.m=t,e=[],r.O=function(t,n,i,u){if(!n){var o=1/0;for(s=0;s<e.length;s++){n=e[s][0],i=e[s][1],u=e[s][2];for(var a=!0,c=0;c<n.length;c++)(!1&u||o>=u)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,u<o&&(o=u));if(a){e.splice(s--,1);var l=i();void 0!==l&&(t=l)}}return t}u=u||0;for(var s=e.length;s>0&&e[s-1][2]>u;s--)e[s]=e[s-1];e[s]=[n,i,u]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=57,function(){var e={57:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,u,o=n[0],a=n[1],c=n[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var s=c(r)}for(t&&t(n);l<o.length;l++)u=o[l],r.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return r.O(s)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[276],(function(){return r(4497)}));i=r.O(i)}();