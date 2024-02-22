!function(){var e,t={5245:function(e,t,n){"use strict";var i=n(2985),r=n(9471),a=n(8790),s=n(7460),l=n(7664),o=n(2855),c=n(7731),u=n(5338);function d(e){return r.createElement("div",{className:"media-filter-option"},r.createElement("button",{className:e.selected?"active":"",onClick:function(){e.onSelect(e.id)}},e.label))}function f(e){const[t,n]=(0,r.useState)(e.default);function i(t){n(t),"function"==typeof e.onSelect&&e.onSelect(t)}return r.createElement("div",{className:"media-filter-option-list"},function(t){const n=[];let a=0;for(;a<e.items.length;)e.hideOptionOnSelect?e.items[a].id!==t&&n.push(r.createElement(d,{key:e.items[a].id,id:e.items[a].id,label:e.items[a].label,selected:e.items[a].id===t,onSelect:i})):n.push(r.createElement(d,{key:e.items[a].id,id:e.items[a].id,label:e.items[a].label,selected:e.items[a].id===t,onSelect:i})),a+=1;return n}(t))}function m(e){const[t,n,i,a,s,o]=(0,u.useMediaFilter)(e.default),[c,d]=(0,r.useState)(e.label);return(0,r.useEffect)((()=>{if(a.current.tryToHide(),e.updateTriggerButtonOnChange){let t=0;for(;t<e.options.length;){if(n===e.options[t].id){d(e.options[t].label);break}t+=1}}"function"==typeof e.onSelect&&e.onSelect(n)}),[n]),r.createElement("div",{ref:t,className:"media-filter"},r.createElement(o,{contentRef:a},r.createElement("button",{className:"popup-trigger","aria-label":"Filter"},r.createElement("span",{className:"filter-button-label"},r.createElement("span",{className:"filter-button-label-text"},c),r.createElement(l.MaterialIcon,{type:"arrow_drop_down"})))),r.createElement(s,{contentRef:a},r.createElement("div",{className:"main-options"},r.createElement(l.PopupMain,null,r.createElement(f,{items:e.options,default:n,onSelect:i,hideOptionOnSelect:e.hideOptionOnSelect})))))}function p(e){const[t,n,i,a,s,o]=(0,u.useMediaFilter)(e.default);return(0,r.useEffect)((()=>{a.current.tryToHide(),"function"==typeof e.onSelect&&e.onSelect(n)}),[n]),r.createElement("div",{ref:t,className:"media-filter"},r.createElement(o,{contentRef:a},r.createElement("button",{className:"popup-trigger","aria-label":"Filter"},r.createElement(l.MaterialIcon,{type:"sort"}),r.createElement("span",{className:"filter-button-label"},r.createElement("span",{className:"filter-button-label-text"},e.label)))),r.createElement(s,{contentRef:a},r.createElement("div",{className:"main-options"},r.createElement(l.PopupMain,null,r.createElement(f,{items:e.options,default:n,onSelect:i})))))}const h=[{id:"all",label:"All media types"},{id:"video",label:"Video"},{id:"audio",label:"Audio"},{id:"image",label:"Images"},{id:"pdf",label:"Pdf"}],g=[{id:"date_added_desc",label:"Upload date (newest)"},{id:"date_added_asc",label:"Upload date (oldest)"},{id:"most_views",label:"View count"},{id:"most_likes",label:"Like count"}];function v(e){const[t,n]=(0,r.useState)("all"),[i,a]=(0,r.useState)("date_added_desc"),[s,l]=(0,r.useState)({sort_by:null,ordering:null,media_type:null});function o(){const e={...s,media_type:null,sort_by:null,ordering:null};switch(t){case"video":e.media_type="video";break;case"audio":e.media_type="audio";break;case"image":e.media_type="image";break;case"pdf":e.media_type="pdf"}switch(i){case"most_views":e.sort_by="views",e.ordering=null;break;case"most_likes":e.sort_by="likes",e.ordering=null;break;case"date_added_asc":e.sort_by=null,e.ordering="asc"}l(e)}return(0,r.useEffect)((()=>{o()}),[t,i]),(0,r.useEffect)((()=>{"function"==typeof e.onFiltersUpdate&&e.onFiltersUpdate(s)}),[s]),(0,r.useEffect)((()=>{o()}),[]),r.createElement("div",{className:"media-filters-row"},r.createElement("div",{className:"media-filters-row-inner"},r.createElement("div",{className:"media-type-filters"},r.createElement(m,{label:h[0].label,default:h[0].id,options:h,onSelect:function(e){n(e)},updateTriggerButtonOnChange:!0,hideOptionOnSelect:!0})),r.createElement("div",{className:"media-filters-sort"},r.createElement(p,{label:"SORT BY",default:g[0].id,options:g,onSelect:function(e){a(e)},updateTriggerButtonOnChange:!1,hideOptionOnSelect:!1}))))}var y=n(8713),b=n.n(y);const E={media_type:[{id:"all",title:"All"},{id:"video",title:"Video"},{id:"audio",title:"Audio"},{id:"image",title:"Image"},{id:"pdf",title:"Pdf"}],upload_date:[{id:"all",title:"All"},{id:"today",title:"Today"},{id:"this_week",title:"This week"},{id:"this_month",title:"This month"},{id:"this_year",title:"This year"}],sort_by:[{id:"date_added_desc",title:"Upload date (newest)"},{id:"date_added_asc",title:"Upload date (oldest)"},{id:"most_views",title:"View count"},{id:"most_likes",title:"Like count"}]};function _(e){const[t,n]=(0,r.useState)(e.hidden),[i,a]=(0,r.useState)("all"),[o,c]=(0,r.useState)("all"),[u,d]=(0,r.useState)("date_added_desc"),f=(0,r.useRef)(null),m=(0,r.useRef)(null);function p(){t||(f.current.style.height=24+m.current.offsetHeight+"px")}function h(t){const n={media_type:i,upload_date:o,sort_by:u};switch(t.currentTarget.getAttribute("filter")){case"media_type":n.media_type=t.currentTarget.getAttribute("value"),e.onFiltersUpdate(n),a(n.media_type);break;case"upload_date":n.upload_date=t.currentTarget.getAttribute("value"),e.onFiltersUpdate(n),c(n.upload_date);break;case"sort_by":n.sort_by=t.currentTarget.getAttribute("value"),e.onFiltersUpdate(n),d(n.sort_by)}}return(0,r.useEffect)((()=>{n(e.hidden),p()}),[e.hidden]),(0,r.useEffect)((()=>(s.PageStore.on("window_resize",p),()=>s.PageStore.removeListener("window_resize",p))),[]),r.createElement("div",{ref:f,className:"mi-filters-row"+(t?" hidden":"")},r.createElement("div",{ref:m,className:"mi-filters-row-inner"},r.createElement("div",{className:"mi-filter"},r.createElement("div",{className:"mi-filter-title"},"MEDIA TYPE"),r.createElement("div",{className:"mi-filter-options"},r.createElement(l.FilterOptions,{id:"media_type",options:E.media_type,selected:i,onSelect:h}))),r.createElement("div",{className:"mi-filter"},r.createElement("div",{className:"mi-filter-title"},"UPLOAD DATE"),r.createElement("div",{className:"mi-filter-options"},r.createElement(l.FilterOptions,{id:"upload_date",options:E.upload_date,selected:o,onSelect:h}))),r.createElement("div",{className:"mi-filter"},r.createElement("div",{className:"mi-filter-title"},"SORT BY"),r.createElement("div",{className:"mi-filter-options"},r.createElement(l.FilterOptions,{id:"sort_by",options:E.sort_by,selected:u,onSelect:h})))))}_.propTypes={hidden:b().bool},_.defaultProps={hidden:!1};var w=n(9479);class k extends w.Y{constructor(e){super(e,"search-results"),this.state={validQuery:!1,requestUrl:null,filterArgs:"",resultsTitle:null,resultsCount:null,searchQuery:s.SearchFieldStore.get("search-query"),searchCategories:s.SearchFieldStore.get("search-categories"),searchTags:s.SearchFieldStore.get("search-tags"),hiddenFilters:!0},this.getCountFunc=this.getCountFunc.bind(this),this.updateRequestUrl=this.updateRequestUrl.bind(this),this.onFilterArgsUpdate=this.onFilterArgsUpdate.bind(this),this.onToggleFiltersClick=this.onToggleFiltersClick.bind(this),this.onFiltersUpdate=this.onFiltersUpdate.bind(this),this.didMount=!1,this.updateRequestUrl()}componentDidMount(){this.didMount=!0}onToggleFiltersClick(){this.setState({hiddenFilters:!this.state.hiddenFilters})}onFiltersUpdate(e){const t={media_type:null,upload_date:null,sort_by:null,ordering:null};switch(e.media_type){case"video":case"audio":case"image":case"pdf":t.media_type=e.media_type}switch(e.upload_date){case"today":case"this_week":case"this_month":case"this_year":t.upload_date=e.upload_date}switch(e.sort_by){case"most_views":t.sort_by="views";break;case"most_likes":t.sort_by="likes";break;case"date_added_asc":t.ordering="asc"}const n=[];for(let e in t)null!==t[e]&&n.push(e+"="+t[e]);this.setState({filterArgs:n.length?"&"+n.join("&"):""},(function(){this.updateRequestUrl()}))}updateRequestUrl(){const e=this.state.searchQuery||this.state.searchCategories||this.state.searchTags;let t=null;null!==this.state.resultsCount&&(e?this.state.searchCategories?(t=null===this.state.resultsCount||0===this.state.resultsCount?"No":this.state.resultsCount,t+=' media in category "'+this.state.searchCategories+'"'):this.state.searchTags?(t=null===this.state.resultsCount||0===this.state.resultsCount?"No":this.state.resultsCount,t+=' media in tag "'+this.state.searchTags+'"'):t=null===this.state.resultsCount||0===this.state.resultsCount?'No results for "'+this.state.searchQuery+'"':this.state.resultsCount+" result"+(1<this.state.resultsCount?"s":"")+' for "'+this.state.searchQuery+'"':t='No results for "'+this.state.searchQuery+'"');const n=(this.state.searchQuery||"")+(this.state.searchTags?"&t="+this.state.searchTags:"")+(this.state.searchCategories?"&c="+this.state.searchCategories:""),i=a.ApiUrlContext._currentValue.search.query+n+this.state.filterArgs;this.didMount?this.setState({validQuery:e,requestUrl:i,resultsTitle:t}):(this.state.validQuery=e,this.state.requestUrl=i,this.state.resultsTitle=t)}onFilterArgsUpdate(e){const t=[];for(let n in e)null!==e[n]&&t.push(n+"="+e[n]);this.setState({filterArgs:t.length?"&"+t.join("&"):""},(function(){this.updateRequestUrl()}))}getCountFunc(e){this.setState({resultsCount:e},(function(){this.updateRequestUrl()}))}pageContent(){const e=s.PageStore.get("config-options").pages.search.advancedFilters;return r.createElement(o.MediaListWrapper,{className:"search-results-wrap items-list-hor",title:null===this.state.resultsTitle?null:this.state.resultsTitle},e?r.createElement(l.FiltersToggleButton,{onClick:this.onToggleFiltersClick}):null,e?r.createElement(_,{hidden:this.state.hiddenFilters,onFiltersUpdate:this.onFiltersUpdate}):null,e?null:r.createElement(v,{onFiltersUpdate:this.onFilterArgsUpdate}),this.state.validQuery?r.createElement(c.LazyLoadItemListAsync,{key:this.state.requestUrl,singleLinkContent:!1,horizontalItemsOrientation:!0,itemsCountCallback:this.getCountFunc,requestUrl:this.state.requestUrl,preferSummary:!0,hideViews:!s.PageStore.get("config-media-item").displayViews,hideAuthor:!s.PageStore.get("config-media-item").displayAuthor,hideDate:!s.PageStore.get("config-media-item").displayPublishDate}):null)}}(0,i.C)("page-search",k)},5321:function(e,t,n){"use strict";n.d(t,{i:function(){return l}});var i=n(9471),r=n(8713),a=n.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e){const t=i.createElement("span",null,i.createElement("span",null,e.children)),n={tabIndex:e.tabIndex||null,title:e.title||null,className:"circle-icon-button"+(void 0!==e.className?" "+e.className:"")+(e.buttonShadow?" button-shadow":"")};return void 0!==e["data-page-id"]&&(n["data-page-id"]=e["data-page-id"]),void 0!==e["aria-label"]&&(n["aria-label"]=e["aria-label"]),"link"===e.type?i.createElement("a",s({},n,{href:e.href||null,rel:e.rel||null}),t):"span"===e.type?i.createElement("span",s({},n,{onClick:e.onClick||null}),t):i.createElement("button",s({},n,{onClick:e.onClick||null}),t)}l.propTypes={type:a().oneOf(["button","link","span"]),buttonShadow:a().bool,className:a().string},l.defaultProps={type:"button",buttonShadow:!1}},7256:function(e,t,n){"use strict";n.d(t,{P:function(){return l}});var i=n(9471),r=n(8713),a=n.n(r),s=n(2828);function l(e){return e.options.map((t=>i.createElement("div",{key:t.id,className:t.id===e.selected?"active":""},i.createElement("button",{onClick:e.onSelect,filter:e.id,value:t.id},i.createElement("span",null,t.title),t.id===e.selected?i.createElement(s.Z,{type:"close"}):null))))}l.propTypes={id:a().string.isRequired,selected:a().string.isRequired,onSelect:a().func.isRequired}},3135:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var i=n(9471),r=n(8713),a=n.n(r),s=n(2828);function l(e){const[t,n]=(0,i.useState)(e.active);return i.createElement("div",{className:"mi-filters-toggle"},i.createElement("button",{className:t?"active":"","aria-label":"Filter",onClick:function(){n(!t),void 0!==e.onClick&&e.onClick()}},i.createElement(s.Z,{type:"filter_list"}),i.createElement("span",{className:"filter-button-label"},i.createElement("span",{className:"filter-button-label-text"},"FILTERS"))))}l.propTypes={onClick:a().func,active:a().bool},l.defaultProps={active:!1}},7664:function(e,t,n){"use strict";n.d(t,{CircleIconButton:function(){return i.i},FilterOptions:function(){return r.P},FiltersToggleButton:function(){return a.I},MaterialIcon:function(){return s.Z},NavigationContentApp:function(){return l.V},NavigationMenuList:function(){return o.S},Notifications:function(){return c.$},PopupMain:function(){return u.AP},PopupTop:function(){return u.cp},SpinnerLoader:function(){return d.x},UserThumbnail:function(){return f.c}});var i=n(5321),r=n(7256),a=n(3135),s=n(2828),l=n(5305),o=n(7201),c=n(6089),u=(n(3818),n(2901)),d=n(6568),f=n(878)},2828:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(9471);const r=({type:e})=>e?i.createElement("i",{className:"material-icons","data-icon":e}):null},5305:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var i=n(9471),r=n(9834),a=n(8713),s=n.n(a);function l(e){const t=(0,i.useRef)(null),[n,a]=(0,i.useState)(null);let s=[];function l(t,n){var i;n.preventDefault(),n.stopPropagation(),i=s[t].id,void 0!==e.pages[i]&&a(i)}return(0,i.useEffect)((()=>{void 0!==e.pages[e.initPage]?a(e.initPage):Object.keys(e.pages).length?a(Object.keys(e.pages)[0]):a(null)}),[e.initPage]),(0,i.useEffect)((()=>{!function(){let e=0;for(;e<s.length;)s[e].elem.removeEventListener("click",s[e].listener),e+=1;s=[]}(),n&&(function(){let n,i,a=(0,r.findDOMNode)(t.current),o=a.querySelectorAll(e.pageChangeSelector);if(o.length)for(n=0;n<o.length;)i=o[n].getAttribute(e.pageIdSelectorAttr),i=i?i.trim():i,i&&(s[n]={id:i,elem:o[n]},s[n].listener=(e=>t=>l(e,t))(n),s[n].elem.addEventListener("click",s[n].listener)),n+=1;e.focusFirstItemOnPageChange&&a.focus()}(),"function"==typeof e.pageChangeCallback&&e.pageChangeCallback(n))}),[n]),n?i.createElement("div",{ref:t},i.cloneElement(e.pages[n])):null}l.propTypes={initPage:s().string,pages:s().object.isRequired,pageChangeSelector:s().string.isRequired,pageIdSelectorAttr:s().string.isRequired,focusFirstItemOnPageChange:s().bool,pageChangeCallback:s().func},l.defaultProps={focusFirstItemOnPageChange:!0}},7201:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var i=n(9471),r=n(8713),a=n.n(r),s=n(2828);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function o(e){let t=[];const n=e.itemAttr||{};void 0===n.className?n.className="":n.className&&(n.className+=" ");let r=e.text?e.icon&&"right"!==e.iconPos?1:0:-1,a=e.icon?e.text&&"right"===e.iconPos?1:0:-1;switch(-1<r&&(t[r]=i.createElement("span",{key:"Text"},e.text)),-1<a&&(t[a]=i.createElement("span",{key:"Icon",className:"right"===e.iconPos?"menu-item-icon-right":"menu-item-icon"},i.createElement(s.Z,{type:e.icon}))),e.itemType){case"link":t=i.createElement("a",l({},e.linkAttr||{},{href:e.link,title:e.text||null}),t),n.className+="link-item"+(e.active?" active":"");break;case"button":case"open-subpage":t=i.createElement("button",l({},e.buttonAttr||{},{key:"button"}),t);break;case"label":t=i.createElement("button",l({},e.buttonAttr||{},{key:"button"}),i.createElement("span",null,e.text||null)),n.className="label-item";break;case"div":t=i.createElement("div",l({},e.divAttr||{},{key:"div"}),e.text||null)}return""!==n.className&&(n.className=" "+n.className),n.className=n.className.trim(),i.createElement("li",n,t)}function c(e){const t=e.items.map(((e,t)=>i.createElement(o,l({key:t},e))));return t.length?i.createElement("div",{className:"nav-menu"+(e.removeVerticalPadding?" pv0":"")},i.createElement("nav",null,i.createElement("ul",null,t))):null}o.propTypes={itemType:a().oneOf(["link","open-subpage","button","label","div"]),link:a().string,icon:a().string,iconPos:a().oneOf(["left","right"]),text:a().string,active:a().bool,divAttr:a().object,buttonAttr:a().object,itemAttr:a().object,linkAttr:a().object},o.defaultProps={itemType:"link",iconPos:"left",active:!1},c.propTypes={removeVerticalPadding:a().bool,items:a().arrayOf(a().shape(o.propTypes)).isRequired},c.defaultProps={removeVerticalPadding:!1}},6089:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var i=n(9471),r=n(6371);let a=[];function s(e){const[t,n]=(0,i.useState)(!1),[r,a]=(0,i.useState)(!0);let s=null,l=null;return(0,i.useEffect)((()=>(s=setTimeout((function(){l=setTimeout((function(){a(!1),l=null}),1e3),s=null,n(!0),e.onHide(e.id)}),5e3),()=>{s&&clearTimeout(s),l&&clearTimeout(l)})),[]),r?i.createElement("div",{className:"notification-item"+(t?" hidden":"")},i.createElement("div",null,e.children||null)):null}function l(){const[e,t]=(0,i.useState)(a.length);function n(){t(r.default.get("notifications-size")+a.length)}function l(e){const t=[];a.map((n=>{n[0]!==e&&t.push(n)})),a=t}return(0,i.useEffect)((()=>(n(),r.default.on("added_notification",n),()=>r.default.removeListener("added_notification",n))),[]),e?i.createElement("div",{className:"notifications"},i.createElement("div",null,function(){const e=r.default.get("notifications");return[...a.map((e=>i.createElement(s,{key:e[0],id:e[0],onHide:l},e[1]))),...e.map((e=>(a.push(e),i.createElement(s,{key:e[0],id:e[0],onHide:l},e[1]))))]}())," "):null}},3818:function(e,t,n){"use strict";n(9471);var i=n(8713),r=n.n(i);r().string,r().array.isRequired,r().string,r().number,r().number,r().number,r().func,r().func},2901:function(e,t,n){"use strict";n.d(t,{AP:function(){return s},cp:function(){return a}});var i=n(9471);const r=i.forwardRef(((e,t)=>void 0!==e.children?i.createElement("div",{ref:t,className:"popup"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null));function a(e){return void 0!==e.children?i.createElement("div",{className:"popup-top"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}function s(e){return void 0!==e.children?i.createElement("div",{className:"popup-main"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}t.Ay=r},6568:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var i=n(9471),r=n(8713),a=n.n(r);function s(e){let t="spinner-loader";switch(e.size){case"tiny":case"x-small":case"small":case"large":case"x-large":t+=" "+e.size}return i.createElement("div",{className:t},i.createElement("svg",{className:"circular",viewBox:"25 25 50 50"},i.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"1.5",strokeMiterlimit:"10"})))}s.propTypes={size:a().oneOf(["tiny","x-small","small","medium","large","x-large"])},s.defaultProps={size:"medium"}},878:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var i=n(9471),r=n(8713),a=n.n(r),s=n(6387),l=n(5321),o=n(2828);function c(e){const{thumbnail:t}=(0,s.useUser)(),n={"aria-label":"Account profile photo that opens list of options and settings pages links",className:"thumbnail"};switch(e.isButton?void 0!==e.onClick&&(n.onClick=e.onClick):n.type="span",e.size){case"small":case"large":n.className+=" "+e.size+"-thumb"}return i.createElement(l.i,n,t?i.createElement("img",{src:t,alt:""}):i.createElement(o.Z,{type:"person"}))}c.propTypes={isButton:a().bool,size:a().oneOf(["small","medium","large"]),onClick:a().func},c.defaultProps={isButton:!1,size:"medium"}},4685:function(e,t,n){"use strict";n.d(t,{ItemListAsync:function(){return f}});var i=n(9471),r=n(8713),a=n.n(r),s=n(5338),l=n(4737),o=n(2495),c=n(4433),u=n(5633);function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d.apply(this,arguments)}function f(e){const[t,n,r,a,l,f,m,p,h,g,v]=(0,s.useItemListSync)(e);return(0,i.useEffect)((()=>(a(new u.B(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,p,h)),()=>{r&&(r.cancelAll(),a(null))})),[]),t?n.length?i.createElement("div",{className:l.listOuter},g(),i.createElement("div",{ref:f,className:"items-list-wrap"},i.createElement("div",{ref:m,className:l.list},n.map(((t,n)=>i.createElement(c.c,d({key:n},(0,c.k)(e,t,n))))))),v()):null:i.createElement(o.e,{className:l.listOuter})}f.propTypes={...l.k.propTypes,items:a().array,requestUrl:a().string.isRequired,firstItemRequestUrl:a().string},f.defaultProps={...l.k.defaultProps,requestUrl:null,firstItemRequestUrl:null,pageItems:24}},7731:function(e,t,n){"use strict";n.d(t,{LazyLoadItemListAsync:function(){return d}});var i=n(9471),r=n(7460),a=n(5338),s=n(4685),l=n(2495),o=n(4433),c=n(5633);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function d(e){const[t,n,s,d,f,m,p,h,g,v,y,b,E]=(0,a.useItemListLazyLoad)(e);return(0,i.useEffect)((()=>(d(new c.B(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,m,p)),r.PageStore.on("window_scroll",h),r.PageStore.on("document_visibility_change",g),h(),()=>{r.PageStore.removeListener("window_scroll",h),r.PageStore.removeListener("document_visibility_change",g),s&&(s.cancelAll(),d(null))})),[]),n?t.length?i.createElement("div",{className:f.listOuter},b(),i.createElement("div",{ref:v,className:"items-list-wrap"},i.createElement("div",{ref:y,className:f.list},t.map(((t,n)=>i.createElement(o.c,u({key:n},(0,o.k)(e,t,n))))))),E()):null:i.createElement(l.e,{className:f.listOuter})}d.propTypes={...s.ItemListAsync.propTypes},d.defaultProps={...s.ItemListAsync.defaultProps,pageItems:2}},1936:function(e,t,n){"use strict";n.d(t,{PageHeader:function(){return i.z},PageMain:function(){return r.P},PageSidebar:function(){return a.E}});var i=n(1254),r=n(3212),a=n(795);n(1470)},9479:function(e,t,n){"use strict";n.d(t,{Y:function(){return l}});var i=n(9471),r=n(285),a=n(1936),s=n(7664);class l extends i.PureComponent{constructor(e,t){super(e),void 0!==t&&r.PageActions.initPage(t)}render(){return i.createElement(i.Fragment,null,i.createElement(a.PageMain,null,this.pageContent()),i.createElement(s.Notifications,null))}}},7143:function(e,t,n){const i=n(2063).Dispatcher;e.exports=new i},6403:function(e,t,n){"use strict";n.d(t,{g:function(){return s},m:function(){return a}});var i=n(8004);function r(e,t,n){let i;switch(n){case TypeError:case RangeError:case SyntaxError:case ReferenceError:i=new n(t[0]);break;default:i=new Error(t[0])}return e(i.message,...t.slice(1)),i}function a(e,t){return r(i.z,e,t)}function s(e,t){return r(i.R,e,t)}},977:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var i=n(7143);function r(e,t){return i.register(e[t].bind(e)),e}},463:function(e,t,n){"use strict";n.d(t,{c:function(){return a}});var i=n(4571),r=n.n(i);function a(e,t){let n=r()(e,{});return""!==n.origin&&"null"!==n.origin&&n.origin||(n=r()(t+"/"+e.replace(/^\//g,""),{})),n.toString()}},1838:function(e,t,n){"use strict";n.d(t,{BrowserEvents:function(){return i.GT},PositiveInteger:function(){return d.e},PositiveIntegerOrZero:function(){return d.R},addClassname:function(){return i.zc},cancelAnimationFrame:function(){return i.uU},csrfToken:function(){return o.G},deleteRequest:function(){return p.Fb},exportStore:function(){return a.A},formatInnerLink:function(){return s.c},formatViewsNumber:function(){return l.A},getRequest:function(){return p.iq},greaterCommonDivision:function(){return u.p7},hasClassname:function(){return i.CX},imageExtension:function(){return c.t},isPositiveIntegerOrZero:function(){return u.tR},logErrorAndReturnError:function(){return r.m},logWarningAndReturnError:function(){return r.g},postRequest:function(){return p.MB},publishedOnDate:function(){return f.A},putRequest:function(){return p.zi},quickSort:function(){return m.g},removeClassname:function(){return i.qk},requestAnimationFrame:function(){return i.xi},supportsSvgAsImg:function(){return i.kN}});var i=n(1134),r=n(6403),a=n(977),s=n(463),l=n(4632),o=n(5393),c=n(1554),u=(n(8004),n(8354)),d=n(1702),f=n(7673),m=n(1453),p=n(5930)},8004:function(e,t,n){"use strict";n.d(t,{R:function(){return a},z:function(){return s}});var i=n(8974);const r=(...e)=>i[e[0]](...e.slice(1)),a=(...e)=>r("warn",...e),s=(...e)=>r("error",...e)},8354:function(e,t,n){"use strict";n.d(t,{p7:function(){return l},q6:function(){return a},tR:function(){return s}});const i=e=>e===Math.trunc(e),r=e=>((e,t)=>e>0)(e),a=e=>i(e)&&r(e),s=e=>i(e)&&(r(e)||(e=>0===e)(e)),l=(e,t)=>t?l(t,e%t):e},1702:function(e,t,n){"use strict";n.d(t,{R:function(){return a},e:function(){return s}});var i=n(6403),r=n(8354);const a=function(e,t,n){return void 0===e[t]||(0,r.tR)(e[t])?null:(0,i.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer or zero` ("+e[t]+")."])},s=function(e,t,n){return void 0===e[t]||(0,r.q6)(e[t])?null:(0,i.m)(["Invalid prop `"+t+"` of type `"+typeof e[t]+"` supplied to `"+(n||"N/A")+"`, expected `positive integer` ("+e[t]+")."])}},5930:function(e,t,n){"use strict";n.d(t,{Fb:function(){return o},MB:function(){return s},iq:function(){return a},zi:function(){return l}});var i=n(8266),r=n.n(i);async function a(e,t,n,r){const a={timeout:null,maxContentLength:null};function s(e){n instanceof Function&&n(e)}function l(e){if(r instanceof Function){let t=e;if(void 0===e.response)t={type:"network",error:e};else if(void 0!==e.response.status)switch(e.response.status){case 401:t={type:"private",error:e,message:"Media is private"};break;case 400:t={type:"unavailable",error:e,message:"Media is unavailable"}}r(t)}}t?await(0,i.get)(e,a).then(s).catch(l||null):(0,i.get)(e,a).then(s).catch(l||null)}async function s(e,t,n,r,a,s){function l(e){a instanceof Function&&a(e)}function o(e){s instanceof Function&&s(e)}t=t||{},r?await(0,i.post)(e,t,n||null).then(l).catch(o||null):(0,i.post)(e,t,n||null).then(l).catch(o||null)}async function l(e,t,n,r,a,s){function l(e){a instanceof Function&&a(e)}function o(e){s instanceof Function&&s(e)}t=t||{},r?await(0,i.put)(e,t,n||null).then(l).catch(o||null):(0,i.put)(e,t,n||null).then(l).catch(o||null)}async function o(e,t,n,i,a){function s(e){i instanceof Function&&i(e)}function l(e){a instanceof Function&&a(e)}t=t||{},n?await r().delete(e,t||null).then(s).catch(l||null):r().delete(e,t||null).then(s).catch(l||null)}},6371:function(e,t,n){"use strict";n.r(t),n(2507);var i=n(9032),r=n.n(i),a=n(7154),s=n(1838),l=n(3997);function o(){let e=new Uint32Array(3);return window.crypto.getRandomValues(e),(performance.now().toString(36)+Array.from(e).map((e=>e.toString(36))).join("")).replace(/./g,""+Math.random()+Intl.DateTimeFormat().resolvedOptions().timeZone+Date.now())}let c,u=null,d=null;class f extends(r()){constructor(e){super(),d=(0,l.$)(window.MediaCMS),c=new a.BrowserCache(d.site.id,86400),u={mediaAutoPlay:c.get("media-auto-play")},u.mediaAutoPlay=null===u.mediaAutoPlay||u.mediaAutoPlay,this.browserEvents=(0,s.BrowserEvents)(),this.browserEvents.doc(this.onDocumentVisibilityChange.bind(this)),this.browserEvents.win(this.onWindowResize.bind(this),this.onWindowScroll.bind(this)),this.notifications=function(e){let t=[];function n(e){"string"==typeof e&&t.push([o(),e])}return e.map(n),{size:function(){return t.length},push:n,clear:function(){t=[]},messages:function(){return[...t]}}}(void 0!==window.MediaCMS&&void 0!==window.MediaCMS.notifications?window.MediaCMS.notifications:[])}onDocumentVisibilityChange(){this.emit("document_visibility_change")}onWindowScroll(){this.emit("window_scroll")}onWindowResize(){this.emit("window_resize")}initPage(e){u.currentPage=e}get(e){let t;switch(e){case"browser-cache":t=c;break;case"media-auto-play":t=u.mediaAutoPlay;break;case"config-contents":t=d.contents;break;case"config-enabled":t=d.enabled;break;case"config-media-item":t=d.media.item;break;case"config-options":t=d.options;break;case"config-site":t=d.site;break;case"api-playlists":n=e.split("-")[1],t=d.api[n]||null;break;case"notifications-size":t=this.notifications.size();break;case"notifications":t=this.notifications.messages(),this.notifications.clear();break;case"current-page":t=u.currentPage}var n;return t}actions_handler(e){switch(e.type){case"INIT_PAGE":this.initPage(e.page),this.emit("page_init");break;case"TOGGLE_AUTO_PLAY":u.mediaAutoPlay=!u.mediaAutoPlay,c.set("media-auto-play",u.mediaAutoPlay),this.emit("switched_media_auto_play");break;case"ADD_NOTIFICATION":this.notifications.push(e.notification),this.emit("added_notification")}}}t.default=(0,s.exportStore)(new f,"actions_handler")},2855:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MediaListWrapper=void 0;var r=i(n(9471)),a=n(6190);n(2101),t.MediaListWrapper=function(e){var t=e.title,n=e.viewAllLink,i=e.viewAllText,s=e.className,l=e.style,o=e.children;return r.default.createElement("div",{className:(s?s+" ":"")+"media-list-wrapper",style:l},r.default.createElement(a.MediaListRow,{title:t,viewAllLink:n,viewAllText:i},o||null))}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,e=[],i.O=function(t,n,r,a){if(!n){var s=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,o=0;o<n.length;o++)(!1&a||s>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[o])}))?n.splice(o--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=187,function(){var e={187:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,s=n[0],l=n[1],o=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(o)var u=o(i)}for(t&&t(n);c<s.length;c++)a=s[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(u)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=i.O(void 0,[276],(function(){return i(5245)}));r=i.O(r)}();