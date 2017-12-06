/**
 * Created by ruffian on 2017/12/5.
 * 在div上画贝塞尔曲线
 */
define(function(require, exports, module) {
    function bezier(){
        var self = this;
        self.name = 'bezier';
        self.paths=new Array();//基点json
        self.can = document.getElementById('preview_can');
        self.ctx = self.can.getContext("2d");
        self.point=10-1//document.getElementById("point_num").value;//点数
        self.path_str="";//基点数组
        self.pre_pe=new Array();//上一个坐标点
        self.angle=0//上一个线段的角度
        self.c_point=new Array();//给c返回的数据


        self.active();

    }

    bezier.prototype.preview=function(e){
        self=this;
        ctx=self.ctx;
        ctx.clearRect(0,0,490,280);
        self.path_str=document.getElementById("div3").innerText//
        self.paths=eval('(' + self.path_str + ')');
        self.c_point=Array();
        for(anchorpoints in self.paths){
            var start=self.paths[anchorpoints]["start"];
         //   delete self.paths[anchorpoints]["start"];
           var line_point= CreateBezierPoints(self.paths[anchorpoints], self.point);

            //开始一个新的绘制路径
            ctx.beginPath();
            //定义直线的起点坐标为(10,10)
            ctx.moveTo(start.x, start.y);

            console.log("xxxxx:"+start.x+"y:"+start.y);
            //定义直线的终点坐标为(50,10)
            var i=0;
            //用try可以中断foreach
           // try{

                line_point.forEach(function (obj, i) {

                    ctx.lineTo(obj.x, obj.y);

                    if(i>0){
                        var start=new Array();
                        var end=new Array();
                        start.x=line_point[i-1].x;
                        start.y=line_point[i-1].y;
                        end.x=obj.x;
                        end.y=obj.y;
                        self.write_point(start,end);
                    }




                });
            //}catch(e){
            ////可以跳出来
            //}

            //沿着坐标点顺序的路径绘制直线
            ctx.stroke();
            //关闭当前的绘制路径
            ctx.closePath();
        }
        var div4_html="{";
//{"numbers":{"array1":1,"array2":2},"numbers":{"array1":1,"array2":2}}
        for(i in self.c_point){
            div4_html+="\"pe"+i+"\":{\"n\":"+self.c_point[i]['n']+",";
            div4_html+="\"r\":"+self.c_point[i]['r']+",";
            div4_html+="\"l\":"+self.c_point[i]['l']+"},";
            //div4_html+="段数:"+self.c_point[i]['n']+"|";
            //div4_html+="转角:"+self.c_point[i]['r']+"|";
            //div4_html+="长度:"+self.c_point[i]['l']+"|<br>";
        }
        div4_html+="}";
        $("#div4").html(div4_html);
    }

    bezier.prototype.active = function() {
        var self = this;
        listeners = {
            preview: function(e){self.preview(e);},
        };
        document.getElementById("preview").addEventListener('click',listeners.preview, false);
    };
    //三个点判断转角
    //返回 段数|转角|长度
    //1/r/l
    bezier.prototype.write_point = function(start,end) {
        var self=this;
        //第一条线段
        var radina = Math.atan2(end.y-start.y,end.x-start.x);//用反三角函数求弧度
        var angle = Math.floor(180/(Math.PI/radina));//将弧度转换成角度
        var angle_r=new Array();
        var this_angle;
        angle_r.n=1;
        angle_r.r=0;
        this_angle=angle-self.angle;
        angle_r.l=1;

        self.angle=angle;

        var i=self.c_point.length;
        if(this_angle==0){
                if(i==0){
                    return;
                }
                self.c_point[i-1]['n']+=1;
                self.c_point.splice(i-1,0);
        }else {
            self.c_point[i]=angle_r;
            if(i>1){
                self.c_point[i-1]['r']=this_angle;
            }

        }

        return ;


    };
     //anchorpoints：贝塞尔基点
    //pointsAmount：生成的点数
    function CreateBezierPoints(anchorpoints, pointsAmount) {
        var points = [];
        for (var i = 0; i <= pointsAmount; i++) {
            var point = MultiPointBezier(anchorpoints, i / pointsAmount);
            points.push(point);
        }
        return points;
    }
    //points:贝塞尔基点
    //t :第几个点  i / pointsAmount
    // return 该点坐标
    function MultiPointBezier(points, t) {
        var len = 4;
        var x = 0, y = 0;
        var erxiangshi = function (start, end) {
            var cs = 1, bcs = 1;
            while (end > 0) {
                cs *= start;
                bcs *= end;
                start--;
                end--;
            }
            return (cs / bcs);
        };
        var i=0;
        for ( z in points) {
           var point= points[z];
            x += point.x * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
            y += point.y * Math.pow((1 - t), (len - 1 - i)) * Math.pow(t, i) * (erxiangshi(len - 1, i));
            i++;

        }
        return { x: x, y: y };
    }

    module.exports=new bezier();
});
