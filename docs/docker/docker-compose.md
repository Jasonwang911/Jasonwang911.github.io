---
title: Docker compose 笔记
date: 2022-02-11
categories:
 - 全栈知识
tags:
 - docker
 - linux
---

<Boxx type="warning" changeTime="30000"  /> 


# Docker compose
1. 基于docker和docker-compose     
2. 通过一个配置文件，就可以让你的系统一键启动所有的运行环境: eg node mysql mongodb redis    

# 主要概念
> 软件设计和开发，有单一职责原则。Docker也一样，每个容器都只负责一个服务      
> 如果开发环境需要多个服务（node mysql nongodb redis），就需要启动多个Docker容器    
> 要连同这多个docker容器，就需要docker-compose   

## 安装
1. pip 安装   
```
yum install python-pip   
yum -y install epel-release   
yum -y install python-pip   
pip --version    
pip install --upgrade pip   
```

如果报错执行以下操作  

```
# Command "python setup.py egg_info" failed with error code 1 in /tmp/pip-build-A5acXn/importlib-metadata/   
rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm

yum -y install python3-pip -y    

pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U    

# 重启机器     
reboot
   
pip --version  
```

2. 安装 docker-compose    
```
pip install docker-compose    

docker-compose version   
```

## 配置文件    
新建 docker-compose.yml 文件    


## 常用命令
1. 构建容器 docker-compose build service-name
2. 启动所有服务器 docker-compose up -d  后台启动 -d
3. 停止所有服务 docker-compose down
4. 查看服务（当前docker-compose配置文件下的所有服务） docker-compose ps

# 使用

### docker-compose 配置 MySQL 


### docker-compose 配置 Mongodb