angular.module("hello",[]).controller("box",function($scope){
				
				$scope.data=[1,1,23,3232];
				$scope.pro=[
	               {name:"yujinjiang"},
	               {age:22},
	               {address:"beijing shangxi"}
				];
			});
$.ajax({
	type:"get",
	url:"./homeswitchdata.php",
	dataType:"text",
	success:function(data){
//		console.log(typeof data);
//	console.log(data[0]);
    	var obj=JSON.parse(data);
    	var showdata=[];
    	for (var i=0;i<obj.length;i++) {
    		if (obj[i].type=="book") {
    			showdata.push(obj[i]);
    		} else{
    			
    		}
    	};
    	
    	console.log(showdata);
    	console.log(obj.length);
		console.log(obj[0]);
	}
});