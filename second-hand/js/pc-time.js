
	//设置cookier去保存账号密码
	angular.module("hello",[]).controller("box",function($scope){
			$scope.data=[
				{title:"yujinjiang"}
			];
		
       			//直接去在数据库里面查找
							    $.ajax({
								type:"get",
								url:"./homeswitchdata.php",
								dataType:"text",
								async:false,
								success:function(data){
							    	var obj=JSON.parse(data);
							    	console.log(obj[1].type);
							    	var showdata=[];
							    	for (var i=obj.length-1;i>=0;i--) {
							    		if (obj[i].type=="pc") {
							    			showdata.push(obj[i]);
							    		} else{
							    			
							    		}
							    	};
							    	$scope.data=showdata;
							    	console.log(showdata);
							    	console.log(obj.length);
								
								}
							});
       		
			});
	