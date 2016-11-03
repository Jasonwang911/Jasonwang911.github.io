/**
 * Created by Jason on 2016/11/3.
 */
//开始构造炮弹
//炮弹具体尺寸
var BULLET_SIZE=[
    null,
    {x: 86, y: 0, w: 24, h: 26},
    {x: 62, y: 0, w: 25, h: 29},
    {x: 30, y: 0, w: 31, h: 35},
    {x: 32, y: 35, w: 27, h: 31},
    {x: 30, y: 82, w: 29, h: 33},
    {x: 0, y: 82, w: 30, h: 34},
    {x: 0, y: 0, w: 30, h: 44}
];
//炮弹的构造函数,同样先在resource.js中加载炮弹的资源， 炮弹的属性有 type 位置x y rotate iSpeed move
function Bullet(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.rotate=0;
    this.iSpeed=this.type*2;
    this.move();
}
//暂时想到的炮弹原型上的方法有draw move ，先写，后面出现其他的再补充
Bullet.prototype.draw=function(gd){
    //同样的炮弹的尺寸数据表中已经量好并且给出
    var w=BULLET_SIZE[this.type].w;
    var h=BULLET_SIZE[this.type].h;
    //这里与前面不同的是需要定义不同尺寸炮弹的起始位置，数据表中已经给出，直接获取
    var x=BULLET_SIZE[this.type].x;
    var y=BULLET_SIZE[this.type].y;
    //开始画炮弹，
    gd.save();
    gd.translate(this.x,this.y);
    gd.rotate(d2a(this.rotate));
    gd.drawImage(JSON['bullet'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
//添加炮弹move的方法，和fish运动的思路相同
Bullet.prototype.move=function(){
    //开启定时器不停的改变炮弹的位置并且重绘,同样，注意事件中的定时器里的this有问题，需要提前存正确的this的指向
    var _this=this;
    setInterval(function(){
        //和鱼的move有些不同的是炮弹的y轴的方向不同炮弹都是是向上射出的
        _this.x+=Math.sin(d2a(_this.rotate))*_this.iSpeed;
        _this.y-=Math.cos(d2a(_this.rotate))*_this.iSpeed;
    },30);
};
