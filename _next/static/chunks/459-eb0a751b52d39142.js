(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3956:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:a=null,children:u,dataNtpc:i=""}=e;return(0,o.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(i)}})},[i]),(0,r.jsxs)(r.Fragment,{children:[u,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(1047),o=n(6847)},2589:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:i="dataLayer",nonce:l}=e;return void 0===r&&(r=i),(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(i,"'] = window['").concat(i,"'] || [];\n          function gtag(){window['").concat(i,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:l}),(0,o.jsx)(u.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:l})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))};let o=n(1047),a=n(6847),u=function(e){return e&&e.__esModule?e:{default:e}}(n(5191))},5205:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:i="dataLayer",auth:l,preview:s,dataLayer:c,nonce:f}=e;u=i;let d="dataLayer"!==i?"&l=".concat(i):"";return(0,o.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(c?"w[l].push(".concat(JSON.stringify(c),")"):"","\n      })(window,'").concat(i,"');")},nonce:f}),(0,r.jsx)(a.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(d).concat(l?"&gtm_auth=".concat(l):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):""),nonce:f})]})};let r=n(1047),o=n(6847),a=function(e){return e&&e.__esModule?e:{default:e}}(n(5191)),u="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||u;window[n]=window[n]||[],window[n].push(e)}},5191:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o.a});var r=n(9964),o=n.n(r),a={};for(let e in r)"default"!==e&&(a[e]=()=>r[e]);n.d(t,a)},8001:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return h}});let r=n(1286),o=n(1047),a=r._(n(6847)),u=n(9944),i=n(6230),l=n(4576),s=n(3945),c=n(3165),f=n(1558),d=n(3356);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function g(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}n(6207);let h=a.default.forwardRef(function(e,t){let n,r;let{href:u,as:h,children:y,prefetch:m=null,passHref:_,replace:b,shallow:w,scroll:v,onClick:j,onMouseEnter:x,onTouchStart:E,legacyBehavior:O=!1,...M}=e;n=y,O&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let P=a.default.useContext(i.AppRouterContext),I=!1!==m,S=null===m?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:C,as:k}=a.default.useMemo(()=>{let e=g(u);return{href:e,as:h?g(h):e}},[u,h]),T=a.default.useRef(C),A=a.default.useRef(k);O&&(r=a.default.Children.only(n));let L=O?r&&"object"==typeof r&&r.ref:t,[N,R,F]=(0,l.useIntersection)({rootMargin:"200px"}),q=a.default.useCallback(e=>{(A.current!==k||T.current!==C)&&(F(),A.current=k,T.current=C),N(e)},[k,C,F,N]),U=(0,c.useMergedRef)(q,L);a.default.useEffect(()=>{P&&R&&I&&p(P,C,{kind:S})},[k,C,R,I,P,S]);let H={ref:U,onClick(e){O||"function"!=typeof j||j(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,n,r,o,u,i){let{nodeName:l}=e.currentTarget;"A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),a.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,P,C,k,b,w,v)},onMouseEnter(e){O||"function"!=typeof x||x(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),P&&I&&p(P,C,{kind:S})},onTouchStart:function(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),P&&I&&p(P,C,{kind:S})}};return(0,f.isAbsoluteUrl)(k)?H.href=k:O&&!_&&("a"!==r.type||"href"in r.props)||(H.href=(0,d.addBasePath)(k)),O?a.default.cloneElement(r,H):(0,o.jsx)("a",{...M,...H,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8695:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9964:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return _},handleClientScriptLoad:function(){return h},initScriptLoader:function(){return y}});let r=n(1286),o=n(863),a=n(1047),u=r._(n(7326)),i=o._(n(6847)),l=n(9903),s=n(5187),c=n(8695),f=new Map,d=new Set,p=e=>{if(u.default.preinit){e.forEach(e=>{u.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},g=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:u="",strategy:i="afterInteractive",onError:l,stylesheets:c}=e,g=n||t;if(g&&d.has(g))return;if(f.has(t)){d.add(g),f.get(t).then(r,l);return}let h=()=>{o&&o(),d.add(g)},y=document.createElement("script"),m=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),h()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});a?(y.innerHTML=a.__html||"",h()):u?(y.textContent="string"==typeof u?u:Array.isArray(u)?u.join(""):"",h()):t&&(y.src=t,f.set(t,m)),(0,s.setAttributesFromProps)(y,e),"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),c&&p(c),document.body.appendChild(y)};function h(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))}):g(e)}function y(e){e.forEach(h),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function m(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:f,stylesheets:p,...h}=e,{updateScripts:y,scripts:m,getIsSsr:_,appDir:b,nonce:w}=(0,i.useContext)(l.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,n]);let j=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!j.current&&("afterInteractive"===s?g(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>g(e))})),j.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(y?(m[s]=(m[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:f,...h}]),y(m)):_&&_()?d.add(t||n):_&&!_()&&g(e)),b){if(p&&p.forEach(e=>{u.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(u.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin}),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===s&&n&&u.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let _=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5187:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function o(e){return["async","defer","noModule"].includes(e)}function a(e,t){for(let[a,u]of Object.entries(t)){if(!t.hasOwnProperty(a)||r.includes(a)||void 0===u)continue;let i=n[a]||a.toLowerCase();"SCRIPT"===e.tagName&&o(i)?e[i]=!!u:e.setAttribute(i,String(u)),(!1===u||"SCRIPT"===e.tagName&&o(i)&&(!u||"false"===u))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4576:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let r=n(6847),o=n(8695),a="function"==typeof IntersectionObserver,u=new Map,i=[];function l(e){let{rootRef:t,rootMargin:n,disabled:l}=e,s=l||!a,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(a){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:a}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}(n);return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),u.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9944:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return a},formatWithValidation:function(){return i},urlObjectKeys:function(){return u}});let r=n(863)._(n(8552)),o=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:n}=e,a=e.protocol||"",u=e.pathname||"",i=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(r.urlQueryToSearchParams(l)));let c=e.search||l&&"?"+l||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==s?(s="//"+(s||""),u&&"/"!==u[0]&&(u="/"+u)):s||(s=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),""+a+s+(u=u.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+i}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return a(e)}},8552:(e,t)=>{"use strict";function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function a(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},1558:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return g},MiddlewareNotFoundError:function(){return _},MissingStaticPage:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return l},getLocationOrigin:function(){return u},getURL:function(){return i},isAbsoluteUrl:function(){return a},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return b}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>o.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function i(){let{href:e}=window.location,t=u();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class h extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class m extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class _ extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function b(e){return JSON.stringify({message:e.message,stack:e.stack})}},8628:e=>{e.exports={style:{fontFamily:"'Poppins', 'Poppins Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_746de4"}}}]);