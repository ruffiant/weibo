/**
 * Created by ruffian on 2017/12/12.
 * 画一个中点到某坐标的线,并顺时针画一个到上一个节点的弧线,
 * 求该线到x轴的的角度
 * 点击down
 * 删除值,当前值为鼠标
 * move
 * 根据当前值移动
 * up
 *释放当前值
 * 给list添加
 * 绘制list
 */
function Lines(){
    this.canvas=document.getElementById("xy_canvas");
    this.ctx=this.canvas.getContext("2d");
    this.list=new Array();
    this.moveing=false;
    this.is_have=false;
    this.arc_r=3;

    this.width=centre.x*2;
    this.height=centre.y*2;
    //当前选中的圆,圆心坐标
    this.arc_xy=new Array();
    this.color="#2F8409";
    this.keycode_str="";



}

Lines.prototype.listen=function(){
    var con=document.getElementById("conent");
    con.addEventListener("mousedown", function(e){
        lines.arc_click(e);
    });
    con.addEventListener("mouseover", function(e){
        lines.draw_move(e);
    });
    con.addEventListener("mousemove", function(e){
        lines.draw_move(e);

    });
    con.addEventListener("mouseup", function(e){
        // 取得画布上鼠标点
        var  x= e.offsetX;
        var  y = e.offsetY;
        lines.list[x+"_"+y]=new Array();
        lines.list[x+"_"+y].x=x;
        lines.list[x+"_"+y].y=y;
        lines.stop(e);
        lines.draw_all();
    });
    con.addEventListener("mouseout", function(e){
        lines.stop(e);
    });
    document.addEventListener('keydown', lines.onkeydown, false);
    document.addEventListener('keyup', lines.onkeyup, false);

}

/**
 * keyCode
 *   PC:
 *     All Browsers:
 *         Option/Alt: 18
 *         Control: 17
 *         Shift: 16
 *         Delete Left/Backspace: 8
 *         Delete Right(fn + Delete): 46
 */
Lines.prototype.onkeydown = function(e){

    switch(e.keyCode){
        case 18:
            lines.keycode_str="alt";
            break;
        case 17:
            lines.keycode_str="ctrl";
            break;
        case 8:
        case 46:
            lines.list=unset(lines.list,lines.arc_xy.x+"_"+lines.arc_xy.y);
            lines.draw_all();
            // delete end point if Selected
            break;
        default:
            break;
    }
};
Lines.prototype.onkeyup = function(e){
    lines.keycode_str="";
    switch(e.keyCode){
        case 17:
            lines.arc_xy.point=0;
            break;
        default:
            break;
    }
};


Lines.prototype.line_arc=function(x,y){

    var ctx=this.ctx;
    var point,arc_r;
    var pre_line;
    var list_key=x+"_"+y;


    point=Math.atan2(Math.abs(y-centre.y) ,x-centre.x);

    ctx.beginPath();
    ctx.moveTo(centre.x,centre.y);
    //直线
    ctx.lineTo(x,y);
    //端点圆圈
    ctx.arc(x,y,this.arc_r,0,2*Math.PI,true);

    //半径
    arc_r=Math.sqrt(Math.pow(Math.abs(y-centre.y),2)+Math.pow(Math.abs(x-centre.x),2));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centre.x,centre.y);
    pre_line= this.pre_line(x,y,list_key);
    var pre_point;
    //如果在第三四象限
    if(y-centre.y>=0){
        ctx.arc(centre.x,centre.y,arc_r,point,pre_line.point,false);
           }else {
        ctx.arc(centre.x,centre.y,arc_r,-point ,-pre_line.point,false);
    }
    ctx.stroke();

}

