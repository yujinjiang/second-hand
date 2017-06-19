
window.onload=function(){
	
	
	var CookieUnit={
			  get:function(name){
			  var cookieName=encodeURIComponent(name)+"=";
			        var cookieStart=document.cookie.indexOf(cookieName);
			        var cookieValue=null;
			        if(cookieStart>-1){
			        	var cookieEnd=document.cookie.indexOf(";",cookieStart);
			        	if(cookieEnd==-1){
			        		cookieEnd=document.cookie.length;
			        	}
			        	cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
			        }
			        return cookieValue;
			},
			sets:function(name,value,expires,path,domain,secure){
				var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
				if(expires instanceof Date){
					cookieText+=";expire="+expires.toGMTString();
				}
				if (path) {
					cookieText+=";path="+path;
				}
				if (domain) {
					cookieText+=";domain="+domain;
				}
				if (secure) {
					cookieText+=";secure";
				}
				document.cookie=cookieText;
			},
			unset:function(name,path,domain,secure)
			{
				this.sets(name,"",new Date(0),path,domain,secure);
			}
			};
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	var name=document.getElementById("name");
	name.onkeydown=function(ev){
		var events=ev||event;
	   var len=this.value.length;
//   	alert(len);
   	    if (len>9) {
   	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
   	  		console.log("ok no jump")
   	  	} else{
   	  	console.log(event.keyCode);
   	  	events.preventDefault();
   	  	}
   	  }
	}
	
	
	
	
	
	
  var control=document.getElementById("count");
  document.oncontextmenu=function(ev){     //禁止右键复制粘贴  
		var events=ev||event;
		events.preventDefault();
	//	return false;
	}
//	var inputs=document.getElementsByTagName("input")[0];
	control.onkeydown=function(ev)          //组织键盘输入的默认事件
	{
	     var events=ev||event;
	    var code=events.keyCode;
	   //  events.preventDefault();
	   if((code==8)||(code==37)||(code==39)||((code>=48)&&(code<=57))||((code<=105)&&(code>=96)))
	   {}else{
	   	events.preventDefault();
	   }
	}
  
      control.onkeyup=function(ev){
		   var events=ev||event;
//	 alert(events.keyCode);
	  if(events.keyCode==86&&events.ctrlKey)
	  {
		  events.preventDefault();
		//  alert(123);
	  }
	 if((events.keyCode!=8)&&(events.keyCode!=37)&&(events.keyCode!=39))
	 {
	 var pattern=/\D/g;
	 this.value=this.value.replace(pattern,""); 
	 }
     console.log(this.value.length);	}
	
 function addurlPrama(url,name,value){
 	url+=(url.indexOf("?")==-1?"?":"&");
 	url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
 	return url;
 }
 
	var sunmits=document.getElementById("submit");
	sunmits.onclick=function(){
		var name=document.getElementById("name");
	//	alert(name.value);
		var name=document.getElementById("name").value;
		var count=document.getElementById("count").value;
		var passwords=document.getElementById("password").value;
		if(!name||!count||!passwords)
		{
			alert("非空谢谢！");
		}
		else{
		//	alert(!passwords);
		var xhr=new XMLHttpRequest();
		var url="./signup.php";
		url=addurlPrama(url,"value1",name);
		url=addurlPrama(url,"value2",count);
		url=addurlPrama(url,"value3",passwords);
		xhr.open("get",url,false);
	//	xhr.open("get","注册.php?value1=name&value2=count&value3=passwords",false);
		xhr.send(null);
		alert("正在创建账号……");
		var xod=xhr.responseText;
		if(xhr.responseText==0){
			alert("账户已经存在");
		}else{
			alert("注册成功");
			CookieUnit.sets("name",count);
		    CookieUnit.sets("passwords",passwords);
			window.location.replace("./second-page.html");
		}
		document.getElementById("myform").reset();
		};
	//	alert(JSON.parse(xhr.responseText).name);
	}
}


