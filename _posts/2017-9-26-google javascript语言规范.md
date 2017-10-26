变量{###}
声明变量必须加上 var 关键字.
当你没有写 var, 变量就会暴露在全局上下文中, 这样很可能会和现有变量冲突.
另外, 如果没有加上, 很难明确该变量的作用域是什么, 变量也很可能像在局部作用域中, 很轻易地泄漏到 Document 或者 Window 中,
所以务必用 var 去声明
变量.{###}
常量的形式如: NAMES_LIKE_THIS, 即使用大写字符, 并用下划线分隔.
你也可用 @const 标记来指明它是一个常量.
但请永远不要使用 const 关键词.
对于基本类型的常量, 只需转换命名.
{% highlight PHP %}
      /**
       * The number of seconds in a minute.
       * @type {number}
       */
      goog.example.SECONDS_IN_A_MINUTE = 60;
{% endhighlight %}


   
   
   