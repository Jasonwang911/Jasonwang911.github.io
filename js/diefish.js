/**
 * Created by Jason on 2016/11/3.
 */
//构造死鱼的构造函数  死鱼的属性有type x y cur翻转 rotate move
function DieFish(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.cur=0;
    this.move();
}
//死鱼的方法有draw move   注意，鱼死的时候的方向和隐形需要修正，如果不修正则都会成为默认方向
DieFish.prototype.draw=function(gd){
    var w=FISH_SIZE[this.type].w;
    var h=FISH_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    //修复阴影
    if(this.rotate>90&&this.rotate<270){
        gd.scale(1,-1);
    }
    gd.drawImage(JSON['fish'+this.type],
        0,(this.cur+4)*h,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
//死鱼的move方法  是更换图片翻肚皮，思路和鱼摆尾巴相似
DieFish.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        _this.cur++;
        //当死鱼的图片换一遍以后，停止更换图片，以便后面死鱼消失，注意定时器的时间，控制图片的更换
        if(_this.cur==4){
            _this.cur=0;
        }
    },250);
};
