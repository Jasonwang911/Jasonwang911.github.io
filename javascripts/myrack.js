//参数是不是数字
function num(){
	for(var i=0;i<arguments.length;i++){
		if(isNaN(arguments[i])){
			return false;
		}
	}
	return true;	
}
//end



//wo de kuangjia 
//选随机数
function rnd(m,n){
	return parseInt(Math.random()*(n-m)+m);
}
//end
//设置css样式
function setStyle(){
	var obj=arguments[0];
	if(arguments.length==3){
		var name=arguments[1];
		var val=arguments[2];
		obj.style[name]=val;	
	}else{
		var json=arguments[1];//json..
		for(var name in json){
			obj.style[name]=json[name];	
		}		
	}	
}
//end
//计算数字的综合，用arguments.
function count(/*写需要计算的数字，用逗号隔开*/){
		         //利用arguments计算数字的总和。
				var num=0;
				for(var i=0; i<arguments.length; i++){
					num+=arguments[i];
				}
				return num;//返回相加之后的值
				//把相加的数字写在实参里，argunments和形参无关，和实参有关系
			}
//end

//选项卡，自定义属性index。 用的是btn和div布局
function tab(json){
	json=json||{};
	json.className=json.className||'active';
	var oBox=document.getElementById(json.id);
	var aBtn=oBox.getElementsByTagName(json.btn);
	var aDiv=oBox.getElementsByTagName(json.div);
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i][json.even]=function(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className='';
				aDiv[i].style.display='none';
			}
			this.className=json.b;
			aDiv[this.index].style.display='block';	
		};
	}
}
//选项卡 end
//封闭空间的选项卡
 function oTab(oBj,oBtn,oDiv){
//		   	    var oBj=document.getElementById(id); 按钮和盒子的父级
//				var oBtn=oBj.getElementsByTagName('input');
//				var oDiv=oBj.getElementsByTagName('div');
//封闭空间法 取 i值		   	
			   	for(var i=0; i<oBtn.length; i++){
	            	//准备写事件，需要i值。用封闭空间
	            	(function(a){
	            		oBtn[a].onclick=function(){
	            			for(var j=0; j<oBtn.length; j++){
	            				oBtn[j].className='';
	            				oDiv[j].style.display='none';
	            			}
	            			this.className='active';
	            			oDiv[a].style.display='block';
	            		}
	            	})(i);
	            }
		   }
//end
//补零
function toZeio(n){
	if(n<10){
		return '0'+n;
	}else{
		return '' + n;
	}
}
//end

//查找是否和数组重复
function findInArr(n,arr){
	for(var i = 0; i < arr.length; i++){
		if(n == arr[i]){
			return true;	
		}	
	}	
	return false;
}
//end
//判断是否整数
function intg(n){
	if(parseInt(n) == n){
		return true; //如果是返回true
	}else{
		return false;
	}
}
//end
//判断真假
function judge(a){
	if(a){
		return true;
	}else{
		return false;
	}
}
//end
//去除数组中的奇数
function odd(arr){
	//var arr=[1,5,2,4,6,9];
	for(var i = 0 ; i < arr.length; i++){
		if(arr[i]%2==1){
			arr.splice(i,1);
			i--;
		}
  }
  return arr;
}
//end

//获取classname
    function findInArr(n,arr){
		for(var i = 0 ;i < arr.length; i++){
			if(n == arr[i]){
				return true;	
			}	
		}
		return false;
	}
	//oParent:父级  sClass：我们要查找的className
	function getByClass(oParent,sClass){
		//如果浏览器支持JS自带的获取class的方法就是用JS自带的获取方法;
		if(oParent.getElementsByClassName){
			return oParent.getElementsByClassName(sClass);
		}else{//如果浏览器不支持JS自带的获取class的方法,也就是ie8-
			//通过oPraent获取所有的元素;
			var aEle = oParent.getElementsByTagName('*');
			var arr = [];
			//循环吧每个元素绳身上的class切割一下，切割完成返回一个数组
			for(var i = 0; i < aEle.length; i++){
				var tmp = aEle[i].className.split(' ');	
				//判断切割完成后的数组里面是否包含我们需要找的className;
				if(findInArr(sClass,tmp)){
					//如果包含的话就添加到arr里面;
					arr.push(aEle[i]);
				}
			}
			return arr;//并且返回arr;
		}	
	}			
