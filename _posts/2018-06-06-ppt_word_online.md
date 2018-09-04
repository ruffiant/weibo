---
layout: post
title:  前端实现在线预览pdf、word、xls、ppt等文件
date:    2018-9-4 15:32:19
categories: [js] 
tag: [前端] 
---

* content
{:toc}




#1、前端实现pdf文件在线预览功能
===============

      方式一、pdf文件理论上可以在浏览器直接打开预览但是需要打开新页面。在仅仅是预览pdf文件且UI要求不高的情况下可以直接通过a标签href属性实现预览
      
      <a href="文档地址"></a>
      方式二、通过jquery插件jquery.media.js实现
      这个插件可以实现pdf预览功能（包括其他各种媒体文件）但是对word等类型的文件无能为力。
      实现方式：
      js代码：
      <script type="text/javascript" src="jquery-1.7.1.min.js"></script>  
      <script type="text/javascript" src="jquery.media.js"></script>
      html结构：
            <body>
                <div id="handout_wrap_inner"></div>
            </body>
      调用方式：
      <script type="text/javascript">  
       $('#handout_wrap_inner').media({
      		width: '100%',
      		height: '100%',
      		autoplay: true,
              src:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
                  }); 
      </script>
      方式三、直接通过页面内嵌iframe
      
      作者：极速蜗牛
      链接：https://juejin.im/post/5a7badf26fb9a063353198a1
      来源：掘金
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      
      $("<iframe src='"+ this.previewUrl +"' width='100%' height='362px' frameborder='1'>").appendTo($(".video-handouts-preview"));
      
      此外还可以在iframe标签之间提供一个提示类似这样
      <iframe :src="previewUrl" width="100%" height="100%">
      
      This browser does not support PDFs. Please download the PDF to view it: <a :href="previewUrl">Download PDF</a>
      
      </iframe>
      
      方式四、通过标签嵌入内容
      <embed :src="previewUrl" type="application/pdf" width="100%" height="100%">
      此标签h5特性中包含四个属性：高、宽、类型、预览文件src！
      与< iframe > < / iframe > 不同，这个标签是自闭合的的，也就是说如果浏览器不支持PDF的嵌入，那么这个标签的内容什么都看不到！
      方式五、标签和iframe使用差别较小
      <object :src="previewUrl" width="100%" height="100%">
      
      This browser does not support PDFs. Please download the PDF to view it: <a :href="previewUrl">Download PDF</a>
      
      </object>
      

#除方式二以外其他都是直接通过标签将内容引入页面实现预览
===============
      
              方式六、PDFObject
            PDFObject实际上也是通过标签实现的直接上代码
            <!DOCTYPE html>
            <html>
            <head>
                <title>Show PDF</title>
                <meta charset="utf-8" />
                <script type="text/javascript" src='pdfobject.min.js'></script>
                <style type="text/css">
                    html,body,#pdf_viewer{
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        padding: 0;
                    }
                </style>
            </head>
            <body>
                <div id="pdf_viewer"></div>
            </body>
            <script type="text/javascript">
                if(PDFObject.supportsPDFs){
                    // PDF嵌入到网页
                    PDFObject.embed("index.pdf", "#pdf_viewer" );
                } else {
                    location.href = "/canvas";
                }
            </script>
            </html>
            还可以通过以下代码进行判断是否支持PDFObject预览
            if(PDFObject.supportsPDFs){
               console.log("Yay, this browser supports inline PDFs.");
            } else {
               console.log("Boo, inline PDFs are not supported by this browser");
            }
            方式七、PDF.js
            PDF.js可以实现在html下直接浏览pdf文档，是一款开源的pdf文档读取解析插件，非常强大，能将PDF文件渲染成Canvas。PDF.js主要包含两个库文件，一个pdf.js和一个pdf.worker.js，一个负责API解析，一个负责核心解析。
            2、word、xls、ppt文件在线预览功能
            word、ppt、xls文件实现在线预览的方式比较简单可以直接通过调用微软的在线预览功能实现 (预览前提：资源必须是公共可访问的)
            <iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls' width='100%' height='100%' frameborder='1'>
            			</iframe>
      
      
      src就是要实现预览的文件地址
      具体文档看这微软接口文档
      补充：google的文档在线预览实现同微软（资源必须是公共可访问的）
      <iframe :src="'https://docs.google.com/viewer?url="fileurl"></iframe>
      3、word文件
      XDOC可以实现预览以DataURI表示的DOC文档，此外XDOC还可以实现文本、带参数文本、html文本、json文本、公文等在线预览，具体实现方法请看官方文档
      下面这种方式可以实现快速预览word但是对文件使用的编辑器可能会有一些限制
      <a href="http://www.xdocin.com/xdoc?_func=to&amp;_format=html&amp;_cache=1&amp;_xdoc=http://www.xdocin.com/demo/demo.docx" target="_blank" rel="nofollow">XDOC</a>
      4、excel文件
      目前excel文件已经有了类似pdf.js那样的解析sheet.js
      总结：
      1、免费纯前端方式实现在线预览word、excel、ppt最优选择微软在线预览（不可编辑）
      2、利用后端将文件转为图片，前端以图片形式预览（可行方案）
      3、购买在线预览服务例如百度DOC文档服务、永中、I DOC VIEW等
      
      作者：极速蜗牛
      链接：https://juejin.im/post/5a7badf26fb9a063353198a1
      来源：掘金
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
    
转载来自:
作者：极速蜗牛
链接：https://juejin.im/post/5a7badf26fb9a063353198a1
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


