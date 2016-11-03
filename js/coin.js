/**
 * Created by Jason on 2016/11/3.
 */
//添加金币的构造含函数
function Coin(type){
    this.type=type;
    this.x=0;
    this.y=0;
    this.cur=0;
    this.move();
}
//Coin的方法有draw move ，暂时想到这两个
Coin.prototype.draw=function(gd){
    gd.save();
    gd.translate(this.x,this.y);
    if(this.type<3){
        gd.drawImage(JSON['coinAni1'],
            0,this.cur*60,60,60,
            -30,-30,60,60
        );
    }else{
        gd.drawImage(JSON['coinAni2'],
            0,this.cur*60,60,60,
            -30,-30,60,60
        );
    }
    gd.restore();
};
//coin是从碰撞的点移动到画布左下角的金币存储中 就是想办法让金币的x移动到0，y的位置移动到oC.height
Coin.prototype.move=function(){
    var _this=this;
    setInterval(function(){
        //这里速度的减小使用了一种很巧妙的方法，让this.x(碰撞的x)分10次减小到0，同样的y的值也相同
        _this.x+=-_this.x/10;
        _this.y+=(630-_this.y)/10;
        //在运动的过程中还要旋转金币，也就是更换金币的图片，设置一个cur，使cur++，同时关联draw方法中金币图片的高度来更换图片
        _this.cur++;
        if(_this.cur==10){
            _this.cur=0;
        }
    },30);
};
