/**
 * Created by ruffian on 2017/10/25.
 * 需要转义的符合
 * \   反斜线
     `   反引号
     *   星号
     _   底线
     {}  花括号
     []  方括号
     ()  括弧
     #   井字号
     +   加号
     -   减号
     .   英文句点
     !   惊叹号
 */

$(function() {
    $.fn.extend({
        insertAtCaret: function(myValue) {
            var $t = $(this)[0];

                if ($t.selectionStart || $t.selectionStart == '0') {
                    var startPos = $t.selectionStart;
                    var endPos = $t.selectionEnd;
                    var scrollTop = $t.scrollTop;
                    //如果内容被选中
                    if(startPos!==endPos){
                        var text_array=new Array;
                        var my_html="";

                        //选中内容
                        var selectedText = window.getSelection().toString();

                        //包含html_str的字符串每行格式化,否则按块格式
                        if(myValue.indexOf("html_str") >0){
                            selectedText=selectedText.replace(/[\r\n]/g,"|");
                            text_array=selectedText.split("|");
                            var l=text_array.length;
                            for(var i=0;i<l;i++){
                                my_html+= myValue.replace(/html_str/, text_array[i]);
                                if(i<l-1){
                                    my_html+="\r\n";
                                }
                            }

                        }else {
                            my_html+= myValue.replace(/code_str/, selectedText);
                        }
                        myValue=my_html;
                    }
                    $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
                    this.focus();
                    $t.selectionStart = startPos + myValue.length;
                    $t.selectionEnd = startPos + myValue.length;
                    $t.scrollTop = scrollTop;
                }
                this.value += myValue;

        }
    })

});
//标题
/*
* 变量 {#a}
* =
* 现在的标题如上,没有追寻markdown语法
* */
var h=function(i){
    var html_str="";
    var h_str="";
    for(var j=0;j<i;j++){
        h_str+="#";
    }
    html_str+="\r\n";
    html_str+=h_str+"code_str\r\n";
    html_str+="===============\r\n";
    $("#editor").insertAtCaret(html_str);
}
//头标签
var head_tag =function(){
    $("#editor").insertAtCaret(head_tag_str);
}

//引言
var blockquotes=function(){
    var html_str=">html_str";
    //html_str+=">>\r\n";
    //html_str+=">>>\r\n";
    $("#editor").insertAtCaret(html_str);
}
var w_content=function(){
    var html_str="* content\r\n";
    html_str+="{:toc}\r\n";

    $("#editor").insertAtCaret(html_str);
}
var w_image=function(){
    //var html_str="![html_str]({{ '/styles/images/' | prepend: site.baseurl  }})";
    var html_str="![html_str]({{ ''}})";

    $("#editor").insertAtCaret(html_str);
}
//有序表
var byorder=function(){
    var html_str="   1.html_str";
    $("#editor").insertAtCaret(html_str);
}
//无序表
var unorder=function(){
    var html_str="   *.html_str";
    $("#editor").insertAtCaret(html_str);
}
//代码块为一个制表符或四个空格
var codeing=function(){
    var html_str="      html_str";
    $("#editor").insertAtCaret(html_str);
}
//分割线
var write_line=function(){
    var html_str="==========================";
    $("#editor").insertAtCaret(html_str);
}
//超级链接
//链接内容定义的形式为：
//
//方括号（前面可以选择性地加上至多三个空格来缩进），里面输入链接文字
//接着一个冒号
//接着一个以上的空格或制表符
//接着链接的网址
//选择性地接着 title 内容，可以用单引号、双引号或是括弧包着
var w_herf=function(){
   // var html_str='[题目](html_str "备注")';
    var html_str='[html_str]({{ "/styles/book/" | prepend: site.baseurl  }} "备注")';
    $("#editor").insertAtCaret(html_str);
}
var w_em=function(){
    var html_str='*html_str*';
    $("#editor").insertAtCaret(html_str);
}
var w_strong=function(){
    var html_str='**html_str**';
    $("#editor").insertAtCaret(html_str);
}
//行内代码
var line_code=function(){
    var html_str='`html_str`';
    $("#editor").insertAtCaret(html_str);
}
//图片
var w_img=function(){

    var html_str=' ![html_str](/path/to/img.jpg "Optional title")';
    $("#editor").insertAtCaret(html_str);
}
//高亮这个是jekyll特意
var w_highlight=function(){
    var html_str="{% highlight PHP %}\r\n";
    html_str+="code_str\r\n";
    html_str+="{% endhighlight %}\r\n";

    $("#editor").insertAtCaret(html_str);
}


