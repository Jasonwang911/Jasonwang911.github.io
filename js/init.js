/**
 * Created by Jason on 2016/11/4.
 */
document.addEventListener('DOMContentLoaded',function(){
    var oC=document.getElementById('c1');
    var gd=oC.getContext('2d');
    var rule=0.05;

    //开始画炮台  画炮台需要先加载资源，然后再画，这里没有使用面向对象的概念
    loadImage(resource,function(){
        //设置炮的初始位置，初始位置在资源文件中已经写明
        var c=new Cannon(rnd(1,8));
        c.x=431;
        c.y=570;
        //存放炮弹的数组
        var arrBullet=[];
        //存放鱼的数组
        var arrFish=[];
        //存放金币的数组
        var arrCoin=[];
        //存放死鱼的数组
        var arrDieFish=[];
        //放渔网的数组
        var arrWeb=[];

        setInterval(function(){
            gd.clearRect(0,0,oC.width,oC.height);
            //画死鱼
            for(var i=0;i<arrDieFish.length;i++){
                arrDieFish[i].draw(gd);
            }
            //画渔网
            for(var i=0;i<arrWeb.length;i++){
                arrWeb[i].draw(gd);
            }
            //画金币
            for(var i=0;i<arrCoin.length;i++){
                arrCoin[i].draw(gd);
            }
            //画鱼  鱼从左右两边同时随机出现  实现这个的原理是Math.random()是0-1的数，定时器的触发时间是30ms一秒钟30多条鱼的诞生有些多，所以在这里我们需要修改规则rule来降低鱼出现的概率，当rule=0.05（概率为原来的20%），再加入一个参数decoration，然后用Math.random()-0.5得出的这个值的范围时0.5到-0.5，这样正负的概率分别为50%，这样我们就能继续进行鱼诞生的方向了；
            var decoration=Math.random()-0.5;
            if(Math.random()<rule){
                if(decoration<0){
                    var f1=new Fish(rnd(1,6));
                    f1.x=oC.width+50;
                    f1.y=rnd(0,oC.height);
                    //
                    f1.rotate=rnd(91,269);
                }else{
                    var f1=new Fish(rnd(1,6));
                    f1.x=-50;
                    f1.y=rnd(0,oC.height);
                    //
                    f1.rotate=rnd(-89,89);
                }
                arrFish.push(f1);
            }
            for(var i=0;i<arrFish.length;i++){
                arrFish[i].draw(gd);
            }
            //和炮弹一样，对鱼进行性能优化，再鱼游出屏幕一定范围之后，便将鱼从鱼的数组中清除
            for(var i=0;i<arrFish.length;i++){
                if(arrFish[i].x<-50 || arrFish[i].x>(oC.width+50) || arrFish[i].y<0 || arrFish[i].y>(oC.height+50)){
                    arrFish.splice(i,1);
                    i--;
                }
            }
            //炮是在炮台上的，可以在画炮台的时候一起画出来,画之前为了避免重绘，需要先清除画布
            gd.drawImage(JSON['bottom'],
                0,0,765,70,
                0,532,765,70
            );
            //调用炮的方法draw来画炮 和鱼的转动相同，当点击画布的时候，炮需要跟随鼠标的指向来转动，这里在转动的时候我们改改变炮的转动角度，然后重新不停的删除，再画炮  这个效果思路和画鱼相同，需要配合定时器来实现
            c.draw(gd);
            //将当次点击所产生的炮弹画出来
            for(var i=0;i<arrBullet.length;i++){
                arrBullet[i].draw(gd);
            }
            //这里由于炮弹不停的被创造，数组中也变得越来越大，当炮弹到达一定位置（移出屏幕）的时候，应该清除前面没用的炮弹，避免性能的浪费。注意，我们需要检测每个鱼和炮弹的位置（外层循环鱼，内层循环子弹），有我就是整个数组所有参数身上的x y
            for(var i=0;i<arrBullet.length;i++){
                if(arrBullet[i].x<0 || arrBullet[i].x>oC.width || arrBullet[i].y>oC.height || arrBullet[i].y<0){
                    arrBullet.splice(i,1);
                    i--;
                }
            }
            //进行碰撞检测，这里只做了简单的碰撞检测，我们把每个模型（鱼和子弹）都考虑成了原型，当两个物体的距离小于两个物体的半径之和的时候表明两个物体碰撞,注意，需要循环检测存在的所有的鱼,我们可以提前做一个函数来判断这个距离，当得到碰撞距离的时候函数返回true，当得到没有碰撞的距离的时候，函数返回的是false，这个函数是每条鱼身上的一个方法，每条鱼在游动的时候都在不停的计算这个值，并不停的返回真或者假来供我们判断是否和子弹碰撞
            for(var i=0;i<arrFish.length;i++){
                for(var j=0;j<arrBullet.length;j++){
                    if(arrFish[i].isIn(arrBullet[j].x, arrBullet[j].y)){
                        //碰撞的时候添加金币的声音文件
                        var oA=new Audio();
                        oA.src='snd/coin.wav';
                        oA.play();
                        //金币生成的起始坐标就是碰撞时候的鱼的坐标，注意代码位置，不能放到删除鱼之后
                        var x=arrFish[i].x;
                        var y=arrFish[i].y;
                        //鱼的类型关系到金币的类型，在这里存鱼的类型，下面创造金币的时候用
                        var type=arrFish[i].type;
                        //在鱼碰到了之后，我们需要做的是让相互碰撞的鱼和子弹都消失，也就是从鱼和子弹的数组中删除
                        //鱼死的时候的rotate也要存一下，供后面死鱼使用，来确保活鱼和死鱼的方向相同
                        var rotate=arrFish[i].rotate;
                        arrFish.splice(i,1);
                        i--;
                        arrBullet.splice(j,1);
                        j--;
                        //碰撞之后生成渔网
                        var web=new Web(type);
                        web.x=x;
                        web.y=y;
                        arrWeb.push(web);
                        //和死鱼相同，渔网生成一段时间后也需要消失
                        setTimeout(function(){
                            arrWeb.shift();
                            i--;
                        },1000);
                        //碰撞之后生成金币
                        var coin=new Coin(type);
                        coin.x=x;
                        coin.y=y;
                        arrCoin.push(coin);
                        //碰撞之后生成死鱼
                        var dieFish=new DieFish(type);
                        dieFish.x=x;
                        dieFish.y=y;
                        dieFish.rotate=rotate;
                        arrDieFish.push(dieFish);
                        //清除死鱼，注意死鱼不是一直在清除，使用的一次性定时器，每隔一段时间便清除最前面的一条死鱼
                        setTimeout(function(){
                            arrDieFish.shift();
                            i--;
                        },1000)
                    }
                }
            }
        },30);
        //当点击画布的时候炮的角度对着鼠标点击的位置，并进行重绘
        oC.onclick=function(ev){
            //当点击的时候发射炮弹，所以在点击的时候创造炮弹发射声音文件
            var oA=new Audio();
            oA.src='snd/cannon.mp3';
            oA.play();
            //这里需要梳理鼠标点击的位置和炮旋转角度之间的关系(附图说明--炮的旋转角度.png)
            var x=ev.clientX-oC.offsetLeft- c.x;
            var y= c.y-(ev.clientY-oC.offsetTop);
            //计算角度，注意角度的公式tan是临边比对边，和数学公式的有所不同 Math.atan2(y,x);并且这里是弧度转角度，需要在com.js中添加a2d的函数
            var d=90-a2d(Math.atan2(y,x));
            c.rotate=d;
            //炮的后坐力方法存入
            c.emitChange();
            //当点击的时候生成炮弹，所以在点击事件中添加炮弹
            var bullet=new Bullet(c.type);
            //炮弹的位置和旋转角度和炮的位置和旋转角度相同，
            bullet.x= c.x;
            bullet.y= c.y;
            bullet.rotate = c.rotate;
            //注意炮弹不能画在这里，如果画在这里会被画炮和炮台时所清空，当然潘丹并不是只画一个，可以用一个数组来存储所画出来的炮弹，然后在炮旋转重绘的时候同时添加炮弹，为了让点击事件和定时器都能用到这个数组，这个数组应该写到事件和定时器的父级的变量空间中
            //讲当次点击画布所创建的炮弹存入arrBullet中
            arrBullet.push(bullet);
        };
    });
},false);
