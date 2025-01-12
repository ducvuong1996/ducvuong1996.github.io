import{B as lt,a as bt,f as _,g as S,b as ft,i as Y,c as gt,d as vt,s as z,o as l,e as p,h as d,m as u,u as Q,Z as j,j as yt,k as st,l as It,n as R,p as v,q as ct,r as O,R as W,t as D,w as x,v as b,x as g,y as m,F as P,z as $,A as J,C as xt,D as wt,E as St,G as Ct,U as M,H as Pt,I as N,J as Z,K as U,T as At,L as B,M as Tt,N as kt,O as F}from"./index-CRy4e3Yh.js";var Lt=lt.extend({name:"focustrap-directive"}),_t=bt.extend({style:Lt});function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(n),!0).forEach(function(i){Bt(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Bt(e,t,n){return(t=Ft(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ft(e){var t=Et(e,"string");return A(t)=="symbol"?t:t+""}function Et(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(A(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ot=_t.extend("focustrap",{mounted:function(t,n){var i=n.value||{},r=i.disabled;r||(this.createHiddenFocusableElements(t,n),this.bind(t,n),this.autoElementFocus(t,n)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,n){var i=n.value||{},r=i.disabled;r&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,n){var i=this,r=n.value||{},a=r.onFocusIn,c=r.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(s){s.forEach(function(o){if(o.type==="childList"&&!t.contains(document.activeElement)){var h=function(y){var I=Y(y)?Y(y,i.getComputedSelector(t.$_pfocustrap_focusableselector))?y:S(t,i.getComputedSelector(t.$_pfocustrap_focusableselector)):S(y);return gt(I)?I:y.nextSibling&&h(y.nextSibling)};_(h(o.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(s){return a&&a(s)},t.$_pfocustrap_focusoutlistener=function(s){return c&&c(s)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t){this.autoElementFocus(this.$el,{value:et(et({},t),{},{autoFocus:!0})})},autoElementFocus:function(t,n){var i=n.value||{},r=i.autoFocusSelector,a=r===void 0?"":r,c=i.firstFocusableSelector,s=c===void 0?"":c,o=i.autoFocus,h=o===void 0?!1:o,f=S(t,"[autofocus]".concat(this.getComputedSelector(a)));h&&!f&&(f=S(t,this.getComputedSelector(s))),_(f)},onFirstHiddenElementFocus:function(t){var n,i=t.currentTarget,r=t.relatedTarget,a=r===i.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(r))?S(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_lasthiddenfocusableelement;_(a)},onLastHiddenElementFocus:function(t){var n,i=t.currentTarget,r=t.relatedTarget,a=r===i.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(r))?ft(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_firsthiddenfocusableelement;_(a)},createHiddenFocusableElements:function(t,n){var i=this,r=n.value||{},a=r.tabIndex,c=a===void 0?0:a,s=r.firstFocusableSelector,o=s===void 0?"":s,h=r.lastFocusableSelector,f=h===void 0?"":h,y=function(V){return vt("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:c,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:V==null?void 0:V.bind(i)})},I=y(this.onFirstHiddenElementFocus),w=y(this.onLastHiddenElementFocus);I.$_pfocustrap_lasthiddenfocusableelement=w,I.$_pfocustrap_focusableselector=o,I.setAttribute("data-pc-section","firstfocusableelement"),w.$_pfocustrap_firsthiddenfocusableelement=I,w.$_pfocustrap_focusableselector=f,w.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(I),t.append(w)}}}),$t=function(t){var n=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(n("galleria.border.width"),`;
    border-color: `).concat(n("galleria.border.color"),`;
    border-radius: `).concat(n("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(n("galleria.nav.button.background"),`;
    color: `).concat(n("galleria.nav.button.color"),`;
    width: `).concat(n("galleria.nav.button.size"),`;
    height: `).concat(n("galleria.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(n("galleria.nav.button.size"),") / 2) ").concat(n("galleria.nav.button.gutter")," 0 ").concat(n("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(n("galleria.nav.button.hover.background"),`;
    color: `).concat(n("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(n("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.nav.button.focus.ring.width")," ").concat(n("galleria.nav.button.focus.ring.style")," ").concat(n("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(n("galleria.nav.icon.size"),`;
    width: `).concat(n("galleria.nav.icon.size"),`;
    height: `).concat(n("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(n("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(n("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: `).concat(n("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(n("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(n("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(n("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnails.content.background"),`;
    padding: `).concat(n("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("galleria.indicator.list.padding"),`;
    gap: `).concat(n("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.button.background"),`;
    width: `).concat(n("galleria.indicator.button.width"),`;
    height: `).concat(n("galleria.indicator.button.height"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(n("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.indicator.button.focus.ring.width")," ").concat(n("galleria.indicator.button.focus.ring.style")," ").concat(n("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(n("galleria.close.button.gutter"),`;
    background: `).concat(n("galleria.close.button.background"),`;
    color: `).concat(n("galleria.close.button.color"),`;
    width: `).concat(n("galleria.close.button.size"),`;
    height: `).concat(n("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(n("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(n("galleria.close.button.icon.size"),`;
    width: `).concat(n("galleria.close.button.icon.size"),`;
    height: `).concat(n("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(n("galleria.close.button.hover.background"),`;
    color: `).concat(n("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(n("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.close.button.focus.ring.width")," ").concat(n("galleria.close.button.focus.ring.style")," ").concat(n("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},Nt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var n=t.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),r=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,r]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,i=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,i=t.index,r=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},Rt=lt.extend({name:"galleria",theme:$t,classes:Nt}),q={name:"ChevronLeftIcon",extends:z};function Dt(e,t,n,i,r,a){return l(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[d("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}q.render=Dt;var X={name:"ChevronRightIcon",extends:z};function Vt(e,t,n,i,r,a){return l(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[d("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1)]),16)}X.render=Vt;var ut={name:"ChevronDownIcon",extends:z};function jt(e,t,n,i,r,a){return l(),p("svg",u({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[d("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}ut.render=jt;var Mt={name:"BaseGalleria",extends:R,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:Rt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function C(e){return Gt(e)||Kt(e)||Ut(e)||Ht()}function Ht(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ut(e,t){if(e){if(typeof e=="string")return K(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function Kt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gt(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var dt={name:"GalleriaItem",hostName:"Galleria",extends:R,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=C(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=C(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=C(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return ct(a,"data-p-active")===!0}),i=O(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=C(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=O(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=C(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:q,ChevronRightIcon:X},directives:{ripple:W}},zt=["disabled"],Wt=["id","aria-label","aria-roledescription"],Zt=["disabled"],qt=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Xt=["tabindex"];function Yt(e,t,n,i,r,a){var c=D("ripple");return l(),p("div",u({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[d("div",u({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?x((l(),p("button",u({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(s){return a.navBackward(s)}),disabled:a.isNavBackwardDisabled()},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),b(g(n.templates.previousitemicon||"ChevronLeftIcon"),u({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,zt)),[[c]]):m("",!0),d("div",u({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm("item")),[n.templates.item?(l(),b(g(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):m("",!0)],16,Wt),n.showItemNavigators?x((l(),p("button",u({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(s){return a.navForward(s)}),disabled:a.isNavForwardDisabled()},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(l(),b(g(n.templates.nextitemicon||"ChevronRightIcon"),u({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,Zt)),[[c]]):m("",!0),n.templates.caption?(l(),p("div",u({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(l(),b(g(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):m("",!0)],16)):m("",!0)],16),n.showIndicators?(l(),p("ul",u({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(l(!0),p(P,null,$(n.value,function(s,o){return l(),p("li",u({key:"p-galleria-indicator-".concat(o),class:e.cx("indicator",{index:o}),"aria-label":a.ariaPageLabel(o+1),"aria-selected":n.activeIndex===o,"aria-controls":n.id+"_item_"+o,onClick:function(f){return a.onIndicatorClick(o)},onMouseenter:function(f){return a.onIndicatorMouseEnter(o)},onKeydown:function(f){return a.onIndicatorKeyDown(f,o)},ref_for:!0},e.ptm("indicator",a.getIndicatorPTOptions(o)),{"data-p-active":a.isIndicatorItemActive(o)}),[n.templates.indicator?m("",!0):(l(),p("button",u({key:0,type:"button",tabindex:n.activeIndex===o?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",a.getIndicatorPTOptions(o))),null,16,Xt)),n.templates.indicator?(l(),b(g(n.templates.indicator),{key:1,index:o},null,8,["index"])):m("",!0)],16,qt)}),128))],16)):m("",!0)],16)}dt.render=Yt;function H(e){return ee(e)||te(e)||Jt(e)||Qt()}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(e,t){if(e){if(typeof e=="string")return G(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}function te(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ee(e){if(Array.isArray(e))return G(e)}function G(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var pt={name:"GalleriaThumbnails",hostName:"Galleria",extends:R,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&J(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&J(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",r),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,r=0;n<this.d_activeIndex?(r=this.d_numVisible-i-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-i,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=H(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(a){return ct(a,"data-p-active")===!0}),i=O(this.$refs.itemsContainer,'[tabindex="0"]'),r=t.findIndex(function(a){return a===i.parentElement});t[r].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=H(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=O(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&st(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){n<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",xt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=H(this.responsiveOptions);var i=wt();this.sortedResponsiveOptions.sort(function(c,s){var o=c.breakpoint,h=s.breakpoint;return St(o,h,-1,i)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var r=this.sortedResponsiveOptions[i];parseInt(r.breakpoint,10)>=t&&(n=r)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:q,ChevronRightIcon:X,ChevronUpIcon:Ct,ChevronDownIcon:ut},directives:{ripple:W}};function T(e){"@babel/helpers - typeof";return T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(e)}function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nt(Object(n),!0).forEach(function(i){ne(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ne(e,t,n){return(t=ie(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e){var t=ae(e,"string");return T(t)=="symbol"?t:t+""}function ae(e,t){if(T(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(T(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var re=["disabled","aria-label"],oe=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],le=["tabindex","aria-label","aria-current","onClick"],se=["disabled","aria-label"];function ce(e,t,n,i,r,a){var c=D("ripple");return l(),p("div",u({class:e.cx("thumbnails")},e.ptm("thumbnails")),[d("div",u({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?x((l(),p("button",u({key:0,class:e.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(s){return a.navBackward(s)})},E(E({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),b(g(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),u({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,re)),[[c]]):m("",!0),d("div",u({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[d("div",u({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(s){return a.onTransitionEnd(s)}),onTouchstart:t[2]||(t[2]=function(s){return a.onTouchStart(s)}),onTouchmove:t[3]||(t[3]=function(s){return a.onTouchMove(s)}),onTouchend:t[4]||(t[4]=function(s){return a.onTouchEnd(s)})},e.ptm("thumbnailItems")),[(l(!0),p(P,null,$(n.value,function(s,o){return l(),p("div",u({key:"p-galleria-thumbnail-item-".concat(o),class:e.cx("thumbnailItem",{index:o,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===o,"aria-selected":n.activeIndex===o,"aria-controls":n.containerId+"_item_"+o,onKeydown:function(f){return a.onThumbnailKeydown(f,o)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===o,"data-p-galleria-thumbnail-item-active":a.isItemActive(o),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===o,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===o}),[d("div",u({class:e.cx("thumbnail"),tabindex:n.activeIndex===o?"0":"-1","aria-label":a.ariaPageLabel(o+1),"aria-current":n.activeIndex===o?"page":void 0,onClick:function(f){return a.onItemClick(o)},ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(l(),b(g(n.templates.thumbnail),{key:0,item:s},null,8,["item"])):m("",!0)],16,le)],16,oe)}),128))],16)],16),n.showThumbnailNavigators?x((l(),p("button",u({key:1,class:e.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(s){return a.navForward(s)})},E(E({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(l(),b(g(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),u({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,se)),[[c]]):m("",!0)],16)],16)}pt.render=ce;function k(e){"@babel/helpers - typeof";return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(e)}function it(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function at(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?it(Object(n),!0).forEach(function(i){ue(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function ue(e,t,n){return(t=de(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function de(e){var t=pe(e,"string");return k(t)=="symbol"?t:t+""}function pe(e,t){if(k(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(k(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ht={name:"GalleriaContent",hostName:"Galleria",extends:R,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||M(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||M()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||M()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:at(at({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var i=["top","left","bottom","right"],r=i.find(function(a){return a===n});return r?"".concat(t,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:dt,GalleriaThumbnails:pt,TimesIcon:Pt},directives:{ripple:W}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(e)}function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function ot(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(n),!0).forEach(function(i){he(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function he(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){var t=be(e,"string");return L(t)=="symbol"?t:t+""}function be(e,t){if(L(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var fe=["id","aria-label","aria-roledescription"],ge=["aria-label"],ve=["aria-live"];function ye(e,t,n,i,r,a){var c=N("GalleriaItem"),s=N("GalleriaThumbnails"),o=D("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(l(),p("div",u({key:0,id:r.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},ot(ot({},e.$attrs.containerProps),a.getPTOptions("root"))),[e.$attrs.fullScreen?x((l(),p("button",u({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:t[0]||(t[0]=function(h){return e.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(l(),b(g(e.$attrs.templates.closeicon||"TimesIcon"),u({class:e.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,ge)),[[o]]):m("",!0),e.$attrs.templates&&e.$attrs.templates.header?(l(),p("div",u({key:1,class:e.cx("header")},a.getPTOptions("header")),[(l(),b(g(e.$attrs.templates.header)))],16)):m("",!0),d("div",u({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[Z(c,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(h){return r.slideShowActive=h}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(l(),b(s,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(h){return r.slideShowActive=h}),containerId:r.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:r.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):m("",!0)],16,ve),e.$attrs.templates&&e.$attrs.templates.footer?(l(),p("div",u({key:2,class:e.cx("footer")},a.getPTOptions("footer")),[(l(),b(g(e.$attrs.templates.footer)))],16)):m("",!0)],16,fe)):m("",!0)}ht.render=ye;var mt={name:"Galleria",extends:Mt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&Q(),this.mask=null,this.container&&(j.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){j.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),yt(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&st(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){j.clear(t),this.containerVisible=!1,Q()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:ht,Portal:It},directives:{focustrap:Ot}},Ie=["aria-modal"];function xe(e,t,n,i,r,a){var c=N("GalleriaContent"),s=N("Portal"),o=D("focustrap");return e.fullScreen?(l(),b(s,{key:0},{default:U(function(){return[r.containerVisible?(l(),p("div",u({key:0,ref:a.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[Z(At,u({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:U(function(){return[e.visible?x((l(),b(c,u({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[o]]):m("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,Ie)):m("",!0)]}),_:1})):(l(),b(c,u({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}mt.render=xe;const we={getData(){return[{Media:"/images/2023_REALTEK_VIDEO_Final.jpg",Options:null,Content:"",Title:null,Link:"https://www.realtek.com/Home/CheckFlow",TextAlign:"C"},{Media:"/images/CES_2025_Banner_v3Final.jpg",Options:null,Content:`<div style="margin-top:-120px;line-height: 60px; font-size:45px;
    background: linear-gradient(180deg, #7ce1f2 0%, #FFFFFF 30%, #ECB7A6 50%, #FFFFFF 80%, #7ce1f2 100%), linear-gradient(#FFFFFF, #FFFFFF);
    background-clip: text, text;
    color: transparent;">
        Realtek AI:<br>Changing the Future
</div>`,Title:null,Link:"https://www.realtek.com/Article/NewsDetail?id=4551&app_id=18&lang=zh-TW",TextAlign:"C"},{Media:"/images/2024__AIoT_Home_Center_SoCRTL8730E.jpg",Options:null,Content:'<div style="text-shadow: 0px 2px 10px #00000073, 0px 2px 10px #2b2b2b;margin-top:220px;">AIoT Home Center SoC</strong></div>',Title:null,Link:"https://www.realtek.com/Article/NewsDetail?id=4546&app_id=18",TextAlign:"C"},{Media:"/images/Automotive_AI_Audio_DSP_with_Embedded_NPUALC5575_v1Final.jpg",Options:null,Content:'<div style="text-shadow: 0px 2px 10px #00000073, 0px 2px 10px #2b2b2b;margin-top:200px;line-height:44px;">Automotive AI Audio<br> DSP with Embedded NPU</div>',Title:null,Link:"https://www.realtek.com/Article/NewsDetail?id=4542&app_id=18",TextAlign:"C"},{Media:"/images/5_Gigabit_Ethernet_ControllerRTL8126-CG_v1Final.jpg",Options:null,Content:'<div style="text-shadow: 0px 2px 10px #00000073, 0px 2px 10px #2b2b2b;margin-top:220px;line-height:44px">5 Gigabit Ethernet Controller</div>',Title:null,Link:"https://www.realtek.com/Article/NewsDetail?id=4537&app_id=18",TextAlign:"C"},{Media:"/images/2022_WebBanner_careers_Final.jpg",Options:null,Content:`<div style="text-shadow: 0px 2px 10px #00000073, 0px 2px 10px #2b2b2b;margin-top:10px;">歡迎您的加入<br>和我們一起創造無限可能</div>


`,Title:null,Link:"https://recruit.realtek.com/?lang=zh-TW",TextAlign:"C"},{Media:"/images/2022_WebBanner_smartLife_Final.jpg",Options:null,Content:`<div style="text-shadow: 0px 2px 10px #00000073, 0px 2px 10px #2b2b2b">智慧生活<br>來自瑞昱科技新體驗</div>

`,Title:null,Link:"https://www.realtek.com/Article/NewsDetail?id=4150&app_id=18",TextAlign:"R"}]},getImages(){return Promise.resolve(this.getData())}},Se={getData(){return[{id:"4578",Type:"34",Name:"PC音視訊融合技術(ALC712-VB/ ALC721/ ALC722)",Paragraph:"瑞昱的TSE（目標語者增益）動態註冊技術運用先進的音訊與影像的融合，能自動辨識目標語者的臉部ID，並在背景中同步收集其語音特徵...",Content:"瑞昱的TSE（目標語者增益）動態註冊技術運用先進的音訊與影像的融合，能自動辨識目標語者的臉部ID，並在背景中同步收集其語音特徵。當累積足夠的有效數據後，TSE功能將自動啟動，只專注於目標語者的聲音，排除其他人聲干擾，實現清晰的語音傳遞效果。結合AI降噪技術，TSE能高效過濾環境噪音，即使在開放或嘈雜的環境中，依然能清晰呈現目標語者的聲音。",LangCategory:null},{id:"4577",Type:"34",Name:"邊緣運算人體感知USB攝影機解決方案(RTS5866)",Paragraph:"瑞昱在邊緣運算領域再度突破，開發出第二代三合一單晶片，內建USB介面、類神經處理器和高效能影像處理引擎...",Content:"瑞昱在邊緣運算領域再度突破，開發出第二代三合一單晶片，內建USB介面、類神經處理器和高效能影像處理引擎。該方案不僅滿足筆記型電腦內嵌式攝影機的高階影像品質需求，更透過以人為本的智慧人體感知功能，顯著提升人機互動便利性，並有效節能延長電池使用時間。",LangCategory:null},{id:"4576",Type:"34",Name:"藍牙助聽器方案(RTL8773DO)",Paragraph:"瑞昱藍牙助聽器方案以其超低處理延遲而聞名，這意味著助聽器處理放大後的聲音和漏進耳道內的自然聲音幾乎同步...",Content:"瑞昱藍牙助聽器方案以其超低處理延遲而聞名，這意味著助聽器處理放大後的聲音和漏進耳道內的自然聲音幾乎同步。同時，瑞昱藍牙助聽器支援先進的AI降噪技術，這是助聽器應用的突破性創新。該技術運用上百萬種場景聲音來訓練AI模型，能有效的辨識出環境中的各種噪聲與場景，同時給予最佳化的語音/噪聲比，從而提高在噪音環境下的語音辨識能力。",LangCategory:null},{id:"4575",Type:"34",Name:"BT和Wi-Fi雙晶片手錶解決方案(RTL8773DO+RTL8735B)",Paragraph:"瑞昱藍牙穿戴晶片整合了CPU、音訊Codec、圖像引擎、顯示驅動、豐富外設和BT/BLE 5.4，提供單晶片藍牙手錶解決方案...",Content:"瑞昱藍牙穿戴晶片整合了CPU、音訊Codec、圖像引擎、顯示驅動、豐富外設和BT/BLE 5.4，提供單晶片藍牙手錶解決方案。瑞昱整合藍牙產品和Wi-Fi產品，充分發揮自身優勢，推出具有競爭力的一站式產品組合解決方案。",LangCategory:null},{id:"4574",Type:"34",Name:"IoT/Wi-Fi音訊解決方案(RTL8730E+RTL8721Dx)，Wi-Fi低功耗解決方案(RTL8721Dx)",Paragraph:"瑞昱物聯網技術：Wi-Fi音訊解決方案，藉由發射端的dongle與接收端的多顆喇叭，瑞昱展現了5GHz頻段下的高效無線音訊傳輸技術...",Content:"瑞昱物聯網技術：Wi-Fi音訊解決方案，藉由發射端的dongle與接收端的多顆喇叭，瑞昱展現了5GHz頻段下的高效無線音訊傳輸技術，此方案不僅支援多聲道和高解析度格式，更達到低延遲和優異的音訊同步效果。此方案在抗干擾方面也表現卓越，成為現代家居和娛樂應用的理想選擇。此外，由高效節能晶片而設計的瑞昱低功耗IP攝影機解決方案，為智慧家居設備提供了可靠、節能的選擇。瑞昱的創新技術，滿足市場對高品質無線音訊與低功耗攝影設備的需求，進一步為物聯網應用帶來更多可能性。",LangCategory:null},{id:"4573",Type:"34",Name:"高效能、低功耗的AI智能眼鏡晶片方案(RTL8735BDM+RTL8773DO)",Paragraph:"突破智慧穿戴的性能極限，瑞昱以先進製程技術與設計架構推出AI智能眼鏡解決方案，讓用戶可以隨時隨地及時獲得雲端多模態視覺及語音AI的...",Content:"突破智慧穿戴的性能極限，瑞昱以先進製程技術與設計架構推出AI智能眼鏡解決方案，讓用戶可以隨時隨地及時獲得雲端多模態視覺及語音AI的協助，同時能聆聽高品質藍牙音樂，提高生產力及生活便利。瑞昱智能眼鏡方案整合了雙核DSP的高性能CPU核心、AI NN Engine、雙頻Wi-Fi、藍牙5.4及LE Audio、影像ISP、以及支援高性能DSP驅動多路麥克風降噪和內建硬體語音活動檢測(VAD)檢測，為智能眼鏡提供卓越的計算效能和優於業界更低功耗的表現。這些解決方案僅需毫秒級的啟動反應時間，能順暢的處理語音指令(KWS)、瑞昱EIS防抖算法、以及超越比FHD更清晰的2K Video視訊品質，更提供AI高清影像識別、即時翻譯等智慧功能，讓使用者隨時隨地享受便捷的AI數位生活體驗。",LangCategory:null},{id:"4572",Type:"34",Name:"Wi-Fi 7，Wi-Fi室內定位(Wi-Fi Location)，以及多重連接模式技術(Multi-Link Operation)(RTL8922AE)",Paragraph:"瑞昱擁有完整的Wi-Fi產品線，提供滿足不同客戶需求的解決方案。瑞昱最新的Wi-Fi 7技術能強化無線訊號品質，增加無線網路涵蓋範圍...",Content:"瑞昱擁有完整的Wi-Fi產品線，提供滿足不同客戶需求的解決方案。瑞昱最新的Wi-Fi 7技術能強化無線訊號品質，增加無線網路涵蓋範圍。此外，Wi-Fi 7還整合了Wi-Fi室內定位技術，帶給用戶更好的體驗。透過Wi-Fi室內定位技術，使用者可以精確點對點距離偵測，誤差值在1公尺(160 MHz頻寬)以內。客戶可依其需求開發出相對應的商務使用情境，像是當靠近有支援Wi-Fi室內定位技術的伺服器時，可自動連上顯示器投影，並在離開時自動斷線，提升用戶的體驗和效益。透過多重連接模式技術 (multi-link operation)，可以同時連上2GHz，5GHz，6GHz，來確認哪一個頻段是最佳且穩定路徑，提供使用者更好的連網體驗。",LangCategory:null},{id:"4571",Type:"34",Name:"Wi-Fi 7路由方案 BE3600: RTL8198E+RTL8932AR+RTL8902A BE7200: RTL8198E+RTL8934AR+RTL8194EAR",Paragraph:"瑞昱的Wi-Fi 7 AP/Router解決方案，包含高覆蓋率的BE7200路由方案和BE3600的AP/extender方案，支援最新世代Wi-Fi 802.11be標準...",Content:"瑞昱的Wi-Fi 7 AP/Router解決方案，包含高覆蓋率的BE7200路由方案和BE3600的AP/extender方案，支援最新世代Wi-Fi 802.11be標準以及搭載為終端用戶提供新AI功能的AI tunneling，做動態頻寬調整，滿足新一代高頻寬、低延遲的使用需求。瑞昱Wi-Fi 7主流路由方案採用單一平台，可以涵跨從BE3600到BE7200的效能需求，讓客戶可以輕鬆開高效開發多種AP產品。其中BE7200路由方案4T5R的射頻端架構，提供了比以往更高的無線性能和更廣泛的訊號覆蓋範圍，非常適合中小企業和大家庭升級使用。另外BE3600無線中繼器方案為全球第一套具有專利AI Location功能的AI MESH套件，具備互動式介面，可與終端用戶做互動以快速進行最佳化設置。",LangCategory:null},{id:"4570",Type:"34",Name:"xPON+Wi-Fi 7解決方案(RTL9607F+RTL8902A+RTL8932AR / RTL9607F+RTL8194XAR+RTL8934AR)",Paragraph:"隨著光纖網路的普及，電信商不僅是在頻寬上升級，Wi-Fi的規格也不斷提升，為終端用戶提供最好的使用體驗...",Content:"隨著光纖網路的普及，電信商不僅是在頻寬上升級，Wi-Fi的規格也不斷提升，為終端用戶提供最好的使用體驗。瑞昱的xPON方案的優勢是既可搭配瑞昱自家的Wi-Fi晶片，可同步最新Wi-Fi 7的技術，提供客戶多種Wi-Fi 7的規格(BE3600，BE6500 and BE7200)，另外結合瑞昱強大的Switch及PHY的解決方案，讓xPON的Ethernet組態更為多樣性(2.5GE/5GE/10GE) RTL9615C+RTL8261BE，瑞昱的xPON新方案，更精進在電源功耗的管理，以符合未來的國際電源標準(如 CoC 9.0或更高版本)。",LangCategory:null},{id:"4569",Type:"34",Name:"車用乙太網末端節點技術(RTL9071CP)",Paragraph:"基於自動駕駛與智慧座艙的快速發展，過去十年車用網路向100Mbps以上的高速乙太網路演進，至今乙太網路在車內應用已達10Gbps...",Content:"基於自動駕駛與智慧座艙的快速發展，過去十年車用網路向100Mbps以上的高速乙太網路演進，至今乙太網路在車內應用已達10Gbps，包含高速中央運算單元、區域控制器、光達、雷達等高速傳輸骨幹架構。車用乙太網路下一階段將朝10Mbps低速領域發展，進一步整合末端的感測與控制。跟隨車用乙太網的發展趨勢，瑞昱推出具有Multidrop功能的10BASE-T1S收發器，不僅大幅減少網路架構中收發器數量，也增強了軟體的溝通協議整合。瑞昱的10BASE-T1S收發器將會是車廠完成乙太網路最後一哩路的最佳解決方案。",LangCategory:null},{id:"4398",Type:"34",Name:"多埠USB4集線路由控制晶片(RTS5490)",Paragraph:"RTS5490是一個USB4 HUB Router控制器，可以連接USB4/Thunderbolt平台。整合所有應用必需的類比以及數位電路於一顆晶片中...",Content:`RTS5490是一個USB4 HUB Router控制器，可以連接USB4/Thunderbolt平台。整合所有應用必需的類比以及數位電路於一顆晶片中，同時可滿足USB4/ TBT3/USB3.2/USB2.0/Type-C/ PD3.2/DP2.1規格。<br />兩個全功能下行端口，根據UFP的操作模式可以支援USB4、TBT3-Compatible、USB3.2 Gen2x2和DP2.1 Alt等模式。另外兩個下行端口為USB3.2 Gen2x2下行端口, 與兩個全功能下行端口一樣可支援USB3.2 Gen2x2/Gen2x1/Gen1x2/Gen1x1等各種模式。<br />藉由內建的PCIe Switch與Up/Down adapters等完整IP，在全功能下行口可透過外接Graphic card提供主機端高效能的AI運算能力以及高規格遊戲運算處理。透過inter-domain的支援，可讓兩台主機透過USB4連線進行高頻寬資輛傳輸，進而實現兩台主機共享顯示器、KB/Mouse等IO資源的應用。<br />透過內建的32bit高效能MCU與PD3.2 controller，可更加靈活且彈性對每個Type-C連接埠提供最高240W的充電能力。\r
<div id="gtx-trans" style="position: absolute; left: -169px; top: -21px;">&nbsp;</div>`,LangCategory:null},{id:"4397",Type:"34",Name:"5G高速網路卡方案 (RTL8126-VB)",Paragraph:"RTL8126-VB乙太網路控制器結合了五速IEEE 802.3相容的網路控制晶片與五速乙太網路收發器、PCI Express匯流排控制器和嵌入式記憶體...",Content:"RTL8126-VB乙太網路控制器結合了五速IEEE 802.3相容的網路控制晶片與五速乙太網路收發器、PCI Express匯流排控制器和嵌入式記憶體。利用最先進的DSP技術和混合模式訊號技術，RTL8126-VB能夠透過CAT 5e非遮蔽雙絞線(UTP)電纜實現高速傳輸。它實現了多種功能，如跨線檢測和自動校正、極性校正、自適應等化、串擾消除、回音消除、時序恢復和錯誤校正等，從而在高速傳輸和接收方面提供了強大的能力。<br />RTL8126-VB支援“Real WOW”/WOL功能、可讓電腦裝置在待命時維持在低功耗狀態。RTL8126-VB適用於多種應用，例如桌機、行動裝置、工作站、伺服器、通訊平台和嵌入式等應用。",LangCategory:null},{id:"4396",Type:"34",Name:"SoundWire超音波智慧音頻晶片(ALC1320)",Paragraph:"瑞昱ALC1320內建32位元DSP，無需安裝驅動程式即可運行非線性音訊程序，包含環繞音效、低頻增強、參數型等化器、三頻段動態控制與系統震動抑制...",Content:`瑞昱ALC1320內建32位元DSP，無需安裝驅動程式即可運行非線性音訊程序，包含環繞音效、低頻增強、參數型等化器、三頻段動態控制與系統震動抑制。充足的邊緣算力可分擔CPU負載縮短系統延遲。內建V-I感測器讓ALC1320可運行頻域型喇叭保護演算法，在輸出強大音壓與豐滿低音頻響的同時，監測並保護喇叭，訊號鏈設定可任意配置順序，為同類智慧音頻晶片首創。採用自研RISC-V架構支援最新PC音訊規範，符合SDCA v1.0規範並具備可擴充性以因應未來SDCA規格升級，超音波專用路徑，讓音訊與超聲波可獨立控制。ALC1320提供內建超音波接收器，可同步收發兩端的工作時脈，12V/0.5W輸出功率達80%工作效率，並在主控器進入睡眠時繼續輸出超音波，延長電池壽命。4.5V~20V操作電壓，適合PC、顯示器以及多數消費性電子產品之供電系統，亦可滿足使用USB供電之應用。\r
<div id="gtx-trans" style="position: absolute; left: -187px; top: -21px;">&nbsp;</div>`,LangCategory:null},{id:"4395",Type:"34",Name:"高整合2.5G及10G交換機 (RTL8372N)",Paragraph:"RTL8372N是全球首款高整合2.5G及10G交換機IC，卓越的連線能力輕鬆滿足高頻寬應用需求，如大型文件傳輸、資料備份、AR/VR內容等...",Content:`RTL8372N是全球首款高整合2.5G及10G交換機IC，卓越的連線能力輕鬆滿足高頻寬應用需求，如大型文件傳輸、資料備份、AR/VR內容等。RTL8372N以DRQFN封裝設計，尺寸僅11mm*11mm，為全球最小的封裝，幫助客戶在整體網路設備系統的設計上，更具彈性與輕巧便利。RTL8372N支援VLAN、QoS和分組排程等多種功能，可與AI邊緣計算解決方案的AI設備無縫搭配。符合IEEE 802.3az EEE標準，更節能省電，包含支援Wake-on-LAN功能，有效降低在低使用狀況網路不關機的能源消耗和成本以及軟體相容性，便於開發和網路管理。RTL8372N以其2.5G升級和節能網路給人留下深刻印象，提供有效和靈活的網路解決方案。\r
<div id="gtx-trans" style="position: absolute; left: -209px; top: -21px;">&nbsp;</div>`,LangCategory:null},{id:"4394",Type:"34",Name:"智能嵌入式控制器 (RTS5912)",Paragraph:"RTS5912提供強大的ARM v8-M CPU，32位CPU搭配大SRAM和1M Flash，是具強大硬體與AI韌體的集成嵌入式控制器...",Content:`RTS5912提供強大的ARM v8-M CPU，32位CPU搭配大SRAM和1M Flash，是具強大硬體與AI韌體的集成嵌入式控制器。支援256~512位SHA3、ECDSA和EC_KCDSA數位簽章演算法，1024~4096位RSA、True Random Number Generator以及支援eSPI OOB通道eRPMC，SHA-256 HMAC和OTP。此外，在AI韌體部分RTS5912具有AI調光與多彩RGB運算達到省電與燈效多樣化。提供AI語音識別，高安全、快速的AI指紋識別、和AI感測器計算演算法，達到Thermal/ ToF/ G/ ALS/ RGB sensor最優化。\r
<div id="gtx-trans" style="position: absolute; left: -235px; top: -21px;">&nbsp;</div>`,LangCategory:null}]},getPosts(){return Promise.resolve(this.getData())}},Ce=["href"],Pe=["src"],Ae=["innerHTML"],Te={key:0,class:"text-white bg-white/30 font-bold text-lg border border-white rounded px-4 py-2"},ke={class:"grid grid-cols-12 gap-8 p-12 !pb-20 bg-white"},Le=["href"],_e={class:"p-6 bg-[#fafafa] border border-gray-300 rounded-sm h-full"},Be={class:"text-[#0167b7] font-bold text-3xl mb-2 break-words"},Fe={class:"text-gray-700 mb-4 text-lg"},Ee=d("a",{class:"text-[#3e6cb2] hover:underline text-lg"},"了解更多 >",-1),Oe={class:"p-12 bg-[url('/images/bg-wrap1.jpg')] bg-no-repeat bg-cover"},$e=d("h1",{class:"mb-2 text-2xl font-bold text-white"},"新聞",-1),Ne={class:"grid grid-cols-12 gap-8 mb-8"},Re=["href"],De={class:"p-6 bg-white/60 border border-gray-300 rounded-sm h-full"},Ve={class:"text-black font-bold text-base mb-3.5 break-words"},je={class:"text-gray-700 text-xl break-words"},Me=d("a",{class:"text-[#3e6cb2] hover:underline text-lg"},"了解更多 >",-1),He=d("div",{class:"flex justify-center mt-6"},[d("a",{href:"https://www.realtek.com/Article/News?menu_id=315&app_id=18&lang=zh-TW",class:"text-[#666666] select-none text-bold border border-black rounded-2xl px-4 py-2 hover:text-[#03538e]"},"了解更多")],-1),Ge={__name:"Realtek",setup(e){const t=B(),n=B([{breakpoint:"991px",numVisible:4},{breakpoint:"767px",numVisible:3},{breakpoint:"575px",numVisible:1}]),i=B([]),r=B([{id:"4551",Name:"瑞昱半導體於CES 2025展示全方位 消費性電子、PC、通訊網路及車用解決方案",Created:"2025-01-06"},{id:"4546",Name:"瑞昱RTL8730E智慧物聯網智慧家居單晶片 榮獲113年「新竹科學工業園區優良廠商創新產品獎」",Created:"2024-12-13"},{id:"4542",Name:"瑞昱ALC5575具類神經網路運算加速器之 車用智能音訊數位信號處理器 榮獲2024亞洲金選獎“年度IP/Processor最佳潛力標竿獎”",Created:"2024-12-06"}]);return Tt(()=>{we.getImages().then(a=>{t.value=a.map(c=>{switch(c.style=`background-image: url('${c.Media}');`,c.url=c.Link,c.contentClass="",c.TextAlign){case"C":c.contentClass="top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center";break;case"R":c.contentClass="top-1/3 right-16 transform -translate-y-1/2 text-right";break}return c})}),Se.getPosts().then(a=>{i.value=a.map(c=>(c.url=`https://www.realtek.com/Product/ProductHitsDetail?id=${c.id}&menu_id=419&lang=zh-TW`,c))}),r.value=r.value.map(a=>(a.url=`https://www.realtek.com/Article/NewsDetail?id=${a.id}&app_id=18&lang=zh-TW`,a))}),(a,c)=>{const s=mt;return l(),p(P,null,[Z(s,{value:t.value,responsiveOptions:n.value,numVisible:5,circular:!0,containerStyle:"w-full",showItemNavigators:!0,showThumbnails:!1},{item:U(o=>[d("a",{href:o.item.url},[d("img",{src:o.item.Media,class:"w-full object-cover object-center",style:{height:"570px"}},null,8,Pe),d("div",{class:kt(["absolute text-5xl text-white font-black",o.item.contentClass])},[d("div",{innerHTML:o.item.Content},null,8,Ae),o.item.Content.length>0?(l(),p("button",Te,"了解更多")):m("",!0)],2)],8,Ce)]),_:1},8,["value","responsiveOptions"]),d("div",ke,[(l(!0),p(P,null,$(i.value,o=>(l(),p("a",{href:o.url,class:"col-span-12 lg:col-span-6 xl:col-span-4",key:o.id},[d("div",_e,[d("h2",Be,F(o.Name),1),d("p",Fe,F(o.Paragraph),1),Ee])],8,Le))),128))]),d("div",Oe,[$e,d("div",Ne,[(l(!0),p(P,null,$(r.value,o=>(l(),p("a",{href:o.url,class:"col-span-12 lg:col-span-6 xl:col-span-4",key:o.id},[d("div",De,[d("p",Ve,F(o.Created),1),d("p",je,F(o.Name),1),Me])],8,Re))),128))]),He])],64)}}};export{Ge as default};
