(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{596:function(s,n,a){s.exports=a.p+"assets/img/gitlab-ci.9bc781c5.jpg"},597:function(s,n,a){s.exports=a.p+"assets/img/gitlab-jobs.a60b7312.jpg"},615:function(s,n,a){"use strict";a.r(n);var e=a(6),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"},[s._v("使用 Gitlab CI 部署应用到云服务器")]),e("p",[s._v("使用Gitlab CI 将自己静态网站（vuepress）部署到云服务器"),e("br"),s._v(" "),e("img",{attrs:{src:a(596),width:"800",height:"500",alt:"海油LMS-app",align:"center"}})])]),e("Boxx",{attrs:{type:"warning",changeTime:"30000"}}),s._v(" "),e("h2",{attrs:{id:"一、-gitlab安装部署和常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、-gitlab安装部署和常用命令"}},[s._v("#")]),s._v(" 一、 Gitlab安装部署和常用命令")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://blog.csdn.net/unhejing/article/details/104767623",target:"_blank",rel:"noopener noreferrer"}},[s._v("文章"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"二、-gitlab-runner-安装和配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、-gitlab-runner-安装和配置"}},[s._v("#")]),s._v(" 二、 Gitlab runner 安装和配置")]),s._v(" "),e("h3",{attrs:{id:"_1-安装-gitlab-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-gitlab-runner"}},[s._v("#")]),s._v(" 1. 安装 gitlab runner")]),s._v(" "),e("p",[s._v("依照官网进行安装")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 我当前centos 7 为  Linux x86-64\nsudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64\n\n# 设置安装目录可执行\nsudo chmod +x /usr/local/bin/gitlab-runner\n\n# 直接使用 root 用户权限运行 gitlab-runner （或者其他用户，看需求）\nsudo gitlab-runner install --user=root --working-directory=/home/gitlab-runner\n#启动\nsudo gitlab-runner start\n\n# 如果提示命令  command not found  需要配置环境\n# 添加软链接\nln -s -f /usr/local/bin/gitlab-runner /usr/bin/gitlab-runner\n\n# 查看版本\ngitlab-runner -v\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h3",{attrs:{id:"_2-注册-gitlab-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-注册-gitlab-runner"}},[s._v("#")]),s._v(" 2. 注册 gitlab-runner")]),s._v(" "),e("p",[s._v("通过管理员登录 gitlab ---- 管理中心---- 概况 ---- Runner 查看需要注册的 URL与 Token（令牌）")]),s._v(" "),e("p",[s._v("配置注册信息 "),e("code",[s._v("gitlab-runner register")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost ~]#  gitlab-runner register\nRunning in system-mode.                            \n# 引导会让你输入gitlab的url，输入自己的url，例如http://gitlab.example.com/                           \nPlease enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):\nhttp://xxx.xxx.xxx:xxx/\n# 引导会让你输入token，去相应的项目下找到token，例如xrjc3tWcdQpLcEwoYzkU\nPlease enter the gitlab-ci token for this runner:\nxrjc3tWcdQpLcEwoYzkU\n# 输入描述\nPlease enter the gitlab-ci description for this runner:\n[localhost.localdomain]: develop\n# 引导会让你输入tag，一个项目可能有多个runner，是根据tag来区别runner的，输入若干个就好了，比如web,hook,deploy,develop\nPlease enter the gitlab-ci tags for this runner (comma separated):\ndevelop\n# 是否运行未标记的版本\nWhether to run untagged builds [true/false]:\n[false]: false\n# 是否将运行程序锁定到当前项目\nWhether to lock Runner to current project [true/false]:\n[false]: true\nRegistering runner... succeeded                     runner=xrjc3tWc\n#  引导会让你输入executor，这个是要用什么方式来执行脚本，图方便输入shell就好了\nPlease enter the executor: shell, ssh, docker+machine, docker, docker-ssh, parallels, virtualbox, docker-ssh+machine, kubernetes:\nshell\nRunner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded! \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("注册好后，在gitlab中相应的位置就可以看到你注册好的runner信息。")]),s._v(" "),e("h3",{attrs:{id:"_3-自定义构建目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-自定义构建目录"}},[s._v("#")]),s._v(" 3. 自定义构建目录")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section",target:"_blank",rel:"noopener noreferrer"}},[s._v("gitlab-runner 配置说明"),e("OutboundLink")],1),e("br"),s._v("\n对应的配置文件在 "),e("code",[s._v("/etc/gitlab-runner/config.toml")]),e("br"),s._v("\n修改配置文件，允许自定义git clone 的目录"),e("br"),s._v("\n此功能要求GIT_CLONE_PATH在其中定义的路径内runners.builds_dir。为了便于使用的builds_dir所述 $CI_BUILDS_DIR变量可被使用。")]),s._v(" "),e("h3",{attrs:{id:"_4-对应执行命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-对应执行命令"}},[s._v("#")]),s._v(" 4. 对应执行命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 运行\ngitlab-runner run\n# 启动\ngitlab-runner start\n# 重启\ngitlab-runner restart\n# 通过name 取消注册\ngitlab-runner unregister --name develop\n# 删除所有注册runner\ngitlab-runner unregister --all-runners\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"三、-gitlab-ci-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、-gitlab-ci-yml"}},[s._v("#")]),s._v(" 三、 gitlab-ci.yml")]),s._v(" "),e("p",[s._v("gitlab-ci.yml配置的特定关键字")]),s._v(" "),e("p",[s._v("在了解了YML文件的语法格式后，接下来需要了解的就是gitlab-ci独特的配置关键字，这些关键字将在.gitlab-ci.yml中使用，并用来控制一个pipeline具体的运作过程")]),s._v(" "),e("p",[s._v("gitlab提供了很多配置关键字，其中最基础和常用的有这么几个")]),s._v(" "),e("ul",[e("li",[s._v("stages")]),s._v(" "),e("li",[s._v("stage")]),s._v(" "),e("li",[s._v("script")]),s._v(" "),e("li",[s._v("tags")])]),s._v(" "),e("h3",{attrs:{id:"_1-stages-和-stage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-stages-和-stage"}},[s._v("#")]),s._v(" 1. stages 和 stage")]),s._v(" "),e("p",[s._v("stages定义在YML文件的最外层，它的值是一个数组，用于定义一个pipeline不同的流程节点")]),s._v(" "),e("p",[s._v("例如定义如下三个阶段")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("stages: # 分段\n  - install \n  - build\n  - deploy \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("则在Gitlab交互界面中能够看到如下展示"),e("br"),s._v(" "),e("img",{attrs:{src:a(597),width:"800",height:"300",alt:"gitlab",align:"center"}})]),s._v(" "),e("h3",{attrs:{id:"_2-job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-job"}},[s._v("#")]),s._v(" 2. Job")]),s._v(" "),e("p",[s._v("Job是pipeline的任务节点，它构成了pipeline的基本单元"),e("br"),s._v("\nstage/script/tags这三个关键字，都是作为Job的子属性来使用的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("install:\n  tags:\n    - sss\n  stage: install\n  script:\n    - npm install\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("stage 是一个字符串，且是stages数组的一个子项，表示的是当前的pipeline节点\n"),e("ul",[e("li",[s._v("正在执行是蓝色")]),s._v(" "),e("li",[s._v("尚未执行是灰色")]),s._v(" "),e("li",[s._v("执行成功是绿色")]),s._v(" "),e("li",[s._v("执行失败是红色")])])])]),s._v(" "),e("p",[s._v("当前stage的执行情况能在交互面板上能看的清清楚楚")]),s._v(" "),e("h3",{attrs:{id:"_3-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-script"}},[s._v("#")]),s._v(" 3. script")]),s._v(" "),e("p",[s._v("它是当前pipeline节点运行的shell脚本（以项目根目录为上下文执行）。")]),s._v(" "),e("p",[s._v("这个script是我们控制CI流程的核心，我们所有的工作：从安装，编译到部署都是通过script中定义的shell脚本来完成的。")]),s._v(" "),e("p",[s._v("如果脚本执行成功，pipeline就会进入下一个Job节点，如果执行失败那么pipeline就会终止")]),s._v(" "),e("h3",{attrs:{id:"_4-tags"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-tags"}},[s._v("#")]),s._v(" 4. tags")]),s._v(" "),e("p",[e("strong",[s._v("tags是当前Job的标记，这个tags关键字是很重要，因为gitlab的runner会通过tags去判断能否执行当前这个Job")]),e("br"),s._v("\n如果一个Job没有tag或者tag不是sss,那么即使这个Runner是激活且空闲的，也不会去执行！")]),s._v(" "),e("h2",{attrs:{id:"四、-部署思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、-部署思路"}},[s._v("#")]),s._v(" 四、 部署思路")]),s._v(" "),e("h3",{attrs:{id:"_1-部署资源到云服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-部署资源到云服务器"}},[s._v("#")]),s._v(" 1. 部署资源到云服务器")]),s._v(" "),e("p",[s._v("通过 scp 这一命令，将本地机器代码远程拷贝到云服务器上。"),e("br"),s._v("\n因为这一命令需要输入密码，所以通过 sshpass 命令携带密码再执行scp：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sshpass -p $PASSWORD scp -r ./build $CUSTOM_USERNAME@$CUSTOM_IP:/var/www/html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-gitlab的自定义变量-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitlab的自定义变量-variables"}},[s._v("#")]),s._v(" 2. gitlab的自定义变量 Variables")]),s._v(" "),e("p",[s._v("Gitlab有自定义变量的功能，例如我们觉得直接在YML中写入密码/账号等信息不太好，那么可以通过美元符号$写入一个预定义的变量，然后在Gitlab面板上输入它")]),s._v(" "),e("h3",{attrs:{id:"_3-编写简单的部署文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写简单的部署文件"}},[s._v("#")]),s._v(" 3. 编写简单的部署文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("stages: # 分段\n  - install \n  - build\n  - deploy \n\ncache:  # 缓存\n  paths: \n    - node_modules\n\ninstall-job: \n  tags: \n    - web\n  stage: install \n  script: \n    - yarn install \n\nbuild-job: \n  tags: \n    - web \n  stage: build\n  script: \n    - yarn docs:build\n\ndeploy-job: \n  tags: \n    - web \n  stage: deploy \n  script: \n    - sshpass -p $PASSWORD scp -r ./docs/.vuepress/dist/ $CUSTOM_USERNAME@$CUSTOM_IP:/usr/share/nginx/html/pwa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("h3",{attrs:{id:"_4-yml的片段复用和模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-yml的片段复用和模块化"}},[s._v("#")]),s._v(" 4. YML的片段复用和模块化")]),s._v(" "),e("p",[s._v("际项目的运行中，.gitlab-ci.yml的编写可能会渐趋复杂。那么这个时候YML的一些其他语法功能就派上用场了")]),s._v(" "),e("ol",[e("li",[s._v("YML的片段复用功能")])]),s._v(" "),e("ul",[e("li",[s._v("使用 &符号可以定义一个片段的别名")]),s._v(" "),e("li",[s._v("使用 <<符号和 * 符号可以将别名对应的YML片段导入")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".common-config: &commonConfig\n  only: # 表示仅在develop/release分支上执行\n    refs:\n      - develop\n      - release\n\ninstall-job:\n  # 其他配置 ....\n  <<: *commonConfig\nbuild-job:\n  # 其他配置 ....\n  <<: *commonConfig\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("YML的模块化功能"),e("br"),s._v("\ngitlab-ci提供的include关键字便可实现这个功能, 它可以用来导入外部的YML文件"),e("br"),s._v("\n例如我们有如下的YML结构")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" ├── .gitlab-ci.h5.yml'\n ├── .gitlab-ci.bd.yml'\n ├── .gitlab-ci.wx.yml\n └── .gitlab-ci.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[e("strong",[s._v("那么在.gitlab-ci.yml中这么写，就可以对它们做合并")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("include:\n  - '/.gitlab-ci.wx.yml'\n  - '/.gitlab-ci.bd.yml'\n  - '/.gitlab-ci.h5.yml'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("gitlab-ci还提供了extend关键字，它的功能和前面提到的YML的片段导入的功能是一样的，可读性更好一些。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".common-config: \n  only: # 表示仅在develop/release分支上执行\n    refs:\n      - develop\n      - release\n\ninstall-job:\n  # 其他配置 ....\n  extends: .common-config\n\nbuild-job:\n  # 其他配置 ....\n  extends: .common-config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("Gitlab-ci的其他配置项")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("cache关键字  用来做缓存的"),e("br"),s._v(" "),e("strong",[s._v("gitlab-ci 在运行下一个Job的时候，会默认把前一个Job新增的资源删除得干干静静")]),e("br"),s._v(" "),e("strong",[s._v("bulid阶段编译生成的包，会在deploy阶段运行前被默认删除！")]),e("br"),s._v("\n如果我们把bulid生产的包的路径添加到cache里面，虽然gitlab还是会删除bulid目录，但是因为在删除前我们已经重新上传了cache，并且在下个Job运行时又把cache给pull下来，那么这个时候就可以实现在下一个Job里面使用前一个Job的资源了")])]),s._v(" "),e("li",[e("p",[s._v("cache的功能体现在两点：")]),s._v(" "),e("ul",[e("li",[s._v("在不同pipeline之间重用资源")]),s._v(" "),e("li",[s._v("在同一pipeline的不同Job之间重用资源")])])]),s._v(" "),e("li",[e("p",[s._v("artifacts关键字: 将生成的资源作为pipeline运行成功的附件上传，并在gitlab交互界面上提供下载")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Build-job:\n  stage: build\n  script:\n  - 'npm run build'\n  artifacts:\n    name: 'bundle'\n    paths: \n      - build/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("这样在pipeline跑完后，视图页面会显示下载按钮")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("image/services: 使用Docker的镜像和服务运行Job")])]),s._v(" "),e("li",[e("p",[s._v("only/except: 这两个关键字后面跟的值是tag或者分支名的列表")]),s._v(" "),e("ul",[e("li",[s._v("only的作用是指定当前Job仅仅只在某些tag或者branch上触发")]),s._v(" "),e("li",[s._v("而except的作用是当前Job不在某些tag或者branch上触发")])])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("job:\n  # use regexp\n  only:\n    - /^issue-.*$/\n    - develop\n    - release\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("allow_failure: 值为true/false, 表示当前Job是否允许允许失败。")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("job1:\n  stage: test\n  script:\n    - execute_script_that_will_fail\n  allow_failure: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("timeout: 配置超时时间，超过时间判定为失败")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Job:\n  script: rspec\n  timeout: 3h 30m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("When: 表示当前Job在何种状态下运行，它可设置为3个值\n"),e("ul",[e("li",[s._v("on_success: 仅当先前pipeline中的所有Job都成功（或因为已标记，被视为成功allow_failure）时才执行当前Job 。这是默认值。")]),s._v(" "),e("li",[s._v("on_failure: 仅当至少一个先前阶段的Job失败时才执行当前Job。")]),s._v(" "),e("li",[s._v("always: 执行当前Job，而不管先前pipeline的Job状态如何。")])])])]),s._v(" "),e("h2",{attrs:{id:"五、问题和解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、问题和解决"}},[s._v("#")]),s._v(" 五、问题和解决")]),s._v(" "),e("h3",{attrs:{id:"_1-gitlab-runner-未激活问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-gitlab-runner-未激活问题"}},[s._v("#")]),s._v(" 1. gitlab-runner 未激活问题")]),s._v(" "),e("p",[s._v("注册之后，查看面板上Runner信息，发现处于未激活状态"),e("br"),s._v(" "),e("strong",[s._v("解决办法")]),s._v(" 运行以下命令重新启动runner")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo gitlab-runner verify\nsudo gitlab-runner restart\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_2-job一直挂起-没有runner来处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-job一直挂起-没有runner来处理"}},[s._v("#")]),s._v(" 2. Job一直挂起，没有Runner来处理")]),s._v(" "),e("ul",[e("li",[s._v("首先考虑的是不是Runner没有激活，如果没有那么按上面方式处理")]),s._v(" "),e("li",[s._v("tag没有匹配到，上面说过，Runner注册时是要填写绑定tag的，如果你在YML里面编写Job没有带上tag是不会有自定义Runner来处理。解决方法:给Job加tags")]),s._v(" "),e("li",[s._v("最后一种可能：你连续注册了多个Runner,这些Runner冲突了，或者是新注册的Runner和旧Runner使用了同一个token,这时候的解决方法如下"),e("br"),s._v(" "),e("strong",[s._v("先删掉本地其他旧的Runner")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo gitlab-runner unregister --all-runners\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("然后重置token,并使用更新后的token重新注册一个Runner")])]),s._v(" "),e("h2",{attrs:{id:"六、gitlab-ci和docker自动化构建发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、gitlab-ci和docker自动化构建发布"}},[s._v("#")]),s._v(" 六、Gitlab-ci和docker自动化构建发布")]),s._v(" "),e("h3",{attrs:{id:"_1-服务器上配置免密操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器上配置免密操作"}},[s._v("#")]),s._v(" 1. 服务器上配置免密操作")]),s._v(" "),e("h3",{attrs:{id:"_2-用docker安装gitlab-runner"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-用docker安装gitlab-runner"}},[s._v("#")]),s._v(" 2. 用docker安装gitlab-runner")]),s._v(" "),e("h3",{attrs:{id:"_3-gitlab-ci-yml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-gitlab-ci-yml文件"}},[s._v("#")]),s._v(" 3. .gitlab-ci.yml文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('/做缓存的\ncache:\n  key: ${CI_PROJECT_NAME}\n  paths:\n    - node_modules/\n//测试\n# test_e2e:\n#   image: cypress/browsers:chrome67\n#   stage: test\n#   script:\n#     - npm i\n#     - npm run test:e2e -- --headless --record --key b2a22185-8eeb-4f0e-9b21-2d61f769d8c7\n#   only:\n#     - master\n//dev环境构建\ndev:build:\n  image: node\n  stage: build\n  script:\n    - yarn\n    - yarn build:dev\n  only:\n    - dev\n  tags:\n    - eye-runner\n  artifacts:\n    expire_in: 1 week\n    paths:\n      - dist //项目打包后的文件夹\n//dev环境发布\ndev:deploy:\n  image: alpine:3.7\n  stage: deploy\n  script:\n    - echo "http://mirrors.aliyun.com/alpine/v3.7/main/" > /etc/apk/repositories\n    - apk add --no-cache rsync openssh\n    - mkdir -p ~/.ssh\n    - echo "$SSH_KEY_DEMO_PRIVATE" >> ~/.ssh/id_rsa\n    - echo "$SSH_KEY_DEMO_PUB" >> ~/.ssh/id_rsa.pub\n    - chmod 600 ~/.ssh/id_rsa\n    - chmod 600 ~/.ssh/id_rsa.pub\n    - echo -e "Host *\\n\\t StrictHostKeyChecking no \\n\\n" > ~/.ssh/config\n    - rsync -rav --delete ./dist/ "$SERVER_DEMO_HOST:$SERVER_DEMO_PATH"//同步打包后的文件夹里的内容到nginx指定的静态资源文件夹\n  only:\n    - dev\n  tags:\n    - eye-runner\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br")])]),e("Vssue",{attrs:{title:"Github Actions 发布到云服务器"}})],1)}),[],!1,null,null,null);n.default=t.exports}}]);