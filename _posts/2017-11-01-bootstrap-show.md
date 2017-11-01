 ---
layout: post
title:  bootstrap-对于不同设备实现某一div块的自动隐藏或者显示
date:    2017-11-1 09:41:41 +0800
categories: [前端] 
tag: [css,bootstrap] 
---

* content
{:toc}


#bootstrap-对于不同设备实现某一div块的自动隐藏或者显示
===============
      
      使用bootstrap，想实现相对于不同设备实现某一div块的自动隐藏或者显示，如下：
      Bootstrap 提供了一些辅助类，以便更快地实现对移动设备友好的开发。这些可以通过媒体查询结合大型、小型和中型设备，实现内容对设备的显示和隐藏。
      需要谨慎使用这些工具，避免在同一个站点创建完全不同的版本。响应式实用工具目前只适用于块和表切换。
       	超小屏幕
      手机 (<768px)	小屏幕 平板 (≥768px)	中等屏幕 桌面 (≥992px)	大屏幕 桌面 (≥1200px)
      .visible-xs-*	可见	隐藏	隐藏	隐藏
      
      .visible-sm-*	隐藏	可见	隐藏	隐藏
      
      .visible-md-*	隐藏	隐藏	可见	隐藏
      
      .visible-lg-*	隐藏	隐藏	隐藏	可见
      
      .hidden-xs	隐藏	可见	可见	可见
      .hidden-sm	可见	隐藏	可见	可见
      .hidden-md	可见	可见	隐藏	可见
      .hidden-lg	可见	可见	可见	隐藏
      从 v3.2.0 版本起，形如 .visible-*-* 的类针对每种屏幕大小都有了三种变体，每个针对 CSS 中不同的 display 属性，列表如下：
      类组	CSS display
      .visible-*-block	display: block;
      .visible-*-inline	display: inline;
      .visible-*-inline-block	display: inline-block;
      因此，以超小屏幕（xs）为例，可用的 .visible-*-* 类是：.visible-xs-block、.visible-xs-inline 和 .visible-xs-inline-block。
      .visible-xs、.visible-sm、.visible-md 和 .visible-lg 类也同时存在。但是从 v3.2.0 版本开始不再建议使用。