//查找上一个线段坐标,顺时针
Lines.prototype.pre_line=function(x,y,key){
    var point;
    var min_xy=new Array();
    var min_point=0;
    var max_point=Math.PI;
    var list =this.list;
    //角度
    point=Math.atan2(Math.abs(y-centre.y) ,x-centre.x);
    //已x轴为标准上面是1,2象限
    min_xy.is_top=y-centre.y<0?true:false;
    for(var i in list){
        var p;
        //排除本身
        if(i!=key&&list[i].y){
            p=Math.atan2(Math.abs(list[i].y-centre.y) ,list[i].x-centre.x);
            //第一二象限
            if(min_point<p&&point>p&&min_xy.is_top&&list[i].y-centre.y<0){
                min_point=p;
                min_xy.x=list[i].x;
                min_xy.y=list[i].y;
            }else if(max_point>p&&point<p&&!min_xy.is_top&&list[i].y-centre.y>=0){
                max_point=p;
                min_xy.x=list[i].x;
                min_xy.y=list[i].y;
            }
        }
    }
    min_xy.point=min_xy.is_top?min_point:max_point;
    return min_xy;
}
Lines.prototype.stop=function(){
    this.is_have=false;
    this.moveing=false;
}
Lines.prototype.arc_click=function(e){
    //判断是否在端点
    var x= e.offsetX;
    var y= e.offsetY;
    var ctx= this.ctx;
    //如果是已知线,则清空画板,遍历所有线重新画一遍
    this.select_arc(e);
    var xy=new Array();
    xy.x=x;
    xy.y=y;

    //如果有这个点则删除添加
    if(lines.is_have){
        if(Math.abs(xy.x-this.arc_xy.x)<4 &&Math.abs(xy.y-this.arc_xy.y)<4){
            this.list=unset(this.list,this.arc_xy.x+"_"+this.arc_xy.y);
        }
    }else {
        if(lines.keycode_str=="ctrl"){

        }
    }


}
Lines.prototype.select_arc=function(e){
    // 取得画布上鼠标点
    var x = e.offsetX;
    var y = e.offsetY;

    for(var i in this.list ){
        if(Math.abs(x- this.list[i].x)<=lines.arc_r+1 && Math.abs(y-this.list[i].y)<=lines.arc_r+1){

            //如果当前节点没被选中则画圆
            if(lines.arc_xy.x!==this.list[i].x&&lines.arc_xy.y!==this.list[i].y){
                //把当前的圆画为白色,再画一个大1像素的圆,表示选中状态
                this.draw_arc(this.list[i].x,this.list[i].y,this.arc_r,"#ffffff");
                this.draw_arc(this.list[i].x,this.list[i].y,this.arc_r+1,this.color);
            }
            lines.arc_xy.x=this.list[i].x;
            lines.arc_xy.y=this.list[i].y;
            lines.arc_xy.num=i;
            lines.is_have=true;
            lines.moveing=true;

        }else if(lines.moveing==true) {
            this.draw_arc(this.list[i].x,this.list[i].y,this.arc_r,this.color);
            this.draw_arc(this.list[i].x,this.list[i].y,this.arc_r+1,"#ffffff");
            lines.is_have=true;
            lines.moveing=true;
        }
    }

}
Lines.prototype.draw_move=function(e){

    if(this.moveing){
        var ctx=this.ctx;
        //当前鼠标位置
        var x = e.offsetX;
        var y = e.offsetY;

        ctx.clearRect(0,0,this.width,this.height);
        canvas.axis(centre.x,centre.y);
        for(var i in this.list){
                this.line_arc(this.list[i].x,this.list[i].y);
        }
        //如果按键是ctrl则角不变求y值
        if(lines.keycode_str=="ctrl"){
            var point=Math.atan2(Math.abs(lines.arc_xy.y-centre.y),Math.abs(lines.arc_xy.x-centre.x));//求角
            lines.arc_xy.point=point;
            console.log(point);
        }else if(lines.keycode_str=="alt"){
            //如果按键是alt则半径不变改角

        }
        this.line_arc(x,y);
    }

}
Lines.prototype.draw_all=function(){
    var ctx=this.ctx;
    ctx.clearRect(0,0,this.width,this.height);
    canvas.axis(centre.x,centre.y);
    for(var i in this.list){
        this.line_arc(this.list[i].x,this.list[i].y);
    }
}

Lines.prototype.draw_arc=function(x,y,r,color){
    var ctx=this.ctx;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
}

var lines=new Lines();

lines.listen();