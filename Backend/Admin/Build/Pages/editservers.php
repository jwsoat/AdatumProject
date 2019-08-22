<?php
require 'Backend/Login/session.php';
echo "<h1> Edit Servers Page </h1>";
$sqlquery = "SELECT ServerText FROM Servers";
$sqlqueryact = mysqli_query($link, $sqlusers) or die(mysqli_error($conn));
echo "<form>";
while($showtext = mysqli_fetch_array($sqlqueryact)){
echo "<textarea>" . $showtext['ServerText'] . "</textarea>";
}
echo "</form>";
mysqli_close();
?>
