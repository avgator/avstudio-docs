import{r as a,c0 as z,_ as y,c as G,cf as pe,c5 as re,cg as ue,ch as Se,a as ie,c4 as ce,ci as fe,cj as ke,C as Ee,ck as Ne,cl as Oe,cm as ve,cn as Me,co as Re,I as De,q as Pe,cp as Ie,cq as _e,cr as Le,cs as Ke,p as Ae,s as $e,z as ze,a6 as J}from"./main-C9kTvUvK.js";var me=a.createContext(null),Fe=function(t){var l=t.prefixCls,o=t.className,i=t.style,h=t.children,s=t.containerRef,d=t.id,f=t.onMouseEnter,p=t.onMouseOver,g=t.onMouseLeave,S=t.onClick,k=t.onKeyDown,M=t.onKeyUp,E={onMouseEnter:f,onMouseOver:p,onMouseLeave:g,onClick:S,onKeyDown:k,onKeyUp:M};return a.createElement(a.Fragment,null,a.createElement("div",z({id:d,className:G("".concat(l,"-content"),o),style:y({},i),"aria-modal":"true",role:"dialog",ref:s},E),h))};function he(e){return typeof e=="string"&&String(Number(e))===e?(pe(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ye={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function He(e,t){var l,o,i,h,s=e.prefixCls,d=e.open,f=e.placement,p=e.inline,g=e.push,S=e.forceRender,k=e.autoFocus,M=e.keyboard,E=e.rootClassName,F=e.rootStyle,R=e.zIndex,D=e.className,H=e.id,V=e.style,v=e.motion,Q=e.width,j=e.height,U=e.children,Z=e.contentWrapperStyle,ee=e.mask,T=e.maskClosable,P=e.maskMotion,I=e.maskClassName,N=e.maskStyle,w=e.afterOpenChange,x=e.onClose,B=e.onMouseEnter,W=e.onMouseOver,te=e.onMouseLeave,c=e.onClick,C=e.onKeyDown,q=e.onKeyUp,b=a.useRef(),_=a.useRef(),L=a.useRef();a.useImperativeHandle(t,function(){return b.current});var ae=function(u){var X=u.keyCode,Y=u.shiftKey;switch(X){case ce.TAB:{if(X===ce.TAB){if(!Y&&document.activeElement===L.current){var le;(le=_.current)===null||le===void 0||le.focus({preventScroll:!0})}else if(Y&&document.activeElement===_.current){var se;(se=L.current)===null||se===void 0||se.focus({preventScroll:!0})}}break}case ce.ESC:{x&&M&&(u.stopPropagation(),x(u));break}}};a.useEffect(function(){if(d&&k){var r;(r=b.current)===null||r===void 0||r.focus({preventScroll:!0})}},[d]);var ne=a.useState(!1),O=re(ne,2),K=O[0],m=O[1],n=a.useContext(me),oe;g===!1?oe={distance:0}:g===!0?oe={}:oe=g||{};var A=(l=(o=(i=oe)===null||i===void 0?void 0:i.distance)!==null&&o!==void 0?o:n?.pushDistance)!==null&&l!==void 0?l:180,ge=a.useMemo(function(){return{pushDistance:A,push:function(){m(!0)},pull:function(){m(!1)}}},[A]);a.useEffect(function(){if(d){var r;n==null||(r=n.push)===null||r===void 0||r.call(n)}else{var u;n==null||(u=n.pull)===null||u===void 0||u.call(n)}},[d]),a.useEffect(function(){return function(){var r;n==null||(r=n.pull)===null||r===void 0||r.call(n)}},[]);var Ce=ee&&a.createElement(ue,z({key:"mask"},P,{visible:d}),function(r,u){var X=r.className,Y=r.style;return a.createElement("div",{className:G("".concat(s,"-mask"),X,I),style:y(y({},Y),N),onClick:T&&d?x:void 0,ref:u})}),be=typeof v=="function"?v(f):v,$={};if(K&&A)switch(f){case"top":$.transform="translateY(".concat(A,"px)");break;case"bottom":$.transform="translateY(".concat(-A,"px)");break;case"left":$.transform="translateX(".concat(A,"px)");break;default:$.transform="translateX(".concat(-A,"px)");break}f==="left"||f==="right"?$.width=he(Q):$.height=he(j);var we={onMouseEnter:B,onMouseOver:W,onMouseLeave:te,onClick:c,onKeyDown:C,onKeyUp:q},xe=a.createElement(ue,z({key:"panel"},be,{visible:d,forceRender:S,onVisibleChanged:function(u){w?.(u)},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),function(r,u){var X=r.className,Y=r.style;return a.createElement("div",z({className:G("".concat(s,"-content-wrapper"),X),style:y(y(y({},$),Y),Z)},Se(e,{data:!0})),a.createElement(Fe,z({id:H,containerRef:u,prefixCls:s,className:D,style:V},we),U))}),de=y({},F);return R&&(de.zIndex=R),a.createElement(me.Provider,{value:ge},a.createElement("div",{className:G(s,"".concat(s,"-").concat(f),E,(h={},ie(h,"".concat(s,"-open"),d),ie(h,"".concat(s,"-inline"),p),h)),style:de,tabIndex:-1,ref:b,onKeyDown:ae},Ce,a.createElement("div",{tabIndex:0,ref:_,style:ye,"aria-hidden":"true","data-sentinel":"start"}),xe,a.createElement("div",{tabIndex:0,ref:L,style:ye,"aria-hidden":"true","data-sentinel":"end"})))}var Ve=a.forwardRef(He),je=function(t){var l=t.open,o=l===void 0?!1:l,i=t.prefixCls,h=i===void 0?"rc-drawer":i,s=t.placement,d=s===void 0?"right":s,f=t.autoFocus,p=f===void 0?!0:f,g=t.keyboard,S=g===void 0?!0:g,k=t.width,M=k===void 0?378:k,E=t.mask,F=E===void 0?!0:E,R=t.maskClosable,D=R===void 0?!0:R,H=t.getContainer,V=t.forceRender,v=t.afterOpenChange,Q=t.destroyOnClose,j=t.onMouseEnter,U=t.onMouseOver,Z=t.onMouseLeave,ee=t.onClick,T=t.onKeyDown,P=t.onKeyUp,I=a.useState(!1),N=re(I,2),w=N[0],x=N[1],B=a.useState(!1),W=re(B,2),te=W[0],c=W[1];fe(function(){c(!0)},[]);var C=te?o:!1,q=a.useRef(),b=a.useRef();fe(function(){C&&(b.current=document.activeElement)},[C]);var _=function(O){var K;if(x(O),v?.(O),!O&&b.current&&!(!((K=q.current)===null||K===void 0)&&K.contains(b.current))){var m;(m=b.current)===null||m===void 0||m.focus({preventScroll:!0})}};if(!V&&!w&&!C&&Q)return null;var L={onMouseEnter:j,onMouseOver:U,onMouseLeave:Z,onClick:ee,onKeyDown:T,onKeyUp:P},ae=y(y({},t),{},{open:C,prefixCls:h,placement:d,autoFocus:p,keyboard:S,width:M,mask:F,maskClosable:D,inline:H===!1,afterOpenChange:_,ref:q},L);return a.createElement(ke,{open:C||V||w,autoDestroy:!1,getContainer:H,autoLock:F&&(C||w)},a.createElement(Ve,ae))},Ue=function(e,t){var l={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(l[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(l[o[i]]=e[o[i]]);return l};Re("default","large");var Te={distance:180};function Xe(e){var t=e.width,l=e.height,o=e.size,i=o===void 0?"default":o,h=e.closable,s=h===void 0?!0:h,d=e.mask,f=d===void 0?!0:d,p=e.push,g=p===void 0?Te:p,S=e.closeIcon,k=S===void 0?a.createElement(Me,null):S,M=e.bodyStyle,E=e.drawerStyle,F=e.className,R=e.visible,D=e.open,H=e.children,V=e.style,v=e.title,Q=e.headerStyle,j=e.onClose,U=e.footer,Z=e.footerStyle,ee=e.prefixCls,T=e.getContainer,P=e.extra,I=e.afterVisibleChange,N=e.afterOpenChange,w=Ue(e,["width","height","size","closable","mask","push","closeIcon","bodyStyle","drawerStyle","className","visible","open","children","style","title","headerStyle","onClose","footer","footerStyle","prefixCls","getContainer","extra","afterVisibleChange","afterOpenChange"]),x=a.useContext(Ee),B=x.getPopupContainer,W=x.getPrefixCls,te=x.direction,c=W("drawer",ee),C=T===void 0&&B?function(){return B(document.body)}:T,q=s&&a.createElement("button",{type:"button",onClick:j,"aria-label":"Close",className:"".concat(c,"-close")},k);[["visible","open"],["afterVisibleChange","afterOpenChange"]].forEach(function(m){var n=re(m,2);n[0],n[1]});function b(){return!v&&!s?null:a.createElement("div",{className:G("".concat(c,"-header"),ie({},"".concat(c,"-header-close-only"),s&&!v&&!P)),style:Q},a.createElement("div",{className:"".concat(c,"-header-title")},q,v&&a.createElement("div",{className:"".concat(c,"-title")},v)),P&&a.createElement("div",{className:"".concat(c,"-extra")},P))}function _(){if(!U)return null;var m="".concat(c,"-footer");return a.createElement("div",{className:m,style:Z},U)}var L=G(ie({"no-mask":!f},"".concat(c,"-rtl"),te==="rtl"),F),ae=a.useMemo(function(){return t??(i==="large"?736:378)},[t,i]),ne=a.useMemo(function(){return l??(i==="large"?736:378)},[l,i]),O={motionName:ve(c,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},K=function(n){return{motionName:ve(c,"panel-motion-".concat(n)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}};return a.createElement(Ne,null,a.createElement(Oe,{status:!0,override:!0},a.createElement(je,z({prefixCls:c,onClose:j},w,{open:D??R,mask:f,push:g,width:ae,height:ne,rootClassName:L,getContainer:C,afterOpenChange:function(n){N?.(n),I?.(n)},maskMotion:O,motion:K,rootStyle:V}),a.createElement("div",{className:"".concat(c,"-wrapper-body"),style:z({},E)},b(),a.createElement("div",{className:"".concat(c,"-body"),style:M},H),_()))))}var Be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z"}}]},name:"reload",theme:"outlined"},We=function(t,l){return a.createElement(De,y(y({},t),{},{ref:l,icon:Be}))},Ye=a.forwardRef(We);const Ge=Pe()(Ie(e=>({versions:[],fetchVersions:async()=>await Ae.get("/api/versions?sort=version:desc",{headers:$e()}).then(t=>t?.data?.data?(e({versions:t.data.data}),t.data.data):null).catch(t=>{console.log("Error fetching versions:",t.response),ze.error("Error fetching versions")})}),{name:"versionStore",storage:{getItem:Ke,setItem:Le,removeItem:_e}})),Je=J.div`
  --appLeftSidebar-width: 300px;
  --appContent-width: 1fr;
  --appRightSidebar-width: 350px;
  --appConsoleSidebar-width: auto;

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;

  .scrollable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    z-index: 10;
    min-height: 100%;
    height: 100%;
  }
`,Qe=J.div`
  position: relative;
  background-color: hsla(217, 81%, 36%, 0.06);
  border-bottom: 1px solid hsla(217, 81%, 36%, 0.08);
  display: flex;
  align-items: center;
  gap: 5px;
`,Ze=J.div`
  position: relative;
  display: flex;

  .appLayoutContent {
    position: relative;
    overflow: hidden;
    flex: 1;
    background-color: rgb(246, 246, 249);
  }
`,et=J.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  gap: 0px 0px;

  width: var(--appLeftSidebar-width);
  border-right-width: 0.5px;
  border-right-style: solid;
  border-right-color: rgba(197, 197, 211, 0.5);

  .expandSidebarSection {
    position: relative;
    min-height: 0;
  }
`,tt=J.div`
  position: relative;
  width: var(--appRightSidebar-width);
  border-left-width: 0.5px;
  border-left-style: solid;
  border-left-color: rgba(197, 197, 211, 0.5);
`,at=J.div`
  position: relative;
  background-color: #151414;
  display: flex;
  flex-flow: column;

  .consoleClearArea {
    padding: 5px;
    button {
      border-width: 0.5px;
    }
  }

  .feedScroller {
    flex: 1;
    position: relative;
    width: 300px;

    .inner {
      position: absolute;
      left: 0;
      top: 10px;
      right: 0;
      bottom: 10px;
      overflow-y: scroll;
    }
  }
`;export{Je as A,Xe as D,Ye as R,Qe as a,Ze as b,at as c,tt as d,et as e,Ge as u};
