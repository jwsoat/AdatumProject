//load page content
$(document).ready(function(){
    $("#adminhome").click(function(){
        $("#admin-page-content").load("Backend/Build/Pages/home.php");
    });
});
