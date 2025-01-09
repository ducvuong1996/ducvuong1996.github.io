import{B as w,m as _,a as p,c as m,q as l,U as k,aL as X,Y as g,a0 as y,d as s,p as $,t as R,k as Y,n as P,S as I,f as q,aH as z,Q as E,b as a,r as H,o as K,b8 as W,w as b,F as G,s as N,b9 as O}from"./index-CqmJPovh.js";import{s as V}from"./index-D2Ttj6_h.js";import{s as j}from"./index-msRftrP2.js";import{s as J}from"./index-B1GHzvhq.js";var Q=function(e){var n=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},Z={root:{position:"relative"}},ee={root:function(e){var n=e.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},te=w.extend({name:"skeleton",theme:Q,classes:ee,inlineStyles:Z}),ne={name:"BaseSkeleton",extends:_,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:te,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},S={name:"Skeleton",extends:ne,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function ae(t,e,n,i,d,r){return p(),m("div",l({class:t.cx("root"),style:[t.sx("root"),r.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}S.render=ae;var se=function(e){var n=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(n("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(n("scrollpanel.bar.size"),`));
    padding-inline: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
    padding-block: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),`);
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(n("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),", opacity ").concat(n("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(n("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(n("scrollpanel.barfocus.ring.width")," ").concat(n("scrollpanel.bar.focus.ring.style")," ").concat(n("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(n("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(n("scrollpanel.bar.size"),`;
    inset-block-start: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(n("scrollpanel.bar.size"),`;
    inset-block-end: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},re={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ie=w.extend({name:"scrollpanel",theme:se,classes:re}),oe={name:"BaseScrollPanel",extends:_,props:{step:{type:Number,default:5}},style:ie,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},L={name:"ScrollPanel",extends:oe,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||k()}},mounted:function(){this.id=this.id||k(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),i=X(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,d=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/n;var r=this.$refs.content.scrollHeight,h=this.$refs.content.clientHeight,B=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=h/r,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; inset-inline-start:"+Math.abs(e.$refs.content.scrollLeft)/n*100+"%;bottom:"+d+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&g(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/r*100+"% - "+e.$refs.xBar.clientHeight+"px); inset-inline-end:"+B+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&g(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=i/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=i/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},le=["id"],ce=["aria-controls","aria-valuenow"],de=["aria-controls","aria-valuenow"];function ue(t,e,n,i,d,r){return p(),m("div",l({class:t.cx("root")},t.ptmi("root")),[s("div",l({class:t.cx("contentContainer")},t.ptm("contentContainer")),[s("div",l({ref:"content",id:r.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),onMouseenter:e[1]||(e[1]=function(){return r.moveBar&&r.moveBar.apply(r,arguments)})},t.ptm("content")),[$(t.$slots,"default")],16,le)],16),s("div",l({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":r.contentId,"aria-valuenow":d.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return r.onXBarMouseDown&&r.onXBarMouseDown.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(h){return r.onKeyDown(h)}),onKeyup:e[4]||(e[4]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[5]||(e[5]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[6]||(e[6]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,ce),s("div",l({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":r.contentId,"aria-valuenow":d.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return r.onYBarMouseDown&&r.onYBarMouseDown.apply(r,arguments)}),onKeydown:e[8]||(e[8]=function(h){return r.onKeyDown(h)}),onKeyup:e[9]||(e[9]=function(){return r.onKeyUp&&r.onKeyUp.apply(r,arguments)}),onFocus:e[10]||(e[10]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,de)],16)}L.render=ue;var pe={root:"p-avatar-group p-component"},me=w.extend({name:"avatargroup",classes:pe}),he={name:"BaseAvatarGroup",extends:_,style:me,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},D={name:"AvatarGroup",extends:he,inheritAttrs:!1};function fe(t,e,n,i,d,r){return p(),m("div",l({class:t.cx("root")},t.ptmi("root")),[$(t.$slots,"default")],16)}D.render=fe;var ve=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    color: `).concat(n("avatar.color"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.icon.size"),`;
    width: `).concat(n("avatar.icon.size"),`;
    height: `).concat(n("avatar.icon.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.icon.size"),`;
    width: `).concat(n("avatar.lg.icon.size"),`;
    height: `).concat(n("avatar.lg.icon.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.icon.size"),`;
    width: `).concat(n("avatar.xl.icon.size"),`;
    height: `).concat(n("avatar.xl.icon.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: `).concat(n("avatar.lg.group.offset"),`;
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: `).concat(n("avatar.xl.group.offset"),`;
}
`)},ge={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},be=w.extend({name:"avatar",theme:ve,classes:ge}),ye={name:"BaseAvatar",extends:_,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:be,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},A={name:"Avatar",extends:ye,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},we=["aria-labelledby","aria-label"],Be=["src","alt"];function xe(t,e,n,i,d,r){return p(),m("div",l({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[$(t.$slots,"default",{},function(){return[t.label?(p(),m("span",l({key:0,class:t.cx("label")},t.ptm("label")),R(t.label),17)):t.$slots.icon?(p(),Y(I(t.$slots.icon),{key:1,class:P(t.cx("icon"))},null,8,["class"])):t.icon?(p(),m("span",l({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(p(),m("img",l({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},t.ptm("image")),null,16,Be)):q("",!0)]})],16,we)}A.render=xe;var _e=function(e){var n=e.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(n("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(n("overlaybadge.outline.color"),`;
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`)},$e={root:"p-overlaybadge"},ze=w.extend({name:"overlaybadge",theme:_e,classes:$e}),Me={name:"OverlayBadge",extends:z,style:ze,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},U={name:"OverlayBadge",extends:Me,inheritAttrs:!1,components:{Badge:z}};function ke(t,e,n,i,d,r){var h=E("Badge");return p(),m("div",l({class:t.cx("root")},t.ptmi("root")),[$(t.$slots,"default"),a(h,l(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}U.render=ke;const Se={class:"card"},Le=s("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1),De={class:"flex flex-col md:flex-row gap-4"},Ae={class:"md:w-1/2"},Ue={class:"md:w-1/2"},Fe={class:"flex flex-col md:flex-row gap-8"},Te={class:"md:w-1/2"},Ce={class:"card"},Xe=s("div",{class:"font-semibold text-xl mb-4"},"Badge",-1),Re={class:"flex gap-2"},Ye=s("div",{class:"font-semibold my-4"},"Overlay",-1),Pe={class:"flex gap-6"},Ie=s("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1),qe=s("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1),Ee=s("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1),He=s("div",{class:"font-semibold my-4"},"Button",-1),Ke={class:"flex gap-2"},We=s("div",{class:"font-semibold my-4"},"Sizes",-1),Ge={class:"flex items-start gap-2"},Ne={class:"card"},Oe=s("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1),Ve=s("div",{class:"font-semibold mb-4"},"Group",-1),je=s("div",{class:"font-semibold my-4"},"Label - Circle",-1),Je=s("div",{class:"font-semibold my-4"},"Icon - Badge",-1),Qe={class:"card"},Ze=s("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1),et=s("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1),tt={class:"md:w-1/2"},nt={class:"card"},at=s("div",{class:"font-semibold text-xl mb-4"},"Tag",-1),st=s("div",{class:"font-semibold mb-4"},"Default",-1),rt={class:"flex gap-2"},it=s("div",{class:"font-semibold my-4"},"Pills",-1),ot={class:"flex gap-2"},lt=s("div",{class:"font-semibold my-4"},"Icons",-1),ct={class:"flex gap-2"},dt={class:"card"},ut=s("div",{class:"font-semibold text-xl mb-4"},"Chip",-1),pt=s("div",{class:"font-semibold mb-4"},"Basic",-1),mt={class:"flex items-center flex-col sm:flex-row"},ht=s("div",{class:"font-semibold my-4"},"Icon",-1),ft={class:"flex items-center flex-col sm:flex-row"},vt=s("div",{class:"font-semibold my-4"},"Image",-1),gt={class:"flex items-center flex-col sm:flex-row"},bt={class:"card"},yt=s("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1),wt={class:"rounded-border border border-surface p-6"},Bt={class:"flex mb-4"},xt={class:"flex justify-between mt-4"},kt={__name:"MiscDoc",setup(t){const e=H(0);let n=null;function i(){n=setInterval(()=>{let r=e.value+Math.floor(Math.random()*10)+1;r>=100&&(r=100),e.value=r},2e3)}function d(){clearInterval(n),n=null}return K(()=>{i()}),W(()=>{d()}),(r,h)=>{const B=J,f=z,x=U,M=N,u=A,F=D,T=O,C=L,o=j,c=V,v=S;return p(),m(G,null,[s("div",Se,[Le,s("div",De,[s("div",Ae,[a(B,{value:e.value},null,8,["value"])]),s("div",Ue,[a(B,{value:50,showValue:!1})])])]),s("div",Fe,[s("div",Te,[s("div",Ce,[Xe,s("div",Re,[a(f,{value:2}),a(f,{value:8,severity:"success"}),a(f,{value:4,severity:"info"}),a(f,{value:12,severity:"Warn"}),a(f,{value:3,severity:"danger"})]),Ye,s("div",Pe,[a(x,{value:"2"},{default:b(()=>[Ie]),_:1}),a(x,{value:"4",severity:"danger"},{default:b(()=>[qe]),_:1}),a(x,{severity:"danger"},{default:b(()=>[Ee]),_:1})]),He,s("div",Ke,[a(M,{label:"Emails",badge:"8",class:"mr-2"}),a(M,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),We,s("div",Ge,[a(f,{value:2}),a(f,{value:4,size:"large",severity:"warn"}),a(f,{value:6,size:"xlarge",severity:"success"})])]),s("div",Ne,[Oe,Ve,a(F,null,{default:b(()=>[a(u,{image:"/demo/images/avatar/amyelsner.png",size:"large",shape:"circle"}),a(u,{image:"/demo/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),a(u,{image:"/demo/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),a(u,{image:"/demo/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),a(u,{image:"/demo/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),a(u,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),je,a(u,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),a(u,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),a(u,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),Je,a(x,{value:"4",severity:"danger",class:"inline-flex"},{default:b(()=>[a(u,{label:"U",size:"xlarge"})]),_:1})]),s("div",Qe,[Ze,a(C,{style:{width:"250px",height:"200px"}},{default:b(()=>[et,a(T,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),s("div",tt,[s("div",nt,[at,st,s("div",rt,[a(o,{value:"Primary"}),a(o,{severity:"success",value:"Success"}),a(o,{severity:"info",value:"Info"}),a(o,{severity:"warn",value:"Warn"}),a(o,{severity:"danger",value:"Danger"})]),it,s("div",ot,[a(o,{value:"Primary",rounded:!0}),a(o,{severity:"success",value:"Success",rounded:!0}),a(o,{severity:"info",value:"Info",rounded:!0}),a(o,{severity:"warn",value:"Warn",rounded:!0}),a(o,{severity:"danger",value:"Danger",rounded:!0})]),lt,s("div",ct,[a(o,{icon:"pi pi-user",value:"Primary"}),a(o,{icon:"pi pi-check",severity:"success",value:"Success"}),a(o,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),a(o,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),a(o,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),s("div",dt,[ut,pt,s("div",mt,[a(c,{label:"Action",class:"mr-2 mb-2"}),a(c,{label:"Comedy",class:"mr-2 mb-2"}),a(c,{label:"Mystery",class:"mr-2 mb-2"}),a(c,{label:"Thriller",removable:!0,class:"mb-2"})]),ht,s("div",ft,[a(c,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),a(c,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),a(c,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),a(c,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),vt,s("div",gt,[a(c,{label:"Amy Elsner",image:"/demo/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),a(c,{label:"Asiya Javayant",image:"/demo/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),a(c,{label:"Onyama Limba",image:"/demo/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),s("div",bt,[yt,s("div",wt,[s("div",Bt,[a(v,{shape:"circle",size:"4rem",class:"mr-2"}),s("div",null,[a(v,{width:"10rem",class:"mb-2"}),a(v,{width:"5rem",class:"mb-2"}),a(v,{height:".5rem"})])]),a(v,{width:"100%",height:"150px"}),s("div",xt,[a(v,{width:"4rem",height:"2rem"}),a(v,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{kt as default};
