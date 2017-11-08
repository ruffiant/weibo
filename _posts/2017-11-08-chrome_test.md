---
layout: post
title:  chrome_测试
date:    +0800
categories: [测试] 
tag: [chrome] 
---
* content
{:toc}


#监测事件
===============

      
      当你需要监视某个DOM触发的事件时，也可以用到控制台。例如下面这些方法：
      
      monitorEvents($('selector')) 会监测某个元素上绑定的所有事件，一旦该元素的某个事件被触发就会在控制台里显示出来。
      monitorEvents($('selector'),'eventName') 可以监听某个元素上绑定的具体事件。第二个参数代表事件类型的名称。例如 monitorEvents($('#firstName'),'click') 只监测ID为firstName的元素上的click事件。
      monitorEvents($('selector'),['eventName1','eventName3',….]) 同上。可以同时检测具体指定的多个事件类型。
      unmonitorEvents($('selector')) 用来停止对某个元素的事件监测。