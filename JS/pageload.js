//load page content
$(document).ready(function(){
    $("#home").click(function(){
        $("#page-content").load("Backend/Build/Pages/home.php");
    });
});
$(document).ready(function(){
    $("#home2").click(function(){
        $("#page-content").load("Backend/Build/Pages/home.php");
    });
});
$(document).ready(function(){
    $("#servers").click(function(){
        $("#page-content").load("Backend/Build/Pages/Servers.php");
    });
});
$(document).ready(function(){
    $("#backup").click(function(){
        $("#page-content").load("Backend/Build/Pages/backup.php");
    });
});
$(document).ready(function(){
    $("#costs").click(function(){
        $("#page-content").load("Backend/Build/Pages/costs.php");
    });
});
$(document).ready(function(){
    $("#computers").click(function(){
        $("#page-content").load("Backend/Build/Pages/computers.php");
    });
});
$(document).ready(function(){
    $("#report").click(function(){
        $("#page-content").load("Backend/Build/Pages/report.php");
    });
});
$(document).ready(function(){
    $("#contact").click(function(){
        $("#page-content").load("Backend/Build/Pages/contact.php");
    });
});
$(document).ready(function(){
    $("#heathsafety").click(function(){
        $("#page-content").load("Backend/Build/Pages/heathsafety.php");
    });
});
$(document).ready(function(){
    $("#security").click(function(){
        $("#page-content").load("Backend/Build/Pages/security.php");
    });
});
$(document).ready(function(){
    $("#software").click(function(){
        $("#page-content").load("Backend/Build/Pages/software.php");
    });
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
//contact page functions
function trogy_twitter()
{
    window.open ("https://twitter.com/djtrogy");
    console.log("Loaded Trogy's Twitter!");
}
function jwsoat_twitter()
{
    window.open ("https://twitter.com/jwsoat");
    console.log("Loaded Jwsoat's Twitter!");
}
function trogy_messenger()
{
    window.open ("https://m.me/djtrogy");
    console.log("Loaded Trogy's Messenger!");
}
function jwsoat_messenger()
{
    window.open ("https://m.me/jwsoat");
    console.log("Loaded Jwsoat's Messenger!");
}
function trogy_github()
{
    window.open ("https://github.com/trogy");
    console.log("Loaded Trogy's Github!");
}
function jwsoat_github()
{
    window.open ("https://github.com/jwsoat");
    console.log("Loaded Jwsoat's Github!");
}
function linuxrulz()
{
      sleep(1000);
      console.log("You Found The Easter Egg!");
      sleep(1000);
      console.log("...");
      sleep(6000);
      console.log("There Was A Penguin Here...But he broke everything so we had to release him to the wild :)");
      sleep(1000);
      console.log("...");
      sleep(3000);
      console.log("Have a great day!");
      sleep(1000);
      console.log("...");
      sleep(2000);
      console.log("Goodbye! :D");
}
