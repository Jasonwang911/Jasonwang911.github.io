/**
 * Created by leolau on 2016/11/1.
 */
var FISH_SIZE=[
    null,
    {w: 55, h: 37, collR: 17},
    {w: 78, h: 64, collR: 24},
    {w: 72, h: 56, collR: 20},
    {w: 77, h: 59, collR: 22},
    {w: 107, h: 122, collR: 29}
];
//属性
function Fish(type){
    this.type = type;
    this.x = 0;
    this.y = 0;
    this.cur = 0;//尾巴
    this.rotate = 0;//鱼头
    this.iSpeed = 1;
    this.collR = FISH_SIZE[this.type].collR;
    this.move();//运动
}
//方法
Fish.prototype.draw = function (gd) {
    var w = FISH_SIZE[this.type].w;
    var h = FISH_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    //修复阴影
    if(this.rotate>90&&this.rotate<270){
        gd.scale(1,-1);
    }
    gd.drawImage(JSON['fish'+this.type],
        0,h*this.cur,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
Fish.prototype.move = function () {
    var _this = this;
    //往前走
    setInterval(function () {
        _this.x+=Math.cos(d2a(_this.rotate))*_this.iSpeed;
        _this.y+=Math.sin(d2a(_this.rotate))*_this.iSpeed;
    },30);
    //动尾巴
    setInterval(function () {
        _this.cur++;
        if(_this.cur == 4){
            _this.cur = 0;
        }
    },200);
};
Fish.prototype.isIn = function(x,y){
    var a = this.x - x;
    var b = this.y - y;
    var c = Math.sqrt(a*a+b*b);
    if(c<this.collR){
        return true;
    }else{
        return false;
    }
};