//end				
			
//绝对距离			
function getPos(obj){
	var l = 0;
	var t = 0;
	while(obj){
		l += obj.offsetLeft;
		t += obj.offsetTop;
		obj = obj.offsetParent;	
	}
	return {left: l, top:t};//----------->json
}
//ed;			


//排序获取最大数
var arr = [12,45,76,8,1232,354,765,7];
arr.sort(function(n1,n2){
	return n2-n1;
});

//ed;
////排序获取最小数
var arr = [12,45,76,8,1232,354,765,7];
arr.sort(function(n1,n2){
	return n1-n2;
});

//ed;


//获得本月有多少天
function getD(){
	var oDate = new Date();
	oDate.setMonth(oDate.getMonth()+1);//先进行到下一月
	oDate.setDate(0);//再返回本月
	return oDate.getDate();//下个月的上个月的最后一天
  }			
//end			
//去除数组中重复的数
function ohh(arr){
	arr.sort();//排序  
	//var arr=[1,5,2,4,6,9];
	for(var i = 0 ; i < arr.length; i++){
		if(arr[i]==arr[i+1])//那当前的和下一个做对比，相等的话就从当前删除一个；
		{
			arr.splice(i,1);
			i--;
		}
  }
  return arr;
}
//end
//返回数组最小数的位置(第一个)
function findInMin(arr,start){
 	var iMin = arr[start];
 	var iMinIndex=start;
 	for(var i=start; i<arr.length; i++){
 		if(iMin > arr[i]){
 			iMin=arr[i];
 			iMinIndex = i;
 		}
 	}
 	return iMinIndex;
}
//end
//sort
arr.sort(function(a,b){
	return a-b;//比较函数,加上最好.不加有时候会失灵
})
//end加 比较函数			
			
//倒叙函数
function dao(arr){
	return arr.reverse();
}
//end			
//首字母大写 de 字符串
function toUpper(str){
	var arr1 = [];//用来存放我们转换完后后的单词;
	//第一步：先把单词拿出来;
	var arr = str.split(' ');//welcome,to,china
	for(var i = 0; i < arr.length; i++){
		//第二步：每个单词的首字母转大写;
		var a = arr[i].charAt(0).toUpperCase();
		//第三步：从第一位开始切割每个单词，
		var b = arr[i].substring(1);
		//第四步：切完之后再拼接起来;
		var c = a + b;//Welcome,To,Chian
		//第五步：把拼接完成的单词放入一个新的数组;
		arr1.push(c);
	}
	return arr1.join(' ');//可以换别的分隔符
}
//end
//判断是不是一个数字
function testNumber(){
				for(var i=0; i<arguments.length; i++){
					if(typeof arguments[i] != 'number'){
						return false;
					}
				}
				return true;
			}
//end 
//把字符串变成json
function str2json(str){
	var arr = str.split('&');//不一定每次都是'&';
	var json = {};
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split('=');
		json[arr2[0]] = arr2[1];
	}
	return json;
}
//end 
//json转字符串
function json2str(json){
	var arr = [];
	for(var name in json){
		arr.push(name + '=' + json[name]);
	}
	arr.join('&');//用'&'拼接了一下
	return arr;
}
//end


//事件绑定
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);	
	}else{
		obj.attachEvent('on'+sEv,fn);	
	}
}
//end
//解除事件绑定
function removeEvent(obj,sEv,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(sEv,fn,false);	
	}else{
		obj.detachEvent('on'+sEv,fn);	
	}
}


//end
//拖拽分装
function drag(obj){
	addEvent(obj, 'mousedown', function (ev){
		var oEvent=ev || event;
		var disX=oEvent.clientX-obj.offsetLeft;
		var disY=oEvent.clientY-obj.offsetTop;
		
		addEvent(document, 'mousemove', move);
		addEvent(document, 'mouseup', up);
		
		function move(ev)
		{
			var oEvent=ev || event;
			
			obj.style.left=oEvent.clientX-disX+'px';
			obj.style.top=oEvent.clientY-disY+'px';
		}
		
		function up()
		{
			removeEvent(document, 'mousemove', move);
			removeEvent(document, 'mouseup', up);
			
			obj.releaseCapture && obj.releaseCapture();
		}
		
		obj.setCapture && obj.setCapture();
		
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	});
}
//end

