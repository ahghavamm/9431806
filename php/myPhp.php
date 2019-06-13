<?php

$area= $_REQUEST["area"];
// password is 1234

// query
$j = 0;
$mysql2 = mysqli_connect("localhost", "root", "1234", "ProjectOfReyhoon") or die(mysqli_connect_error());
$query2 = "SELECT addressLine FROM Address WHERE area='$area'";
$resualt2 = mysqli_query($mysql2, $query2) or die(mysqli_error($mysqlq));
while($co = mysqli_fetch_assoc($resualt2)){
    $address[$j]=$co["addressLine"];
    $j++;
}
mysqli_free_result($resualt2);
mysqli_close($mysqlq);


// foreing key query
$mysql = mysqli_connect("localhost", "root", "1234", "ProjectOfReyhoon") or die(mysqli_connect_error());
$query = "SELECT name, logo, averageRate  FROM Restaurant INNER JOIN Address ON Restaurant.address = Address.id WHERE Address.area='$area'";
$resualt = mysqli_query($mysql, $query) or die(mysqli_error($mysql));
$j = 0;
while($res = mysqli_fetch_assoc($resualt)){
    // for solving the query in while -> i cannot write "CategoryResturant.resturant_id = '$res[""]" so do this
    $resName = $res["name"];
    // back to normal startogy -> make query for gettin the category of the resturants
    $mysqlCategory = mysqli_connect("localhost", "root", "1234", "ProjectOfReyhoon") or die(mysqli_connect_error());
    $queryCategory = "SELECT category_id FROM CategoryResturant INNER JOIN Restaurant ON CategoryResturant.resturant_id = Restaurant.categories WHERE CategoryResturant.resturant_id = '$resName'";
    $resualtCategory = mysqli_query($mysqlCategory, $queryCategory);
    
    // show them
    $t=0;
    echo "<div class='properitesOfResturantList'> <img src='".$res["logo"]
        ."'<h5>".$res["name"]."</h5>"
        ."<p>".$res["averageRate"]."</p>";
    while($resCategory = mysqli_fetch_assoc($resualtCategory)){
        echo $resCategory["category_id"]. " &#9679; ";
    }
    echo "<p>".$category[$t]."</p>"
        ."<p>".$address[$j]."</p>"
        ."</div>";    

    mysqli_free_result($resualtCategory);
    mysqli_close($mysqlCategory);
        
    $j++;
}
mysqli_free_result($resualt);
mysqli_close($mysql);


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