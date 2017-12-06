var canvas=document.getElementById('canvas');
var cxt=canvas.getContext('2d');


//获取工具按钮的标签
//选择
var Select=document.getElementById('shape_select');

//获取形状按钮的标签
//获取画线标签
var Line=document.getElementById('shape_line');

//把12个工具和形状标签放到一个数组中
var actions=[Line,Select];

//设置初始值 
//默认选中画笔工具
drawBrush(0);
//状态设置函数
function setStatus(Arr,num,type){
    for(var i=0;i<Arr.length;i++){
        //设置选中的标签改变CSS属性
        if(i==num){
            //设置改变CSS的样式是背景色还是边框
            if(type==1){
                Arr[i].style.background="yellow";
            }else{
                Arr[i].style.border="1px solid #fff";
            }

        }else{//设置未选中的组中的其他标签改变颜色
            if(type==1){
                Arr[i].style.background="#ccc";
            }else{
                Arr[i].style.border="1px solid #000";
            }
        }
    }

}

//设置图像功能函数  保存图片  清空画布
function saveimg(){
    var imgdata=canvas.toDataURL();
    var b64=imgdata.substring(22);
    //alert(b64);
    //将form表单中的隐藏表单 赋值(值就是我们获取的b64)
    var data=document.getElementById('data');
    data.value=b64;
    //将表单提交到后台//http://localhost/down.php
    var form=document.getElementById('myform');
    form.submit();
}
//清空画布
function clearimg(){
    //画布清除方法
    cxt.clearRect(0,0,880,400);
}

//列出所有的按钮对应的函数
////铅笔工具函数
//function drawBrush(num){
//    setStatus(actions,num,1);
//    var flag=0;//设置标志位->检测鼠标是否按下
//    canvas.onmousedown=function(evt){
//        evt=window.event||evt;
//        var startX=evt.pageX-this.offsetLeft;
//        var startY=evt.pageY-this.offsetTop;
//        cxt.beginPath();
//        cxt.moveTo(startX,startY);
//        flag=1;
//    }
//
//    //鼠标移动的时候->不同的绘图(获取鼠标的位置)
//    canvas.onmousemove=function(evt){
//        evt=window.event||evt;
//        var endX=evt.pageX-this.offsetLeft;
//        var endY=evt.pageY-this.offsetTop;
//        //判断一下鼠标是否按下
//        if(flag){
//            //移动的时候设置路径并且画出来
//            cxt.lineTo(endX,endY);
//            cxt.stroke();
//        }
//
//    }
//
//    //鼠标抬起的时候结束绘图
//    canvas.onmouseup=function(){
//        flag=0;
//    }
//
//    //鼠标移出canvas的时候必须取消画图操作
//    canvas.onmouseout=function(){
//        flag=0;
//    }
//}






