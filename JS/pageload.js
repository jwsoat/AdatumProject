//load page content
$(document).ready(function(){
    $("#home").click(function(){
        $("#page-content").load("Pages/home.html");
    });
});
$(document).ready(function(){
    $("#servers").click(function(){
        $("#page-content").load("Pages/Servers.html");
    });
});
$(document).ready(function(){
    $("#backup").click(function(){
        $("#page-content").load("Pages/backup.html");
    });
});
