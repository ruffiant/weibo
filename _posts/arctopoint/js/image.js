/**
 * Created by ruffian on 2017/12/7.
 * 图片处理
 */

//image类的构造函数
function Image_tool(){
    this.canvas=document.getElementById("img_canvas");
    this.ctx=this.canvas.getContext("2d");
    this.img=new Image();
    this.img_attr=new Array();
    this.draw();


}

//绘制照片
Image_tool.prototype.draw = function(){
    //draw on Canvas
    var img = new Image();
    var w,h;
    img.onload = function() {
        var ctx = tool.ctx;
        var canvas_imge=new Array();
        var scale=1;//图片缩放比例

        canvas_imge.with=tool.canvas.width-100-2*zone;
        canvas_imge.height=tool.canvas.height-100-2*zone;
        w=img.width;
        h=img.height;

        //工作区比例
        var scale=(canvas_imge.with-100)/canvas_imge.with;
        //等比缩小
        if((canvas_imge.with/scale/img.width)<(canvas_imge.height/scale/img.height)){
            scale=canvas_imge.with/scale/img.width;
        }else {
            scale=canvas_imge.height/scale/img.height;
        }

        if(scale<1){
            w=img.width*scale;
            h=img.height*scale;
        }

        //画大图用
        tool.img=img;

        tool.img_attr.x=(tool.canvas.width- canvas_imge.with)/2;
        tool.img_attr.y=(tool.canvas.height- canvas_imge.height)/2;

        tool.img_attr.w=w;
        tool.img_attr.h=h;

        var canvas_w = ctx.canvas.width;
        var canvas_h = ctx.canvas.height;
        ctx.clearRect(0, 0, canvas_w, canvas_h);
        //判断图片拍摄方向是否旋转了90度
        ctx.save(); //保存状态
        ctx.translate( 0,0); //设置画布上的(0,0)位置，也就是旋转的中心点
        ctx.rotate(0); //把画布旋转0度
        // 执行Canvas的drawImage语句
        ctx.globalCompositeOperation="destination-over"
        ctx.drawImage(img, tool.img_attr.x,tool.img_attr.y, w,h); //把图片绘制在画布translate之前的中心点，

        ctx.restore(); //恢复状态
        tool.draw_big();

    }
    img.src = $("#imgfile").attr("src");; // 设置图片源地址
}
//按照上次的图片的边绘制以zone为半径的圆
Image_tool.prototype.draw_big=function(){
    var img=tool.img;
    var img_attr=tool.img_attr;
    var ctx = tool.ctx;
    var imgData=ctx.getImageData(img_attr.x,img_attr.y,img_attr.w,img_attr.h);
    ctx.clearRect(img_attr.x,img_attr.y,img_attr.w,img_attr.h);
    ctx.globalAlpha = 0.1;
    ctx.strokeStyle="#000000";
    ctx.beginPath();


    for (var i=0;i<imgData.data.length;i+=4)
    {
        var start_x=centre.x/2-img_attr.x;
        var start_y=centre.y/2-img_attr.y;

         start_x+=(i/4)%img_attr.w;
         start_y+=Math.floor(i/4/img_attr.w);

        ////如果周围十字中有一个等于0则为边线,所以显示颜色
        //这个像素为不透明,上一个像素为透明,下一个像素不透明
        if(imgData.data[i+3]>0&&imgData.data[i-1]==0&&imgData.data[i+7]>0){
            ctx.arc(start_x,start_y ,zone,0,2*Math.PI);
        }else if(imgData.data[i+3]>0&&imgData.data[i-1]>0&&imgData.data[i+7]==0){
            ctx.arc(start_x,start_y,zone,0,2*Math.PI);
        }
    }
    ctx.stroke();


}



//Image_tool();
// Cat.prototype
