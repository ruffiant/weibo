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
        insertAtCaret: function(myValue){
            var $t=$(this)[0];
            if (document.selection) {
                this.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
            }
            else
            if ($t.selectionStart || $t.selectionStart == '0') {
                var startPos = $t.selectionStart;
                var endPos = $t.selectionEnd;
                var scrollTop = $t.scrollTop;
                $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
                this.focus();
                $t.selectionStart = startPos + myValue.length;
                $t.selectionEnd = startPos + myValue.length;
                $t.scrollTop = scrollTop;
            }
            else {
                this.value += myValue;
                this.focus();
            }
        }
    })
});
//标题
var h=function(i){
    var html_str="";
    for(var j=0;j<i;j++){
        html_str+="#";
    }
    html_str="{"+html_str+"}";
    $("#editor").insertAtCaret(html_str);
}
//头标签
var head_tag =function(){
    $("#editor").insertAtCaret(head_tag_str);
}

//引言
var blockquotes=function(){
    var html_str=">\r\n";
    html_str+=">>\r\n";
    html_str+=">>>\r\n";
    $("#editor").insertAtCaret(html_str);
}
var w_content=function(){
    var html_str="* content\r\n";
    html_str+="{:toc}\r\n";

    $("#editor").insertAtCaret(html_str);
}
var w_content=function(){
    var html_str="{{ '/styles/images/jiezishu.jpg' | prepend: site.baseurl  }}";
    $("#editor").insertAtCaret(html_str);
}
//有序表
var byorder=function(){
    var html_str="   1.";
    $("#editor").insertAtCaret(html_str);
}
//无序表
var unorder=function(){
    var html_str="   *.";
    $("#editor").insertAtCaret(html_str);
}
//代码块为一个制表符或四个空格
var codeing=function(){
    var html_str="      ";
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
    var html_str='[ruffian](http://example.com/ "Title")';
    $("#editor").insertAtCaret(html_str);
}
var w_em=function(){
    var html_str='*str*';
    $("#editor").insertAtCaret(html_str);
}
var w_strong=function(){
    var html_str='**str**';
    $("#editor").insertAtCaret(html_str);
}
//行内代码

var line_code=function(){
    var html_str='`printf()`';
    $("#editor").insertAtCaret(html_str);
}
//图片
var w_img=function(){

    var html_str=' ![str](/path/to/img.jpg "Optional title")';
    $("#editor").insertAtCaret(html_str);
}
//高亮这个是jekyll特意
var w_highlight=function(){
    var html_str="{% highlight PHP %}\r\n";
    html_str+="code\r\n";
    html_str+="{% endhighlight %}\r\n";

    $("#editor").insertAtCaret(html_str);
}


