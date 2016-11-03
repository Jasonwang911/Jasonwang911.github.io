/**
 * Created by Jason on 2016/11/4.
 */
//网的尺寸
var WEB_SIZE=[
    null,
    {x:332,y:373,w:87,h:86},
    {x:13,y:413,w:108,h:106},
    {x:177,y:369,w:125,h:124},
    {x:252,y:179,w:149,h:149},
    {x:1,y:244,w:160,h:154},
    {x:21,y:22,w:198,h:199},
    {x:241,y:0,w:180,h:179}
];
//构造渔网的构造函数  思路和死鱼的相同 渔网的方法有type x y scal move
function Web(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.scale=1;
}
//渔网的方法有 draw 思路和子弹相同，因为都是在一张图上，所以需要先把长宽位置x y获取
Web.prototype.draw=function(gd){
    var x=WEB_SIZE[this.type].x;
    var y=WEB_SIZE[this.type].y;
    var w=WEB_SIZE[this.type].w;
    var h=WEB_SIZE[this.type].h;
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    gd.drawImage(JSON['web'],
        x,y,w,h,
        -w/2,-h/2,w,h
    );
    gd.restore();
};
