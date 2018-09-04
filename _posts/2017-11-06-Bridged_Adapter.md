---
layout: post
title:  Windows中VirtualBox虚拟机实现桥接方式(Bridged+Adapter)
date:    2017-11-6 16:42:17 +0800
categories: [系统] 
tag: [虚拟机] 
---
* content
{:toc}


      安装完虚拟机默认是NAT网络连接,主机不能访问虚拟机.
      所以需要选择桥接模式
      在此之前需要安装一个服务器

==========================

      本地网络>>>本地连接>>>属性>>>安装>>>服务 >>>添加>>>从磁盘安装>>>选择文件(
      D:\Program Files\Oracle\VirtualBox\drivers\network\netlwf/VBoxNetLwf.inf
      )安装,
==========================
之后在VirtualBox 设置>>>网络>>>网卡选择>>>桥接网卡就好了