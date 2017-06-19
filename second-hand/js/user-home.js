$(document).ready(function(){
	
	
	
	
	//设置cookier去保存账号密码
	
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
			
			
			
			
	
	
	
	
	
	
	
	
	
	//点击 控制登陆框出现或者是消失 
	window.Flags=0;
       $("#showsign").click(function(){
       	window.Flags++;
      // 	alert(window.Flags)
       	if ((window.Flags%2)==1) {
       		$(".clickshow:eq(0)").show();
       	} else{
       		$(".clickshow:eq(0)").hide();
       	}
       });
	
	//
		//  注销
	 var $flush=$("#flush");	
	 $flush.click(function(){
	 	CookieUnit.unset("name");
		CookieUnit.unset("passwords");
		// alert(document.cookie);
		window.location.replace("./user-home.html");
	 });
	  
       //使用cookie直接登陆  
       
       if(CookieUnit.get("passwords")&&document.cookie){
	//	alert(123);
		var count=CookieUnit.get("name");
        var passwords=CookieUnit.get("passwords"); 
        
            $.ajax({
       		type:"get",
       		url:"./upload.php",
       		async:true,
       		data:{
       			count:count,
       			passwords:passwords
       		},
       		dataType:"Text",
       		success:function(data){
       		//	alert(data);
       			if (data!=0) {
       				$(".Bedown").hide();
       				$("#message").html("您好"+":"+data); 
       			} 
       		}
       	});
       }else{
   
	
	
	
	
	
	
	
	
	//防止 右键粘贴
	document.oncontextmenu=function(ev){     //禁止右键复制粘贴  
		var events=ev||event;
	//	events.preventDefault();
		return false;
	}

	
	 
	 
	 //控制键盘的非法输入  控制de是账号
	var inputs=document.getElementById("count");
	inputs.onkeydown=function(ev)          
	{
	     var events=ev||event;
	    var code=events.keyCode;
	   //  events.preventDefault();
	   var len=this.value.length;
	   // 控制输入账号的长度
	     if (len>9) {
       	  	if ((events.keyCode==8)||(events.keyCode==37)||(events.keyCode==39)) {
       	  		console.log("ok no jump")
       	  	} else{
       	  	console.log(event.keyCode);
       	  	event.preventDefault();
       	  	}
       	  }
	   
	   
	   
	   if((code==8)||(code==37)||(code==39)||((code>=48)&&(code<=57))||((code<=105)&&(code>=96)))
	   {}else{
	   	events.preventDefault();
	   }
	};
	 inputs.onkeyup=function(ev){
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
	 };
	 
	 
	 
	 
	  //  控制拖动 让登陆框可以被  拖动       
      var mybox=document.getElementById("form");
	  mybox.onmousedown=function(ev){
		var events=ev||events;
		var disX=events.clientX-this.offsetLeft;
		var disY=events.clientY-this.offsetTop;
		this.onmousemove=function(ev){
			var eventss=ev||event;
			var lX=eventss.clientX-disX;
			var lY=eventss.clientY-disY
			if(lX<0)
			{
				lX=0;
			}
			if(lY<0)
			{
				lY=0;
			}
			this.style.left=lX+"px";
			this.style.top=lY+"px";
		}
		this.onmouseup=function(){
			this.onmousemove=null;
			this.onmouseup=null;
		}
	  };
//  结束 这个拖动的代码 	
	 
	// 取消登录
       $("#out").click(function(){
       		   	window.Flags++;
      // 	alert(window.Flags)
       	if ((window.Flags%2)==1) {
       		$(".clickshow:eq(0)").show();
       	} else{
       		$(".clickshow:eq(0)").hide();
       	}
       });
       
	 
	 
	 
	    //账号密码 登陆进去数据库
       
      $("#on").click(function(){
       
       if (($("#count").val()=="")||$("#password").val()=="") {
       	alert("非空谢谢！");
       } else{
       	
       	$.ajax({
       		type:"get",
       		url:"./upload.php",
       		async:true,
       		data:{
       			count:$("#count").val(),
       			passwords:$("#password").val()
       		},
       		dataType:"Text",
       		success:function(data){
       		//	alert(data);
       			if (data!=0) {
       				$("#message").html("您好"+":"+data);
       				CookieUnit.sets("name",$("#count").val());
		            CookieUnit.sets("passwords",$("#password").val());
		           
		           
		           //这里面用来变化的是主要区域的数据 登陆或者没有登陆
		           
		           
		           
		           
		           
		           
		           
       			} else{
       				alert("账号密码不匹配");
       					
		       		$(".Bedown").show()
		
		       	   	window.Flags++;
		      // 	alert(window.Flags)
				       	if ((window.Flags%2)==1) {
				       		$(".clickshow:eq(0)").show();
				       	} else{
				       		$(".clickshow:eq(0)").hide();
				       	}
       			}
       		}
       	});

       		$(".Bedown").hide();

       	   	window.Flags++;
      // 	alert(window.Flags)
       	if ((window.Flags%2)==1) {
       		$(".clickshow:eq(0)").show();
       	} else{
       		$(".clickshow:eq(0)").hide();
       	}
       }
       });
       
       
	 
	 };
	 
	});