<?php
/*
 _______ __________________ _______  _       __________________ _______  _        _
(  ___  )\__   __/\__   __/(  ____ \( (    /|\__   __/\__   __/(  ___  )( (    /|( )
| (   ) |   ) (      ) (   | (    \/|  \  ( |   ) (      ) (   | (   ) ||  \  ( || |
| (___) |   | |      | |   | (__    |   \ | |   | |      | |   | |   | ||   \ | || |
|  ___  |   | |      | |   |  __)   | (\ \) |   | |      | |   | |   | || (\ \) || |
| (   ) |   | |      | |   | (      | | \   |   | |      | |   | |   | || | \   |(_)
| )   ( |   | |      | |   | (____/\| )  \  |   | |   ___) (___| (___) || )  \  | _
|/     \|   )_(      )_(   (_______/|/    )_)   )_(   \_______/(_______)|/    )_)(_)

========================================================================================
DO NOT GO ANY FURTHER UNTILL YOU READ THIS
===========================================
Before you go any further YOU MUST IMPORT adatum.sql from Config folder into PHPMYADMIN
----------------------------------------------------------------------------------------
Then add your SQL server information [If its on the same machine its localhost]
========================================================================================
!!Reccommendation!!
Use a SQL login that only has access to the single database that is needed!
========================================================================================
*/
//SQL Server Information
$SQL_Server_IP = "Your SQL Server IP";
$SQL_Username = "Username For SQL Server";
$SQL_Password = "Password For SQL Server";
$SQL_Database_Name = "Database For Web App";

//CAUTION Do Not Edit Below This Line!
$conn = mysqli_connect($SQL_Server_IP, $SQL_Username, $SQL_Password, $SQL_Database_Name);
?>
