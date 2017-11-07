/**
 * Created by ruffian on 2017/10/23.
 */


$(function() {
    $('#editControls a').click(function(e) {
        switch($(this).data('role')) {
            case 'h1':
            case 'h2':
            case 'p':
                document.execCommand('formatBlock', false, '<' + $(this).data('role') + '>');
                break;
            default:
                document.execCommand($(this).data('role'), false, null);
                break;
        }

    })


    var file_name=$_GET['file'];
    if(file_name!==''&&file_name!==undefined){
        get_github_con(file_name);
        $("#file_name").val(file_name);
       // console.log(file_name);
    }
    $("#class_s_zoom").hide();
    $("#class_f_zoom").hide();
    var data = (new Date()).Format("yyyy-MM-dd");
    $("#title_input").val(data+'-');



});
var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

//读取本地文件
function openfile(files) {
    var nBytes = 0,nFiles = files.length;
    for (var nFileId = 0; nFileId < nFiles; nFileId++) {
        nBytes += files[nFileId].size;
        //读取文件
        var fr = new FileReader();
        fr.onloadend = function(e) {
            var text= e.target.result;
            $("#editor").html(text);
        };
        fr.readAsText(files[nFileId]);
    }
}
//下载内容
function writefile(){
    ///////////////
    var content="";
    var title=$("#title_input").val()
    var a = document.createElement('a');
    var file_name="";
    //加入文本换行
    var content=$("#editor").val();
    var content=content.replace(/[\r\n]/g,"\r\n");
    if(title!==""&&title!=="标题"){
        //var now=new Date();
        //var month=now.getMonth()+1;
        //var date=now.getDate();
        //month=month<10?"0"+month:month;
        //date=date<10?"0"+date:date;

        file_name=title+".md";
    }else {
        file_name=$("#file_name").val()
    }
    var file = new File([content], "", {
        type: "text/plain",
    });
    var reader  = new FileReader();
    reader.onloadend = function (e) {
        if(this.readyState == FileReader.DONE) {
            a.href = reader.result;
            a.textContent =reader.result;
            a.download=file_name
            a.click();
            window.URL.revokeObjectURL(reader.result);
        }
    };
    if (file) {
        var b=reader.readAsDataURL(file);
      //  console.log(b);
    }
}
//路径转blob对象
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
}

//url,转成dataurl
function urlToDataurl(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            console.log(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

function get_github_con($file_name){
    var url=post_url;//github weibo/_posts下面的内容
    var content;
    var content_64;
    //Ajax调用处理

    url= url.replace(/{file_name}/, $file_name);
    $.ajax({
        type: "get",
        url: url,
        data: "",
        async:false,
        success: function(d){
            content_64= d.content;
        }
    });
    content=  utf8to16(base64decode(content_64)) ;
   $("#editor").html(content);
}
function get_class_f(){
    $("#class_f_zoom").toggle();
    $("#class_s_zoom").hide();
}
function get_class_s(){
    $("#class_f_zoom").hide();
    $("#class_s_zoom").toggle();
}
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}