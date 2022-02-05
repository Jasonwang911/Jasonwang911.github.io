(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{460:function(s,n,a){"use strict";a.r(n);var t=a(59),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"travis自动部署github-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis自动部署github-io"}},[s._v("#")]),s._v(" Travis自动部署GitHub.io")]),s._v(" "),a("p",[s._v("我们想要的是，git上存放我们的项目，即markdown文件，我们可以随时修改这些markdown然后push到线上，我们的github Pages则会相应的显示编译好的html。")]),s._v(" "),a("p",[s._v("https://chengyuming.cn/views/other/intro.html#%E9%A1%B9%E7%9B%AE%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  # .travis.yml 文件如下\n  sudo: required\n  language: node_js\n  node_js: stable\n  script: bash ./deploy.sh\n  branches:\n    only:\n      - master\n  notifications:\n    email: false\n\n  # deploy.sh 修改后的\n\n  #!/usr/bin/env sh\n  # 确保脚本抛出遇到的错误\n  set -e\n  npm install -g vuepress@next\n  # 生成静态文件\n  npm run build\n  # 进入生成的文件夹\n  cd docs/.vuepress/dist\n  # 如果是发布到自定义域名\n  # echo 'www.example.com' > CNAME\n  git init\n  git add -A\n  git commit -m 'deploy'\n  # 如果发布到 https://<USERNAME>.github.io\n  git push -f https://${blog}@${address} master:master\n  # 如果发布到 https://<USERNAME>.github.io/<REPO>\n  # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages\n  cd -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);