/**
 * Created by Jason on 2016/11/2.
 */
//各种不同的鱼的图片的数据
var FISH_SIZE=[
    null,
    {w: 55, h: 37, collR: 17},
    {w: 78, h: 64, collR: 24},
    {w: 72, h: 56, collR: 20},
    {w: 77, h: 59, collR: 22},
    {w: 107, h: 122, collR: 29}
];
//使用面向对象的思想创建对象的属性和方法，属性写在构造函数中，方法放在原型上
//先画一条鱼，鱼的属性有鱼的种类type 位置x,y 游动时候尾巴运动cur 游动的方向rotate 游动的速度iSpeed 向前运动move  先创建鱼的构造函数
function Fish(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.cur=0;
    this.rotate=0;
    this.iSpeed=1;
    this.collR=FISH_SIZE[this.type].collR;
    this.move();
}
//在添加鱼的方法  画鱼draw  鱼的运动move
Fish.prototype.draw=function(gd){
    //鱼的图片的宽高，不同鱼的不同宽高不相同，先把鱼的宽高存入一个提前量好的数组FISH_SIZE中，再根据不同种类的鱼来获取不同的宽高
    var w=FISH_SIZE[this.type].w;
    var h=FISH_SIZE[this.type].h;
    //开始画鱼  注意画鱼先要save,结束以后restore  鱼的出场时可以改变方向的，所以画鱼的时候注意提前准备好角度
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    //鱼是有阴影的，当鱼从左面出来的时候，阴影是在鱼的右下面，当鱼从左面出来的时候，阴影是在鱼的左下面，在旋转完角度后鱼可能从左面出来也可能从右面出来，当鱼从右面出来的时候，需要scale图片，使图片翻转来修正阴影的位置
    if(this.rotate>90 && this.rotate<270){
        gd.scale(1,-1);
    }
    //利用drawImage这个函数来画鱼，JSON['fish'+this.type]可以选择不同种类的鱼,注意鱼的rotate是根据头部的位置来改变的
    gd.drawImage(JSON['fish'+this.type],
        //使用this.cur 来变换鱼的图片的位置
        0,h*this.cur,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
//鱼的move的方法
Fish.prototype.move=function(){
    //鱼的运动分为向前游动和尾巴的摆动两个运动
    //向前游动 向前游动是改变的鱼的this.x 和 this.y 的值  不停的往前游动需要配合定时器的实现
    //注意事件中套定时器，定时器的this的指向不准确，解决办法是  提前存储一个正确的this
    var _this=this;
    setInterval(function(){
        //将this.x this.y分解到斜线坐标上
        _this.x+=Math.cos(d2a(_this.rotate))*_this.iSpeed;
        _this.y+=Math.sin(d2a(_this.rotate))*_this.iSpeed;
    },30);
    //鱼尾巴的摆动   鱼尾巴的摆动是在不停的更换鱼的图片来实现的  相同的是定时器配合this.cur的加减
    setInterval(function(){
        //图片的位置是改变鱼的精灵图上的鱼的起始位置x y来实现 这里用这个cur的值来关联这组坐标
        _this.cur++;
        //循环这组数字
        if(_this.cur==4){
            _this.cur=0;
        }
    },200);
};
//传入的两个参数x y是子弹的实时位置
Fish.prototype.isIn=function(x,y){
    var a=this.x-x;
    var b=this.y-y;
    var c=Math.sqrt(a*a+b*b);
    //这里需要提前在鱼的构造函数中添加this.collR的属性this.collR=FISH_SIZE[this.type].collR;
    if(c<=this.collR){
        return true;
    }else{
        return false;
    }
};