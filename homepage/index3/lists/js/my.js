
$(function(){

	var oLeft=$('#Left');
	var oLeft1=$('#left1');
	var oLeft2=$('#left2');
	$(oLeft2).html($(oLeft1).html());
	
	var oTop=$('#Top');
	var oLeft3=$('#left3');
	var oLeft4=$('#left4');
	$(oLeft4).html($(oLeft3).html());
	
	var a=1;
	var b=$(oLeft1).outerWidth();
	function Move(){
		if(a>=b){
			a-=b;
			$(oLeft).scrollLeft(a);
		}else{
			a++;
			$(oLeft).scrollLeft(a);
		}
		
	}
	var a1=1;
	var b1=$(oLeft3).outerHeight();
	function Move1(){
		if(a1>=b1){
			a1-=b1;
			$(oTop).scrollTop(a1);
		}else{
			a1++;
			$(oTop).scrollTop(a1);
		}
		
	}
	var timer=setInterval(Move,1);
	var timer1=setInterval(Move1,1);
	$(oLeft).on('mouseover',function(){
		clearInterval(timer);
	});
	$(oLeft).on('mouseout',function(){
		timer=setInterval(Move,1)
	});
	$(oTop).on('mouseover',function(){
		clearInterval(timer1);
	});
	$(oTop).on('mouseout',function(){
		timer1=setInterval(Move1,1)
	});
	var oRight=$('#Right');
	var oRight1=$('#right1');
	var oRight2=$('#right2');
	oRight2.html(oRight1.html());
	
	var oBottom=$('#Bottom');
	var oRight3=$('#right3');
	var oRight4=$('#right4');
	oRight4.html(oRight3.html());

	var n=1;
	var m=$(oRight1).outerWidth();
	function Move2(){
		if(n<=0){
			n+=m;
			$(oRight).scrollLeft(n);
		}else{
			n--;
			$(oRight).scrollLeft(n);
		}
		
	}
	var n1=1;
	var m1=$(oRight3).outerHeight();
	function Move3(){
		if(n1<=0){
			n1+=m1;
			$(oBottom).scrollTop(n1);
		}else{
			n1--;;
			$(oBottom).scrollTop(n1);
		}
		
	}
	var timer2=setInterval(Move2,1);
	var timer3=setInterval(Move3,1);
	$(oRight).on('mouseover',function(){
		clearInterval(timer2);
	});
	$(oRight).on('mouseout',function(){
		timer2=setInterval(Move2,1)
	});
	$(oBottom).on('mouseover',function(){
		clearInterval(timer3);
	});
	$(oBottom).on('mouseout',function(){
		timer3=setInterval(Move3,1)
	});

 });

