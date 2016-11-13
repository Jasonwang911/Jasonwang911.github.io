window.onload=function(){

	var oLeft=document.getElementById('Left');
	var oLeft1=document.getElementById('left1');
	var oLeft2=document.getElementById('left2');
	oLeft2.innerHTML=oLeft1.innerHTML;
	
	var oTop=document.getElementById('Top');
	var oLeft3=document.getElementById('left3');
	var oLeft4=document.getElementById('left4');
	oLeft4.innerHTML=oLeft3.innerHTML;
	
	
	function Move(){
		if(oLeft.scrollLeft>=oLeft1.offsetWidth)
		oLeft.scrollLeft-=oLeft1.offsetWidth;
		else{
		oLeft.scrollLeft++;
		}
	}
	
	function Move1(){
		if(oTop.scrollTop>=oLeft3.offsetHeight)
		oTop.scrollTop-=oLeft3.offsetHeight;
		else{
		oTop.scrollTop++;
		}
	}
	
	var timer=setInterval(Move,1);
	var timer1=setInterval(Move1,1);
	
	oLeft.onmouseover=function() {clearInterval(timer)};
	oLeft.onmouseout=function() {timer=setInterval(Move,1)};
	
	oTop.onmouseover=function() {clearInterval(timer1)};
	oTop.onmouseout=function() {timer1=setInterval(Move1,1)};
	
	var oRight=document.getElementById('Right');
	var oRight1=document.getElementById('right1');
	var oRight2=document.getElementById('right2');
	oRight2.innerHTML=oRight1.innerHTML;
	
	var oBottom=document.getElementById('Bottom');
	var oRight3=document.getElementById('right3');
	var oRight4=document.getElementById('right4');
	oRight4.innerHTML=oRight3.innerHTML;
	
	function Move2(){
		if(oRight.scrollLeft<=0)
		oRight.scrollLeft+=oRight1.offsetWidth;
		else{
		oRight.scrollLeft--;
		}
	}
	
	
	function Move3(){
		if(oBottom.scrollTop<=0)
		oBottom.scrollTop+=oRight3.offsetHeight;
		else{
		oBottom.scrollTop--;
		}
	}
	
	var timer2=setInterval(Move2,1);
	var timer3=setInterval(Move3,1);
	oRight.onmouseover=function() {clearInterval(timer2)};
	oRight.onmouseout=function() {timer2=setInterval(Move2,1)};
	
	oBottom.onmouseover=function() {clearInterval(timer3)};
	oBottom.onmouseout=function() {timer3=setInterval(Move3,1)};

 };

