<?php
   	
   $myFile = "file.json";
   $arr_data = array(); 

  try
  {
	   $formdata = array(
	      'name'=> $_POST['name'],
	      'age'=> $_POST['age'],
	
	   );
	   $jsondata = file_get_contents($myFile);
	   $arr_data = json_decode($jsondata, true);
	   array_push($arr_data,$formdata);  
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   if(file_put_contents($myFile, $jsondata)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

    // if (isset($_POST['params'])) {
    //     $params = $_POST['params'];

    //     $jsonObject = json_encode($params);
    //     file_put_contents('file.json', $jsonObject,FILE_APPEND);
    // }
 
    ?>