## Travis自动部署GitHub.io

我们想要的是，git上存放我们的项目，即markdown文件，我们可以随时修改这些markdown然后push到线上，我们的github Pages则会相应的显示编译好的html。

### 引入
Travis CI的作用是可以监控到我们git资源库的每一次变更,在收到push请求后会为我们提供一个虚拟机来帮助我们执行一些任务，比如我们文档的build以及发布。   

这样一来我们把修改好的markdown推到线上后，travis会帮我们自动执行deploy.sh里的脚本。我们就可以只专注于文档本身的内容，也方便文档的维护。

#### 分支  vuepress-pages


https://chengyuming.cn/views/other/intro.html#%E9%A1%B9%E7%9B%AE%E9%87%8C%E9%9D%A2%E9%85%8D%E7%BD%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2



``` 
  # .travis.yml 文件如下
  sudo: required
  language: node_js
  node_js: stable
  script: bash ./deploy.sh
  branches:
    only:
      - master
  notifications:
    email: false

  # deploy.sh 修改后的

  #!/usr/bin/env sh
  # 确保脚本抛出遇到的错误
  set -e
  npm install -g vuepress@next
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

#### 开始构建