<?php
   require "sql.php"
   session_start();
   $user_check = $_SESSION['user'];
   $ses_sql = mysqli_query($conn, "SELECT * FROM members WHERE username ='$user_check'");
   $row = mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
   $login_session = $row['username'];
if(!isset($_SESSION['user'])){
    header("Location: login.php");
}
?>
