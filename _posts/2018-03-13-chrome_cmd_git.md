---
layout: post
title:  一个git自动提交的插件
date:    2018-3-13 15:21:11+0800
categories: [系统] 
tag: [chrome] 
---
前提:本地需要安装git,和小乌龟git
把线上git,weibo下载到本地,注意分支是gh-pages,

这个是一个chrome扩展程序,作用是执行cmd,打开记事本
插件位置在 Chrome\Application\63.0.3239.132\default_apps
1.打开chrome扩展程序,选中开发者模式
2.[加载已解压的扩展程序],选中demo包,获取id例如{gfflfnfndpfhajceciajphhgcahbfcde}
并修改com.google.chrome.git-win.json 文件对应配置

3.修改 demo.reg下面路径为demo路径
4.执行demo.reg.
5.重新加载demo扩展.打开记事本为成功

参考http://blog.csdn.net/zjqlovelyy/article/details/40183643

native_cmd.bat 打开记事本
======================================
git.ini为git项目路径相关配置
INIReader.bat 读取ini文件