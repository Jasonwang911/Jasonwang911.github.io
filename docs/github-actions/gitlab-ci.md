---
title: 使用 Gitlab CI 部署应用到云服务器
date: 2022-02-09
categories:
 - 全栈知识
tags:
- 前端工程
- linux
sticky: 3
---

::: tip 使用 Gitlab CI 部署应用到云服务器    
使用Gitlab CI 将自己静态网站（vuepress）部署到云服务器    
<img src="~@img/images/cicd/gitlab-ci.jpg" width = "800" height = "500" alt="海油LMS-app" align=center />    
:::

## 1. Gitlab安装部署和常用命令
- [文章](https://blog.csdn.net/unhejing/article/details/104767623)

## 2. 安装 gitlab runner
依照官网进行安装  
```
# 我当前centos 7 为  Linux x86-64
sudo curl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64

# 设置安装目录可执行
sudo chmod +x /usr/local/bin/gitlab-runner

# 直接使用 root 用户权限运行 gitlab-runner （或者其他用户，看需求）
sudo gitlab-runner install --user=root --working-directory=/home/gitlab-runner
#启动
sudo gitlab-runner start

# 如果提示命令  command not found  需要配置环境
# 添加软链接
ln -s -f /usr/local/bin/gitlab-runner /usr/bin/gitlab-runner

# 查看版本
gitlab-runner -v
```

## 3. 注册 gitlab-runner
通过管理员登录 gitlab ---- 管理中心---- 概况 ---- Runner 查看需要注册的 URL与 Token（令牌）   

配置注册信息 `gitlab-runner register`   

```
[root@localhost ~]#  gitlab-runner register
Running in system-mode.                            
# 引导会让你输入gitlab的url，输入自己的url，例如http://gitlab.example.com/                           
Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com/):
http://xxx.xxx.xxx:xxx/
# 引导会让你输入token，去相应的项目下找到token，例如xrjc3tWcdQpLcEwoYzkU
Please enter the gitlab-ci token for this runner:
xrjc3tWcdQpLcEwoYzkU
# 输入描述
Please enter the gitlab-ci description for this runner:
[localhost.localdomain]: develop
# 引导会让你输入tag，一个项目可能有多个runner，是根据tag来区别runner的，输入若干个就好了，比如web,hook,deploy,develop
Please enter the gitlab-ci tags for this runner (comma separated):
develop
# 是否运行未标记的版本
Whether to run untagged builds [true/false]:
[false]: false
# 是否将运行程序锁定到当前项目
Whether to lock Runner to current project [true/false]:
[false]: true
Registering runner... succeeded                     runner=xrjc3tWc
#  引导会让你输入executor，这个是要用什么方式来执行脚本，图方便输入shell就好了
Please enter the executor: shell, ssh, docker+machine, docker, docker-ssh, parallels, virtualbox, docker-ssh+machine, kubernetes:
shell
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded! 
```

注册好后，在gitlab中相应的位置就可以看到你注册好的runner信息。   


## 4. 自定义构建目录
[gitlab-runner 配置说明](https://docs.gitlab.com/runner/configuration/advanced-configuration.html#the-global-section)   
对应的配置文件在 `/etc/gitlab-runner/config.toml`   
修改配置文件，允许自定义git clone 的目录        
此功能要求GIT_CLONE_PATH在其中定义的路径内runners.builds_dir。为了便于使用的builds_dir所述 $CI_BUILDS_DIR变量可被使用。    


## 5. 对应执行命令
```
# 运行
gitlab-runner run
# 启动
gitlab-runner start
# 重启
gitlab-runner restart
# 通过name 取消注册
gitlab-runner unregister --name develop
# 删除所有注册runner
gitlab-runner unregister --all-runners
```

## 6. gitlab-ci.yml配置的特定关键字

在了解了YML文件的语法格式后，接下来需要了解的就是gitlab-ci独特的配置关键字，这些关键字将在.gitlab-ci.yml中使用，并用来控制一个pipeline具体的运作过程   

gitlab提供了很多配置关键字，其中最基础和常用的有这么几个    

- stages
- stage
- script
- tags




<Vssue title="Github Actions 发布到云服务器" />