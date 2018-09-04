/**
 * Created by ruffian on 2017/12/14.
 * 创建类似葡萄(由圆组成)
 */
function Grape(){
    this.canvas=document.getElementById("xy_canvas");
    this.ctx=this.canvas.getContext("2d");
    this.list=new Array();
    this.moveing=false;
    this.drawing=false;
    this.is_have=false;
    this.arc_r=3;
    //开始节点
    this.start=new Array();
    this.color="#2F8409";
    this.pre_obj=new Array();

}

Grape.prototype.listen=function(){
    var con=document.getElementById("conent");
    con.addEventListener("mousedown", function(e){
        grape.start.x= e.offsetX;
        grape.start.y= e.offsetY;

        grape.drawing=true;
        grape.draw_obj_arc(e);
    });
    con.addEventListener("mouseover", function(e){
    });
    con.addEventListener("mousemove", function(e){
        grape.draw_obj_arc(e);
    });
    con.addEventListener("mouseup", function(e){
        grape.stop();
    });
    con.addEventListener("mouseout", function(e){
        grape.stop();
    });
    document.addEventListener('keydown', grape.onkeydown, false);
    document.addEventListener('keyup', grape.onkeyup, false);
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
Grape.prototype.onkeydown = function(e){

    switch(e.keyCode){
        case 18:
            break;
        case 17:
            grape.moveing=true;
            break;
        case 8:
        case 46:
            grape.list=unset(grape.list,grape.pre_obj.key);
            grape.draw_all();
            // delete end point if Selected
            break;
        default:
            break;
    }
};
Grape.prototype.onkeyup = function(e){
    switch(e.keyCode){
        case 18:
            break;
        case 17:
            grape.moveing=false;
            break;
        default:
            break;
    }
};


Grape.prototype.stop=function(){
    grape.moveing=false;
    grape.drawing=false;
}
Grape.prototype.draw_obj_arc=function(e){
    if(grape.drawing){
        var x= e.offsetX;
        var y= e.offsetY;
        var is_have;

        //如果有这个坐标就修改,没有就新建
        is_have=grape.sel_arc(grape.start.x,grape.start.y);

        var one_arc=new Array();
        var a, b,c;
        a=Math.abs(x-grape.start.x);
        b=Math.abs(y-grape.start.y);
        c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        one_arc.x=grape.start.x;
        one_arc.y=grape.start.y;
        one_arc.r=c;

        if(grape.moveing){
            grape.list[grape.pre_obj.key].x=x;
            grape.list[grape.pre_obj.key].y=y;
            grape.list[grape.pre_obj.key].r=grape.pre_obj.r;
            grape.draw_all();
            return;
        }
            //如果有这个坐标
            if(is_have!==false&&is_have!==0){
                    if(c>this.arc_r){
                        grape.list[is_have].r=c;
                    }
                    grape.pre_obj.x=grape.start.x;
                    grape.pre_obj.y=grape.start.y;
                    grape.pre_obj.r=grape.list[is_have].r;
                    grape.pre_obj.key=is_have;
                //删除选中圆
               // grape.list=unset(grape.list,grape.pre_obj.key);
                //console.log(grape.pre_obj);
            }else{
                //如果鼠标移动才添加到数组
               // if(c>this.arc_r){
                    grape.list.push(one_arc);
               // }
            }

        grape.draw_all();

    }

}
//查询是否存在这个坐标点,判断是否被选中
Grape.prototype.sel_arc=function(x,y){
    for(var key in grape.list){
        if(Math.abs(grape.list[key].x-x) <=grape.arc_r&& Math.abs(grape.list[key].y-y) <=grape.arc_r){
            return key;
        }
    }
    return false;
}
//循环数组画圆
Grape.prototype.draw_all=function(){
    var ctx=this.ctx;
    ctx.clearRect(0,0,this.width,this.height);
    canvas.axis(centre.x,centre.y);
    for(var i in this.list){
        //选中状态画一个大的圆心
        if(Math.abs(grape.pre_obj.x-this.list[i].x)<=this.arc_r &&Math.abs(grape.pre_obj.y-this.list[i].y)<=this.arc_r ){
            this.draw_arc(this.list[i].x,this.list[i].y,grape.arc_r+1,grape.color);
        }else {
            this.draw_arc(this.list[i].x,this.list[i].y,grape.arc_r,grape.color);
        }
        this.draw_arc(this.list[i].x,this.list[i].y,this.list[i].r,this.color);
    }
}

//画圆
Grape.prototype.draw_arc=function(x,y,r,color){
    var ctx=this.ctx;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
}

var grape=new Grape();
grape.listen();