//封装滚轮事件

function addWheel(obj,fn){
	function wheel(ev){
		var oEvent= ev  ||  event;
		var onOff=true;
		onOff=oEvent.wheelDelta ? oEvent.wheelDelta>0  : oEvent.detail<0  ;
		fn&&fn(onOff);
		oEvent.preventDefault&&oEvent.preventDefault();
		return false;
	};
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
	 obj.addEventListener('DOMMouseScroll',wheel,false);
	}else{
	obj.onmousewheel=wheel;	
	}	
};

//end

//DOMContentLoaded 分装
function DOMReady(fn){
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',function (){
            fn&&fn();
        },false);
    }else{
        document.attachEvent('onreadystatechange',function (){
            if(document.readyState=='complete'){
                fn&&fn();
            }
        });
    }
}

//end;


//move
//取非行间样式
function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];//兼容ie
		}else{
			return getComputedStyle(obj,false)[name];//除ie以外的
		}
}
//end
	function move1(obj,name,iTarget,time,fn){
		var start=parseFloat(getStyle(obj,name));
		var dis=iTarget-start;
		var count=parseInt(time/30);
		var step=dis/count;
		var n=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			n++;
			var cur=start+n*step;
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha('+cur*100+')';	
			}else{
				obj.style[name]=cur+'px';	
			}
			
			if(n==count){
				clearInterval(obj.timer);
				fn&&fn();	
			}	
		},30);
	}
//end
//多个move改变
function move(obj,json,options){
    options=options || {};
    options.duration =options.duration || 500;
    options.easing=options.easing || 'ease-out';

    var count=Math.floor(options.duration/30);
    var start={};
    var dis={};

    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        if(isNaN(start[name])){
            switch(name){
                case 'left':
                    start[name]=obj.offsetLeft;
                    break;
                case 'top':
                    start[name]=obj.offsetTop;
                    break;
                case 'width':
                    start[name]=obj.offsetWidth;
                    break;
                case 'height':
                    start[name]=obj.offsetHeight;
                    break;
                case 'opacity':
                    start[name]=1;
                    break;
                //borderWidth fontSize paddingLeft marginLeft
                //.....
            }
        }

        dis[name]=json[name]-start[name];
    }

    clearInterval(obj.timer);

    var n=0;

    obj.timer=setInterval(function(){
        n++;

        for(var name in json){

            switch(options.easing){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }

            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';
            }else{
                obj.style[name]=cur+'px';
            }
        }

        if(n==count){
            clearInterval(obj.timer);
            options.complete && options.complete();
        }
    },30);

}

//end

//定位父级的距离
function getPos(obj){
    var l=0;
    var t=0;
    while(obj){
        l+=obj.offsetLeft;
        t+=obj.offsetTop;
        obj=obj.offsetParent;
    }
    return {left:l,top:t}
}

//end
//
//
//设置cookie
function setCookie(name,value,iDay){
	if(iDay){
		var oDate = new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie = name+'='+value+'; PATH=/; EXPIRES='+oDate;		
	}else{
		document.cookie = name+'='+value+'; PATH =/'; 		
	}
}

//读取
function getCookie(name){
	var arr =  document.cookie.split('; '); 
	//[gf=alice,age=22,height=168]
	for(var i = 0;i<arr.length;i++){
		//[gf,alice]
		//gf
		if(arr[i].split('=')[0] == name){
			return arr[i].split('=')[1];
		}
	}
	
	return '';
}
//借刀杀人
function removeCookie(name){
	setCookie(name,1,-1);
}

//class方法
function getByClass(oParent,sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var arr=[];
        var aEle=oParent.getElementsByTagName('*');
        var re=new RegExp('\\b'+sClass+'\\b');

        for(var i=0;i<aEle.length;i++){
            if(re.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}
function hasClass(obj,sClass){
    var re=new RegExp('\\b'+sClass+'\\b');
    return re.test(obj.className);
}
function addClass(obj,sClass){
    // <div class='ac now active'></div>
    //本身没有class
    if(obj.className){
        //判断添加的class有没有啊
        if(!hasClass(obj,sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
}
function removeClass(obj,sClass){
    var re=new RegExp('\\b'+sClass+'\\b');
    if(hasClass(obj,sClass)){
        obj.className=obj.className.replace(re,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    }
}


//end;









