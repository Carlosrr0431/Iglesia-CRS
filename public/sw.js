if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Dzwy6xMBLOBMGVBgcSD1y/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/Dzwy6xMBLOBMGVBgcSD1y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-a844637458896e52.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/126-049b4ccdb3eba3db.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/18-3a843495f2b0a7d3.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/212.a6d77743b0e2dd21.js",revision:"a6d77743b0e2dd21"},{url:"/_next/static/chunks/288-956dcf8237c2459e.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/385cb88d-616917fd3897d460.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/468-c1a7ac07541d94f2.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/517-fd007faa809107a2.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/63-c7a334c48d41d101.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/703-f198c5cf1e90cb2e.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/792-8b16f80e8545892b.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/880-96b4bf164b65f70b.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/8e1d74a4-6dfdf15598369f23.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/(iglesia)/iglesia/page-1d4459babff366b9.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/dashboard/page-5f44e41b9021094e.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/eventos/page-38df58885d174b87.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/login/page-95cc6ba1aa5fe1f6.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/radio/page-73f6898537651617.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/semilla/page-652a4279c66e8d95.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/ubicacion/page-66bb63fb159a97bd.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/(pages)/user/page-cad09a1be6036cc8.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/_not-found-596c01a16b6f72e9.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/layout-e8cc161bf62f53e7.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/app/page-abda8cbb59402eae.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/c15bf2b0-cb472e806bc3b1e2.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/f7333993-c9926008337353f8.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/f8025e75-65c9483f3d69f719.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/fd9d1056-ae46ad637d0701df.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/main-5e7560463c323d67.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/main-app-518679af0bc9622b.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1a4f22cdaf2525d5.js",revision:"Dzwy6xMBLOBMGVBgcSD1y"},{url:"/_next/static/css/82af5f5fdbd8929c.css",revision:"82af5f5fdbd8929c"},{url:"/_next/static/media/Logo radio online.5fc086fa.svg",revision:"ad66491acf2c06504c5e55733ebb9ab3"},{url:"/_next/static/media/boton de whatsapp.ac6338f2.svg",revision:"7ee9e0f2035e51c048454815be091e4d"},{url:"/_next/static/media/degradado para inicio.220044ff.svg",revision:"90e0ba2c4182b2d7340373322d1dcd89"},{url:"/_next/static/media/diezmo.fe883df5.svg",revision:"7da339a0214a34a5c3e8909bdb966109"},{url:"/_next/static/media/donar.94c14178.svg",revision:"708d03ab52fdab35f8d370046e5e4fce"},{url:"/_next/static/media/eventos.ef35becb.svg",revision:"7a3d3ba602a47e894651a8cde9d63eb4"},{url:"/_next/static/media/facebook.49a06e0c.svg",revision:"48b453cad5c5a15ea728368d35ecd375"},{url:"/_next/static/media/icons8-biblia.7deb889e.svg",revision:"45f813d31fa37fd2e0e41cefa442d8e8"},{url:"/_next/static/media/inicio.3422062d.svg",revision:"f8a65696f368de3a7c3ecdfb09efe110"},{url:"/_next/static/media/instagram.96fe5f73.svg",revision:"5e2073739d87a4faaca96e081d1ceeb6"},{url:"/_next/static/media/la iglesia.4a68e325.svg",revision:"60157b638c595f50c83ce272a8da7e4a"},{url:"/_next/static/media/logo crs.09ef2041.svg",revision:"c31c2529de427f5655eed239415abbf6"},{url:"/_next/static/media/ofrenda.d8f347d9.svg",revision:"913f2b5d6f6b7a97b017da8787fcdcef"},{url:"/_next/static/media/ofrendas.af0cbc83.svg",revision:"769ef50ecd7b0ab2f984b6ffd84b866d"},{url:"/_next/static/media/portada.697b91fb.jpg",revision:"2589301fe07ed18604ffcf8b3fc33ab1"},{url:"/_next/static/media/portada.bd26270b.png",revision:"bd26270b"},{url:"/_next/static/media/primicia.8fb25c9e.svg",revision:"4c18876b777018d0cd97ca055034013c"},{url:"/_next/static/media/radio.3a3c4944.svg",revision:"a2958463388ca95403c45593dd805d51"},{url:"/_next/static/media/telegram.84a947da.svg",revision:"6f1f60def7f7170f87b40d3a276a08e1"},{url:"/_next/static/media/tienda.8c4f59e1.svg",revision:"962596e8b643d7639f6462c10d6670ad"},{url:"/_next/static/media/ubicacion.b867b2a9.svg",revision:"c814f8f0128fb680edcc635cc2731720"},{url:"/_next/static/media/whatsapp.0daf5e04.svg",revision:"28e36435e525fbc14c6b1c4e14fdb1de"},{url:"/_next/static/media/youtube.b77ebafd.svg",revision:"86441a099e60227c0bb21a66371bb45f"},{url:"/icon-192x192.png",revision:"e5dc6bff24dbdc38771e2803fc87de36"},{url:"/icon-256x256.png",revision:"2d5dfa0915a0bc09181ddfa17eb1d1a8"},{url:"/icon-384x384.png",revision:"b62c93ada5582d6b91f1116ceb2b4555"},{url:"/icon-512x512.png",revision:"157f3bbef5e0e90253a26c6029e36d4e"},{url:"/manifest.json",revision:"ec4fc68cf379668b2586c014e8cb65a4"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/swe-worker-4da67dda9bc18c53.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
