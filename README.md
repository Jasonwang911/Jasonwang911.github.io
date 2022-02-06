## 💌 我的博客

> 项目地址：[https://jasonwang911.github.io/]

### deploy.sh 修改后的
```
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm install
# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io
git push -f https://${blog}@${address} master:master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -
```


---
home: true
heroImage: /images/shen.png
heroText: Today, have you studied yet?
tagline: 王深的个人博客
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 个人笔记
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: 前端知识
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 全栈知识
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2022-present Jason Wang
---