---
layout: post
title:  贝塞尔应用获取坐标画图
date:   2017-12-6 16:35:57 +0800
categories: [前端] 
tag: [js] 
---

* content
{:toc}

canvas 话贝塞尔曲线,根据曲线求坐标,根据坐标话图

>https://github.com/ruffiant/weibo/tree/gh-pages/_posts/getpoints

      获取鼠标坐标
      {% highlight js %}
document.body.addEventListener("mousemove", function() {place(event)});
      
      <body style="height: 1000px;width: 1200px">
      <span></span>
      
      
      function place(e){
          var x = e.clientX;
          var y = e.clientY;
          document.getElementsByTagName('span')[0].innerHTML = "当前位置：X轴"+ x +" Y轴"+y+"";
          console.log("当前位置：X轴"+ x +" Y轴"+y+"");
      }
{% endhighlight %}

      