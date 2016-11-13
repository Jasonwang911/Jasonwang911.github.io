;(function(Jquery){
	$(function(){
	var oBox=$('#box');
	var oPrev=$('.prev');
	var oNext=$('.next');
	var oUl=$('#box ul');
	var aLi=$('#box ul li');
	var oOl=$('#box ol');
	var aBtn=$('#box ol li');
	$(oUl).html($(oUl).html()+$(oUl).html());
	$(oUl).css('width',10*534);
	var W=10*534/2;
	$(oBox).on('mouseover',function(){
		clearInterval(timer);
		$(oPrev).css('display','block');
		$(oNext).css('display','block');
	});
	$(oBox).on('mouseout',function(){
		timer=setInterval(function(){
			iNow--;
			tab();
		},2000);
		$(oPrev).css('display','none');
		$(oNext).css('display','none');
	});
	var iNow=0;
	$(aBtn).each(function(index){
		$(aBtn).eq(index).on('click',function(){
			if(index==0 && iNow%($(aBtn).length)==$(aBtn).length-1){
					iNow++;	
				}
				if(index==$(aBtn).length-1 && iNow%($(aBtn).length)==0){
					iNow--;	
				}
				
				if(iNow>0){
					iNow=Math.floor(iNow/$(aBtn).length)*$(aBtn).length+index;
					if(index==0 && iNow%($(aBtn).lengt)==-1){
						iNow++;	
					}
					iNow=Math.floor(iNow/$(aBtn).length)*$(aBtn).length+index;	
				}
				tab();
		});
	});
	function tab(){
		$(aBtn).each(function(index){
			$(aBtn).eq(index).removeClass('active');
		});
		if(iNow<0){
			$(aBtn).eq((iNow%($(aBtn).length)+$(aBtn).length)%($(aBtn).length)).addClass('active');
		}else{
			$(aBtn).eq(iNow%($(aBtn).length)).addClass('active');

		}
		startMove(oUl,-iNow*534);
	}
	$(oNext).on('click',function(){
		iNow++;
		tab();
	});
	var timer=null;
	timer=setInterval(function(){
		iNow--;
		tab();
	},2000);
	$(oPrev).on('click',function(){
		iNow--;
		tab();
	});
		var l=0;
		function startMove(obj,iTarget){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var iSpeed=(iTarget-l)/8;//  总的距离/8得到速度。
					//判断speed 正负，来取舍不同的值，不能为小数，每次都要求走一个li宽度。
				iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
				
				if(l==iTarget){//判断l=iTaegrt要关闭定时器
					clearInterval(obj.timer);
				}else{
					l+=iSpeed;
					if(l<0){
						obj.css('left',l%W);
					}else{
						obj.css('left',(l%W-W)%W);	
					}
				}
				
			},30);
		}

});
})($);
;(function(Jquery){
	$(function(){
		var timer=null;
		var index=0;
		var aS=$('span');
		var aLi=$('#box1 ul li');
		function tab(){
			$(aS).eq(index).animate({width:'80px'},1500,
				function(){
				index++;
				$(aS).each(function(index){
					$(aS).eq(index).css({width:0});
				});
				if(index==$(aLi).length){
						index=0;	
				}
				$('#box1 ul').animate({left:-600*index+'px'},1500,tab
				);
			});
		}
		tab();
	});
})($);