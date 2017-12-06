define(function(require, exports, module) {
    var HIDDEN_CLASS = 'hidden';

    var util = require('app/util');
    var ControlPoint = require('app/control_point');
    var EndPoint = require('app/end_point');
    var Path = require('app/path');

    var listeners;


    function Pen() {
        var self = this;
        self.name = 'pen';
        self.cvs = document.querySelector('#penCanvas');
        self.ctx = self.cvs.getContext('2d');

        self.reset();
        self.init();
    }

    Pen.prototype.STROKE_COLOR = 'orange';

    Pen.prototype.reset = function() {
        var self = this;
        self.paths = [];
        self.paths.push(new Path());

        self.dragging = false;
        self.editCpBalance = false;
        self.isNewEndPoint = false;
        self.currentEndPoint = null;
        self.draggingControlPoint = null;

        self.zoomRatio = 1;
    };

    Pen.prototype.init = function(){
        var self = this;

        ControlPoint.prototype.ctx = self.ctx;
        EndPoint.prototype.ctx = self.ctx;
        EndPoint.prototype.canvas = self;

        util.Event.addEventListener('beforezoom', function(e) {
            self.ctx.clearRect(0,0,self.cvs.width,self.cvs.height);
        });

        util.Event.addEventListener('zoom', function(e) {
            self.zoomRatio = e.target.zoomRatio;
            self.renderer();
        });

        // self.active();
    };


    Pen.prototype.onmousedown = function(e){
        var ratio = this.zoomRatio;
        var loc = this.positionToCanvas(e.clientX, e.clientY);
        var relativeLoc = {x:loc.x/ratio, y:loc.y/ratio};
        var selectedPath = this.getSelectedPath();
        loc = {x: loc.x/ratio, y: loc.y/ratio};
        this.dragging = true;
        this.isNewEndPoint = false;
        this.draggingControlPoint = false;
        this.currentEndPoint = this.isExistPoint(relativeLoc.x, relativeLoc.y);
        this.removeSelectedEndPoint();

        if(this.currentEndPoint ){
            // 如果已经存在点--则修改点位置
            this.currentEndPoint.selected = true;

            if(this.editCpBalance && !this.draggingControlPoint) {
                var ced = this.currentEndPoint;
                ced.cpBalance = true;
                ced.cp0.x = ced.cp1.x = ced.x;
                ced.cp0.y = ced.cp1.y = ced.y;
                this.isNewEndPoint = true;
                console.log("editCpBalance");
            }

            if(!this.draggingControlPoint && this.currentEndPoint === this.paths[this.paths.length -1][0] && this.paths[this.paths.length -1].length > 2){
                // click first endpoint
                // close path
                this.createPath();
            }

        }else{
           //不存在点则新加点
            this.currentEndPoint = this.createEndPoint(relativeLoc.x, relativeLoc.y);
            this.isNewEndPoint = true;
            if(this.editCpBalance && selectedPath){
                // keydown alt/option
                // add endpoint to selectedendpoint after

                selectedPath.path.addEndPoint(selectedPath.ep, this.currentEndPoint);

            }else{
                this.paths[this.paths.length-1].push(this.currentEndPoint);
            }


        }
        this.renderer();
    };
    Pen.prototype.onmousemove = function(e){
        e.preventDefault();
        if(!this.dragging) {return;}
        var ratio = this.zoomRatio;
        var loc = this.positionToCanvas(e.clientX, e.clientY);
        var ced = this.currentEndPoint;

        loc = {x: loc.x/ratio, y: loc.y/ratio};
        //新节点
        if(this.isNewEndPoint){
            ced.cp1.x = loc.x;
            ced.cp1.y = loc.y;

            ced.cp0.x = ced.x * 2 - loc.x;
            ced.cp0.y = ced.y * 2 - loc.y;
        }else if(this.draggingControlPoint){
            // 修改节点
            if(this.editCpBalance){
                ced.cpBalance = false;
            }
            this.draggingControlPoint.x = loc.x;
            this.draggingControlPoint.y = loc.y;
            ced.calculateControlPoint(loc.x, loc.y, this.draggingControlPoint);
        }else{
            // dragging  endpoint
            var offset = {x: loc.x - ced.x, y: loc.y-ced.y};
            ced.x = loc.x;
            ced.y = loc.y;

            ced.cp1.x += offset.x;
            ced.cp1.y += offset.y;
            ced.cp0.x += offset.x;
            ced.cp0.y += offset.y;

        }
        this.renderer();
    };
    Pen.prototype.onmouseup = function(e){
        this.dragging = false;
        if(this.draggingControlPoint){
            if(this.draggingControlPoint.counterpart)
                delete this.draggingControlPoint.counterpart.staticDistance;
            delete this.draggingControlPoint.counterpart;
            this.draggingControlPoint = false;
        }
        //显示坐标
        var all_Path = this.getSelectedPath();
        var path=all_Path["path"];
        var div3_html="{";
        var start_xy="";

        //for(var i=0, l=path.length; i < l; i++){
        //    ep = path[i];
        //    div3_html+="点"+i+":<br>";
        //    start_xy="开始 :x:"+ep.x+" y: "+ep.y+"<br>";
        //    if(i > 0){
        //        // draw line
        //        prev_ep  = path[i-1];
        //        start_xy="开始 :x:"+prev_ep.x+" y: "+prev_ep.y+"<br>";
        //        div3_html+=start_xy;
        //        div3_html+="控制点1: x:"+prev_ep.cp1.x+" y: "+prev_ep.cp1.y+"<br>";
        //        div3_html+="控制点2: x:"+ep.cp0.x+" y: "+ep.cp0.y+"<br>";
        //    }
        //    div3_html+="结束 :x:"+ep.x+" y: "+ep.y+"<br>";
        //}
////{"ep1":{"start":{"x":1,"y":1},"start":{"x":1,"y":1}}
        for(var i=0, l=path.length; i < l; i++){
            ep = path[i];
            start_xy="\"ep"+i+"\":{\"start\":{\"x\":"+ep.x+" ,\"y\": "+ep.y+"},";
            if(i > 0){
                // draw line
                prev_ep  = path[i-1];
                start_xy="\"ep"+i+"\":{\"start\":{\"x\":"+prev_ep.x+" ,\"y\": "+prev_ep.y+"},";
                div3_html+=start_xy;
                div3_html+="\"control1\": {\"x\":"+prev_ep.cp1.x+" ,\"y\": "+prev_ep.cp1.y+"},";
                div3_html+="\"control2\": {\"x\":"+ep.cp0.x+" ,\"y\": "+ep.cp0.y+"},";
                div3_html+="\"end\":{\"x\":"+ep.x+" ,\"y\": "+ep.y+"}},";
            }

        }
        div3_html+="}";
        $("#div3").html(div3_html);
    };
    /**
     * keyCode
     * Mac OS X:
     *     Chrome, Safari, Opera:
     *         Left Command: 91
     *         Right Command: 93
     *     Firefox:
     *         Left/Right Command: 224
     *
     * Mac and PC:
     *     All Browsers:
     *         Option/Alt: 18
     *         Control: 17
     *         Shift: 16
     *         Delete Left/Backspace: 8
     *         Delete Right(fn + Delete): 46
     */
    Pen.prototype.onkeydown = function(e){
        var self = this;
        switch(e.keyCode){
            case 18:
                e.preventDefault();
                self.editCpBalance = true;
                break;
            case 8:
            case 46:
                e.preventDefault();
                self.deleteEndPoint();
                self.renderer();
                // delete end point if Selected
                break;
            default:
                break;
        }
    };
    Pen.prototype.onkeyup = function(e){
        var self = this;
        switch(e.keyCode){
            case 18:
                e.preventDefault();
                self.editCpBalance = false;
                break;
            default:
                break;
        }
    };


    Pen.prototype.zoom = function(ratio) {
        var self = this;
        self.zoomRatio = ratio || 1;
        self.ctx.clearRect(0,0,self.cvs.width,self.cvs.height);

        // only need to set the width
        // browser will take care of proportionally scaling the image
        self.artCvs.style.width = self.artCvs.width * ratio + 'px';

        self.cvs.width = self.artCvs.width * ratio;
        self.cvs.height = self.artCvs.height * ratio;

        self.renderer();
    };

    Pen.prototype.deleteEndPoint = function(){
        var paths = this.paths;
        for(var i=0, l=paths.length; i<l; i++){
            paths[i].deleteSelected();
            if(paths[i].length === 0 && (i + 1 !== l)){
                paths.splice(i,1);
                l = paths.length;
                i--;
            }
        }
    };

    Pen.prototype.createEndPoint = function(x, y){
        var ep = new EndPoint(x,y);
        ep.selected = true;
        return ep;
    };

    Pen.prototype.createPath = function(){
        this.paths[this.paths.length -1].isClose = true;
        this.paths.push(new Path());
    };

    Pen.prototype.removeSelectedEndPoint = function(){
        this.paths.forEach(function(path) {
            path.removeSelected();
        });
    };
    Pen.prototype.getSelectedPath = function(){
        var i=0,j,l1,l2;
        for(l1 = this.paths.length; i< l1; i++){
            for(j=0,l2 = this.paths[i].length;j<l2;j++){
                if(this.paths[i][j].selected){
                    return {path: this.paths[i], ep: this.paths[i][j]};
                }
            }
        }
        return null;
    };

    Pen.prototype.isExistPoint = function(x, y){
        var cep, i=0,l;
        for(l = this.paths.length; i< l; i++){
            cep = this.paths[i].isInPoint(x, y);
            if(cep){
                if(cep.cp instanceof ControlPoint){
                    // set  controlpoint
                    this.draggingControlPoint = cep.cp;
                }
                return cep.ep;
            }
        }
        return null;
    };


    Pen.prototype.positionToCanvas = function(x, y) {
        var bbox = this.cvs.getBoundingClientRect();
        return { x: x - bbox.left * (this.cvs.width  / bbox.width),
            y: y - bbox.top  * (this.cvs.height / bbox.height) };
    };

    Pen.prototype.renderer = function() {

        var ep, prev_ep, ctx = this.ctx, stroke_color = this.STROKE_COLOR;
        var self = this;
        var ratio = self.zoomRatio;

        this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
        // this.restoreOriginImage();

        this.paths.forEach(function(path){

            for(var i=0, l=path.length; i < l; i++){
                ep = path[i];
                ep.printAndControlPoints(ratio);
                if(i > 0){
                    // draw line
                    prev_ep  = path[i-1];
                    bezierCurveTo(prev_ep, ep, ctx);
                }
            }
            if(path.isClose){
                prev_ep  = path[l-1];
                ep = path[0];
                bezierCurveTo(prev_ep, ep, ctx);
            }
        });

        function bezierCurveTo(prev_ep, ep, ctx){
            ctx.save();
            ctx.beginPath();
            ctx.strokeStyle = stroke_color;
            ctx.moveTo(prev_ep.x * ratio, prev_ep.y * ratio);
            ctx.bezierCurveTo(
                prev_ep.cp1.x * ratio, prev_ep.cp1.y * ratio,
                ep.cp0.x * ratio, ep.cp0.y * ratio,
                ep.x * ratio, ep.y * ratio
            );
            //console.log("开始点 x:"+prev_ep.x * ratio+" y:"+prev_ep.y * ratio);
            //console.log("控制1点 x:"+prev_ep.cp1.x * ratio+" y:"+ prev_ep.cp1.y * ratio);
            //console.log("控制2点 x:"+ ep.cp0.x * ratio+" y:"+ ep.cp0.y * ratio);
            //console.log("结束点 x:"+ ep.x * ratio+" y:"+ ep.y * ratio);


            ctx.stroke();
            ctx.restore();
        }

    };



    Pen.prototype.deactive = function() {
        var self = this;
        util.DOM.cssjs('add', self.cvs, 'hidden');

        if(listeners) {
            self.cvs.removeEventListener('mousedown', listeners.mousedown, false);
            self.cvs.removeEventListener('mousemove', listeners.mousemove, false);
            self.cvs.removeEventListener('mouseup', listeners.mouseup, false);
            document.removeEventListener('keydown', listeners.keydown, false);
            document.removeEventListener('keyup', listeners.keyup, false);
        }

        util.DOM.cssjs('add', document.querySelector('div[data-tool="pen"]'), HIDDEN_CLASS);
    };

    Pen.prototype.active = function() {
        var self = this;
        listeners = {
            mousedown: function(e){self.onmousedown(e);},
            mousemove: function(e){self.onmousemove(e);},
            mouseup: function(e){self.onmouseup(e);},
            keydown: function(e){self.onkeydown(e);},
            keyup: function(e){self.onkeyup(e);}
        };

        util.DOM.cssjs('remove', self.cvs, 'hidden');

        self.cvs.addEventListener('mousedown', listeners.mousedown, false);
        self.cvs.addEventListener('mousemove', listeners.mousemove, false);
        self.cvs.addEventListener('mouseup', listeners.mouseup, false);

        document.addEventListener('keydown', listeners.keydown, false);
        document.addEventListener('keyup', listeners.keyup, false);

        util.DOM.cssjs('remove', document.querySelector('div[data-tool="pen"]'), HIDDEN_CLASS);
    };

    module.exports = new Pen();
});