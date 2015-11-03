<?php
$data = json_decode(file_get_contents("php://input"));
$user_name = mysql_real_escape_string($data->name);
$user_email = mysql_real_escape_string($data->email);
$user_password = mysql_real_escape_string($data->password);
mysql_connect("localhost", "root", "") or die(mysql_error()); 
mysql_select_db("angular") or die(mysql_error()); 
mysql_query("INSERT INTO user_table 
		   (user_name,
		   	user_email,
		   	user_password) VALUES 
		   ('$user_name',
		    '$user_email',
		    '$user_password')
			"); 
?>