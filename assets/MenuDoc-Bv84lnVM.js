import{B as _,U as F,b2 as O,a2 as H,K as b,v as x,ap as U,J as P,q as l,m as S,R as q,Q as M,a5 as W,a as m,c as d,F as w,e as D,d as f,a7 as B,k as v,S as k,f as I,n as C,t as T,b as g,w as L,av as me,T as Z,ai as X,b3 as re,L as E,p as K,Z as V,I as $,a3 as R,a6 as ee,al as de,a$ as pe,C as Ue,b4 as qe,b5 as We,aS as Ze,M as Xe,b6 as Ye,ax as Qe,z as oe,r as A,i as z,h as Je,a8 as $e,l as et,a9 as tt,s as nt}from"./index-CqmJPovh.js";import{s as fe}from"./index-_MCcClIV.js";import{s as te}from"./index-BX3iuVHv.js";import{s as he}from"./index-D3uq_m4T.js";import{s as be}from"./index-cA4cdQ_v.js";import{s as ne}from"./index-XXdYEljD.js";import{s as it}from"./index-BIg2uuhC.js";import{s as at,a as rt,b as ot}from"./index-CZmBfMfB.js";import"./index-DhuWdF7e.js";var st=function(e){var t=e.dt;return`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: `.concat(t("panelmenu.gap"),`;
}

.p-panelmenu-panel {
    background: `).concat(t("panelmenu.panel.background"),`;
    border-width: `).concat(t("panelmenu.panel.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("panelmenu.panel.border.color"),`;
    color: `).concat(t("panelmenu.panel.color"),`;
    border-radius: `).concat(t("panelmenu.panel.border.radius"),`;
    padding: `).concat(t("panelmenu.panel.padding"),`;
}

.p-panelmenu-panel:first-child {
    border-width: `).concat(t("panelmenu.panel.first.border.width"),`;
    border-start-start-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
    border-start-end-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
}

.p-panelmenu-panel:last-child {
    border-width: `).concat(t("panelmenu.panel.last.border.width"),`;
    border-end-start-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
    border-end-end-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    outline-color: transparent;
    color: `).concat(t("panelmenu.item.color"),`;
}

.p-panelmenu-header-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.color"),`;
}

.p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.color"),`;
}

