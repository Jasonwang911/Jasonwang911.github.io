function json2url(json){
	json.t = Math.random();
	var arr = [];
	for(var name in json){
		arr.push(name+'='+encodeURIComponent(json[name]));
	}
	return arr.join('&');
}
//url,data,type,success,error
function ajax(json){
	//默认值
	json = json||{};
	if(!json.url) return;
	json.data=json.data||{};
	json.type = json.type||'GET';
	json.timeout = json.timeout||10000;
	//1.创建对象
	if(window.XMLHttpRequest){
		//chrome FF
		var oAjax = new XMLHttpRequest();
	}else{
		//IE低版本	
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	switch(json.type.toLowerCase()){
		case 'get':
		//2.建立连接  //是否异步
		oAjax.open('GET',json.url+'?'+json2url(json.data),true);
		//3.发送
		oAjax.send();
		break;
		case 'post': 
		oAjax.open('POST',json.url,true);
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(json2url(json.data));
		break;
	}
	json.loading&&json.loading();
	//如果超过指定时间没有请求到数据
	var timer = setTimeout(function(){
		json.complete&&json.complete();
		json.error&&json.error(oAjax.status);
		oAjax.onreadystatechange = null;
	},json.timeout);
	
	
	//4.接收 
	//当网络状态改变的时候
	oAjax.onreadystatechange = function(){
		//网络状态
		if(oAjax.readyState == 4){
			//http状态
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				clearTimeout(timer);
				json.complete&&json.complete();
				//服务器返回的数据
				json.success&&json.success(oAjax.responseText);	
			}else{
				clearTimeout(timer);
				json.complete&&json.complete();
				json.error&&json.error(oAjax.status);
			}
		}
	}; 
}







