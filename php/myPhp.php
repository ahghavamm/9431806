<?php

require 'rb.php';

$area= "جردن";

// password is 1234
// foreing key query
$mysql = mysqli_connect("localhost", "root", "1234", "ProjectOfReyhoon") or die(mysqli_connect_error());
$query = "SELECT name FROM Restaurant INNER JOIN Address ON Restaurant.address = Address.id WHERE Address.area = '$area'";
$resualt = mysqli_query($mysql, $query) or die(mysqli_error($mysql));
while($row = mysqli_fetch_assoc($resualt)){
    echo $row["name"]."<br />";
}
mysqli_free_result($resualt);
mysqli_close($mysql);

// query
$mysql2 = mysqli_connect("localhost", "root", "1234", "ProjectOfReyhoon") or die(mysqli_connect_error());
$query2 = "SELECT addressLine FROM Address WHERE area='$area'";
$resualt2 = mysqli_query($mysql2, $query2) or die(mysqli_error($mysqlq));
while($co = mysqli_fetch_assoc($resualt2)){
    echo $co["addressLine"]."<br />";
}
mysqli_free_result($resualt2);
mysqli_close($mysqlq);


// R::setup('mysql:host=localhost;dbname=ProjectOfReyhoon', 'root', '1234');
// R::wipe('category');
// $category = R::dispense('category');
// $category->id = "shandiz";
// $category->name = "shandiz";
// $idOne = R::store($category);

// $category = R::dispense('category');
// $category->id = "khaneye pizaa";
// $id2 = R::store($category);

// echo $idOne."salam ".$id2;
// $allCategories = R::find('category');
// foreach($allCategories as $b){
//     echo "name of resturant: ".$b->id."\n";
// }
// R::close();



?>