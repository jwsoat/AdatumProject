<?php
//require sql config
require "sql.php";
if(isset($_POST['uname']) and isset($_POST['pwd'])){ //check fields are set
//create variables
    $user= mysqli_real_escape_string($conn,$_POST['username']) ;
    $pass = mysqli_real_escape_string($conn,$_POST['password']) ;
    $sql = "SELECT password FROM members WHERE username = '$user'";
//query SQL
$result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
  while($row = mysqli_fetch_array($result)){
    $hash = $row['password'];
//verify password
      if(password_verify($pass, $hash)){
          session_start();
          $_SESSION['user'] = "$user";
          header('Location: Backend/Admin/adminbuild.php');
        }
      else {
	       echo "Wrong Password!";
	       header('Location: /Backend/Build/loginbuild.php');
          }
      }
}
?>
