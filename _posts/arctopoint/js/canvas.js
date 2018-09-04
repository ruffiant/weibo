/**
 * Created by ruffian on 2017/12/7.
 * 画板对象 x,y 坐标轴
 */
function Canvas(){
    this.canvas=document.getElementById("xy_canvas");
    this.ctx=this.canvas.getContext("2d");
    this.centre=new Array();
    this.centre.x=centre.x;
    this.centre.y=centre.y;
    this.page=new Array();
    this.page.x=0;//圆心偏移
    this.page.y=0;
    this.centre_arc_r=5;//圆半径
    this.moveing=false;
    this.width=centre.x*2;
    this.height=centre.y*2;


}

Canvas.prototype.listen=function(){
    var con=document.getElementById("conent");
    con.addEventListener("mousedown", function(e){
        canvas.canvasClick(e);
    });
    con.addEventListener("mouseover", function(e){
        canvas.dragCircle(e);
    });
    con.addEventListener("mousemove", function(e){
        canvas.dragCircle(e);
    });
    con.addEventListener("mouseup", function(e){
        canvas.stop(e);
    });
    con.addEventListener("mouseout", function(e){
        canvas.stop(e);
    });
}
//画坐标轴
Canvas.prototype.axis = function(x,y){

    // 清除画布，准备绘制
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.ctx.beginPath();
    canvas.ctx.strokeStyle = "#2F8409";
    canvas.ctx.arc(x,y,this.centre_arc_r,0,this.centre_arc_r*Math.PI);
    canvas.ctx.stroke();
    //x轴
    canvas.line(x,y,this.width-x,0);//第一象限
    canvas.line(this.width,y,-10,-10);
    canvas.line(this.width,y,-10,10);

    canvas.line(x,y,-x,0);//第三象限
    //y轴
    canvas.line(x,y,0,this.height-y);//第四象限

    canvas.line(x,y,0,-y);//第二象限
    canvas.line(x,y-y,10,10);
    canvas.line(x,y-y,-10,10);
    //重新定位原点
    canvas.centre.x=x;
    canvas.centre.y=y;
    centre.x=x;
    centre.y=y;


}
Canvas.prototype.stop=function(e) {
    canvas.moveing=false;
}
Canvas.prototype.canvasClick=function(e) {
    // 取得画布上被单击的点
    var clickX = e.offsetX;
    var clickY = e.offsetY;

    //判断是否单击中心坐标
    if(Math.abs(clickX-canvas.centre.x)<=canvas.centre_arc_r && Math.abs(clickY-canvas.centre.y)<=canvas.centre_arc_r  ){
       // canvas.dragCircle();
        canvas.moveing=true;
    }
    //判断是否单击其中的一个线
}

Canvas.prototype.line = function(x,y,sx,sy){
    canvas.ctx.beginPath();
    canvas.ctx.strokeStyle = "#2F8409";
    canvas.ctx.moveTo(x,y);
    canvas.ctx.lineTo(x+sx,y+sy);
    canvas.ctx.globalAlpha=0.5;
    canvas.ctx.stroke();
}
Canvas.prototype.dragCircle=function(e){
    var x = e.offsetX;
    var y = e.offsetY;

   // document.getElementsByTagName('span')[0].innerHTML = "当前位置：X轴"+ x +" Y轴"+y+"";
  //  console.log("当前位置：X轴"+ x +" Y轴"+y+"");
    if(canvas.moveing){
        canvas.axis(x,y);
    }

}

var canvas=new Canvas();
canvas.axis(canvas.centre.x,canvas.centre.y);
canvas.listen();

