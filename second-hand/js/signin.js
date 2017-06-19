//$(document).ready(function(){
//	
//	
////	var myname=123
////	alert("yujinjiang"+myname);
//	
//	
//	
//	
//	
//	
//	
//	//设置cookier去保存账号密码
//	
//	var CookieUnit={
//			  get:function(name){
//			  var cookieName=encodeURIComponent(name)+"=";
//			        var cookieStart=document.cookie.indexOf(cookieName);
//			        var cookieValue=null;
//			        if(cookieStart>-1){
//			        	var cookieEnd=document.cookie.indexOf(";",cookieStart);
//			        	if(cookieEnd==-1){
//			        		cookieEnd=document.cookie.length;
//			        	}
//			        	cookieValue=decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
//			        }
//			        return cookieValue;
//			},
//			sets:function(name,value,expires,path,domain,secure){
//				var cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
//				if(expires instanceof Date){
//					cookieText+=";expire="+expires.toGMTString();
//				}
//				if (path) {
//					cookieText+=";path="+path;
//				}
//				if (domain) {
//					cookieText+=";domain="+domain;
//				}
//				if (secure) {
//					cookieText+=";secure";
//				}
//				document.cookie=cookieText;
//			},
//			unset:function(name,path,domain,secure)
//			{
//				this.sets(name,"",new Date(0),path,domain,secure);
//			}
//			};
//			
//			
//			
//			
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	//防止 右键粘贴
//	document.oncontextmenu=function(ev){     //禁止右键复制粘贴  
//		var events=ev||event;
//	//	events.preventDefault();
//		return false;
//	}
//	//  注销
//	 var $flush=$("#flush");	
//	 $flush.click(function(){
//	 	CookieUnit.unset("name");
//		CookieUnit.unset("passwords");
//		// alert(document.cookie);
//		window.location.replace("./upload.html");
//	 });
//	
//	
//	
//	
//	//   控制登陆框存在或者消失
//	window.Flags=0;
//     $("#showsign").click(function(){
//     	window.Flags++;
//    // 	alert(window.Flags)
//     	if ((window.Flags%2)==1) {
//     		$(".clickshow:eq(0)").show();
//     	} else{
//     		$(".clickshow:eq(0)").hide();
//     	}
//     });
//     
//     
//     
//     
//     
//     
//     //使用cookie直接登陆  
//     
//     if(CookieUnit.get("passwords")&&document.cookie){
//	//	alert(123);
//		var count=CookieUnit.get("name");
//      var passwords=CookieUnit.get("passwords"); 
//      
//          $.ajax({
//     		type:"get",
//     		url:"./upload.php",
//     		async:true,
//     		data:{
//     			count:count,
//     			passwords:passwords
//     		},
//     		dataType:"Text",
//     		success:function(data){
//     		//	alert(data);
//     			if (data!=0) {
//     				$(".Bedown").hide();
//     				$("#message").html("您好"+":"+data); 
//     			} 
//     		}
//     	});
//     }else{
// 
//      
//      
//      
//      
//     
//     
//     
//     
//     
//     
//     
//     
//     //登陆框中间的登陆  
//     
//     //组织键盘输入的默认事件
//  var inputs=document.getElementById("count");
//	inputs.onkeydown=function(ev)          
//	{
//	     var events=ev||event;
//	    var code=events.keyCode;
//	   //  events.preventDefault();
//
//	     var len=this.value.length;
////   	alert(len);
// 	    if (len>9) {
// 	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
// 	  		console.log("ok no jump")
// 	  	} else{
// 	  	console.log(event.keyCode);
// 	  	events.preventDefault();
// 	  	}
// 	  }
//	}
//	   
//	   
//	   
//	   
//	   
//	   if((code==8)||(code==37)||(code==39)||((code>=48)&&(code<=57))||((code<=105)&&(code>=96)))
//	   {}else{
//	   	events.preventDefault();
//	   }
//	};
//	 inputs.onkeyup=function(ev){
//		   var events=ev||event;
////	 alert(events.keyCode);
//	  if(events.keyCode==86&&events.ctrlKey)
//	  {
//		  events.preventDefault();
//		//  alert(123);
//	  }
//	 if((events.keyCode!=8)&&(events.keyCode!=37)&&(events.keyCode!=39))
//	 {
//	 var pattern=/\D/g;
//	 this.value=this.value.replace(pattern,""); 
//	 }
//	 };
//     
//     
//     
//     
//     
//     //账号密码 登陆进去数据库
//     
//    $("#on").click(function(){
//     
//     if (($("#count").val()=="")||$("#password").val()=="") {
//     	alert("非空谢谢！");
//     } else{
//     	
//     	$.ajax({
//     		type:"get",
//     		url:"./upload.php",
//     		async:true,
//     		data:{
//     			count:$("#count").val(),
//     			passwords:$("#password").val()
//     		},
//     		dataType:"Text",
//     		success:function(data){
//     		//	alert(data);
//     			if (data!=0) {
//     				$("#message").html("您好"+":"+data);
//     				CookieUnit.sets("name",$("#count").val());
//		            CookieUnit.sets("passwords",$("#password").val());
//		           
//     			} else{
//     				alert("账号密码不匹配");
//     					
//		       		$(".Bedown").show()
//		
//		       	   	window.Flags++;
//		      // 	alert(window.Flags)
//				       	if ((window.Flags%2)==1) {
//				       		$(".clickshow:eq(0)").show();
//				       	} else{
//				       		$(".clickshow:eq(0)").hide();
//				       	}
//     			}
//     		}
//     	});
//     	
//     	
//     	
//     	
//     	
//     	
//     	
//     	
//     	
//     	
//     		$(".Bedown").hide();
//
//     	   	window.Flags++;
//    // 	alert(window.Flags)
//     	if ((window.Flags%2)==1) {
//     		$(".clickshow:eq(0)").show();
//     	} else{
//     		$(".clickshow:eq(0)").hide();
//     	}
//     }
//     
//     
//    
//     });
//     
//     
//     
//     
//     //取消登陆 
//     $("#out").click(function(){
//     		   	window.Flags++;
//    // 	alert(window.Flags)
//     	if ((window.Flags%2)==1) {
//     		$(".clickshow:eq(0)").show();
//     	} else{
//     		$(".clickshow:eq(0)").hide();
//     	}
//     })
//     
//     
//     
//     
//     
//     
//     
//     
////  控制拖动 让登陆框可以被  拖动       
//    var mybox=document.getElementById("form");
//	  mybox.onmousedown=function(ev){
//		var events=ev||events;
//		var disX=events.clientX-this.offsetLeft;
//		var disY=events.clientY-this.offsetTop;
//		this.onmousemove=function(ev){
//			var eventss=ev||event;
//			var lX=eventss.clientX-disX;
//			var lY=eventss.clientY-disY
//			if(lX<0)
//			{
//				lX=0;
//			}
//			if(lY<0)
//			{
//				lY=0;
//			}
//			this.style.left=lX+"px";
//			this.style.top=lY+"px";
//		}
//		this.onmouseup=function(){
//			this.onmousemove=null;
//			this.onmouseup=null;
//		}
//	  };
////  结束 这个拖动的代码 	  
//     
//     
//     
//     
//     
//     
//     
//     
//        //  提交自己想要出手的物品  
//     $("#finalSubmit").click(function(event){
//          event.preventDefault();
//          alert($("#pic1").val());
//     });
//     
//     
//     //标题 控制 
//     $("#title").keydown(function(event){
//      var $len=$(this).val().length;
//  //   	alert(len);
//     	  if ($len>9) {
//     	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
//     	  		console.log("ok no jump")
//     	  	} else{
//     	  	console.log(event.keyCode);
//     	  	event.preventDefault();
//     	  	}
//     	  }
//     });
//     
//     // 描述控制 
//     $("#describe").keydown(function(event){
//     	     var $len=$(this).val().length;
//  //   	alert(len);
//     	  if ($len>99) {
//     	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
//     	  		console.log("ok no jump")
//     	  	} else{
//     	  	console.log(event.keyCode);
//     	  	event.preventDefault();
//     	  	}
//     	  }
//     });
//     
//     //价格控制 
//  var price=document.getElementById("price");
//	price.onkeydown=function(ev)          
//	{
//	
//	     var events=ev||event;
//	    var code=events.keyCode;
//	   //  events.preventDefault();
//	     var len=this.value.length;
//  //   	alert(len);
//     	  if (len>5) {
//     	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
//     	  		console.log("ok no jump")
//     	  	} else{
//     	  	console.log(event.keyCode);
//     	  	event.preventDefault();
//     	  	}
//     	  };
//	   if((code==8)||(code==37)||(code==39)||((code>=48)&&(code<=57))||((code<=105)&&(code>=96)))
//	   {}else{
//	   	events.preventDefault();
//	   }
//	};
//	 price.onkeyup=function(ev){
//		   var events=ev||event;
////	 alert(events.keyCode);
//	  if(events.keyCode==86&&events.ctrlKey)
//	  {
//		  events.preventDefault();
//		//  alert(123);
//	  }
//	 if((events.keyCode!=8)&&(events.keyCode!=37)&&(events.keyCode!=39))
//	 {
//	 var pattern=/\D/g;
//	 this.value=this.value.replace(pattern,""); 
//	 }
//	 };
//     
//     
//     
//};
//});
//
$(document).ready(function(){
	
	
//	var myname=123
//	alert("yujinjiang"+myname);
	
	
	
	
	
	
	
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
			
			
			
			
	
	
	
	
	
	
	
	
	
	
	//防止 右键粘贴
	document.oncontextmenu=function(ev){     //禁止右键复制粘贴  
		var events=ev||event;
	//	events.preventDefault();
		return false;
	}
	//  注销
	 var $flush=$("#flush");	
	 $flush.click(function(){
	 	CookieUnit.unset("name");
		CookieUnit.unset("passwords");
		// alert(document.cookie);
		window.location.replace("./upload.html");
	 });
	
	
	
	
	// 
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
       };
   
        
        
        
        
       
       
       
       
       
       
       
       
       //登陆框中间的登陆  
       
       //组织键盘输入的默认事件
    var inputs=document.getElementById("count");
	inputs.onkeydown=function(ev)          
	{
	     var events=ev||event;
	    var code=events.keyCode;
	   //  events.preventDefault();
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
       
       
       
       
       //取消登陆 
       $("#out").click(function(){
       		   	window.Flags++;
      // 	alert(window.Flags)
       	if ((window.Flags%2)==1) {
       		$(".clickshow:eq(0)").show();
       	} else{
       		$(".clickshow:eq(0)").hide();
       	}
       });
       
       
       
       
       
       
       
       
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
       
       
       
       
       
       
       
       
          //  提交自己想要出手的物品  
       $("#finalSubmit").click(function(event){
        //   event.preventDefault();
        //   alert($("#describe").val());
          var count=CookieUnit.get("name");
          var describe=$("#describe").html();
          $("#mycount").val(count);
          
          
        var myString= $("#pic1").val();
  //      alert(myString=="");
        var testStr1=/.*\.png$/ig;
         var testStr2=/.*\.jpg$/ig;
          var testStr3=/.*\.jpeg$/ig;
           var testStr4=/.*\.gif$/ig;
    if (testStr1.test(myString)||testStr2.test(myString)||testStr3.test(myString)||testStr4.test(myString)||myString=="") {
    	
    } else{
    	
    	alert("只能使用png jpg jpeg git格式的图片");
    	return false;
    }   
       
       
         var myString2= $("#pic2").val();
  //      alert(myString=="");
    
    if (testStr1.test(myString2)||testStr2.test(myString2)||testStr3.test(myString2)||testStr4.test(myString2)||myString2=="") {
    	
    } else{
    	
    	alert("只能使用png jpg jpeg git格式的图片");
    	return false;
    } ;
           var myString3= $("#pic3").val();
  //      alert(myString=="");
    
    if (testStr1.test(myString3)||testStr2.test(myString3)||testStr3.test(myString3)||testStr4.test(myString3)||myString3=="") {
    	
    } else{
    	
    	alert("只能使用png jpg jpeg git格式的图片");
    	return false;
    };
           var myString4= $("#pic4").val();
  //      alert(myString=="");
    
    if (testStr1.test(myString4)||testStr2.test(myString4)||testStr3.test(myString4)||testStr4.test(myString4)||myString4=="") {
    	
    } else{
    	
    	alert("只能使用png jpg jpeg git格式的图片");
    	return false;
    } ;
           var myString5= $("#pic5").val();
  //      alert(myString=="");
    
    if (testStr1.test(myString5)||testStr2.test(myString5)||testStr3.test(myString5)||testStr4.test(myString5)||myString5=="") {
    	
    } else{
    	
    	alert("只能使用png jpg jpeg git格式的图片");
    	return false;
    }   
       
       
       
   
       
       
       
       
       
       
       
    //     alert(testStr.test(myString)); 
       //   alert($("#mycount").val());
         
       //   alert($("#pic1").val());
      // alert(typeof count);
          if((count==undefined)||count=="")
          {
          	alert("请先登录");
          	return false;
          }
          else{
             
          };
       });
       
     
     
     
     
       //标题 控制 
       $("#title").keydown(function(event){
        var len=$(this).val().length;
      // 	alert(len);
       	  if (len>9) {
       	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
       	  		console.log("ok no jump")
       	  	} else{
       	  	console.log(event.keyCode);
       	  	return false;
       	  	event.preventDefault();
       	  	}
       	  }
       });
       
       
       
       
       
       
       
       // 描述控制 
       $("#describe").keydown(function(event){
       	     var $len=$(this).val().length;
    //   	alert(len);
       	  if ($len>99) {
       	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
       	  		console.log("ok no jump")
       	  	} else{
       	  	console.log(event.keyCode);
       	  	event.preventDefault();
       	  	}
       	  }
       });
       
       //价格控制 
    var price=document.getElementById("price");
	price.onkeydown=function(ev)          
	{
	
	     var events=ev||event;
	    var code=events.keyCode;
	   //  events.preventDefault();
	     var len=this.value.length;
    //   	alert(len);
       	  if (len>5) {
       	  	if ((event.keyCode==8)||(event.keyCode==37)||(event.keyCode==39)) {
       	  		console.log("ok no jump")
       	  	} else{
       	  	console.log(event.keyCode);
       	  	event.preventDefault();
       	  	}
       	  };
	   if((code==8)||(code==37)||(code==39)||((code>=48)&&(code<=57))||((code<=105)&&(code>=96)))
	   {}else{
	   	events.preventDefault();
	   }
	};
	 price.onkeyup=function(ev){
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
  
  
  
 
  
});


