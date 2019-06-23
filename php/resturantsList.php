<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../assets/resturantsList.css">
<title>سفارش غذا</title>
<script src="https://unpkg.com/vue"></script>
</head>

<body>

<?php include 'header.php'; ?>

<div class="imgOfResturnatsList">
    <img src="../mocks/Screen%20Shot%201398-04-02%20at%2009.32.56.png" height="175px" >
</div>

<div class="numberOfResturants" id="numberOfResturantsInThisLocation">
    <p><?php numberOfResturants($_REQUEST["area"]); ?>رستوران امکان سرویس دهی به<?php echo " <span style='text-decoration: underline; color:black; font-weight: bold;' >".$_REQUEST["area"]."</span>"; ?> را دارند&nbsp;</p>
</div>

<div class="searchResturants">
    <input type="text" placeholder="جستوجوی رستوران در این محدوده" class="inputSearchResturants" v-on:keyup.enter="queryForKeywords" v-on:keydown="queryForKeywords">
    <div class="searchIconSearchResturants"> <i class="fa fa-search"></i></div>
</div>

<div class="categoryAndResturantList">
    <div class="category">
        <p>فیلتر بر اساس نوع غذا</p>
        <input type="text" placeholder="جستوجوی دسته بندی غذاها" class="searchInCategory">
        <form>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_0" value="برگر" />
                &nbsp; برگر
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_1" value="خورشت">
                &nbsp; خورشت
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_2" value="سالاد" />
                &nbsp; سالاد
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_3" value="ساندویچ">
                &nbsp; ساندویچ
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_4" value="سوشی" />
                &nbsp; سوشی
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_5" value="غذای ایرانی">
                &nbsp; غذای ایرانی
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_6" value="فست فود" />
                &nbsp;فست فود
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_7" value="پاستا">
                &nbsp; پاستا
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_8" value="پیتزا" />
                &nbsp; پیتزا
            </lable>
            <lable class="container">&nbsp;
                <input type="checkbox" name="category_9" value="کباب">
                &nbsp; کباب
            </lable>
            <a href="#">بیشتر</a>
        </form>
    </div>

    <div class="resturantList">
        <?php include 'myPhp.php'; ?>
    </div>
</div>

<div class="foooter">
    <?php include 'footer.php'; ?>
</div> 

<?php
function numberOfResturants($area){
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
        
        mysqli_free_result($resualtCategory);
        mysqli_close($mysqlCategory);
            
        $j++;
    }
    mysqli_free_result($resualt);
    mysqli_close($mysql);

    echo $j. " ";
}
?>

<script src="../js/ResturantsList.js"></script>

</body>
</html>
