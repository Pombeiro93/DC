<?php
// Cabecera para indicar que vamos a enviar datos JSON y que no haga cach� de los datos.
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
	// Configuraci�n BASE DE DATOS MYSQL
$host = "localhost";
$user = "root";
$dbname = "ajax1718";
$pass = "";
// Creamos la conexi�n al servidor.
$conexion=mysqli_connect($host,$user,$pass,$dbname);

$viajes = mysqli_query($conexion, "SELECT * FROM viajescomprados");
$registros = mysqli_fetch_all($viajes);
echo $registros;

?>