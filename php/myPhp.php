<?php

require 'rb.php';

$area= $_REQUEST["area"];

// the password is 1234
$mysql = mysqli_connect("localhost", "root", "1234", "reyhoon") or die(mysqli_connect_error());
$query = "";
$resualt = mysqli_query($mysql, $query);


R::setup('mysql:host=localhost;dbname=ProjectOfReyhoon', 'root', '1234');
R::wipe('category');
$category = R::dispense('category');
$category->id = "shandiz";
$category->name = "shandiz";
$idOne = R::store($category);

$category = R::dispense('category');
$category->id = "khaneye pizaa";
$id2 = R::store($category);

echo $idOne."salam ".$id2;
$allCategories = R::find('category');
foreach($allCategories as $b){
    echo "name of resturant: ".$b->id."\n";
}
R::close();



?>