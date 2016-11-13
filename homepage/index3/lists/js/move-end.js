// JavaScript Document
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];	
	}else{
		return getComputedStyle(obj,false)[name];	
	}
}
//json:{width:400,height: 500,left: 600,top: 700}要改变的属性名和属性值；
//complete{}:可选参数,可传递时间,运动形式,回调函数; {time:500,easeing:'linear',fn:function(){}}
function move(obj,json,complete){
	clearInterval(obj.timer);
	complete = complete || {};
	//默认运动完成时间3000；
	complete.time = complete.time || 500;
	//默认运动形式ease-in
	complete.easeing = complete.easeing || 'linear';
	var dis = {};
	var start = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];	
	}
	var count = parseInt(complete.time/30);
	var n = 0;
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(complete.easeing){
				//匀速
				case 'linear':
					var a = n/count;
					var cur = start[name]+dis[name]*a;
					break;
				//加速
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*a*a*a;	
				break;
				//减速
				case 'ease-out':
					var a = 1 - n/count;
					var cur = start[name]+dis[name]*(1-a*a*a);	
					break;
			}
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';		
			}else{
				obj.style[name] = cur + 'px';		
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			complete.fn && complete.fn();	
		}
	},30);
}