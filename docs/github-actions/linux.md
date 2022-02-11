---
title: 使用 Github Actions 部署应用到云服务器
date: 2022-02-08
categories:
 - 全栈知识
tags:
- 前端工程
- linux
sticky: 2
---

::: tip 使用 Github Actions 部署应用到云服务器    
使用GitHub Actions 将自己静态网站（vuepress）部署到云服务器，原理如下      
<img src="~@img/images/cicd/cicd.png" width = "600" height = "500" alt="github actions" align=center />
:::

<Boxx type="warning" changeTime="3000"  /> 
## 一、准备工作

###  1. 创建work账号
- 处于安全考虑，日常不会使用root账号登录，权限太高了     
1.  用root登录，创建work账号    
Linux 系统中用户相关学习请移步  [Linux 用户（user）用户组（group）](/linux/users)
```
adduser work
passwd work

whoami # 查看当前登录用户名
```
2. 添加work的sudo权限  
```
whereis sudoers # 找到文件位置  /etc/sudoers   

chmod  u+w /etc/sudoers  # 修改权限 u 标识所有者 w 表示写权限  + 表示添加

vim /etc/sudoers  # 编辑该文件
# 找到      `root ALL=(ALL)   ALL`
# 添加一行   `work ALL=(ALL)   ALL`

chmod u-w /etc/sudoers   # 还原权限
``` 
使用work登录机器，输入su，再输入root账号的密码，即可拥有超级权限。

### 2. 登录信任 
ssh免登陆的原理是这样的，A将自己的公钥发送给B，A要登陆B，B给A发送一个随机数，然后A用自己的私钥对这个随机数加密，B用保存的A的公钥解密，如果得到的随机数和之前发送的一样，则验证通过。   

- **方法1** 
为了避免每次登录输入密码，需要进行登录信任，创建 `~/.ssh/authorized_keys` 文件
```
# 修改文件夹权限
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```
将本机的 `id_rsa.pub` 内容粘贴进来       

- **方法2**   
在本地执行 `ssh-copy-id` 命令将公钥文件传输的远程机器，并生效  
```
# 本机如果没有.ssh文件，需要先生成  
# ssh-keygen -t rsa -C "xx@qq.com"(随便编个字符串，一般用邮箱）
ssh-copy-id -i ~/.ssh/id_rsa.pub work@xx.xx.xx.xx
```

以上两种方法人选其一退出重新用work登录，将不用再输入密码 

### 3. 安装必备软件
- Git
- docker
    - 安装docker  
    - docker 镜像加速
    - 安装docker-compose 
```
docker version
docker-compose --version
```

### 4. 开放端口 
- 开放需要的端口，否则外网无法访问该端口   
- 线上环境，只会开放nginx端口，使用nginx反向代理  

## 二、部署应用

###  1. 思路梳理
- 使用GitHub Actions监听master分支push
- 云服务器获取master分支最新代码
- 构建docker-compose 
- 重启容器

### 2. 配置deplay-linux.yml 
- 讲本地的id_rsa内容添加到github仓库的中的secrets   
- windows 复制id_rsa到github仓库的中的secrets经过传递会出现报错   
- 使用 `easingthemes/ssh-deploy@main` actions   
```
Load key "/home/runner/.ssh/id_rsa": invalid format
```




<Vssue title="Github Actions 发布到云服务器" />