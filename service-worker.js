/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8871fc4f088e187f919b81b2ba860fe8"
  },
  {
    "url": "assets/css/0.styles.edc90ea6.css",
    "revision": "eeb583584716b57305a044331e372873"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/alipay.8701cc62.svg",
    "revision": "8701cc6229ab9a0b625126cdc1838777"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/cicd.e1916119.png",
    "revision": "e1916119fb79f0991bdbbb1254c28bc4"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/github.23fc8f81.svg",
    "revision": "23fc8f81f92bb2981d8f9e089d7df14a"
  },
  {
    "url": "assets/img/gitlab-ci.9bc781c5.jpg",
    "revision": "9bc781c5665791fb9d42eb4a0cf50d64"
  },
  {
    "url": "assets/img/gitlab-jobs.a60b7312.jpg",
    "revision": "a60b731294a76eb4fe106b9476d53491"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/love.335eff6a.svg",
    "revision": "335eff6a0aefd9ce25d8624c9cae2f54"
  },
  {
    "url": "assets/img/paypal.0614c8ec.svg",
    "revision": "0614c8ec69152b15a48a6508c9ab7373"
  },
  {
    "url": "assets/img/qq.63e39c8c.svg",
    "revision": "63e39c8cb5ba4f6931ea28f722e0f065"
  },
  {
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/wechat.702bca7b.svg",
    "revision": "702bca7befb1db3ac5dace5bb9912188"
  },
  {
    "url": "assets/js/1.8f410ddf.js",
    "revision": "4e213c86092a5e4054bb831252bdf5fe"
  },
  {
    "url": "assets/js/10.cb315a72.js",
    "revision": "60873ecca09b293684d282e9ac23d60f"
  },
  {
    "url": "assets/js/11.c2243794.js",
    "revision": "d565d8810b9acabd32344a6b91eade6e"
  },
  {
    "url": "assets/js/12.d954a6a2.js",
    "revision": "b1d28bf791c365779c6a27885540d4e6"
  },
  {
    "url": "assets/js/13.50de412c.js",
    "revision": "e873a12726f104365f5bcda1bd2efd3e"
  },
  {
    "url": "assets/js/14.7417acfa.js",
    "revision": "7fb20442b87edb3ca4b5f784ef1df476"
  },
  {
    "url": "assets/js/15.45e8895a.js",
    "revision": "db503b0d4ffdf5943890d38edd07704f"
  },
  {
    "url": "assets/js/16.04b94098.js",
    "revision": "58068e6ec5b5cb18c2a48e0a82957176"
  },
  {
    "url": "assets/js/17.500fbea3.js",
    "revision": "540dcdcdc8b8eb0ebb09037d7e67fc9f"
  },
  {
    "url": "assets/js/18.f41d8cb2.js",
    "revision": "380d1c6fe08cf87f948c526b248790ba"
  },
  {
    "url": "assets/js/19.05d6a425.js",
    "revision": "d3ec5fbcc65d95b892a3d690d0df3ff9"
  },
  {
    "url": "assets/js/20.58d5556d.js",
    "revision": "d526844e668c1dc6163cc7f4e33342d5"
  },
  {
    "url": "assets/js/21.04acc2a0.js",
    "revision": "f4cac23dab595480f42f316dfc8e8d1d"
  },
  {
    "url": "assets/js/22.8fbe4f13.js",
    "revision": "ffd03a407cec06e36c9931c8b9a6c867"
  },
  {
    "url": "assets/js/23.03c4acf1.js",
    "revision": "03cce4d3ffe95b58082bcd279fb451cc"
  },
  {
    "url": "assets/js/3.03646d23.js",
    "revision": "fdb8ac4d6cb4fcfbe2c1258f5a9dc38c"
  },
  {
    "url": "assets/js/4.f945c390.js",
    "revision": "dda1954538a19758b00454de489da3b5"
  },
  {
    "url": "assets/js/5.ccdb141b.js",
    "revision": "b252c1e318a2e8f8aca2c3a4f298c2cf"
  },
  {
    "url": "assets/js/6.65e9776d.js",
    "revision": "3c307e63d85479d3fe11b34566c8a8a2"
  },
  {
    "url": "assets/js/7.0b080b61.js",
    "revision": "ddcb4cc621f7e365ddf090f1c247d9cb"
  },
  {
    "url": "assets/js/8.09bf01aa.js",
    "revision": "442c21b5d08eb1a9200b8f72475a4f7c"
  },
  {
    "url": "assets/js/9.8fc76f37.js",
    "revision": "620f1ed50f1330f8013cde0690f4733e"
  },
  {
    "url": "assets/js/app.1ea7222e.js",
    "revision": "bc668955e2933e04920fcaa3309f0cc6"
  },
  {
    "url": "categories/index.html",
    "revision": "0ec22bd4e4f23bef405c5ebe6e770241"
  },
  {
    "url": "categories/个人积累/index.html",
    "revision": "61c23f1e1938e0007358765145f112c3"
  },
  {
    "url": "categories/全栈知识/index.html",
    "revision": "556df3fcf321c2e3c88203002f56369c"
  },
  {
    "url": "categories/管理学/index.html",
    "revision": "05d79a89bb1cbe3c944042f34d4f768f"
  },
  {
    "url": "categories/英语/index.html",
    "revision": "8af41bb9b667c94db14180d38fb85b19"
  },
  {
    "url": "docker/docker-compose.html",
    "revision": "c925dc9c75cf05dacc191600da7e2877"
  },
  {
    "url": "foreign/reward/index.html",
    "revision": "7c661795676708445a7316c2e43c19b4"
  },
  {
    "url": "github-actions/gitlab-ci.html",
    "revision": "1498b3cc1ea918eb59b4e342e739500d"
  },
  {
    "url": "github-actions/index.html",
    "revision": "2773238481a68476d14cd270bc310515"
  },
  {
    "url": "github-actions/linux.html",
    "revision": "8d93e2fcb9129764f4b2854cd79e5737"
  },
  {
    "url": "guide/index.html",
    "revision": "2c7719345c50dcc764e44832abf6f679"
  },
  {
    "url": "hero.jpg",
    "revision": "a11a9e6604d1e70eb5c564413707c7d7"
  },
  {
    "url": "hero1.jpg",
    "revision": "6ef3532bcd118d8e5dbec79a29fabd7f"
  },
  {
    "url": "hero3.jpg",
    "revision": "5df865800af11cd9b69e05045d20b479"
  },
  {
    "url": "images/cicd/cicd.png",
    "revision": "e1916119fb79f0991bdbbb1254c28bc4"
  },
  {
    "url": "images/cicd/gitlab-ci.jpg",
    "revision": "9bc781c5665791fb9d42eb4a0cf50d64"
  },
  {
    "url": "images/cicd/gitlab-jobs.jpg",
    "revision": "a60b731294a76eb4fe106b9476d53491"
  },
  {
    "url": "images/logo.png",
    "revision": "8df7cf0036f75f3338c3bc0dd23bd7ab"
  },
  {
    "url": "images/rvcode/qrcode-alipay.jpg",
    "revision": "df669c97b42f5ce7d2bf0e6676d9708e"
  },
  {
    "url": "images/rvcode/qrcode-qq.jpg",
    "revision": "1cf72a45e924c97fca19bdfad35671a1"
  },
  {
    "url": "images/rvcode/qrcode-wechat.jpg",
    "revision": "b45256d67439ee462371964a57dc916f"
  },
  {
    "url": "images/sakura.png",
    "revision": "3663af08b92b9f01ca3430f8eae8d156"
  },
  {
    "url": "images/shen.png",
    "revision": "214c478c46fb2612c22889bcf245046a"
  },
  {
    "url": "index.html",
    "revision": "750c0fddab52eb790885579393c49d2b"
  },
  {
    "url": "linux/users.html",
    "revision": "624bdf7b81d57692e0ccd4d8b744d79a"
  },
  {
    "url": "Master/management.html",
    "revision": "7df8371c4fd7f17acba235fa20d0b3e4"
  },
  {
    "url": "Master/speaking.html",
    "revision": "a2ea611dcce98b3d02bfab2a269d02ea"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "2edef670bfece3a5e68dc601a9e6a2f8"
  },
  {
    "url": "tag/index.html",
    "revision": "a4e80e1ffb434fda30da0681c688acc0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "16cf54bb34b57229528474d589a2ba7b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "25703232a7572b9acb97a9bdc9fac12a"
  },
  {
    "url": "tag/node/index.html",
    "revision": "0f4d64b99ab1a09c68ce5368651de26b"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "5fbbf718e57d5ddaaeb245899a15a87e"
  },
  {
    "url": "tag/前端工程/index.html",
    "revision": "6c135867b786b21a32afd353a4ce1a65"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "5a3fb373f81184ab7fcd1df52eb8c4e5"
  },
  {
    "url": "tag/管理学/index.html",
    "revision": "bd6f6ff4c8267633199d3eff8e22b16a"
  },
  {
    "url": "tag/英语/index.html",
    "revision": "6feb9083f2425726e8575b30c03f6629"
  },
  {
    "url": "timeline/index.html",
    "revision": "370a2266f06c769ab0a99b537e3caf9a"
  },
  {
    "url": "timeLine/index.html",
    "revision": "370a2266f06c769ab0a99b537e3caf9a"
  },
  {
    "url": "travis/index.html",
    "revision": "5eac7e133398d7988b5258d19783a79e"
  },
  {
    "url": "下载.svg",
    "revision": "79748050fffe48064e8365893c7013a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
