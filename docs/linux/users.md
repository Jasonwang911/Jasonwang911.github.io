---
title: Linux 用户（user）用户组（group）
date: 2022-02-07
categories:
 - 全栈知识
tags:
- linux
---


::: tip Linux 用户（user）用户组（group） 
一. linux 查看用户及用户组的方法     
二. 理解Linux的单用户多任务，多用户多任务概念   
三. 用户(user）和用户组（group）概念    
四. 用户（user）和用户组（group）相关的配置文件、命令或目录    
五. 文件权限学习   
:::


# 一. linux 查看用户及用户组的方法 
Linux 系统中用户信息存放在 `/etc/passwd` 文件中。

## 1. 查看方法

- **方法1** 使用 `/etc/passwd` 文件  
使用任何一个像 cat、more、less 等文件操作命令来打印 Linux 系统上创建的用户列表。  
`/etc/passwd` 是一个文本文件，其中包含了登录 Linux 系统所必需的每个用户的信息。它保存用户的有用信息，如用户名、密码、用户 ID、群组 ID、用户 ID 信息、用户的家目录和 Shell 。  
`/etc/passwd` 文件将每个用户的详细信息写为一行，其中包含七个字段，每个字段之间用冒号 `:` 分隔： 

```
cat /etc/passwd
```   
- 7 个字段的详细信息如下。   

    - 用户名 （magesh）： 已创建用户的用户名，字符长度 1 个到 12 个字符。    
    - 密码（x）：代表加密密码保存在 `/etc/shadow 文件中。
    - **用户 ID（506）：代表用户的 ID 号，每个用户都要有一个唯一的 ID 。UID 号为 0 的是为 root 用户保留的，UID 号 1 到 99 是为系统用户保留的，UID 号 100-999 是为系统账户和群组保留的。
    - **群组 ID （507）：代表群组的 ID 号，每个群组都要有一个唯一的 GID ，保存在 /etc/group文件中。
    - **用户信息（2g Admin - Magesh M）：代表描述字段，可以用来描述用户的信息（LCTT 译注：此处原文疑有误）。
    - **家目录（/home/mageshm）：代表用户的家目录。
    - **Shell（/bin/bash）：代表用户使用的 shell 类型。

- `awk` 或 `cut` 命令仅打印出 Linux 系统中所有用户的用户名列表。显示的结果是相同的。

```
awk -F':' '{ print $1}' /etc/passwd
# or
cut -d: -f1 /etc/passwd
root
bin
daemon
adm
lp
sync
```

- **方法2** 使用 `getent` 命令
`getent` 命令显示 Name Service Switch 库支持的数据库中的条目。这些库的配置文件为 `/etc/nsswitch.conf`。   

`getent` 命令显示类似于 `/etc/passwd` 文件的用户详细信息，它将每个用户详细信息显示为包含七个字段的单行。   

```
getent passwd
```

- **方法3** 使用 `compgen` 命令
`compgen` 是 `bash` 的内置命令，它将显示所有可用的命令，别名和函数。   
```
compgen -u
```






<Vssue title="Linux 用户（user）用户组（group）" />