.p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 `).concat(t("panelmenu.submenu.indent"),`;
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 `).concat(t("panelmenu.submenu.indent"),` 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    color: `).concat(t("panelmenu.item.color"),`;
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}
`)},ut={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var t=e.instance,a=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(a)&&!!a.items,"p-disabled":t.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-panelmenu-item",{"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},ct=_.extend({name:"panelmenu",theme:st,classes:ut}),lt={name:"BasePanelMenu",extends:S,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:ct,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},Ie={name:"PanelMenuSub",hostName:"PanelMenu",extends:S,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?O(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t.item,index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{ChevronRightIcon:te,ChevronDownIcon:fe},directives:{ripple:q}},mt=["tabindex"],dt=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],pt=["onClick","onMousemove"],ft=["href","target"];function ht(n,e,t,a,r,i){var u=M("PanelMenuSub",!0),c=W("ripple");return m(),d("ul",{class:C(n.cx("submenu")),tabindex:t.tabindex},[(m(!0),d(w,null,D(t.items,function(o,s){return m(),d(w,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(m(),d("li",l({key:0,id:i.getItemId(o),class:[n.cx("item",{processedItem:o}),i.getItemProp(o,"class")],style:i.getItemProp(o,"style"),role:"treeitem","aria-label":i.getItemLabel(o),"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions("item",o,s),{"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[f("div",l({class:n.cx("itemContent"),onClick:function(h){return i.onItemClick(h,o)},onMousemove:function(h){return i.onItemMouseMove(h,o)},ref_for:!0},i.getPTOptions("itemContent",o,s)),[t.templates.item?(m(),v(k(t.templates.item),{key:1,item:o.item,root:!1,active:i.isItemActive(o),hasSubmenu:i.isItemGroup(o),label:i.getItemLabel(o),props:i.getMenuItemProps(o,s)},null,8,["item","active","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(o,"url"),class:n.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",o,s)),[i.isItemGroup(o)?(m(),d(w,{key:0},[t.templates.submenuicon?(m(),v(k(t.templates.submenuicon),l({key:0,class:n.cx("submenuIcon"),active:i.isItemActive(o),ref_for:!0},i.getPTOptions("submenuIcon",o,s)),null,16,["class","active"])):(m(),v(k(i.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",o,s)),null,16,["class"]))],64)):I("",!0),t.templates.itemicon?(m(),v(k(t.templates.itemicon),{key:1,item:o.item,class:C(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(m(),d("span",l({key:2,class:[n.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions("itemIcon",o,s)),null,16)):I("",!0),f("span",l({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",o,s)),T(i.getItemLabel(o)),17)],16,ft)),[[c]])],16,pt),g(Z,l({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:L(function(){return[B(f("div",l({class:n.cx("contentContainer"),ref_for:!0},n.ptm("contentContainer")),[i.isItemVisible(o)&&i.isItemGroup(o)?(m(),v(u,l({key:0,id:i.getItemId(o)+"_list",role:"group",panelId:t.panelId,focusedItemId:t.focusedItemId,items:o.items,level:t.level+1,templates:t.templates,activeItemPath:t.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:e[0]||(e[0]=function(p){return n.$emit("item-mousemove",p)}),pt:n.pt,unstyled:n.unstyled,ref_for:!0},n.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16),[[me,i.isItemActive(o)]])]}),_:2},1040)],16,dt)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(m(),d("li",l({key:1,style:i.getItemProp(o,"style"),class:[n.cx("separator"),i.getItemProp(o,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,mt)}Ie.render=ht;function bt(n,e){return yt(n)||vt(n,e)||gt(n,e)||It()}function It(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(n,e){if(n){if(typeof n=="string")return se(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?se(n,e):void 0}}function se(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function vt(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,r,i,u,c=[],o=!0,s=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(o=(a=i.call(t)).done)&&(c.push(a.value),c.length!==e);o=!0);}catch(p){s=!0,r=p}finally{try{if(!o&&t.return!=null&&(u=t.return(),Object(u)!==u))return}finally{if(s)throw r}}return c}}function yt(n){if(Array.isArray(n))return n}var ge={name:"PanelMenuList",hostName:"PanelMenu",extends:S,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?O(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return b(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&X(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var t=b(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=b(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;if(b(this.focusedItem)){var a=this.activeItemPath.some(function(r){return r.key===t.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(r){return r.key!==t.focusedItem.key}):this.focusedItem=b(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var t=this;if(b(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var r=this.activeItemPath.some(function(i){return i.key===t.focusedItem.key});r?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(b(this.focusedItem)){var t=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&(P(t,'[data-pc-section="itemlink"]')||P(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(r){return r.parentKey!==t.parentKey}),a&&this.activeItemPath.push(t)),this.focusedItem=t,x(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(t)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return re(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),r=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return t.isValidItem(i)}):void 0;return r||e},findPrevItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),r=a>0?re(this.visibleItems.slice(0,a),function(i){return t.isValidItem(i)}):void 0;return r||e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var r=null,i=!1;if(b(this.focusedItem)){var u=this.visibleItems.findIndex(function(c){return c.key===a.focusedItem.key});r=this.visibleItems.slice(u).find(function(c){return a.isItemMatched(c)}),r=E(r)?this.visibleItems.slice(0,u).find(function(c){return a.isItemMatched(c)}):r}else r=this.visibleItems.find(function(c){return a.isItemMatched(c)});return b(r)&&(i=!0),E(r)&&E(this.focusedItem)&&(r=this.findFirstItem()),b(r)&&this.changeFocusedItem({originalEvent:e,processedItem:r,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,a=e.processedItem,r=e.focusOnNext,i=e.selfCheck,u=e.allowHeaderFocus,c=u===void 0?!0:u;b(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):c&&this.$emit("header-focus",{originalEvent:t,focusOnNext:r,selfCheck:i})},scrollInView:function(){var e=P(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,r){var i=bt(r,2),u=i[0],c=i[1];if(c){var o=t.findProcessedItemByItemKey(u);o&&a.push(o)}return a},[])},findProcessedItemByItemKey:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||a===0&&this.processedItems,!t)return null;for(var r=0;r<t.length;r++){var i=t[r];if(this.getItemProp(i,"key")===e)return i;var u=this.findProcessedItemByItemKey(e,i.items,a+1);if(u)return u}},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(c,o){var s=(i!==""?i+"_":"")+o,p={item:c,index:o,level:a,key:s,parent:r,parentKey:i};p.items=t.createProcessedItems(c.items,a+1,p,s),u.push(p)}),u},flatItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(r){t.isVisibleItem(r)&&(a.push(r),t.flatItems(r.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return b(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:Ie}};function kt(n,e,t,a,r,i){var u=M("PanelMenuSub");return m(),v(u,l({id:t.panelId+"_list",class:n.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":r.focused?i.focusedItemId:void 0,panelId:t.panelId,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.templates,activeItemPath:r.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:n.pt,unstyled:n.unstyled},n.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}ge.render=kt;function N(n){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(n)}function ue(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,a)}return t}function xt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ue(Object(t),!0).forEach(function(a){Pt(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ue(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Pt(n,e,t){return(e=wt(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function wt(n){var e=Lt(n,"string");return N(e)=="symbol"?e:e+""}function Lt(n,e){if(N(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(N(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var ve={name:"PanelMenu",extends:lt,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{id:this.$attrs.id,activeItem:null,activeItems:[]}},watch:{"$attrs.id":function(e){this.id=e||F()}},mounted:function(){this.id=this.id||F()},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(t){return H(e,t)}):H(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return H(e,this.activeItem)},isItemGroup:function(e){return b(e.items)},getPanelId:function(e){return"".concat(this.id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),x(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey:function(e){var t=U(e.currentTarget,"data-p-active")===!0?P(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;t?x(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=U(t,"data-p-active")===!0?P(t.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?x(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var a=P(e.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.nextElementSibling,r=P(a,'[data-pc-section="header"]');return r?U(r,"data-p-disabled")?this.findNextHeader(r.parentElement):r:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.previousElementSibling,r=P(a,'[data-pc-section="header"]');return r?U(r,"data-p-disabled")?this.findPrevHeader(r.parentElement):r:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,a=e.focusOnNext,r=e.selfCheck,i=t.currentTarget.closest('[data-pc-section="panel"]'),u=r?P(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);u?this.changeFocusedHeader(t,u):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(t)){var r=this.isItemActive(t),i=r?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&H(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(u){return H(t,u)})?this.activeItems=this.activeItems.filter(function(u){return!H(t,u)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!r}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,a=e.expanded,r=a===void 0?!1:a;if(this.expandedKeys){var i=xt({},this.expandedKeys);r?i[t.key]=!0:delete i[t.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,t){t&&x(t)},getMenuItemProps:function(e,t){return{icon:l({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,t)),label:l({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,t))}}},components:{PanelMenuList:ge,ChevronRightIcon:te,ChevronDownIcon:fe}},Kt=["id"],Mt=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],St=["href"],Ct=["id","aria-labelledby"];function At(n,e,t,a,r,i){var u=M("PanelMenuList");return m(),d("div",l({id:r.id,class:n.cx("root")},n.ptmi("root")),[(m(!0),d(w,null,D(n.model,function(c,o){return m(),d(w,{key:i.getPanelKey(o)},[i.isItemVisible(c)?(m(),d("div",l({key:0,style:i.getItemProp(c,"style"),class:[n.cx("panel"),i.getItemProp(c,"class")],ref_for:!0},n.ptm("panel")),[f("div",l({id:i.getHeaderId(o),class:[n.cx("header",{item:c}),i.getItemProp(c,"headerClass")],tabindex:i.isItemDisabled(c)?-1:n.tabindex,role:"button","aria-label":i.getItemLabel(c),"aria-expanded":i.isItemActive(c),"aria-controls":i.getContentId(o),"aria-disabled":i.isItemDisabled(c),onClick:function(p){return i.onHeaderClick(p,c)},onKeydown:function(p){return i.onHeaderKeyDown(p,c)},ref_for:!0},i.getPTOptions("header",c,o),{"data-p-active":i.isItemActive(c),"data-p-disabled":i.isItemDisabled(c)}),[f("div",l({class:n.cx("headerContent"),ref_for:!0},i.getPTOptions("headerContent",c,o)),[n.$slots.item?(m(),v(k(n.$slots.item),{key:1,item:c,root:!0,active:i.isItemActive(c),hasSubmenu:i.isItemGroup(c),label:i.getItemLabel(c),props:i.getMenuItemProps(c,o)},null,8,["item","active","hasSubmenu","label","props"])):(m(),d("a",l({key:0,href:i.getItemProp(c,"url"),class:n.cx("headerLink"),tabindex:-1,ref_for:!0},i.getPTOptions("headerLink",c,o)),[i.getItemProp(c,"items")?K(n.$slots,"submenuicon",{key:0,active:i.isItemActive(c)},function(){return[(m(),v(k(i.isItemActive(c)?"ChevronDownIcon":"ChevronRightIcon"),l({class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",c,o)),null,16,["class"]))]}):I("",!0),n.$slots.headericon?(m(),v(k(n.$slots.headericon),{key:1,item:c,class:C([n.cx("headerIcon"),i.getItemProp(c,"icon")])},null,8,["item","class"])):i.getItemProp(c,"icon")?(m(),d("span",l({key:2,class:[n.cx("headerIcon"),i.getItemProp(c,"icon")],ref_for:!0},i.getPTOptions("headerIcon",c,o)),null,16)):I("",!0),f("span",l({class:n.cx("headerLabel"),ref_for:!0},i.getPTOptions("headerLabel",c,o)),T(i.getItemLabel(c)),17)],16,St))],16)],16,Mt),g(Z,l({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:L(function(){return[B(f("div",l({id:i.getContentId(o),class:n.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(o),ref_for:!0},n.ptm("contentContainer")),[i.getItemProp(c,"items")?(m(),d("div",l({key:0,class:n.cx("content"),ref_for:!0},n.ptm("content")),[g(u,{panelId:i.getPanelId(o),items:i.getItemProp(c,"items"),templates:n.$slots,expandedKeys:n.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:n.pt,unstyled:n.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16,Ct),[[me,i.isItemActive(c)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,Kt)}ve.render=At;var Et=function(e){var t=e.dt;return`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: `.concat(t("megamenu.background"),`;
    border: 1px solid `).concat(t("megamenu.border.color"),`;
    border-radius: `).concat(t("megamenu.border.radius"),`;
    color: `).concat(t("megamenu.color"),`;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
    border-radius: `).concat(t("megamenu.base.item.border.radius"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: `).concat(t("megamenu.base.item.padding"),`;
}

.p-megamenu-item-content {
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),`;
    border-radius: `).concat(t("megamenu.item.border.radius"),`;
    color: `).concat(t("megamenu.item.color"),`;
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("megamenu.item.padding"),`;
    gap: `).concat(t("megamenu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.color"),`;
}

.p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.color"),`;
    font-size: `).concat(t("megamenu.submenu.icon.size"),`;
    width: `).concat(t("megamenu.submenu.icon.size"),`;
    height: `).concat(t("megamenu.submenu.icon.size"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.active.color"),`;
    background: `).concat(t("megamenu.item.active.background"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.active.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.active.color"),`;
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: `).concat(t("megamenu.overlay.padding"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    color: `).concat(t("megamenu.overlay.color"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    border-radius: `).concat(t("megamenu.overlay.border.radius"),`;
    box-shadow: `).concat(t("megamenu.overlay.shadow"),`;
}

.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("megamenu.submenu.gap"),`
}

.p-megamenu-submenu-label {
    padding: `).concat(t("megamenu.submenu.label.padding"),`;
    color: `).concat(t("megamenu.submenu.label.color"),`;
    font-weight: `).concat(t("megamenu.submenu.label.font.weight"),`;
    background: `).concat(t("megamenu.submenu.label.background"),`;
}

.p-megamenu-separator {
    border-block-start: 1px solid `).concat(t("megamenu.separator.border.color"),`;
}

.p-megamenu-horizontal {
    align-items: center;
    padding: `).concat(t("megamenu.horizontal.orientation.padding"),`;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.horizontal.orientation.gap"),`;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: `).concat(t("megamenu.vertical.orientation.padding"),`;
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: `).concat(t("megamenu.vertical.orientation.gap"),`;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: `).concat(t("megamenu.overlay.gap"),`;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("megamenu.mobile.button.size"),`;
    height: `).concat(t("megamenu.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("megamenu.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("megamenu.mobile.button.border.radius"),`;
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),", outline-color ").concat(t("megamenu.transition.duration"),", box-shadow ").concat(t("megamenu.transition.duration"),`;
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: `).concat(t("megamenu.mobile.button.hover.color"),`;
    background: `).concat(t("megamenu.mobile.button.hover.background"),`;
}

.p-megamenu-button:focus-visible {
    box-shadow: `).concat(t("megamenu.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("megamenu.mobile.button.focus.ring.width")," ").concat(t("megamenu.mobile.button.focus.ring.style")," ").concat(t("megamenu.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("megamenu.mobile.button.focus.ring.offset"),`;
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    gap: `).concat(t("megamenu.submenu.gap"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    box-shadow: `).concat(t("megamenu.overlay.shadow"),`;
}

.p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`)},Ft={rootList:function(e){var t=e.props;return{"max-height":t.scrollHeight,overflow:"auto"}}},Ot={root:function(e){var t=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(a)}]},item:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var t=e.instance,a=e.processedItem,r=t.isItemGroup(a)?a.items.length:0,i;if(t.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(r){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Dt=_.extend({name:"megamenu",theme:Et,classes:Ot,inlineStyles:Ft}),Vt={name:"BaseMegaMenu",extends:S,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Dt,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},ye={name:"MegaMenuSub",hostName:"MegaMenu",extends:S,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?O(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(a,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("label")},this.getPTOptions(e,t,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:ne,AngleDownIcon:be},directives:{ripple:q}},Tt=["tabindex"],_t=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],zt=["onClick","onMouseenter"],Ht=["href","target"],Bt=["id"];function Rt(n,e,t,a,r,i){var u=M("MegaMenuSub",!0),c=W("ripple");return m(),d("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu"),tabindex:t.tabindex},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[t.submenu?(m(),d("li",l({key:0,class:[n.cx("submenuLabel",{submenu:t.submenu}),i.getItemProp(t.submenu,"class")],style:i.getItemProp(t.submenu,"style"),role:"presentation"},n.ptm("submenuLabel")),T(i.getItemLabel(t.submenu)),17)):I("",!0),(m(!0),d(w,null,D(t.items,function(o,s){return m(),d(w,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(m(),d("li",l({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[n.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(o,s,"item"),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[f("div",l({class:n.cx("itemContent"),onClick:function(h){return i.onItemClick(h,o)},onMouseenter:function(h){return i.onItemMouseEnter(h,o)},ref_for:!0},i.getPTOptions(o,s,"itemContent")),[t.templates.item?(m(),v(k(t.templates.item),{key:1,item:o.item,hasSubmenu:i.isItemGroup(o),label:i.getItemLabel(o),props:i.getMenuItemProps(o,s)},null,8,["item","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(o,"url"),class:n.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(o,s,"itemLink")),[t.templates.itemicon?(m(),v(k(t.templates.itemicon),{key:0,item:o.item,class:C(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions(o,s,"itemIcon")),null,16)):I("",!0),f("span",l({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(o,s,"itemLabel")),T(i.getItemLabel(o)),17),i.isItemGroup(o)?(m(),d(w,{key:2},[t.templates.submenuicon?(m(),v(k(t.templates.submenuicon),l({key:0,active:i.isItemActive(o),class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(o,s,"submenuIcon")),null,16,["active","class"])):(m(),v(k(t.horizontal||t.mobileActive?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(o,s,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,Ht)),[[c]])],16,zt),i.isItemVisible(o)&&i.isItemGroup(o)?(m(),d("div",l({key:0,class:n.cx("overlay"),ref_for:!0},n.ptm("overlay")),[f("div",l({class:n.cx("grid"),ref_for:!0},n.ptm("grid")),[(m(!0),d(w,null,D(o.items,function(p){return m(),d("div",l({key:i.getItemKey(p),class:n.cx("column",{processedItem:o}),ref_for:!0},n.ptm("column")),[(m(!0),d(w,null,D(p,function(h){return m(),v(u,{key:i.getSubListKey(h),id:i.getSubListId(h),style:ee(n.sx("submenu",!0,{processedItem:o})),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,submenu:h,items:h.items,templates:t.templates,level:t.level+1,mobileActive:t.mobileActive,pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(y){return n.$emit("item-click",y)}),onItemMouseenter:e[1]||(e[1]=function(y){return n.$emit("item-mouseenter",y)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):I("",!0)],16,_t)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(m(),d("li",l({key:1,id:i.getItemId(o),class:[n.cx("separator"),i.getItemProp(o,"class")],style:i.getItemProp(o,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,Bt)):I("",!0)],64)}),128))],16,Tt)}ye.render=Rt;var ke={name:"MegaMenu",extends:Vt,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItem:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,V.clear(this.menubar),this.hide()):(this.mobileActive=!0,V.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},x(this.menubar)},hide:function(e,t){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){x(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&x(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var t=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!E(t)){var r=t.index,i=t.key,u=t.parentKey,c=t.items,o=b(c);o&&(this.activeItem=t),this.focusedItemInfo={index:r,key:i,parentKey:u},o&&(this.dirty=!0),a&&x(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,a=e.processedItem,r=this.isProccessedItemGroup(a),i=E(a.parent),u=this.isSelected(a);if(u){var c=a.index,o=a.key,s=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:c,key:o,parentKey:s},this.dirty=!i,this.mobileActive||x(this.menubar,{preventScroll:!0})}else r?this.onItemChange(e):this.hide(t)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(b(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,key:t.key,parentKey:t.parentKey},this.searchValue="")}var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&b(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.horizontal){var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,r)}}else{this.vertical&&b(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=t.columnIndex-1,u=this.visibleItems.findIndex(function(c){return c.columnIndex===i});u!==-1&&this.changeFocusedItemInfo(e,u)}e.preventDefault()},onArrowRightKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.vertical)if(b(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var r=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(r);i&&(this.onItemChange({originalEvent:e,processedItem:r}),this.focusedItemInfo={index:-1,key:r.key,parentKey:r.parentKey},this.searchValue="")}var u=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,u)}else{var c=t.columnIndex+1,o=this.visibleItems.findIndex(function(s){return s.columnIndex===c});o!==-1&&this.changeFocusedItemInfo(e,o)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&P(t,'a[data-pc-section="itemlink"]');a?a.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){b(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));a&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){$()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return b(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return R(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?R(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return b(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return a.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemInfo(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,t){var a=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=b(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,a;t===null&&this.queryMatches?a=this.$refs.menubutton:a=P(this.menubar,'li[id="'.concat(t,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=arguments.length>4?arguments[4]:void 0,c=[];return e&&e.forEach(function(o,s){var p=(i!==""?i+"_":"")+(u!==void 0?u+"_":"")+s,h={item:o,index:s,level:a,key:p,parent:r,parentKey:i,columnIndex:u!==void 0?u:r.columnIndex!==void 0?r.columnIndex:s};h.items=a===0&&o.items&&o.items.length>0?o.items.map(function(y,Y){return t.createProcessedItems(y,a+1,h,p,Y)}):t.createProcessedItems(o.items,a+1,h,p),c.push(h)}),c},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=b(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(t,a){return a.forEach(function(r){r.items.forEach(function(i){t.push(i)})}),t},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return b(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:ye,BarsIcon:he}},Nt=["id"],Gt=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function jt(n,e,t,a,r,i){var u=M("BarsIcon"),c=M("MegaMenuSub");return m(),d("div",l({ref:i.containerRef,id:r.id,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(m(),d("div",l({key:0,class:n.cx("start")},n.ptm("start")),[K(n.$slots,"start")],16)):I("",!0),K(n.$slots,n.$slots.button?"button":"menubutton",{id:r.id,class:C(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var o;return[n.model&&n.model.length>0?(m(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":r.id,"aria-label":(o=n.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},n.ptm("button")),[K(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,de(pe(n.ptm("buttonIcon"))),null,16)]})],16,Gt)):I("",!0)]}),g(c,{ref:i.menubarRef,id:r.id+"_list",tabindex:n.disabled?-1:n.tabindex,role:"menubar","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-disabled":n.disabled||void 0,"aria-orientation":n.orientation,"aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:n.$slots,activeItem:r.activeItem,mobileActive:r.mobileActive,level:0,style:ee(n.sx("rootList")),pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),n.$slots.end?(m(),d("div",l({key:1,class:n.cx("end")},n.ptm("end")),[K(n.$slots,"end")],16)):I("",!0)],16,Nt)}ke.render=jt;var Ut=function(e){var t=e.dt;return`
.p-contextmenu {
    background: `.concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(t("contextmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("contextmenu.list.gap"),`;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(t("contextmenu.transition.duration"),", color ").concat(t("contextmenu.transition.duration"),`;
    border-radius: `).concat(t("contextmenu.item.border.radius"),`;
    color: `).concat(t("contextmenu.item.color"),`;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("contextmenu.item.padding"),`;
    gap: `).concat(t("contextmenu.item.gap"),`;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.color"),`;
}

.p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("contextmenu.submenu.icon.size"),`;
    width: `).concat(t("contextmenu.submenu.icon.size"),`;
    height: `).concat(t("contextmenu.submenu.icon.size"),`;
}

.p-contextmenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.active.color"),`;
    background: `).concat(t("contextmenu.item.active.background"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.active.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.active.color"),`;
}

.p-contextmenu-separator {
    border-block-start: 1px solid `).concat(t("contextmenu.separator.border.color"),`;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}

.p-contextmenu-mobile .p-contextmenu-submenu {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: `).concat(t("tieredmenu.submenu.mobile.indent"),`;
    padding-inline-end: 0;
}

.p-contextmenu-mobile .p-contextmenu-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    transform: rotate(-90deg);
}
`)},qt={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":t.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},Wt=_.extend({name:"contextmenu",theme:Ut,classes:qt}),Zt={name:"BaseContextMenu",extends:S,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Wt,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},xe={name:"ContextMenuSub",hostName:"ContextMenu",extends:S,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?O(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},onEnter:function(){Ye(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:ne},directives:{ripple:q}},Xt=["tabindex"],Yt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Qt=["onClick","onMouseenter","onMousemove"],Jt=["href","target"],$t=["id"],en=["id"];function tn(n,e,t,a,r,i){var u=M("AngleRightIcon"),c=M("ContextMenuSub",!0),o=W("ripple");return m(),v(Z,l({name:"p-contextmenusub",onEnter:i.onEnter},n.ptm("menu.transition")),{default:L(function(){return[t.root||t.visible?(m(),d("ul",l({key:0,ref:"container",tabindex:t.tabindex},n.ptm("rootList")),[(m(!0),d(w,null,D(t.items,function(s,p){return m(),d(w,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(m(),d("li",l({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(p),ref_for:!0},i.getPTOptions("item",s,p),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[f("div",l({class:n.cx("itemContent"),onClick:function(y){return i.onItemClick(y,s)},onMouseenter:function(y){return i.onItemMouseEnter(y,s)},onMousemove:function(y){return i.onItemMouseMove(y,s)},ref_for:!0},i.getPTOptions("itemContent",s,p)),[t.templates.item?(m(),v(k(t.templates.item),{key:1,item:s.item,hasSubmenu:i.getItemProp(s,"items"),label:i.getItemLabel(s),props:i.getMenuItemProps(s,p)},null,8,["item","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",s,p)),[t.templates.itemicon?(m(),v(k(t.templates.itemicon),{key:0,item:s.item,class:C(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions("itemIcon",s,p)),null,16)):I("",!0),f("span",l({id:i.getItemLabelId(s),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,p)),T(i.getItemLabel(s)),17,$t),i.getItemProp(s,"items")?(m(),d(w,{key:2},[t.templates.submenuicon?(m(),v(k(t.templates.submenuicon),{key:0,active:i.isItemActive(s),class:C(n.cx("submenuIcon"))},null,8,["active","class"])):(m(),v(u,l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",s,p)),null,16,["class"]))],64)):I("",!0)],16,Jt)),[[o]])],16,Qt),i.isItemVisible(s)&&i.isItemGroup(s)?(m(),v(c,l({key:0,id:i.getItemId(s)+"_list",role:"menu",class:n.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(h){return n.$emit("item-click",h)}),onItemMouseenter:e[1]||(e[1]=function(h){return n.$emit("item-mouseenter",h)}),onItemMousemove:e[2]||(e[2]=function(h){return n.$emit("item-mousemove",h)}),"aria-labelledby":i.getItemLabelId(s),ref_for:!0},n.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):I("",!0)],16,Yt)):I("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(m(),d("li",l({key:1,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("separator"),i.getItemProp(s,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16,en)):I("",!0)],64)}),128))],16,Xt)):I("",!0)]}),_:1},16,["onEnter"])}xe.render=tn;var Pe={name:"ContextMenu",extends:Zt,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItemPath:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&V.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},x(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var a=e.processedItem,r=e.isFocus;if(!E(a)){var i=a.index,u=a.key,c=a.level,o=a.parentKey,s=a.items,p=b(s),h=this.activeItemPath.filter(function(y){return y.parentKey!==o&&y.parentKey!==u});p&&(h.push(a),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:c,parentKey:o},r&&x(this.list),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=h)}},onItemClick:function(e){var t=e.processedItem,a=this.isProccessedItemGroup(t),r=this.isSelected(t);if(r){var i=t.index,u=t.key,c=t.level,o=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(s){return u!==s.key&&u.startsWith(s.key)}),this.focusedItemInfo={index:i,level:c,parentKey:o},x(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(u){return u.key===a.parentKey}),i=E(a.parent);i||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=t&&P(t,'[data-pc-section="itemlink"]');a?a.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){Ue(e,{position:"absolute"}),this.position(),this.autoZIndex&&V.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),x(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&V.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:qe(this.container),r=this.container.offsetParent?this.container.offsetHeight:We(this.container),i=Ze(),u=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+a-c>i.width&&(e-=a),t+r-u>i.height&&(t-=r),e<c&&(e=c),t<u&&(t=u),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),r=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;a&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!$()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return R(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?R(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return a.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemIdx,a=P(this.list,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(c,o){var s=(i!==""?i+"_":"")+o,p={item:c,index:o,level:a,key:s,parent:r,parentKey:i};p.items=t.createProcessedItems(c.items,a+1,p,s),u.push(p)}),u},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(b(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:xe,Portal:Xe}};function nn(n,e,t,a,r,i){var u=M("ContextMenuSub"),c=M("Portal");return m(),v(c,{appendTo:n.appendTo},{default:L(function(){return[g(Z,l({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:L(function(){return[r.visible?(m(),d("div",l({key:0,ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[g(u,{ref:i.listRef,id:r.id+"_list",class:C(n.cx("rootList")),role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemIdx:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:r.activeItemPath,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,level:0,visible:r.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):I("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}Pe.render=nn;var an=function(e){var t=e.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(t("stepper.step.gap"),`;
    padding: `).concat(t("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),`;
    border-radius: `).concat(t("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(t("stepper.step.header.padding"),`;
    gap: `).concat(t("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(t("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(t("stepper.step.header.focus.ring.width")," ").concat(t("stepper.step.header.focus.ring.style")," ").concat(t("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(t("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("stepper.step.title.color"),`;
    font-weight: `).concat(t("stepper.step.title.font.weight"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("stepper.step.number.color"),`;
    border: 2px solid `).concat(t("stepper.step.number.border.color"),`;
    background: `).concat(t("stepper.step.number.background"),`;
    min-width: `).concat(t("stepper.step.number.size"),`;
    height: `).concat(t("stepper.step.number.size"),`;
    line-height: `).concat(t("stepper.step.number.size"),`;
    font-size: `).concat(t("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(t("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(t("stepper.step.number.active.background"),`;
    border-color: `).concat(t("stepper.step.number.active.border.color"),`;
    color: `).concat(t("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(t("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(t("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(t("stepper.separator.size"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(t("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(t("stepper.steppanel.background"),`;
    color: `).concat(t("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(t("stepper.steppanel.padding"),`;
    margin-inline-start: 1rem;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(t("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(t("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem .p-stepper-separator:dir(rtl) {
    left: calc(-9 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(t("stepper.step.number.size"),`;
}
`)},rn={root:function(e){var t=e.props;return["p-stepper p-component",{"p-readonly":t.linear}]},separator:"p-stepper-separator"},on=_.extend({name:"stepper",theme:an,classes:rn}),sn={name:"BaseStepper",extends:S,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:on,provide:function(){return{$pcStepper:this,$parentInstance:this}}},we={name:"Stepper",extends:sn,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||F()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||F()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function un(n,e,t,a,r,i){return m(),d("div",l({class:n.cx("root"),role:"tablist"},n.ptmi("root")),[n.$slots.start?K(n.$slots,"start",{key:0}):I("",!0),K(n.$slots,"default"),n.$slots.end?K(n.$slots,"end",{key:1}):I("",!0)],16)}we.render=un;var cn={root:"p-steplist"},ln=_.extend({name:"steplist",classes:cn}),mn={name:"BaseStepList",extends:S,style:ln,provide:function(){return{$pcStepList:this,$parentInstance:this}}},Le={name:"StepList",extends:mn,inheritAttrs:!1};function dn(n,e,t,a,r,i){return m(),d("div",l({class:n.cx("root")},n.ptmi("root")),[K(n.$slots,"default")],16)}Le.render=dn;var pn={root:function(e){var t=e.instance;return["p-step",{"p-step-active":t.active,"p-disabled":t.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},fn=_.extend({name:"step",classes:pn}),Ke={name:"StepperSeparator",hostName:"Stepper",extends:S};function hn(n,e,t,a,r,i){return m(),d("span",l({class:n.cx("separator")},n.ptm("separator")),null,16)}Ke.render=hn;var bn={name:"BaseStep",extends:S,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"}},style:fn,provide:function(){return{$pcStep:this,$parentInstance:this}}},Me={name:"Step",extends:bn,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=Qe(this.$el,oe(this.$pcStepper.$el,'[data-pc-name="step"]')),t=oe(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==t-1}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.isStepDisabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.isStepDisabled,onClick:this.onStepClick}}}},components:{StepperSeparator:Ke}},In=["id","tabindex","aria-controls","disabled"];function gn(n,e,t,a,r,i){var u=M("StepperSeparator");return n.asChild?K(n.$slots,"default",{key:1,class:C(n.cx("root")),active:i.active,value:n.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(m(),v(k(n.as),l({key:0,class:n.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled},i.getPTOptions("root")),{default:L(function(){return[f("button",l({id:i.id,class:n.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:e[0]||(e[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)})},i.getPTOptions("header")),[f("span",l({class:n.cx("number")},i.getPTOptions("number")),T(i.activeValue),17),f("span",l({class:n.cx("title")},i.getPTOptions("title")),[K(n.$slots,"default")],16)],16,In),r.isSeparatorVisible?(m(),v(u,{key:0})):I("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}Me.render=gn;var vn=function(e){var t=e.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},yn={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",separatorIcon:"p-breadcrumb-separator-icon",item:function(e){var t=e.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},kn=_.extend({name:"breadcrumb",theme:vn,classes:yn}),xn={name:"BaseBreadcrumb",extends:S,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:kn,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},Se={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:S,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,a=e.url,r=typeof window<"u"?window.location.pathname:"";return t===r||a===r?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:l({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return e.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:l({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:l({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},Pn=["href","target","aria-current"];function wn(n,e,t,a,r,i){return i.visible()?(m(),d("li",l({key:0,class:[n.cx("item"),t.item.class]},n.ptm("item",i.ptmOptions)),[t.templates.item?(m(),v(k(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(m(),d("a",l({key:0,href:t.item.url||"#",class:n.cx("itemLink"),target:t.item.target,"aria-current":i.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},n.ptm("itemLink",i.ptmOptions)),[t.templates&&t.templates.itemicon?(m(),v(k(t.templates.itemicon),{key:0,item:t.item,class:C(n.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):t.item.icon?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),t.item.icon]},n.ptm("itemIcon",i.ptmOptions)),null,16)):I("",!0),t.item.label?(m(),d("span",l({key:2,class:n.cx("itemLabel")},n.ptm("itemLabel",i.ptmOptions)),T(i.label()),17)):I("",!0)],16,Pn))],16)):I("",!0)}Se.render=wn;var Ce={name:"Breadcrumb",extends:xn,inheritAttrs:!1,components:{BreadcrumbItem:Se,ChevronRightIcon:te}};function Ln(n,e,t,a,r,i){var u=M("BreadcrumbItem"),c=M("ChevronRightIcon");return m(),d("nav",l({class:n.cx("root")},n.ptmi("root")),[f("ol",l({class:n.cx("list")},n.ptm("list")),[n.home?(m(),v(u,l({key:0,item:n.home,class:n.cx("homeItem"),templates:n.$slots,pt:n.pt,unstyled:n.unstyled},n.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):I("",!0),(m(!0),d(w,null,D(n.model,function(o,s){return m(),d(w,{key:o.label+"_"+s},[n.home||s!==0?(m(),d("li",l({key:0,class:n.cx("separator"),ref_for:!0},n.ptm("separator")),[K(n.$slots,"separator",{},function(){return[g(c,l({"aria-hidden":"true",class:n.cx("separatorIcon"),ref_for:!0},n.ptm("separatorIcon")),null,16,["class"])]})],16)):I("",!0),g(u,{item:o,index:s,templates:n.$slots,pt:n.pt,unstyled:n.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Ce.render=Ln;var Kn=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-end:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    border-radius: `).concat(t("menubar.submenu.border.radius"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-mobile .p-menubar-root-list:dir(rtl) {
    left: auto;
    right: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-block-start: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: `).concat(t("menubar.submenu.mobile.indent"),`;
    padding-inline-end: 0;
}
`)},Mn={submenu:function(e){var t=e.instance,a=e.processedItem;return{display:t.isItemActive(a)?"flex":"none"}}},Sn={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},Cn=_.extend({name:"menubar",theme:Kn,classes:Sn,inlineStyles:Mn}),An={name:"BaseMenubar",extends:S,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Cn,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},Ae={name:"MenubarSub",hostName:"Menubar",extends:S,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?O(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(a,{context:{item:e.item,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return b(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,t){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,t,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&e.getItemProp(t,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length}},components:{AngleRightIcon:ne,AngleDownIcon:be},directives:{ripple:q}},En=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Fn=["onClick","onMouseenter","onMousemove"],On=["href","target"],Dn=["id"],Vn=["id"];function Tn(n,e,t,a,r,i){var u=M("MenubarSub",!0),c=W("ripple");return m(),d("ul",l({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(m(!0),d(w,null,D(t.items,function(o,s){return m(),d(w,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(m(),d("li",l({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[n.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize,"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(o,s,"item"),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[f("div",l({class:n.cx("itemContent"),onClick:function(h){return i.onItemClick(h,o)},onMouseenter:function(h){return i.onItemMouseEnter(h,o)},onMousemove:function(h){return i.onItemMouseMove(h,o)},ref_for:!0},i.getPTOptions(o,s,"itemContent")),[t.templates.item?(m(),v(k(t.templates.item),{key:1,item:o.item,root:t.root,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,s)},null,8,["item","root","hasSubmenu","label","props"])):B((m(),d("a",l({key:0,href:i.getItemProp(o,"url"),class:n.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1",ref_for:!0},i.getPTOptions(o,s,"itemLink")),[t.templates.itemicon?(m(),v(k(t.templates.itemicon),{key:0,item:o.item,class:C(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(m(),d("span",l({key:1,class:[n.cx("itemIcon"),i.getItemProp(o,"icon")],ref_for:!0},i.getPTOptions(o,s,"itemIcon")),null,16)):I("",!0),f("span",l({id:i.getItemLabelId(o),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(o,s,"itemLabel")),T(i.getItemLabel(o)),17,Dn),i.getItemProp(o,"items")?(m(),d(w,{key:2},[t.templates.submenuicon?(m(),v(k(t.templates.submenuicon),{key:0,root:t.root,active:i.isItemActive(o),class:C(n.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),v(k(t.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(o,s,"submenuIcon")),null,16,["class"]))],64)):I("",!0)],16,On)),[[c]])],16,Fn),i.isItemVisible(o)&&i.isItemGroup(o)?(m(),v(u,{key:0,id:i.getItemId(o)+"_list",menuId:t.menuId,role:"menu",style:ee(n.sx("submenu",!0,{processedItem:o})),focusedItemId:t.focusedItemId,items:o.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":i.getItemLabelId(o),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(p){return n.$emit("item-click",p)}),onItemMouseenter:e[1]||(e[1]=function(p){return n.$emit("item-mouseenter",p)}),onItemMousemove:e[2]||(e[2]=function(p){return n.$emit("item-mousemove",p)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):I("",!0)],16,En)):I("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(m(),d("li",l({key:1,id:i.getItemId(o),class:[n.cx("separator"),i.getItemProp(o,"class")],style:i.getItemProp(o,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,Vn)):I("",!0)],64)}),128))],16)}Ae.render=Tn;var Ee={name:"Menubar",extends:An,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||F()},activeItemPath:function(e){b(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||F(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&V.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?O(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return b(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&b(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,V.clear(this.menubar),this.hide()):(this.mobileActive=!0,V.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){x(this.menubar)},hide:function(e,t){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){x(a.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&x(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&X(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var a=e.processedItem,r=e.isFocus;if(!E(a)){var i=a.index,u=a.key,c=a.level,o=a.parentKey,s=a.items,p=b(s),h=this.activeItemPath.filter(function(y){return y.parentKey!==o&&y.parentKey!==u});p&&h.push(a),this.focusedItemInfo={index:i,level:c,parentKey:o},p&&(this.dirty=!0),r&&x(this.menubar),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=h)}},onItemClick:function(e){var t=e.originalEvent,a=e.processedItem,r=this.isProccessedItemGroup(a),i=E(a.parent),u=this.isSelected(a);if(u){var c=a.index,o=a.key,s=a.level,p=a.parentKey;this.activeItemPath=this.activeItemPath.filter(function(y){return o!==y.key&&o.startsWith(y.key)}),this.focusedItemInfo={index:c,level:s,parentKey:p},this.dirty=!i,x(this.menubar)}else if(r)this.onItemChange(e);else{var h=i?a:this.activeItemPath.find(function(y){return y.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,h?h.index:-1),this.mobileActive=!1,x(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=t?E(t.parent):null;if(a){var r=this.isProccessedItemGroup(t);r&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],r=E(a.parent);if(r){var i=this.isProccessedItemGroup(a);if(i){this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo={index:-1,parentKey:a.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var c=this.activeItemPath.find(function(s){return s.key===a.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:c?c.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey});else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],r=a?this.activeItemPath.find(function(u){return u.key===a.parentKey}):null;if(r)this.onItemChange({originalEvent:e,processedItem:r}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=t?this.activeItemPath.find(function(u){return u.key===t.parentKey}):null;if(a){var r=this.isProccessedItemGroup(t);r&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&P(t,'a[data-pc-section="itemlink"]');a?a.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),r=!(e.target&&(e.target===t.target||e.target.contains(t.target)));a&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){$()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return R(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?R(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return a.isItemMatched(u)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(u){return a.isItemMatched(u)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,a=P(this.menubar,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(c,o){var s=(i!==""?i+"_":"")+o,p={item:c,index:o,level:a,key:s,parent:r,parentKey:i};p.items=t.createProcessedItems(c.items,a+1,p,s),u.push(p)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(b(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:Ae,BarsIcon:he}};function G(n){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(n)}function ce(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,a)}return t}function le(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ce(Object(t),!0).forEach(function(a){_n(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function _n(n,e,t){return(e=zn(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zn(n){var e=Hn(n,"string");return G(e)=="symbol"?e:e+""}function Hn(n,e){if(G(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(G(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Bn=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Rn(n,e,t,a,r,i){var u=M("BarsIcon"),c=M("MenubarSub");return m(),d("div",l({ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(m(),d("div",l({key:0,class:n.cx("start")},n.ptm("start")),[K(n.$slots,"start")],16)):I("",!0),K(n.$slots,n.$slots.button?"button":"menubutton",{id:r.id,class:C(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var o;return[n.model&&n.model.length>0?(m(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":r.mobileActive,"aria-controls":r.id,"aria-label":(o=n.$primevue.config.locale.aria)===null||o===void 0?void 0:o.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},le(le({},n.buttonProps),n.ptm("button"))),[K(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[g(u,de(pe(n.ptm("buttonicon"))),null,16)]})],16,Bn)):I("",!0)]}),g(c,{ref:i.menubarRef,id:r.id+"_list",role:"menubar",items:i.processedItems,templates:n.$slots,root:!0,mobileActive:r.mobileActive,tabindex:"0","aria-activedescendant":r.focused?i.focusedItemId:void 0,menuId:r.id,focusedItemId:r.focused?i.focusedItemId:void 0,activeItemPath:r.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(m(),d("div",l({key:1,class:n.cx("end")},n.ptm("end")),[K(n.$slots,"end")],16)):I("",!0)],16)}Ee.render=Rn;const Nn={class:"card"},Gn=f("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1),jn={class:"card"},Un=f("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1),qn={class:"flex flex-col md:flex-row gap-8"},Wn={class:"md:w-1/2"},Zn={class:"card"},Xn=f("div",{class:"font-semibold text-xl mb-4"},"Steps",-1),Yn={class:"md:w-1/2"},Qn={class:"card"},Jn=f("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1),$n={class:"flex flex-col md:flex-row gap-8 mt-6"},ei={class:"md:w-1/3"},ti={class:"card"},ni=f("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1),ii={class:"md:w-1/3"},ai={class:"card"},ri=f("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1),oi={class:"md:w-1/3"},si={class:"card"},ui=f("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1),ci=f("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1),li={class:"flex flex-col md:flex-row gap-8 mt-8"},mi={class:"md:w-1/2"},di={class:"card"},pi=f("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1),fi=f("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1),hi={class:"md:w-1/2"},bi={class:"card"},Ii=f("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1),Si={__name:"MenuDoc",setup(n){const e=A(null),t=A(null),a=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),r=A({icon:"pi pi-home",to:"/"}),i=A([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),u=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),c=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),o=A([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),s=A([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),p=A([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),h=A([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function y(j){e.value.toggle(j)}function Y(j){t.value.show(j)}return(j,gi)=>{const Fe=$e,Oe=et,De=tt,Ve=Ee,Te=Ce,Q=Me,_e=Le,ze=we,J=rt,He=ot,Be=at,Re=it,ie=Je,Ne=nt,Ge=Pe,ae=ke,je=ve;return m(),d(w,null,[f("div",Nn,[Gn,g(Ve,{model:a.value},{end:L(()=>[g(De,{iconPosition:"left"},{default:L(()=>[g(Fe,{class:"pi pi-search"}),g(Oe,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),f("div",jn,[Un,g(Te,{home:r.value,model:i.value},null,8,["home","model"])]),f("div",qn,[f("div",Wn,[f("div",Zn,[Xn,g(ze,{value:"1"},{default:L(()=>[g(_e,null,{default:L(()=>[g(Q,{value:"1"},{default:L(()=>[z("Header I")]),_:1}),g(Q,{value:"2"},{default:L(()=>[z("Header II")]),_:1}),g(Q,{value:"3"},{default:L(()=>[z("Header III")]),_:1})]),_:1})]),_:1})])]),f("div",Yn,[f("div",Qn,[Jn,g(Be,{value:"0"},{default:L(()=>[g(He,null,{default:L(()=>[g(J,{value:"0"},{default:L(()=>[z("Header I")]),_:1}),g(J,{value:"1"},{default:L(()=>[z("Header II")]),_:1}),g(J,{value:"2"},{default:L(()=>[z("Header III")]),_:1})]),_:1})]),_:1})])])]),f("div",$n,[f("div",ei,[f("div",ti,[ni,g(Re,{model:u.value},null,8,["model"])])]),f("div",ii,[f("div",ai,[ri,g(ie,{model:o.value},null,8,["model"])])]),f("div",oi,[f("div",si,[ui,g(ie,{ref_key:"menu",ref:e,model:c.value,popup:!0},null,8,["model"]),g(Ne,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:y,style:{width:"auto"}})]),f("div",{class:"card",onContextmenu:Y},[ci,z(" Right click to display. "),g(Ge,{ref_key:"contextMenu",ref:t,model:s.value},null,8,["model"])],32)])]),f("div",li,[f("div",mi,[f("div",di,[pi,g(ae,{model:p.value},null,8,["model"]),fi,g(ae,{model:p.value,orientation:"vertical"},null,8,["model"])])]),f("div",hi,[f("div",bi,[Ii,g(je,{model:h.value},null,8,["model"])])])])],64)}}};export{Si as default};
