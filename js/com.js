/**
 * Created by Jason on 2016/11/2.
 */
function d2a(n){
    return n*Math.PI/180;
}
function a2d(n){
    return n*180/Math.PI;
}
function rnd(m,n){
    return parseInt(Math.random()*(n-m)+m);
}
var JSON={};
function loadImage(arr,fnSucc){
    //为了测试是否加载完成，设置count，在加载的时候使count++，判断count的值来判断是否加载完成
    var count=0;
    for(var i=0;i<arr.length;i++){
        var oImg=new Image();
        //加载所有鱼的资源
        (function(index){
            oImg.onload=function(){
                //把所有资源加载，并且存到JSON中，注意，循环中有事件，事件里的i值不对，解决用封闭空间
                JSON[arr[index]]=this;
                count++;
                //当count的值和需要加载的资源的数组相同的时候，资源加载完毕
                if(count==arr.length){
                    fnSucc && fnSucc();
                }
            };
        })(i);

        oImg.src='img/'+arr[i]+'.png';
    }
}