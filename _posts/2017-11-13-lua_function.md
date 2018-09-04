---
layout: post
title:  lua 常用函数记录
date:    2017-11-13 11:49:54+0800
categories: [游戏] 
tag: [lua] 
---

* content
{:toc}


#点击事件监听
===============

点击事件监听不成功
   local listener = cc.EventListenerTouchOneByOne:create(); 
       listener:registerScriptHandler(self:call_back(),cc.Handler.EVENT_TOUCH_BEGAN); 
按钮事件监听成功
local btn = self:getResourceNode():getChildByName("Button_1")
  btn:addClickEventListener(function(sender)
   -- self:move_img(img,480,320)
       self:left_right(img,3)
    end)

