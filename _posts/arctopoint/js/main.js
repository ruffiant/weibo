/**
 * Created by ruffian on 2017/12/7.
 * 主函数
 */
//上传图片显示在canvas
var tool;
var centre=new Array();
centre.x=500;
centre.y=500;
var zone=20;//碰撞区半径
//上传图片
function upfile(obj){
    var img_src=getObjectURL(obj.files[0]);
    $("#imgfile").attr("src",img_src);
    tool=new Image_tool();
}
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file)
    }
    return url
};
//删除数组某元素
function unset(array_s,key){
    for(var i in array_s){
        if(i==key){
            delete array_s[i];
            return array_s;
        }
    }
    return array_s;
}
//生成弧线数据
function write_lines(){
    var html_str="{";
    var html_str_1="{";
    var html_arr=new Array();
    var i=0;
    //以x轴为标准分上下
    for(var key in lines.list){
        var point,arc_r, x,y;
        html_arr[i]=new Array();
        x=lines.list[key].x;
        y=lines.list[key].y;
        //角度
        point=Math.atan2(Math.abs(y-centre.y) ,x-centre.x);
        //半径 平方
        arc_r=Math.pow(Math.abs(y-centre.y),2)+Math.pow(Math.abs(x-centre.x),2);
        html_arr[i]["arc_r"]=arc_r;
        html_arr[i]["point"]=lines.list[key].y>centre.y?point:-point;
        html_str+="\""+i+"\":{\"point\":\""+point+"\",\"arc_r\":\""+arc_r+"\"},";
        html_str_1+="\""+i+"\":{\"x\":\""+x+"\",\"y\":\""+y+"\"},";
        i++;
    }
    html_str+="}";
    html_str_1+="}";
    $("#result").html(html_str);
    $("#result_1").html(html_str_1);
    writefile('result');
    writefile('result_1');

}
//生成圆形json
function write_arc(){
    console.log(grape.list);
    var html_str="{";
    var html_str_1="{";

    var html_arr=new Array();
    var i=0;
    //以x轴为标准分上下
    for(var key in grape.list){
        var  x, y,r;
        html_arr[i]=new Array();
        x=grape.list[key].x;
        y=grape.list[key].y;
        r= Math.pow(grape.list[key].r,2);

        html_str+="\""+i+"\":{\"x\":\""+x+"\",\"y\":\""+y+"\",\"r\":\""+r+"\"},";
        html_str_1+="\""+i+"\":{\"x\":\""+x+"\",\"y\":\""+y+"\",\"r\":\""+grape.list[key].r+"\"},";
        i++;
    }
    html_str+="}";
    html_str_1+="}";
    $("#result").html(html_str);
    $("#result_1").html(html_str_1);
    writefile("result");
    writefile("result_1");
}
//根据坐标画图
function draw_point(){
    var html_str=$("#points").val();
    if(html_str==""||html_str=="json串生成坐标系"){
        alert("请在下面填入json字符串");
        return;
    }
    var point_arr=new Array();
    point_arr=eval('(' + html_str + ')');

    lines.list=point_arr;
    lines.draw_all();

}
//根据圆形数据画圆
function set_arc(){
  var html_str=$("#arc_xy").val();
    if(html_str==""||html_str=="json生成坐标系"){
        alert("请在下面填入json字符串");
        return;
    }
    var arc_arr=new Array();
    arc_arr=eval('(' + html_str + ')');
    grape.list=arc_arr;
    grape.draw_all();
}
//下载内容
function writefile(file_id) {
    var content = "";
    var a = document.createElement('a');
    var file_name = "";
    //加入文本换行
    var content = $("#"+file_id).html();

        var now=new Date();
        var month=now.getMonth()+1;
        var date=now.getDate();
        var m=now.getSeconds();
        month=month<10?"0"+month:month;
        date=date<10?"0"+date:date;
    if(file_id=="result"){
        file_name=month+"_"+date+"_"+m+"_gamejson.txt";
    }else {
        file_name=month+"_"+date+"_"+m+"_gamejson_bak.txt";
    }

    var file = new File([content], "", {
        type: "text/plain",
    });
    var reader = new FileReader();
    reader.onloadend = function(e) {
        if (this.readyState == FileReader.DONE) {
            a.href = reader.result;
            a.textContent = reader.result;
            a.download = file_name
            a.click();
            window.URL.revokeObjectURL(reader.result);
        }
    };
    if (file) {
        var b = reader.readAsDataURL(file);
        //  console.log(b);
    }
}
