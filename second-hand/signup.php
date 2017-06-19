
<?php
/*	echo $_GET["value1"];
	echo $_GET["value2"];
	echo $_GET["value3"];
   echo "123";
  
  echo "123";
 */
  $arr=array(
    "name"=>$_GET["value1"],
	"count"=>$_GET["value2"],
	"passwords"=>$_GET["value3"]
  );
 // echo json_encode($arr);
  try{
  $pdo=new PDO("mysql:host=localhost;dbname=project","root","root");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql="select count from users";
  $result=$pdo->query($sql);
  }catch(PDOException $e)
  {
	  
	  echo $e->getMessage();
	  exit();
  }
  while($row=$result->fetch())
  {
	  if($row[0]==$_GET["value2"])
	  {
		  $flag=0;
		 // echo $flag;
		  exit();
	  } 
  }
  
  $flag=1;
  if($flag)
  {  
	 try{
	 $stmt = $pdo->prepare("INSERT INTO users(name,count,password)
    VALUES (:id, :count, :password)");
    $stmt->bindParam(':id', $_GET["value1"]);
    $stmt->bindParam(':count', $_GET["value2"]);
    $stmt->bindParam(':password',$_GET["value3"]);
    $stmt->execute();
	echo "ok";
  }catch(PDOException $e)
	  {
		  echo $e->getMessage();
		  exit();
	  }
  }  
   echo $flag;
  
?>