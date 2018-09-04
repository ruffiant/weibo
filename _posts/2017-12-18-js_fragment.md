---
layout: post
title:  js实用的代码片段
date: 2017-12-18 13:32:44   +0800
categories: [前端] 
tag: [js] 
---


#获取鼠标坐标
===============

{% highlight js%}
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
