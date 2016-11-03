/**
 * Created by Jason on 2016/11/2.
 */
//炮
var CANNON_SIZE=[
    null,
    {w: 74, h: 74},
    {w: 74, h: 76},
    {w: 74, h: 76},
    {w: 74, h: 83},
    {w: 74, h: 85},
    {w: 74, h: 90},
    {w: 74, h: 94}
];
//构建炮的构造函数  炮弹的属性有位置x y type rotate  添加的同时注意在resource.js文件中添加需要加载的资源
function Cannon(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.cur=0;
    this.rotate=0;
    this.timer=null;
}
//构建炮的原型，炮的原型上面有draw的方法
Cannon.prototype.draw=function(gd){
    //和鱼的原型相同，先要设置炮台的尺寸w h，同样的再2中的尺寸表中
    var w=CANNON_SIZE[this.type].w;
    var h=CANNON_SIZE[this.type].h;
    //开始画炮台，注意先save最后再restore，炮台是可以旋转的
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(JSON['cannon'+this.type],
        0,this.cur*h,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
//构建炮的后坐力方法 使用this.cur和draw的时候图片的位置相关联，通过更换图片来实现炮的运动,
Cannon.prototype.emitChange=function(){
    var _this=this;
    //注意当图片更换一轮的时候，需要清除定时器来保证大炮不是一直在那里动，所以大炮的有个定时器的属性需要添加
    clearInterval(_this.timer);
    _this.timer=setInterval(function(){
        _this.cur++;
        if(_this.cur==5){
            _this.cur=0;
            clearInterval(_this.timer);
        }
    },30);
};
