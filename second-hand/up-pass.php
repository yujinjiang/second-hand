<?php
/*
$server = "localhost";
$username = "root";
$password = "root";
$dbname = "userpassfinal";
$conn = new mysqli($server, $username, $password, $dbname);
*/


 // echo json_encode($arr);
 //  $times = date("Y-n-j-G-i-s");
   
try{
$pdo=new PDO("mysql:host=localhost;dbname=project","root","root");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e)
{
	  
	  echo $e->getMessage();
	  exit();
};
$location=1;
// $times="s"+$location+$times;

//给数据库里面插入数据
/*
$flag=1;
if($flag)
{  
	 try{
	 $stmt = $pdo->prepare("INSERT INTO userpassfinal(count,title,describle,price,times)
    VALUES (:count, :title, :describle,:price,:times)");
    $stmt->bindParam(':count', $_POST["count"]);
    $stmt->bindParam(':title', $_POST["title"]);
    $stmt->bindParam(':describle',$_POST["describe"]);
    $stmt->bindParam(':price',$_POST["price"]);
    $stmt->bindParam(':times',$times);
    $stmt->execute();
	
}catch(PDOException $e)
	  {
		  echo $e->getMessage();
		  exit();
	  }
}  


*/



// 
//
//
//try{
//$pdo=new PDO("mysql:host=localhost;dbname=project","root","root");
//$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//}catch(PDOException $e)
//{
//	  
//	  echo $e->getMessage();
//	  exit();
//};
//
//



$file = array();
for($i=1; $i < 6; $i++)
{
	if($_FILES["file$i"]["name"] <> "")
	{
		$file[$i] = "upload/" . md5_file($_FILES["file$i"]["tmp_name"]) . "." . end(explode(".", $_FILES["file$i"]["name"]));
		move_uploaded_file($_FILES["file$i"]["tmp_name"], $file[$i]);
	}
}
/*
$count = $_POST["count"];
$title = $_POST["title"];
$describe = $_POST["describe"];
$price = $_POST["price"];
$times = date("Y-n-j-G-i-s");

$sql = "INSERT INTO userpassfinal (count, title, describle, price, pic1, pic2, pic3, pic4, pic5, times) VALUES ('$count', '$title', '$describe', '$price', '$file[1]', '$file[2]', '$file[3]', '$file[4]', '$file[5]', $times)";
$conn->query($sql);
$conn->close();  
*/

$flag=1;
if($flag)
{  
	 try{
	 $stmt = $pdo->prepare("INSERT INTO userpassfinal(count,title,describle,price,times,pic1,pic2,pic3,pic4,pic5)
    VALUES (:count, :title, :describle,:price,:times,:pic1,:pic2,:pic3,:pic4,:pic5)");
    $stmt->bindParam(':count', $_POST["count"]);
    $stmt->bindParam(':title', $_POST["title"]);
    $stmt->bindParam(':describle',$_POST["describe"]);
    $stmt->bindParam(':price',$_POST["price"]);
  //  $stmt->bindParam(':times',$times);
    $stmt->bindParam(':times',$_POST["select"]);
    $stmt->bindParam(':pic1',$file[1]);
    $stmt->bindParam(':pic2',$file[2]);
    $stmt->bindParam(':pic3',$file[3]);
    $stmt->bindParam(':pic4',$file[4]);
    $stmt->bindParam(':pic5',$file[5]);
    $stmt->execute();
	
}catch(PDOException $e)
	  {
		  echo $e->getMessage();
		  exit();
	  }
}  


Header('HTTP/1.1 301 Moved Permanently');
Header('Location:./user-home.html');//这里填上跳转路径
?>
