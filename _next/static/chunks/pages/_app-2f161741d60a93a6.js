(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),a=(n(4186),n(1785)),i=n.n(a),o=n(7294);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=e.Component,n=e.pageProps;return(0,o.useEffect)((function(){i().initialize({gtmId:"GTM-WNTDKBF"})}),[]),(0,r.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({},n))}},4186:function(){},6421:function(e,t,n){"use strict";var r,a=n(6425),i=(r=a)&&r.__esModule?r:{default:r};var o={tags:function(e){var t=e.id,n=e.events,r=e.dataLayer,a=e.dataLayerName,o=e.preview,d="&gtm_auth="+e.auth,u="&gtm_preview="+o;return t||(0,i.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+d+u+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(n).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+d+u+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+t+"');",dataLayerVar:this.dataLayer(r,a)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=o},8676:function(e,t,n){"use strict";var r,a=n(6421),i=(r=a)&&r.__esModule?r:{default:r};var o={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=i.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,n=e.events,r=void 0===n?{}:n,a=e.dataLayer,i=e.dataLayerName,o=void 0===i?"dataLayer":i,d=e.auth,u=void 0===d?"":d,c=e.preview,s=void 0===c?"":c,f=this.gtm({id:t,events:r,dataLayer:a||void 0,dataLayerName:o,auth:u,preview:s});a&&document.head.appendChild(f.dataScript),document.head.insertBefore(f.script(),document.head.childNodes[0]),document.body.insertBefore(f.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,n=e.dataLayerName,r=void 0===n?"dataLayer":n;if(window[r])return window[r].push(t);var a=i.default.dataLayer(t,r),o=this.dataScript(a);document.head.insertBefore(o,document.head.childNodes[0])}};e.exports=o},1785:function(e,t,n){"use strict";var r,a=n(8676),i=(r=a)&&r.__esModule?r:{default:r};e.exports=i.default},6425:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);