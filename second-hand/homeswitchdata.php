<?php



  try{
  $pdo=new PDO("mysql:host=localhost;dbname=project","root","root");
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  }catch(PDOException $e)
  {
	  echo $e->getMessage();
	  exit();
  };
  try{
        $sql="select title,describle,price,pic1,pic2,pic3,pic4,pic5,times,count from userpassfinal";
		$resul=$pdo->query($sql);
  }catch(PDOException $e){
	  echo $e->getMessage();
	  exit();
  };
  
  
    foreach($resul as $row)
  {
	  $inner[]=array(
	      'title'=>$row['title'],
		  'describle'=>$row['describle'],
		  'price'=>$row['price'],
		  'pic1'=>$row['pic1'],
		  'pic2'=>$row['pic2'],
		  'pic3'=>$row['pic3'],
		  'pic4'=>$row['pic4'],
		  'pi5'=>$row['pic5'],
		  'type'=>$row['times'],
		  'count'=>$row['count']
	  );
  }
 // $json=json_decode($inner);
 // $length=count($);
  print_r (json_encode($inner));
 // echo $length;
  /*
  for($num=0;$num<$length;$num++)
  {
	  if($inner[$num]['count']==$_GET["value2"])
	  {
		 if($inner[$num]["password"]==$_GET["value3"])    //$_GET["value3"]
		 { 
	     echo $inner[$num]["name"];
	      }
	     else{
			 echo 0;
		 }
	     exit();
	  }
	
  }
 */


?>