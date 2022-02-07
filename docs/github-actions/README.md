---
title: Github Actions
date: 2022-02-07
categories:
 - 全栈知识
tags:
- 前端工程
- linux
sticky: 1
---

# Github Actions  
Github actions 是2019年秋天github发布的CI/CD工具，高效稳定，功能抢答，易学易用
> 自动化构建和测试
> 接口测试，依赖于测试机搭建

## 1. 使用
> [官方文档](https://docs.github.com/en/actions)    
> 在项目根目录创建 .github/workflows 文件夹，并创建对应的 yml文件   


### 2. 应用场景 
- master 分支，自动化测试    
- dev 分支，自动部署到测试机    
- v*.*.* 格式的tag，自动上线，支持回滚    

### 3. 名词
1. 触发条件 on
- push
- branches
- paths   
  可以使用多个，在当前条件文件夹下有改动才进行触发 
```
on: 
  push: 
    branches: 
      - master
      - dev
    paths: 
      - '.github/workflows/**'
      - 'docs/**'
```

2. 任务 job
- runs-on 每个jobs要指定一个 runs-on，用来指定环境

3. 步骤 steps 可以自定义，亦可以使用第三方
- 每个step需要使用 - 开头    
- uses 使用的actions
> actions/checkout@master  执行 git pull,第三方的actions，拉取源码。     
> actions/setup-node@v1  # 安装nodejs，第三方的actions  

- name 标注名称   

- with 使用版本   

- run 自定义的命令  

```
name: test 

on:   # 触发条件 
  push: 
    branches:
      - master
    paths:   #  在哪个目录下触发才会构建
      - '.github/workflows/**'
      - '__test__/**'
      - 'src/**'

jobs:    # 可以定义多个
  test: 
    runs-on: ubuntu-latest  # 运行环境

    steps: 
      - uses: actions/checkout@v2    # 使用第三方的action
      - name: Use Node.js
        uses: actions/setup-node@v1
        with: 
          node-version: 14
      - name: lint and test
        run: |
          npm install 
          npm run lint
          npm run test:remote
```

### 4. 自动化测试
- pre-commit 时执行本地接口测试   `npm run test:local`  
- master push 时执行远程接口测试   `npm run test:remote`


