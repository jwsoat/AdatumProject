//load page content
$(document).ready(function(){
    $("#adminhome").click(function(){
        $("#admin-page-content").load("Backend/Admin/Build/Pages/home.php");
    });
});
$(document).ready(function(){
    $("#adminservers").click(function(){
        $("#admin-page-content").load("Backend/Admin/Build/Pages/editservers.php");
    });
});
